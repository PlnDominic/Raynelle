'use client';
import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import styles from './Insights.module.css';

const links = [
  'https://vt.tiktok.com/ZSCphBLmC/',
  'https://vt.tiktok.com/ZSCpBGPee/',
  'https://vt.tiktok.com/ZSCpBQLtg/',
  'https://vt.tiktok.com/ZSCpBp2eS/',
  'https://vt.tiktok.com/ZSCpBnDkh/',
  'https://vt.tiktok.com/ZSCpBGfws/',
  'https://vt.tiktok.com/ZSCpBbrN2/',
];

const articles = links.map((link, i) => ({
  num: String(i + 1).padStart(2, '0'),
  bg: i % 2 ? '#e7ddcf' : '#f1ece3',
  numColor: i % 2 ? '#cdbba4' : '#d8cbb8',
  meta: 'TikTok',
  title: 'Watch on TikTok',
  link,
}));

function cleanCaption(raw) {
  const text = raw.replace(/#\S+/g, '').replace(/\s+/g, ' ').trim();
  return text.length > 90 ? text.slice(0, 90).trim() + '…' : text;
}

// Loads a post's cover image and caption via TikTok's CORS-enabled oEmbed
// API; the card keeps its placeholder content until (and unless) this resolves.
function useTikTokPreview(link) {
  const [preview, setPreview] = useState(null);

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

function InsightCard({ article: a }) {
  const preview = useTikTokPreview(a.link);

  const body = (
    <>
      <div
        className={styles.thumb}
        style={
          preview
            ? { background: `url("${preview.thumbnail}") center / cover no-repeat` }
            : { background: a.bg }
        }
      >
        {!preview && (
          <span className={styles.articleNum} style={{ color: a.numColor }}>{a.num}</span>
        )}
      </div>
      <div className={styles.meta}>{preview?.handle ? `TikTok · @${preview.handle}` : a.meta}</div>
      <h3 className={styles.title}>{preview?.caption || a.title}</h3>
    </>
  );

  return a.link ? (
    <a href={a.link} target="_blank" rel="noopener noreferrer" className={styles.article}>
      {body}
    </a>
  ) : (
    <article className={styles.article}>{body}</article>
  );
}

export default function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Latest Insights</div>
            <h2 className={styles.heading}>Writing &amp; analysis</h2>
          </div>
          <a
            href="https://www.tiktok.com/@miss_raynelle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allLink}
          >
            More on TikTok
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <div className={styles.grid}>
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
