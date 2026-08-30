import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const discoveryText = Object.entries(payload)
      .map(([key, value]) => `${key}: ${String(value || '[Answer]')}`)
      .join('\n');

    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'williamotieno902@gmail.com';

    if (!resend) {
      console.error('RESEND_API_KEY is missing. Configure it in the environment before sending email.');
      return NextResponse.json(
        {
          success: false,
          message: 'Email delivery is not configured yet. Add RESEND_API_KEY to enable sending.',
        },
        { status: 503 }
      );
    }

    const result = await resend.emails.send({
      from: `Project Discovery <${fromEmail}>`,
      to: [toEmail],
      subject: 'New client project discovery form submission',
      text: discoveryText,
      html: `<pre style="font-family: sans-serif; white-space: pre-wrap;">${discoveryText}</pre>`,
    });

    if (result.error) {
      throw new Error(result.error.message || 'Discovery email send failed');
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
