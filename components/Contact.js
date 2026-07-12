'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.eyebrow}>Let&apos;s create impact together</div>
          <h2 className={styles.heading}>Start a conversation.</h2>
          <p className={styles.body}>
            For speaking engagements, partnerships, media inquiries, and collaboration opportunities.
            Reach out and let&apos;s build something that lasts.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <MailIcon />
              raynelle@gutsywomenfoundation.org
            </div>
            <div className={styles.detail}>
              <PinIcon />
              Gutsy Women Foundation · Accra, Ghana
            </div>
            <div className={styles.detail}>
              <PhoneIcon />
              0549094441
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="f-name">Full Name</label>
              <input className={styles.input} type="text" id="f-name" name="name" />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="f-email">Email Address</label>
              <input className={styles.input} type="email" id="f-email" name="email" />
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label className={styles.label} htmlFor="f-org">Organization</label>
              <input className={styles.input} type="text" id="f-org" name="org" />
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label className={styles.label} htmlFor="f-msg">Message</label>
              <textarea className={styles.textarea} id="f-msg" name="message" rows={4} />
            </div>
            <button type="submit" className={`${styles.submit} ${sent ? styles.sent : ''}`}>
              {sent ? 'Inquiry sent ✓' : (
                <>
                  Send inquiry
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <line x1="4" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
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
      <circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z" />
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
