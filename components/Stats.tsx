'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import Reveal from './Reveal';

interface StatItem {
  count: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { count: 35000, suffix: '+', label: 'Girls connected' },
  { count: 200,   suffix: '+', label: 'Girls mentored' },
  { count: 24,    suffix: '',  label: 'Mentors engaged' },
];

function animateCount(el: HTMLElement, target: number, suffix: string) {
  const dur = 1600;
  const start = performance.now();
  const fmt = (n: number) => n.toLocaleString('en-US');
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function StatCounter({ count, suffix, label, delay }: StatItem & { delay: number }) {
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numRef.current;
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
    <Reveal delay={delay} className="text-center">
      <div
        ref={numRef}
        className="font-merriweather font-extrabold text-[clamp(2.6rem,5vw,3.6rem)] leading-none text-navy tracking-[0.01em]"
      >
        0
      </div>
      <div className="mt-3 text-[0.9rem] tracking-[0.04em] text-muted-light">{label}</div>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="bg-cream py-[clamp(4rem,9vh,6.5rem)] px-[clamp(1.25rem,5vw,5.5rem)] border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted text-center mb-10">
            Impact in numbers
          </div>
        </Reveal>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[clamp(1.5rem,3vw,2.5rem)]">
          {stats.map((s, i) => (
            <StatCounter key={s.label} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
