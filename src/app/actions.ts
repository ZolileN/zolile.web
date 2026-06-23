'use server';

import { neon } from '@neondatabase/serverless';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function sendLiveMessage(email: string, message: string, channelId: string): Promise<{ success: boolean; message: string }> {
  try {
    const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const resendKey = process.env.RESEND_API_KEY;

    let dispatchedCount = 0;
    const errors: string[] = [];

    // 0. Database Lead Capture
    if (dbUrl) {
      try {
        const sql = neon(dbUrl);
        // Ensure table exists
        await sql`
          CREATE TABLE IF NOT EXISTS leads (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            message TEXT,
            channel_id VARCHAR(100),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          )
        `;

        // Insert lead
        await sql`
          INSERT INTO leads (email, message, channel_id)
          VALUES (${email}, ${message}, ${channelId})
        `;
        dispatchedCount++;
      } catch (err) {
        console.error('Database lead-capture failed:', err);
        errors.push(`Database capture failed: ${err instanceof Error ? err.message : 'Unknown'}`);
      }
    }

    // 1. Discord Webhook
    if (discordWebhook) {
      try {
        const response = await fetch(discordWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [
              {
                title: 'New Message from Zolile Portfolio',
                color: 3407718, // Accent Green (#00E5A8) in decimal
                fields: [
                  { name: 'From', value: email, inline: true },
                  { name: 'Message', value: message },
                  { name: 'Channel ID', value: channelId, inline: true },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });

        if (!response.ok) {
          throw new Error(`Discord status ${response.status}`);
        }
        dispatchedCount++;
      } catch (err) {
        console.error('Discord Webhook failed:', err);
        errors.push(`Discord Webhook failed: ${err instanceof Error ? err.message : 'Unknown'}`);
      }
    }

    // 2. Telegram Bot
    if (telegramToken && telegramChatId) {
      try {
        const escapedEmail = escapeHtml(email);
        const escapedMsg = escapeHtml(message);
        const escapedChan = escapeHtml(channelId);

        const text = `📬 <b>New Message from Portfolio</b>\n\n<b>From:</b> <code>${escapedEmail}</code>\n\n<b>Message:</b>\n${escapedMsg}\n\n---\n<code>[ID: ${escapedChan}]</code>`;
        const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text,
            parse_mode: 'HTML',
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
        dispatchedCount++;
      } catch (err) {
        console.error('Telegram dispatch failed:', err);
        let msg = err instanceof Error ? err.message : 'Unknown';
        try {
          const parsed = JSON.parse(msg);
          if (parsed.description) msg = parsed.description;
        } catch {}
        errors.push(`Telegram failed (${msg})`);
      }
    }

    // 3. Resend Email
    if (resendKey) {
      try {
        const fromEmail = process.env.RESEND_FROM || 'onboarding@resend.dev';
        const toEmail = process.env.RESEND_TO || 'zolile@mlkcomputer.com';
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: toEmail,
            subject: `Portfolio Message from ${email}`,
            html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
          }),
        });

        if (!response.ok) {
          throw new Error(`Resend failed with status ${response.status}`);
        }
        dispatchedCount++;
      } catch (err) {
        console.error('Resend dispatch failed:', err);
        errors.push(`Resend failed: ${err instanceof Error ? err.message : 'Unknown'}`);
      }
    }

    if (dispatchedCount === 0 && (discordWebhook || (telegramToken && telegramChatId) || resendKey || dbUrl)) {
      return {
        success: false,
        message: `SYSTEM: Routing error - ${errors.join('; ')}`,
      };
    }

    if (dispatchedCount === 0) {
      console.log('--- LIVE MESSAGE SIMULATION ---');
      console.log(`From: ${email}`);
      console.log(`Message: ${message}`);
      console.log('-------------------------------');
      return {
        success: true,
        message: 'SYSTEM: Message simulation succeeded (no production API keys configured).',
      };
    }

    if (errors.length > 0) {
      return {
        success: true,
        message: `SYSTEM: WARNING - Routed successfully but with errors: ${errors.join(', ')}`,
      };
    }

    return {
      success: true,
      message: 'SYSTEM: SUCCESS! Your ping was successfully routed to Zolile Nonzapa.',
    };
  } catch (error) {
    console.error('Error dispatching message:', error);
    return {
      success: false,
      message: `SYSTEM: Routing error - ${error instanceof Error ? error.message : 'Unknown dispatch exception'}.`,
    };
  }
}
