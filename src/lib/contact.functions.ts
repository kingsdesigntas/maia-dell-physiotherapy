import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
  // Honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;

const RECIPIENT = "accounts@kingsdigital.com.au";
const FROM = "Maia Dell Physiotherapy <onboarding@resend.dev>";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot triggered — pretend success but do nothing.
    if (data.website && data.website.length > 0) {
      return { ok: true } as const;
    }

    const apiKey = process.env.RESEND_API_KEY;
    const escape = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const html = `
      <h2>New contact enquiry — Maia Dell Physiotherapy</h2>
      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>Email:</strong> ${escape(data.email)}</p>
      <p><strong>Phone:</strong> ${escape(data.phone ?? "")}</p>
      <p><strong>Address:</strong> ${escape(data.address ?? "")}</p>
      <p><strong>Subject:</strong> ${escape(data.subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escape(data.message)}</p>
    `;

    if (!apiKey) {
      // Key not configured yet — log and report success so the form remains usable.
      console.warn(
        "[contact] RESEND_API_KEY not set; skipping email send. Payload:",
        { to: RECIPIENT, from: data.email, subject: data.subject },
      );
      return { ok: true } as const;
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: FROM,
          to: [RECIPIENT],
          reply_to: data.email,
          subject: `[Website Contact] ${data.subject}`,
          html,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("[contact] Resend error", res.status, body);
        throw new Error("Email delivery failed");
      }
      return { ok: true } as const;
    } catch (err) {
      console.error("[contact] send failed", err);
      throw new Error("Email delivery failed");
    }
  });
