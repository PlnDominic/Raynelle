import Reveal from './Reveal';
import styles from './Foundation.module.css';

const programs = [
  {
    label: '01 · Leadership Development',
    title: 'Building future women leaders',
    desc: 'Training, fellowships, and platforms that put women in the rooms where decisions are made.',
  },
  {
    label: '02 · Mentorship Programs',
    title: 'Supporting growth, one woman at a time',
    desc: 'Pairing emerging leaders with mentors who open doors and sharpen ambition.',
  },
  {
    label: '03 · Community Outreach',
    title: 'Grassroots impact and awareness',
    desc: 'Campaigns and convenings that meet communities where they are and move them forward.',
  },
];

export default function Foundation() {
  return (
    <section id="foundation" className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.eyebrow}>Founder &amp; CEO</div>
          <h2 className={styles.heading}>Gutsy Women Foundation</h2>
          <p className={styles.body}>
            Empowering women and girls through leadership development, advocacy, mentorship, and community
            transformation, building the next generation of women bold enough to lead.
          </p>
          <a href="#contact" className={styles.cta}>
            Support the mission
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={140} className={styles.programs}>
          {programs.map((p) => (
            <div key={p.label} className={styles.program}>
              <div className={styles.programLabel}>{p.label}</div>
              <h3 className={styles.programTitle}>{p.title}</h3>
              <p className={styles.programDesc}>{p.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
