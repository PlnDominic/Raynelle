import Reveal from './Reveal';

export default function Quote() {
  return (
    <section className="bg-cream-warm py-[clamp(5rem,12vh,8.5rem)] px-[clamp(1.25rem,5vw,5.5rem)]">
      <Reveal>
        <figure className="max-w-[1000px] mx-auto text-center">
          <div className="font-merriweather font-extrabold text-[4rem] leading-none text-accent mb-2">
            &ldquo;
          </div>
          <blockquote className="font-merriweather font-medium text-[clamp(1.6rem,3.6vw,2.7rem)] leading-[1.28] tracking-[0.005em] text-ink mb-7">
            Real change begins when women are empowered to lead, speak, and transform their communities.
          </blockquote>
          <figcaption className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-muted">
            Miss Raynelle
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
