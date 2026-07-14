import { NextResponse } from 'next/server';

// nodemailer needs the Node.js runtime (not edge)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(data?.name ?? '').trim();
  const email = String(data?.email ?? '').trim();
  const focus = String(data?.focus ?? '').trim();
  const dates = String(data?.dates ?? '').trim();
  const message = String(data?.message ?? '').trim();
  // honeypot — bots fill hidden fields; humans leave it empty
  const honeypot = String(data?.company ?? '').trim();

  if (honeypot) {
    // silently accept to avoid tipping off bots
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please share your name, email, and a short note about your goals.' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Your message is a little too long.' }, { status: 400 });
  }

  // Trim defensively: Google displays app passwords with spaces
  // ("abcd efgh ijkl mnop") and a stray copy/paste space is a common
  // cause of "Username and Password not accepted" (EAUTH) failures.
  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
  const host = (process.env.SMTP_HOST || 'smtp.gmail.com').trim();
  const port = Number(process.env.SMTP_PORT || 465);
  const to = (process.env.BOOKING_TO || 'raynelle@gutsywomenfoundation.org').trim();

  if (!user || !pass) {
    console.error('Booking email not configured: missing SMTP_USER / SMTP_PASS');
    return NextResponse.json(
      { error: 'Booking is temporarily unavailable. Please email raynelle@gutsywomenfoundation.org directly.' },
      { status: 503 }
    );
  }

  const subject = `New mentorship booking — ${name}`;
  const text = [
    'New one-on-one mentorship booking request',
    '------------------------------------------',
    `Name: ${name}`,
    `Email: ${email}`,
    `Focus area: ${focus || '—'}`,
    `Preferred dates & times: ${dates || '—'}`,
    '',
    'Goals / message:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1d2533;line-height:1.6;">
      <h2 style="margin:0 0 4px;">New mentorship booking request</h2>
      <p style="margin:0 0 16px;color:#6b7180;">One-on-one mentorship with Raynelle</p>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 16px 4px 0;color:#8a8e98;">Name</td><td style="padding:4px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#8a8e98;">Email</td><td style="padding:4px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#8a8e98;">Focus area</td><td style="padding:4px 0;">${escapeHtml(focus) || '—'}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#8a8e98;">Preferred times</td><td style="padding:4px 0;">${escapeHtml(dates) || '—'}</td></tr>
      </table>
      <p style="margin:16px 0 4px;color:#8a8e98;">Goals / message</p>
      <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>`;

  try {
    // Import nodemailer lazily so a bundling/load issue surfaces as a handled
    // error here instead of crashing the whole serverless function.
    const { default: nodemailer } = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Mentorship Booking" <${user}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Booking email failed:', err);
    return NextResponse.json(
      { error: 'Something went wrong sending your request. Please try again in a moment.' },
      { status: 502 }
    );
  }
}
