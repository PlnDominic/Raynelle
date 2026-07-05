import Reveal from './Reveal';

const cards = [
  { num: '01', title: 'Gender Advocacy', desc: 'Promoting equality, inclusion, and the rights of women and girls through strategic, sustained advocacy.' },
  { num: '02', title: 'Confidence & Self-Awareness Coaching', desc: 'Helping young women overcome fear in public speaking, self-expression, and identity to lead with purpose.' },
  { num: '03', title: 'Mentorship & Education', desc: 'Equipping girls and women with the knowledge, leadership skills, and opportunities they need to thrive.' },
  { num: '04', title: 'Writing & Social Commentary', desc: 'Exploring the social and political issues that challenge perspectives, amplify voices, and encourage change.' },
];

export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 bg-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto">

        <Reveal className="flex items-end justify-between gap-8 flex-wrap mb-[clamp(2.5rem,5vh,3.5rem)]">
          <div>
            <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-3.5">
              Areas of Impact
            </div>
            <h2 className="font-merriweather font-bold text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.12] max-w-[18ch]">
              Where the work lives, and how it moves.
            </h2>
          </div>
          <p className="text-muted-light text-base leading-[1.7] max-w-[34ch]">
            Four disciplines, one through-line: turning conviction into measurable progress for women and girls.
          </p>
        </Reveal>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {cards.map((card, i) => (
            <Reveal key={card.num} delay={i * 100} className="contents">
              <article className="bg-white p-[2.2rem_1.8rem] flex flex-col gap-4 min-h-[300px] transition-colors hover:bg-cream">
                <div className="font-mono text-[0.72rem] tracking-[0.16em] text-accent">{card.num}</div>
                <h3 className="font-merriweather font-bold text-[1.22rem] leading-[1.2]">{card.title}</h3>
                <p className="text-muted-light text-[0.95rem] leading-[1.7] mt-auto">{card.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
