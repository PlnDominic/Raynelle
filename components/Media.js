'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import styles from './Media.module.css';

export default function Media() {
  const playRef = useRef(null);

  const handlePlay = () => {
    if (playRef.current) playRef.current.style.opacity = '0.6';
  };

  return (
    <section id="media" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div className={styles.eyebrow}>Media &amp; Speaking</div>
          <h2 className={styles.heading}>On stage, on air, on the record.</h2>
          <p className={styles.body}>
            Keynotes, panels, broadcast interviews, and podcasts, wherever the conversation on gender and
            governance is happening.
          </p>
        </Reveal>

        <Reveal delay={120} className={styles.feature}>
          <Image
            src="/images/raynelle-portrait.jpeg"
            alt="Miss Raynelle keynote"
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
          />
          <div className={styles.overlay} />
          <button ref={playRef} className={styles.play} aria-label="Play featured video" onClick={handlePlay}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <polygon points="8 5 19 12 8 19" />
            </svg>
          </button>
          <div className={styles.caption}>
            <div>
              <div className={styles.captionLabel}>Featured Keynote</div>
              <div className={styles.captionTitle}>Women in Leadership: The Next Frontier</div>
            </div>
          </div>
        </Reveal>

        <div className={styles.tags}>
          <span>Keynotes</span>
          <span>·</span>
          <span>Panel Discussions</span>
          <span>·</span>
          <span>Podcasts</span>
          <span>·</span>
          <span>Television</span>
        </div>
      </div>
    </section>
  );
}
