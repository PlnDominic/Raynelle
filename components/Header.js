'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || window.pageYOffset) > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>MISS&nbsp;RAYNELLE</a>

      <nav className={styles.nav}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#impact" className={styles.navLink}>Advocacy</a>
        <a href="#insights" className={styles.navLink}>Insights</a>
        <a href="#foundation" className={styles.navLink}>Foundation</a>
        <a href="#mentorship" className={styles.navLink}>Mentorship</a>
        <a href="#media" className={styles.navLink}>Media</a>
      </nav>

      <div className={styles.actions}>
        <a href="#contact" className={styles.cta}>Contact</a>
        <button className={styles.hamburger} aria-label="Open menu" onClick={onMenuOpen}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>
    </header>
  );
}
