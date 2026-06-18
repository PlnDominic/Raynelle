'use client';
import styles from './MobileDrawer.module.css';

export default function MobileDrawer({ open, onClose }) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#impact', label: 'Advocacy' },
    { href: '#insights', label: 'Insights' },
    { href: '#foundation', label: 'Foundation' },
    { href: '#media', label: 'Media' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
      <div className={styles.scrim} onClick={onClose} />
      <div className={styles.panel}>
        <button className={styles.close} aria-label="Close menu" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#16181f" strokeWidth="1.5">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
        {links.map(({ href, label }) => (
          <a key={href} href={href} className={styles.link} onClick={onClose}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
