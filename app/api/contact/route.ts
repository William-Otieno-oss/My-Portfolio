import { NextResponse } from 'next/server';
import { sendPortfolioEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, projectType, message } = payload ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are required.',
        },
        { status: 400 }
      );
    }

    const toEmail = process.env.RESEND_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'williamotieno902@gmail.com';
    const response = await sendPortfolioEmail({
      to: toEmail,
      replyTo: email,
      from: process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || 'onboarding@resend.dev',
      subject: `New project inquiry from ${name} (${projectType ?? 'General'})`,
      text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType ?? 'General'}\n\nMessage:\n${message}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType ?? 'General'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
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
      message: 'Thanks! Your message was received successfully.',
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process the contact form.',
      },
      { status: 500 }
    );
  }
}
