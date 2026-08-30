import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export type EmailSendOptions = {
  subject: string;
  text: string;
  html?: string;
  to?: string | string[];
  replyTo?: string;
  from?: string;
};

function normalizeRecipients(value?: string | string[]) {
  if (!value) {
    return [process.env.RESEND_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'williamotieno902@gmail.com'];
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function getConfiguredFromAddress() {
  return process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || 'onboarding@resend.dev';
}

function normalizeReplyTo(value?: string) {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : undefined;
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function htmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendPortfolioEmail(options: EmailSendOptions) {
  const recipients = normalizeRecipients(options.to);
  const fromAddress = options.from || getConfiguredFromAddress();
  const replyTo = normalizeReplyTo(options.replyTo);

  const resend = getResendClient();
  if (resend) {
    const result = await resend.emails.send({
      from: `Portfolio <${fromAddress}>`,
      to: recipients,
      replyTo: replyTo || undefined,
      subject: options.subject,
      text: options.text,
      html: options.html || `<pre style="font-family: sans-serif; white-space: pre-wrap;">${htmlEscape(options.text)}</pre>`,
    });

    if (result.error) {
      throw new Error(result.error.message || 'Resend email send failed');
    }

    return { provider: 'resend', ok: true, result };
  }

  const smtpTransport = getSmtpTransport();
  if (smtpTransport) {
    const info = await smtpTransport.sendMail({
      from: `Portfolio <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      replyTo: replyTo || undefined,
      subject: options.subject,
      text: options.text,
      html: options.html || `<pre style="font-family: sans-serif; white-space: pre-wrap;">${htmlEscape(options.text)}</pre>`,
    });

    return { provider: 'smtp', ok: true, result: info };
  }

  return {
    provider: 'none',
    ok: false,
    message: 'No email provider configured. Add RESEND_API_KEY or SMTP_* variables.',
  };
}
