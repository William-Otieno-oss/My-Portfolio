import { NextResponse } from 'next/server';
import { sendPortfolioEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const discoveryText = Object.entries(payload)
      .map(([key, value]) => `${key}: ${String(value || '[Answer]')}`)
      .join('\n');

    const toEmail = process.env.RESEND_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'williamotieno902@gmail.com';
    const response = await sendPortfolioEmail({
      to: toEmail,
      from: process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || 'onboarding@resend.dev',
      subject: 'New client project discovery form submission',
      text: discoveryText,
      html: `<pre style="font-family: sans-serif; white-space: pre-wrap;">${discoveryText}</pre>`,
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: response.message || 'Email delivery is not configured yet.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Discovery form received successfully.',
    });
  } catch (error) {
    console.error('Discovery submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process the discovery form.',
      },
      { status: 500 }
    );
  }
}
