'use server';

export async function sendLiveMessage(email: string, message: string): Promise<{ success: boolean; message: string }> {
  try {
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const resendKey = process.env.RESEND_API_KEY;

    let dispatched = false;

    // 1. Discord Webhook
    if (discordWebhook) {
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
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord Webhook failed with status ${response.status}`);
      }
      dispatched = true;
    }

    // 2. Telegram Bot
    if (telegramToken && telegramChatId) {
      const text = `📬 *New Message from Portfolio*\n\n*From:* \`${email}\`\n\n*Message:*\n${message}`;
      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        throw new Error(`Telegram API failed with status ${response.status}`);
      }
      dispatched = true;
    }

    // 3. Resend Email
    if (resendKey) {
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
        throw new Error(`Resend API failed with status ${response.status}`);
      }
      dispatched = true;
    }

    if (!dispatched) {
      console.log('--- LIVE MESSAGE SIMULATION ---');
      console.log(`From: ${email}`);
      console.log(`Message: ${message}`);
      console.log('-------------------------------');
      return {
        success: true,
        message: 'SYSTEM: Message simulation succeeded (no production API keys configured).',
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
