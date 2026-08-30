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
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
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

    if (result.error) {
      throw new Error(result.error.message || 'Email send failed');
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
