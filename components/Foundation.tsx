import Image from 'next/image';
import Reveal from './Reveal';

const programs = [
  {
    label: '01 · Leadership Development',
    title: 'Building future women leaders',
    desc: 'Training, fellowships, and platforms that put women in the rooms where decisions are made.',
  },
  {
    label: '02 · Mentorship Programs',
    title: 'Supporting growth, one woman at a time',
    desc: 'Pairing emerging leaders with mentors who open doors and sharpen ambition.',
  },
  {
    label: '03 · Community Outreach',
    title: 'Grassroots impact and awareness',
    desc: 'Campaigns and convenings that meet communities where they are and move them forward.',
  },
];

export default function Foundation() {
  return (
    <section
      id="foundation"
      className="scroll-mt-20 bg-gradient-to-br from-navy to-navy-dark text-white py-[clamp(5rem,13vh,9.5rem)] px-[clamp(1.25rem,5vw,5.5rem)]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-[clamp(2.5rem,5vw,5rem)] items-start">

        <Reveal>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-white/55 mb-5">
            Founder &amp; CEO
          </div>
          <h2 className="font-merriweather font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05] tracking-[0.01em] mb-6">
            Gutsy Women Foundation
          </h2>
          <p className="text-white/78 text-[1.08rem] leading-[1.75] mb-9 max-w-[42ch]">
            Equipping women and girls with the confidence, knowledge, leadership skills, and opportunities to
            thrive, through education, mentorship, and advocacy that create long-term, sustainable change.
          </p>
          <div className="relative overflow-hidden aspect-[4/3] mb-9 border border-white/14">
            <Image
              src="/images/raynelle-foundation.jpeg"
              alt="Miss Raynelle at a Gutsy Women Foundation event"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
            />
          </div>
          <a
            href="https://www.gustywomenfoundation.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-navy-dark text-[0.8rem] tracking-[0.12em] uppercase px-[1.7rem] py-[0.95rem] transition-transform hover:-translate-y-1 hover:bg-cream-warm"
          >
            Support the mission
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={140} className="flex flex-col gap-px bg-white/14 border border-white/14">
          {programs.map((p) => (
            <div key={p.label} className="bg-navy-deeper p-[1.7rem_1.6rem]">
              <div className="font-mono text-[0.66rem] tracking-[0.16em] text-white/45 mb-2">{p.label}</div>
              <h3 className="font-merriweather font-bold text-[1.12rem] mb-2">{p.title}</h3>
              <p className="text-white/70 text-[0.92rem] leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
