import Reveal from './Reveal';

const articles = [
  { num: '01', bg: '#f1ece3', numColor: '#d8cbb8', meta: 'Advocacy · Mar 2026',         title: 'Women in Leadership: The Next Frontier' },
  { num: '02', bg: '#e7ddcf', numColor: '#cdbba4', meta: 'Political Analysis · Feb 2026', title: 'Understanding Modern Political Dynamics' },
  { num: '03', bg: '#f1ece3', numColor: '#d8cbb8', meta: 'Social Commentary · Jan 2026', title: 'Building Inclusive Communities' },
];

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-white py-[clamp(5rem,12vh,9rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <div className="max-w-[1200px] mx-auto">

        <Reveal className="flex items-end justify-between gap-8 flex-wrap mb-[clamp(2.5rem,5vh,3.5rem)]">
          <div>
            <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted mb-3.5">
              Latest Insights
            </div>
            <h2 className="font-merriweather font-bold text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.12]">
              Writing &amp; analysis
            </h2>
          </div>
          <a
            href="#"
            className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-muted-light inline-flex items-center gap-2 transition-[gap,color] duration-200 hover:gap-[0.85rem] hover:text-ink"
          >
            All articles
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[clamp(1.5rem,2.5vw,2.25rem)]">
          {articles.map((a, i) => (
            <Reveal key={a.num} delay={i * 120}>
              <article className="cursor-pointer group">
                <div
                  className="aspect-[4/3] overflow-hidden border border-border mb-5 flex items-end p-[1.4rem]"
                  style={{ background: a.bg }}
                >
                  <span
                    className="font-merriweather font-extrabold text-[2.6rem] leading-[0.9]"
                    style={{ color: a.numColor }}
                  >
                    {a.num}
                  </span>
                </div>
                <div className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted mb-3">
                  {a.meta}
                </div>
                <h3 className="font-merriweather font-bold text-[1.28rem] leading-[1.25] text-ink transition-colors group-hover:text-navy">
                  {a.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
