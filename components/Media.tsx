'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

export default function Media() {
  const playRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="media"
      className="scroll-mt-20 bg-gradient-to-br from-navy-dark to-[#16181f] text-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]"
    >
      <div className="max-w-[1200px] mx-auto">

        <Reveal className="text-center max-w-[640px] mx-auto mb-[clamp(2.5rem,5vh,3.5rem)]">
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-white/50 mb-4">
            Media &amp; Speaking
          </div>
          <h2 className="font-merriweather font-bold text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.12] mb-5">
            On stage, on air, on the record.
          </h2>
          <p className="text-white/72 text-[1.05rem] leading-[1.7]">
            Keynotes, panels, broadcast interviews, and podcasts, wherever the conversation on gender
            and governance is happening.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative border border-white/16 aspect-[16/7] overflow-hidden">
          <Image
            src="/images/raynelle-portrait.jpeg"
            alt="Miss Raynelle keynote"
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
          />
          <div className="absolute inset-0 [background:linear-gradient(0deg,rgba(22,24,31,0.78)_0%,rgba(22,24,31,0.12)_55%,rgba(22,24,31,0.35)_100%)] pointer-events-none z-10" />
          <button
            ref={playRef}
            aria-label="Play featured video"
            onClick={() => { if (playRef.current) playRef.current.style.opacity = '0.6'; }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] rounded-full bg-white/95 grid place-items-center text-navy-dark z-20 transition-[transform,opacity] hover:scale-[1.08]"
          >
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <polygon points="8 5 19 12 8 19" />
            </svg>
          </button>
          <div className="absolute left-6 bottom-5 right-6 flex items-end justify-between gap-4 flex-wrap pointer-events-none z-20">
            <div>
              <div className="font-mono text-[0.64rem] tracking-[0.18em] uppercase text-white/60 mb-1.5">
                Featured Keynote
              </div>
              <div className="font-merriweather font-bold text-[1.25rem]">
                Women in Leadership: The Next Frontier
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex gap-10 flex-wrap justify-center mt-10 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-white/55">
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
