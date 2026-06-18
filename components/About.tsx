import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto grid [grid-template-columns:0.85fr_1.15fr] gap-[clamp(2.5rem,5vw,5rem)] items-center max-md:grid-cols-1">

        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-warm border border-border">
            <Image
              src="/images/raynelle-portrait.jpeg"
              alt="Miss Raynelle portrait"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 18%', filter: 'grayscale(0.18) contrast(1.02)' }}
            />
          </div>
          <div className="absolute -bottom-px -right-px bg-navy text-white p-[1.1rem_1.4rem] max-w-[62%]">
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-white/60 mb-1.5">
              Founder &amp; CEO
            </div>
            <div className="font-merriweather font-bold text-[0.95rem] tracking-[0.04em]">
              Gutsy Women Foundation
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-5">
            About Miss Raynelle
          </div>
          <h2 className="font-merriweather font-bold text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] mb-6">
            A voice built for the hard conversations, and the lasting change that follows them.
          </h2>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-5">
            Miss Raynelle is a respected gender advocate, social commentator, political analyst, and writer
            dedicated to advancing equality and shaping public discourse. Across rooms of power and grassroots
            gatherings alike, she amplifies women&apos;s voices, sharpens policy debate, and models the inclusive
            leadership she calls for.
          </p>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-8">
            Her work moves between the page, the podium, and the policy table, translating sharp analysis into
            the campaigns, mentorship, and community programs that carry change beyond the headline.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-merriweather font-extrabold italic text-2xl text-navy tracking-[0.01em]">
              Raynelle
            </span>
            <span className="w-[46px] h-px bg-accent-subtle" />
            <span className="text-[0.85rem] text-muted">Gender Advocate · Writer · Founder</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
