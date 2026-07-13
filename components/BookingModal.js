'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './BookingModal.module.css';

const FOCUS_OPTIONS = [
  'Confidence, public speaking & self-expression',
  'Career direction & leadership growth',
  'Personal branding & finding your voice',
  'Navigating advocacy & purpose-driven work',
  'Something else',
];

const EMPTY = { name: '', email: '', focus: FOCUS_OPTIONS[0], dates: '', message: '', company: '' };

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
    <line x1="4" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setError('');
    if (status === 'success') {
      setStatus('idle');
      setForm(EMPTY);
    }
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)}>
        Book a session
        <Arrow />
      </button>

      {open &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Book a one-on-one mentorship session"
          >
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.close} onClick={close} aria-label="Close">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>

            {status === 'success' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request sent</h3>
                <p className={styles.successText}>
                  Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}. Raynelle will follow up
                  personally to confirm your session.
                </p>
                <button type="button" className={styles.submit} onClick={close}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className={styles.eyebrow}>One-on-one mentorship</div>
                <h3 className={styles.title}>Book your session</h3>
                <p className={styles.sub}>
                  Share a few details and Raynelle will follow up to confirm a time that works.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="b-name">Full name</label>
                    <input
                      className={styles.input}
                      id="b-name"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="b-email">Email address</label>
                    <input
                      className={styles.input}
                      id="b-email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="b-focus">What would you like to focus on?</label>
                    <select className={styles.select} id="b-focus" value={form.focus} onChange={update('focus')}>
                      {FOCUS_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="b-dates">Preferred dates &amp; times</label>
                    <input
                      className={styles.input}
                      id="b-dates"
                      type="text"
                      placeholder="e.g. weekday evenings, next week"
                      value={form.dates}
                      onChange={update('dates')}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="b-message">A bit about your goals</label>
                    <textarea
                      className={styles.textarea}
                      id="b-message"
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      required
                    />
                  </div>

                  {/* honeypot: hidden from humans, tempting to bots */}
                  <div className={styles.honeypot} aria-hidden="true">
                    <label htmlFor="b-company">Company</label>
                    <input
                      id="b-company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={update('company')}
                    />
                  </div>

                  {status === 'error' && <p className={styles.errorMsg}>{error}</p>}

                  <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : (<>Send request <Arrow /></>)}
                  </button>
                </form>
              </>
            )}
          </div>
          </div>,
          document.body
        )}
    </>
  );
}
