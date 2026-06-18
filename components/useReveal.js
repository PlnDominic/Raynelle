'use client';
import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    el.classList.add('reveal');
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

export function useRevealAll(selector = '[data-reveal]') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => {
      el.classList.add('reveal');
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [selector]);
}
