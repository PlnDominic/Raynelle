'use client';
import { useEffect, useState } from 'react';
import Reveal from './Reveal';

interface ArticleItem {
  num: string;
  bg: string;
  numColor: string;
  meta: string;
  title: string;
  link?: string;
}

const links = [
  'https://vt.tiktok.com/ZSCphBLmC/',
  'https://vt.tiktok.com/ZSCpBGPee/',
  'https://vt.tiktok.com/ZSCpBQLtg/',
  'https://vt.tiktok.com/ZSCpBp2eS/',
  'https://vt.tiktok.com/ZSCpBnDkh/',
  'https://vt.tiktok.com/ZSCpBGfws/',
  'https://vt.tiktok.com/ZSCpBbrN2/',
];

const articles: ArticleItem[] = links.map((link, i) => ({
  num: String(i + 1).padStart(2, '0'),
  bg: i % 2 ? '#e7ddcf' : '#f1ece3',
  numColor: i % 2 ? '#cdbba4' : '#d8cbb8',
  meta: 'TikTok',
  title: 'Watch on TikTok',
  link,
}));

interface TikTokPreview {
  thumbnail: string;
  caption: string;
  handle: string;
}

function cleanCaption(raw: string): string {
  const text = raw.replace(/#\S+/g, '').replace(/\s+/g, ' ').trim();
  return text.length > 90 ? text.slice(0, 90).trim() + '…' : text;
}

// Loads a post's cover image and caption via TikTok's CORS-enabled oEmbed
// API; the card keeps its placeholder content until (and unless) this resolves.
function useTikTokPreview(link?: string): TikTokPreview | null {
  const [preview, setPreview] = useState<TikTokPreview | null>(null);

  useEffect(() => {
    if (!link) return;
    let cancelled = false;
    fetch('https://www.tiktok.com/oembed?url=' + encodeURIComponent(link))
      .then((res) => (res.ok ? res.json() : null))
      .then((d) => {
        if (cancelled || !d || !d.thumbnail_url) return;
        setPreview({
          thumbnail: d.thumbnail_url,
          caption: cleanCaption(d.title || ''),
          handle: (d.author_url || '').split('@')[1] || '',
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [link]);

  return preview;
}

function InsightCard({ article: a }: { article: ArticleItem }) {
  const preview = useTikTokPreview(a.link);

  const body = (
    <>
      <div
        className="aspect-[9/16] overflow-hidden border border-border mb-5 flex items-end p-[1.4rem]"
        style={
          preview
            ? { background: `url("${preview.thumbnail}") center / cover no-repeat` }
            : { background: a.bg }
        }
      >
        {!preview && (
          <span
            className="font-merriweather font-extrabold text-[2.6rem] leading-[0.9]"
            style={{ color: a.numColor }}
          >
            {a.num}
          </span>
        )}
      </div>
      <div className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted mb-3">
        {preview?.handle ? `TikTok · @${preview.handle}` : a.meta}
      </div>
      <h3 className="font-merriweather font-bold text-[1.28rem] leading-[1.25] text-ink transition-colors group-hover:text-navy">
        {preview?.caption || a.title}
      </h3>
    </>
  );

  return a.link ? (
    <a href={a.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
      {body}
    </a>
  ) : (
    <article className="cursor-pointer group">{body}</article>
  );
}

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
            href="https://www.tiktok.com/@miss_raynelle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-muted-light inline-flex items-center gap-2 transition-[gap,color] duration-200 hover:gap-[0.85rem] hover:text-ink"
          >
            More on TikTok
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-[clamp(1.5rem,2.5vw,2.25rem)]">
          {articles.map((a, i) => (
            <Reveal key={a.num} delay={(i % 2) * 120}>
              <InsightCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
