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
          <div className={styles.eyebrow}>About Raynelle</div>
          <h2 className={styles.heading}>
            Building confidence, unlocking voice, and lasting change for women and girls.
          </h2>
          <p className={styles.body}>
            Raynelle Boadu is a gender advocate, communications professional, confidence and self-awareness
            coach, writer, and development-focused leader, dedicated to empowering young girls and women
            through education, mentorship, advocacy, and sustainable social impact.
          </p>
          <p className={styles.body}>
            As Founder and CEO of the Gutsy Women Foundation, she builds programs that equip women and girls
            with the confidence, knowledge, and leadership skills to thrive. She is especially passionate about
            helping young women overcome fear, in public speaking, self-expression, and identity, and guiding
            them toward a strong sense of purpose. A writer at heart, she explores the social and political
            issues that challenge perspectives and amplify voices.
          </p>

          <div className={styles.credentials}>
            <div className={styles.credentialsLabel}>Academic Qualifications</div>
            <ul className={styles.credentialList}>
              <li className={styles.credentialItem}>BA, Strategic Communication</li>
              <li className={styles.credentialItem}>MA, Gender and Law</li>
              <li className={styles.credentialItem}>MBA, Marketing</li>
              <li className={styles.credentialItem}>
                MA, Development Management
                <span className={styles.credentialNote}>in progress</span>
              </li>
            </ul>
          </div>

          <div className={styles.sigRow}>
            <span className={styles.sigName}>Raynelle</span>
            <span className={styles.sigDivider} />
            <span className={styles.sigRole}>Gender Advocate · Coach · Writer · Founder</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
