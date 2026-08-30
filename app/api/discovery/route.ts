import { NextResponse } from 'next/server';
import { sendPortfolioEmail } from '@/lib/email';

function isValidEmail(value: unknown) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const name = String(payload?.name ?? payload?.fullName ?? payload?.contactName ?? '').trim();
    const email = String(payload?.email ?? payload?.emailAddress ?? '').trim();
    const projectType = String(payload?.projectType ?? '').trim();

    if (!name || !projectType || !isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, a valid email, and project type are required.',
        },
        { status: 400 }
      );
    }

    const discoveryText = [
      `Contact Name: ${name}`,
      `Email: ${email}`,
      `Project Type: ${projectType}`,
      '',
      ...Object.entries(payload)
        .filter(([key]) => key !== 'name' && key !== 'email' && key !== 'projectType')
        .map(([key, value]) => `${key}: ${String(value || '[Answer]')}`),
    ].join('\n');

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
