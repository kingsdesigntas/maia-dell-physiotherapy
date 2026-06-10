import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactForm } from "@/lib/contact.functions";

export function ContactForm() {
  const submit = useServerFn(submitContactForm);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      address: String(fd.get("address") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };
    try {
      await submit({ data: payload });
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className="rounded-md border border-primary/30 bg-[var(--cream)] p-6 text-base"
      >
        <h3 className="m-0">Thank you for submitting!</h3>
        <p className="mt-2">I'll be in touch as soon as I can.</p>
      </div>
    );
  }

  const inputCls =
    "block w-full rounded-md border-2 border-input bg-white px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none";
  const labelCls = "block text-base font-medium mb-1.5";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Name<span aria-hidden> *</span></label>
          <input id="cf-name" name="name" required maxLength={100} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email<span aria-hidden> *</span></label>
          <input id="cf-email" name="email" required type="email" maxLength={255} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <input id="cf-phone" name="phone" type="tel" maxLength={40} className={inputCls} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="cf-address" className={labelCls}>Address</label>
          <input id="cf-address" name="address" maxLength={200} className={inputCls} autoComplete="street-address" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className={labelCls}>Subject<span aria-hidden> *</span></label>
        <input id="cf-subject" name="subject" required maxLength={200} className={inputCls} />
      </div>
      <div>
        <label htmlFor="cf-message" className={labelCls}>Message<span aria-hidden> *</span></label>
        <textarea id="cf-message" name="message" required maxLength={5000} rows={6} className={inputCls} />
      </div>
      {/* Honeypot — visually hidden, screen reader hidden */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="text-base text-destructive">{error ?? "Something went wrong"}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
