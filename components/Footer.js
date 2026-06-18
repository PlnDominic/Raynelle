import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>MISS RAYNELLE</div>
            <p className={styles.tagline}>Gender Advocate · Social Commentator · Political Analyst · Writer</p>
            <p className={styles.org}>Founder &amp; CEO, Gutsy Women Foundation.</p>
          </div>

          <div className={styles.links}>
            <div>
              <h4 className={styles.colLabel}>Explore</h4>
              <ul className={styles.nav}>
                <li><a href="#about">About</a></li>
                <li><a href="#impact">Advocacy</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#media">Media</a></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.colLabel}>Connect</h4>
              <ul className={styles.nav}>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Miss Raynelle. All rights reserved.</span>
          <span className={styles.mark}>Voice for Change</span>
        </div>
      </div>
    </footer>
  );
}
