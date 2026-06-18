import Image from 'next/image';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <Reveal className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            <Image
              src="/images/raynelle-portrait.jpeg"
              alt="Miss Raynelle portrait"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 18%', filter: 'grayscale(0.18) contrast(1.02)' }}
            />
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeLabel}>Founder &amp; CEO</div>
            <div className={styles.badgeTitle}>Gutsy Women Foundation</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.eyebrow}>About Miss Raynelle</div>
          <h2 className={styles.heading}>
            A voice built for the hard conversations, and the lasting change that follows them.
          </h2>
          <p className={styles.body}>
            Miss Raynelle is a respected gender advocate, social commentator, political analyst, and writer
            dedicated to advancing equality and shaping public discourse. Across rooms of power and grassroots
            gatherings alike, she amplifies women&apos;s voices, sharpens policy debate, and models the inclusive
            leadership she calls for.
          </p>
          <p className={styles.body} style={{ marginBottom: '2rem' }}>
            Her work moves between the page, the podium, and the policy table, translating sharp analysis into
            the campaigns, mentorship, and community programs that carry change beyond the headline.
          </p>
          <div className={styles.sigRow}>
            <span className={styles.sigName}>Raynelle</span>
            <span className={styles.sigDivider} />
            <span className={styles.sigRole}>Gender Advocate · Writer · Founder</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
