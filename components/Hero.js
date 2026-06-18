'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (textRef.current) textRef.current.classList.add(styles.entered);
    });

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (imgRef.current && y < window.innerHeight) {
        imgRef.current.style.transform = `translateY(${y * 0.16}px) scale(1.02)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="home" className={styles.section}>
      <div className={styles.grid}>
        <div ref={textRef} className={styles.textCol}>
          <div className={`${styles.eyebrow} ${styles.animate}`} style={{ transitionDelay: '0.15s' }}>
            Gender Advocate · Political Analyst · Writer
          </div>
          <h1 className={`${styles.name} ${styles.animate}`} style={{ transitionDelay: '0.28s' }}>
            Miss<br />Raynelle
          </h1>
          <p className={`${styles.headline} ${styles.animate}`} style={{ transitionDelay: '0.41s' }}>
            Championing equality. Influencing policy. Empowering women.
          </p>
          <p className={`${styles.sub} ${styles.animate}`} style={{ transitionDelay: '0.54s' }}>
            Through advocacy, political analysis, and community leadership, Miss Raynelle drives the
            conversations that move equity forward, and turns them into policy, programs, and progress.
          </p>
          <div className={`${styles.ctaRow} ${styles.animate}`} style={{ transitionDelay: '0.67s' }}>
            <a href="#impact" className={styles.ctaPrimary}>
              Explore my work
              <ArrowIcon />
            </a>
            <a href="#foundation" className={styles.ctaGhost}>The Foundation</a>
          </div>
        </div>

        <div className={styles.photoCol}>
          <div ref={imgRef} className={styles.imgWrap}>
            <Image
              src="/images/raynelle-portrait.jpeg"
              alt="Miss Raynelle"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
            />
          </div>
          <div className={styles.overlay} />
          <div className={styles.vertText}>Voice for Change</div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
