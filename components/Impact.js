import Image from 'next/image';
import Reveal from './Reveal';
import styles from './Impact.module.css';

const cards = [
  {
    num: '01',
    title: 'Gender Advocacy',
    desc: 'Promoting equality, inclusion, and the rights of women and girls through strategic, sustained advocacy.',
    img: '/images/impact-advocacy.png',
    alt: 'Gutsy Women Foundation members supporting a woman at a community outreach',
    focus: '50% 30%',
  },
  {
    num: '02',
    title: 'Confidence & Self-Awareness Coaching',
    desc: 'Helping young women overcome fear in public speaking, self-expression, and identity to lead with purpose.',
    img: '/images/impact-coaching.jpg',
    alt: 'A young woman speaking confidently at the microphone during a GWF masterclass',
    focus: '50% 30%',
  },
  {
    num: '03',
    title: 'Mentorship & Education',
    desc: 'Equipping girls and women with the knowledge, leadership skills, and opportunities they need to thrive.',
    img: '/images/impact-mentorship.png',
    alt: 'A Gutsy Women Foundation mentor guiding a schoolgirl',
    focus: '50% 35%',
  },
  {
    num: '04',
    title: 'Writing & Social Commentary',
    desc: 'Exploring the social and political issues that challenge perspectives, amplify voices, and encourage change.',
    img: '/images/impact-writing.jpg',
    alt: 'An engaged student audience at a GWF Cape Coast program',
    focus: '50% 40%',
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
                <div className={styles.cardMedia}>
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 25vw"
                    style={{ objectFit: 'cover', objectPosition: card.focus }}
                  />
                </div>
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
