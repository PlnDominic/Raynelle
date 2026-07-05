export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border pt-[clamp(3.5rem,7vh,5rem)] px-[clamp(1.25rem,5vw,5.5rem)] pb-8">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-wrap justify-between gap-10 pb-[clamp(2rem,5vh,3rem)]">
          <div className="max-w-[32ch]">
            <div className="font-merriweather font-extrabold text-[1.18rem] tracking-[0.16em] mb-1.5 text-ink">
              MISS RAYNELLE
            </div>
            <p className="text-muted text-[0.84rem] tracking-[0.06em]">
              Gender Advocate · Social Commentator · Political Analyst · Writer
            </p>
            <p className="text-muted-light text-[0.86rem] mt-4">
              Founder &amp; CEO, Gutsy Women Foundation.
            </p>
          </div>

          <div className="flex flex-wrap gap-[clamp(2.5rem,6vw,5rem)]">
            <div>
              <h4 className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted font-normal mb-4">
                Explore
              </h4>
              <ul className="flex flex-col gap-2.5">
                {['About', 'Advocacy', 'Insights', 'Media'].map((label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-[0.86rem] text-muted-light transition-colors hover:text-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted font-normal mb-4">
                Connect
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="https://www.tiktok.com/@miss_raynelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.86rem] text-muted-light transition-colors hover:text-ink"
                  >
                    TikTok
                  </a>
                </li>
                {['LinkedIn', 'Instagram', 'X', 'YouTube'].map((label) => (
                  <li key={label}>
                    <a href="#" className="text-[0.86rem] text-muted-light transition-colors hover:text-ink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-wrap justify-between gap-4 text-[0.78rem] text-muted">
          <span>© 2026 Miss Raynelle. All rights reserved.</span>
          <span className="font-mono tracking-[0.1em]">Voice for Change</span>
        </div>
      </div>
    </footer>
  );
}
