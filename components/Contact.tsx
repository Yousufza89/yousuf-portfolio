"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section } from "./ui";
import { PROFILE } from "@/lib/data";
import { sendMessage, type ContactPayload } from "@/lib/contact";

type Errors = Partial<Record<keyof ContactPayload, string>>;
type ToastState = { kind: "success" | "error"; text: string } | null;

const EMPTY: ContactPayload = { name: "", email: "", message: "" };

function validate(v: ContactPayload): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (v.message.trim().length < 10)
    errors.message = "Write at least 10 characters so I know how to help.";
  return errors;
}

const LINKS = [
  { label: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: PROFILE.phone, href: PROFILE.phoneHref, icon: Phone },
];

export default function Contact() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Auto-dismiss the toast after a few seconds.
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(id);
  }, [toast]);

  const update = (key: keyof ContactPayload, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = (["name", "email", "message"] as const).find((k) => found[k]);
    if (firstInvalid) {
      setToast({ kind: "error", text: "Message not sent. Fix the highlighted fields and try again." });
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setSending(true);
    try {
      await sendMessage(values);
      setToast({ kind: "success", text: `Message sent. Thanks, ${values.name.trim().split(" ")[0]}.` });
      setValues(EMPTY);
    } catch {
      setToast({
        kind: "error",
        text: `Message not sent. Try again, or email ${PROFILE.email} directly.`,
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    "mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2";
  const ok = "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/30";
  const bad = "border-rose-400/60 focus:border-rose-400 focus:ring-rose-500/30";

  return (
    <Section
      id="contact"
      title="Get in touch"
      intro="Open to software engineering, full-stack, applied AI/ML and QA opportunities. Send a message or reach out directly."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass self-start divide-y divide-white/10">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-4 px-5 py-4 text-sm text-white transition hover:bg-white/5"
            >
              <Icon size={18} className="text-indigo-300" aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 text-sm text-white transition hover:bg-white/5"
          >
            <LinkedinIcon width={18} height={18} className="text-indigo-300" />
            linkedin.com/in/yousufza89
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 text-sm text-white transition hover:bg-white/5"
          >
            <GithubIcon width={18} height={18} className="text-indigo-300" />
            github.com/Yousufza89
          </a>
          <p className="flex items-center gap-4 px-5 py-4 text-sm text-slate-400">
            <MapPin size={18} className="text-emerald-400" aria-hidden="true" />
            {PROFILE.location}
          </p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} noValidate className="glass p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="text-sm font-medium text-white">
                Name
              </label>
              <input
                id="c-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "c-name-err" : undefined}
                className={`${field} ${errors.name ? bad : ok}`}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="c-name-err" className="mt-2 text-sm text-rose-300">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="c-email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "c-email-err" : undefined}
                className={`${field} ${errors.email ? bad : ok}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="c-email-err" className="mt-2 text-sm text-rose-300">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="c-message" className="text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="c-message"
              name="message"
              rows={6}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "c-message-err" : undefined}
              className={`${field} resize-y ${errors.message ? bad : ok}`}
              placeholder="Tell me about the role or project"
            />
            {errors.message && (
              <p id="c-message-err" className="mt-2 text-sm text-rose-300">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={sending} className="btn-primary mt-6 disabled:cursor-not-allowed disabled:opacity-70">
            {sending ? (
              <>
                <LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> Sending
              </>
            ) : (
              <>
                <Send size={16} aria-hidden="true" /> Send message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Toast: a polite live region so screen readers announce results. */}
      <div aria-live="polite" role="status" className="pointer-events-none fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm">
        {toast && (
          <div
            className={`animate-pop pointer-events-auto flex items-start gap-3 rounded-xl border p-4 text-sm shadow-2xl backdrop-blur-md ${
              toast.kind === "success"
                ? "border-emerald-400/40 bg-emerald-950/80 text-emerald-100"
                : "border-rose-400/40 bg-rose-950/80 text-rose-100"
            }`}
          >
            {toast.kind === "success" ? (
              <CircleCheck size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
            ) : (
              <CircleAlert size={18} className="mt-0.5 shrink-0 text-rose-400" aria-hidden="true" />
            )}
            <p className="flex-1">{toast.text}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="shrink-0 rounded p-0.5 opacity-70 hover:opacity-100"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
