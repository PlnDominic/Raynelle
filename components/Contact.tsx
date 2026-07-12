'use client';
import { useState, type FormEvent } from 'react';
import Reveal from './Reveal';

const inputClass =
  'font-assistant text-[0.95rem] px-[0.9rem] py-[0.85rem] border border-accent-subtle bg-cream text-ink outline-none w-full transition-colors focus:border-navy';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto grid [grid-template-columns:0.9fr_1.1fr] max-md:grid-cols-1 gap-[clamp(2.5rem,5vw,5rem)] items-start">

        <Reveal>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-5">
            Let&apos;s create impact together
          </div>
          <h2 className="font-merriweather font-bold text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.12] mb-5">
            Start a conversation.
          </h2>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-8 max-w-[38ch]">
            For speaking engagements, partnerships, media inquiries, and collaboration opportunities.
            Reach out and let&apos;s build something that lasts.
          </p>
          <div className="flex flex-col gap-4">
            <ContactDetail icon={<MailIcon />}>raynelle@gutsywomenfoundation.org</ContactDetail>
            <ContactDetail icon={<PinIcon />}>Gutsy Women Foundation · Accra, Ghana</ContactDetail>
            <ContactDetail icon={<PhoneIcon />}>0549094441</ContactDetail>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="grid grid-cols-2 max-sm:grid-cols-1 gap-5" onSubmit={handleSubmit}>
            <Field label="Full Name" id="f-name" type="text" />
            <Field label="Email Address" id="f-email" type="email" />
            <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-2">
              <label htmlFor="f-org" className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-muted">
                Organization
              </label>
              <input className={inputClass} type="text" id="f-org" name="org" />
            </div>
            <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-2">
              <label htmlFor="f-msg" className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-muted">
                Message
              </label>
              <textarea className={`${inputClass} resize-y`} id="f-msg" name="message" rows={4} />
            </div>
            <div className="col-span-2 max-sm:col-span-1">
              <button
                type="submit"
                className={`inline-flex items-center gap-2.5 text-white text-[0.8rem] tracking-[0.12em] uppercase px-[1.9rem] py-[0.95rem] transition-transform ${
                  sent ? 'bg-navy-dark' : 'bg-navy hover:bg-navy-dark hover:-translate-y-1'
                }`}
              >
                {sent ? (
                  'Inquiry sent ✓'
                ) : (
                  <>
                    Send inquiry
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <line x1="4" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, type }: { label: string; id: string; type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-muted">
        {label}
      </label>
      <input className={inputClass} type={type} id={id} name={id} />
    </div>
  );
}

function ContactDetail({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-muted-light text-[0.95rem]">
      {icon}
      {children}
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2a3344" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2a3344" strokeWidth="1.5">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2a3344" strokeWidth="1.5">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l2 5v3a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
