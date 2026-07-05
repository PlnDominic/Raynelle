import Image from 'next/image';
import Reveal from './Reveal';

const qualifications = [
  'Bachelor of Arts in Strategic Communication',
  'Master of Arts in Gender and Law',
  'Master of Business Administration (MBA) in Marketing',
  'Master of Arts in Development Management (in progress)',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto grid [grid-template-columns:0.85fr_1.15fr] gap-[clamp(2.5rem,5vw,5rem)] items-center max-md:grid-cols-1">

        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-warm border border-border">
            <Image
              src="/images/raynelle-about.jpeg"
              alt="Raynelle Boadu portrait"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
            />
          </div>
          <div className="absolute -bottom-px -right-px bg-navy text-white p-[1.1rem_1.4rem] max-w-[62%]">
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-white/60 mb-1.5">
              Founder &amp; Chief Executive Officer
            </div>
            <div className="font-merriweather font-bold text-[0.95rem] tracking-[0.04em]">
              Gutsy Women Foundation
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-5">
            About Raynelle Boadu
          </div>
          <h2 className="font-merriweather font-bold text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] mb-6">
            Empowering women and girls to discover their potential and lead with purpose.
          </h2>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-5">
            Raynelle Boadu is a gender advocate, communications professional, confidence and self-awareness coach,
            writer, and development-focused leader dedicated to empowering young girls and women through education,
            mentorship, advocacy, and sustainable social impact initiatives.
          </p>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-5">
            As Founder and CEO of Gutsy Women Foundation, she leads programs that equip women and girls with the
            confidence, knowledge, leadership skills, and opportunities necessary to thrive and create meaningful
            change in their communities. She is especially passionate about helping young women overcome fear in
            public speaking, self-expression, and personal identity development.
          </p>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-8">
            Her interdisciplinary background in communication, gender studies, business, and development management
            enables her to lead with both strategic insight and deep empathy — translating sharp analysis into
            campaigns, mentorship, and community programs that carry change beyond the headline.
          </p>

          <div className="mb-8">
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-4">
              Academic Qualifications
            </div>
            <ul className="flex flex-col gap-2.5">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-[0.93rem] text-muted-light leading-[1.5]">
                  <span className="mt-[0.45em] w-[5px] h-[5px] rounded-full bg-navy shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-merriweather font-extrabold italic text-2xl text-navy tracking-[0.01em]">
              Raynelle Boadu
            </span>
            <span className="w-[46px] h-px bg-accent-subtle" />
            <span className="text-[0.85rem] text-muted">Gender Advocate · Coach · Founder</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
