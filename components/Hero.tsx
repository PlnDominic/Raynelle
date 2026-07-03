'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!textRef.current) return;
      const els = textRef.current.querySelectorAll<HTMLElement>('[data-animate]');
      els.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (imgWrapRef.current && y < window.innerHeight) {
        imgWrapRef.current.style.transform = `translateY(${y * 0.16}px) scale(1.02)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const animateStyle = (delay: number): React.CSSProperties => ({
    opacity: 0,
    transform: 'translateY(20px)',
    transition: `opacity 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
  });

  return (
    <section id="home" className="relative min-h-svh bg-gradient-to-br from-navy to-navy-dark">
      <div className="grid min-h-svh [grid-template-columns:1.05fr_0.95fr] max-md:grid-cols-1">

        {/* Text */}
        <div
          ref={textRef}
          className="flex flex-col justify-center px-[clamp(1.25rem,5vw,5.5rem)] pt-28 pb-16 max-md:pt-10 max-md:pb-14 text-white relative z-10"
        >
          <div
            data-animate
            style={animateStyle(0.15)}
            className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-white/60 mb-6"
          >
            Gender Advocate · CEO, Gutsy Women Foundation · Writer
          </div>
          <h1
            data-animate
            style={animateStyle(0.28)}
            className="font-merriweather font-extrabold text-[clamp(3.2rem,7vw,5.4rem)] leading-[0.98] tracking-[0.005em] mb-6"
          >
            Raynelle<br />Boadu
          </h1>
          <p
            data-animate
            style={animateStyle(0.41)}
            className="font-merriweather font-medium text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.3] text-white/92 max-w-[22ch] mb-5"
          >
            Building confidence. Advancing equality. Empowering women.
          </p>
          <p
            data-animate
            style={animateStyle(0.54)}
            className="text-base leading-[1.7] text-white/72 max-w-[46ch] mb-10"
          >
            Through coaching, advocacy, and community leadership, Raynelle Boadu equips women and girls
            with the confidence and tools to discover their potential and become agents of transformation.
          </p>
          <div
            data-animate
            style={animateStyle(0.67)}
            className="flex gap-4 flex-wrap items-center"
          >
            <a
              href="#impact"
              className="inline-flex items-center gap-2.5 bg-white text-navy-dark text-[0.8rem] tracking-[0.12em] uppercase px-[1.7rem] py-[0.95rem] transition-transform hover:-translate-y-1 hover:bg-cream-warm"
            >
              Explore my work
              <ArrowIcon />
            </a>
            <a
              href="#foundation"
              className="inline-flex items-center text-white text-[0.8rem] tracking-[0.12em] uppercase py-1.5 border-b border-white/50 transition-opacity hover:opacity-70"
            >
              The Foundation
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative overflow-hidden min-h-svh max-md:min-h-[56vh] max-md:-order-1 bg-[#222a38]">
          <div ref={imgWrapRef} className="absolute inset-[-8%_0_0_0] h-[116%] will-change-transform">
            <Image
              src="/images/raynelle-portrait.jpeg"
              alt="Raynelle Boadu"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none [background:linear-gradient(90deg,rgba(29,37,51,0.85)_0%,rgba(29,37,51,0.12)_26%,rgba(29,37,51,0)_55%),linear-gradient(0deg,rgba(29,37,51,0.5)_0%,rgba(29,37,51,0)_30%)]" />
          <div className="absolute left-[1.6rem] bottom-[2.4rem] [writing-mode:vertical-rl] rotate-180 font-mono text-[0.7rem] tracking-[0.42em] uppercase text-white/60 max-md:hidden">
            Voice for Change
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50">
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-[34px] bg-gradient-to-b from-white/60 to-transparent animate-float" />
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
