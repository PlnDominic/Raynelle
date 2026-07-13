import Reveal from './Reveal';
import styles from './Mentorship.module.css';

const focus = [
  'Confidence, public speaking & self-expression',
  'Career direction & leadership growth',
  'Personal branding & finding your voice',
  'Navigating advocacy & purpose-driven work',
];

const details = [
  { label: 'Format', value: 'Virtual or in-person (Accra)' },
  { label: 'Duration', value: '60-minute session' },
  { label: 'Availability', value: 'Limited slots each month' },
];

const bookingBody =
  'Hi Raynelle,\n\n' +
  'I would like to book a one-on-one mentorship session.\n\n' +
  'Name:\n' +
  'Focus area:\n' +
  'Preferred dates & times:\n' +
  'A bit about my goals:\n\n' +
  'Thank you!';

const bookingHref =
  'mailto:raynelle@gutsywomenfoundation.org' +
  '?subject=' +
  encodeURIComponent('One-on-One Mentorship Booking') +
  '&body=' +
  encodeURIComponent(bookingBody);

export default function Mentorship() {
  return (
    <section id="mentorship" className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.eyebrow}>Work with me</div>
          <h2 className={styles.heading}>One-on-one mentorship with Raynelle.</h2>
          <p className={styles.body}>
            Personal, focused sessions for women ready to lead with clarity and confidence. Bring your
            questions, your goals, and your doubts &mdash; you&apos;ll leave with a plan and the courage to
            act on it.
          </p>
          <ul className={styles.focus}>
            {focus.map((item) => (
              <li key={item} className={styles.focusItem}>
                <svg className={styles.check} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>The Session</div>
            <div className={styles.details}>
              {details.map((d) => (
                <div key={d.label} className={styles.detail}>
                  <span className={styles.detailLabel}>{d.label}</span>
                  <span className={styles.detailValue}>{d.value}</span>
                </div>
              ))}
            </div>
            <a href={bookingHref} className={styles.cta}>
              Book a session
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
                <line x1="4" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
            <p className={styles.note}>
              Prefer to talk first? <a href="#contact" className={styles.noteLink}>Send a message</a> and
              Raynelle will follow up personally.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
