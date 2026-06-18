import Reveal from './Reveal';
import styles from './Impact.module.css';

const cards = [
  {
    num: '01',
    title: 'Gender Advocacy',
    desc: "Promoting equality, inclusion, and women's rights through strategic, sustained advocacy.",
  },
  {
    num: '02',
    title: 'Political Analysis',
    desc: 'Clear-eyed perspective on governance, democracy, and the policy that shapes daily life.',
  },
  {
    num: '03',
    title: 'Social Commentary',
    desc: 'Examining the issues that define our moment and opening up the conversations that matter.',
  },
  {
    num: '04',
    title: 'Writing & Thought Leadership',
    desc: 'Articles, opinion, and research-driven insight that set the terms of the debate.',
  },
];

export default function Impact() {
  return (
    <section id="impact" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Areas of Impact</div>
            <h2 className={styles.heading}>Where the work lives, and how it moves.</h2>
          </div>
          <p className={styles.desc}>
            Four disciplines, one through-line: turning conviction into measurable progress for women and girls.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <Reveal key={card.num} delay={i * 100}>
              <article className={styles.card}>
                <div className={styles.cardNum}>{card.num}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
