import Reveal from './Reveal';
import BookingModal from './BookingModal';
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
            <BookingModal />
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
