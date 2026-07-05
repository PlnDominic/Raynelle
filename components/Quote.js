import Reveal from './Reveal';
import styles from './Quote.module.css';

export default function Quote() {
  return (
    <section className={styles.section}>
      <Reveal>
        <figure className={styles.figure}>
          <div className={styles.mark}>&ldquo;</div>
          <blockquote className={styles.text}>
            Real change begins when women are empowered to lead, speak, and transform their communities.
          </blockquote>
          <figcaption className={styles.caption}>Raynelle Boadu</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
