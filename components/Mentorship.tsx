import Reveal from './Reveal';
import BookingModal from './BookingModal';

const focus = [
  'Confidence, public speaking & self-expression',
  'Career direction & leadership growth',
  'Personal branding & finding your voice',
  'Navigating advocacy & purpose-driven work',
];

const details = [
  { label: 'Format', value: 'Virtual or in-person (Accra)' },
  { label: 'Duration', value: '60-minute session' },
  { label: 'Availability', value: 'Limited slots each month' },
];

export default function Mentorship() {
  return (
    <section id="mentorship" className="scroll-mt-20 bg-cream py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1.05fr_0.95fr] max-md:grid-cols-1 gap-[clamp(2.5rem,5vw,5rem)] items-center max-md:items-start">
        <Reveal>
          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-5">
            Work with me
          </div>
          <h2 className="font-merriweather font-bold text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.12] mb-6 max-w-[16ch]">
            One-on-one mentorship with Raynelle.
          </h2>
          <p className="text-muted-light text-[1.05rem] leading-[1.75] mb-8 max-w-[46ch]">
            Personal, focused sessions for women ready to lead with clarity and confidence. Bring your
            questions, your goals, and your doubts &mdash; you&apos;ll leave with a plan and the courage to
            act on it.
          </p>
          <ul className="flex flex-col gap-[0.9rem] list-none p-0 m-0">
            {focus.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink text-[0.98rem]">
                <svg className="shrink-0 text-accent" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="bg-white border border-border rounded-md p-[clamp(1.8rem,3.5vw,2.6rem)] shadow-[0_24px_60px_-34px_rgba(42,51,68,0.35)]">
            <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-muted mb-6">
              The Session
            </div>
            <div className="flex flex-col gap-4 pb-7 mb-7 border-b border-[#eceae5]">
              {details.map((d) => (
                <div key={d.label} className="flex justify-between items-baseline gap-4">
                  <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-muted">{d.label}</span>
                  <span className="text-ink text-[0.96rem] text-right">{d.value}</span>
                </div>
              ))}
            </div>
            <BookingModal />
            <p className="mt-5 text-muted-light text-[0.86rem] leading-[1.6]">
              Prefer to talk first? <a href="#contact" className="text-ink underline underline-offset-2 hover:text-[#1d2533]">Send a message</a> and
              Raynelle will follow up personally.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
