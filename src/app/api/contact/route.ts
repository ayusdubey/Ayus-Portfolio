import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { site } from '@/constants/portfolio';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Please complete all required fields with valid information.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
    const toAddress = process.env.CONTACT_TO_EMAIL ?? site.email;

    if (!apiKey) {
      const fallbackBody = new URLSearchParams({
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        _subject: parsed.data.subject,
        _template: 'table',
        _captcha: 'false',
        _replyto: parsed.data.email,
      });

      const fallbackResponse = await fetch(`https://formsubmit.co/${encodeURIComponent(toAddress)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: fallbackBody.toString(),
      });

      if (!fallbackResponse.ok) {
        return NextResponse.json(
          { ok: false, error: 'Message delivery failed. Configure RESEND_API_KEY or check the inbox fallback.' },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true, provider: 'formsubmit' });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Ayus Dubey Portfolio <${fromAddress}>`,
      to: [toAddress],
      replyTo: parsed.data.email,
      subject: parsed.data.subject,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Something went wrong while sending the message.' }, { status: 500 });
  }
}
