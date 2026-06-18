'use client';
import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import styles from './Stats.module.css';

const stats = [
  { count: 5000, suffix: '+', label: 'Women Reached' },
  { count: 50, suffix: '+', label: 'Speaking Engagements' },
  { count: 100, suffix: '+', label: 'Published Articles' },
  { count: 10, suffix: '+', label: 'Advocacy Campaigns' },
];

function StatCounter({ count, suffix, label, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(el, count, suffix);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count, suffix]);

  return (
    <Reveal delay={delay} className={styles.item}>
      <div ref={ref} className={styles.num} data-count={count} data-suffix={suffix}>
        0
      </div>
      <div className={styles.label}>{label}</div>
    </Reveal>
  );
}

function animateCount(el, target, suffix) {
  const dur = 1600;
  const start = performance.now();
  const fmt = (n) => n.toLocaleString('en-US');
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.eyebrow}>Impact in numbers</div>
        </Reveal>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <StatCounter key={s.label} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
