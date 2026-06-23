import { NextRequest, NextResponse } from 'next/server';
import Pusher from 'pusher';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    
    const message = payload.message;
    if (!message) {
      return NextResponse.json({ ok: true, status: 'no_message' });
    }

    // Verify it's a reply
    const replyTo = message.reply_to_message;
    if (!replyTo) {
      return NextResponse.json({ ok: true, status: 'not_a_reply' });
    }

    // Verify the sender is the authorized user (Zolile)
    const senderId = message.from?.id?.toString();
    const authorizedChatId = process.env.TELEGRAM_CHAT_ID;
    
    if (authorizedChatId && senderId !== authorizedChatId) {
      console.warn(`Unauthorized reply attempt from sender: ${senderId}`);
      return NextResponse.json({ ok: true, status: 'unauthorized_sender' });
    }

    // Extract channel ID from the original message text: [ID: channel_name]
    const parentText = replyTo.text || '';
    const match = parentText.match(/\[ID:\s*([a-zA-Z0-9_-]+)\]/);
    if (!match) {
      console.warn('Reply target does not contain a valid channel ID tracker.');
      return NextResponse.json({ ok: true, status: 'no_channel_id_in_parent' });
    }

    const channelId = match[1];
    const replyText = message.text;

    if (!replyText) {
      return NextResponse.json({ ok: true, status: 'no_reply_text' });
    }

    // Initialize Pusher
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID!,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
      secret: process.env.PUSHER_SECRET!,
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
      useTLS: true,
    });

    // Push the event to the client
    await pusher.trigger(channelId, 'reply', {
      text: replyText,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, status: 'routed' });
  } catch (error) {
    console.error('Error in Telegram Webhook:', error);
    return NextResponse.json({ ok: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
