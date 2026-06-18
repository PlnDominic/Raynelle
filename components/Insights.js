import Reveal from './Reveal';
import styles from './Insights.module.css';

const articles = [
  { num: '01', bg: '#f1ece3', numColor: '#d8cbb8', meta: 'Advocacy · Mar 2026', title: 'Women in Leadership: The Next Frontier' },
  { num: '02', bg: '#e7ddcf', numColor: '#cdbba4', meta: 'Political Analysis · Feb 2026', title: 'Understanding Modern Political Dynamics' },
  { num: '03', bg: '#f1ece3', numColor: '#d8cbb8', meta: 'Social Commentary · Jan 2026', title: 'Building Inclusive Communities' },
];

export default function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Latest Insights</div>
            <h2 className={styles.heading}>Writing &amp; analysis</h2>
          </div>
          <a href="#" className={styles.allLink}>
            All articles
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </Reveal>

        <div className={styles.grid}>
          {articles.map((a, i) => (
            <Reveal key={a.num} delay={i * 120}>
              <article className={styles.article}>
                <div className={styles.thumb} style={{ background: a.bg }}>
                  <span className={styles.articleNum} style={{ color: a.numColor }}>{a.num}</span>
                </div>
                <div className={styles.meta}>{a.meta}</div>
                <h3 className={styles.title}>{a.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
