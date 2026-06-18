'use client';
import { useEffect, useState } from 'react';

interface HeaderProps {
  onMenuOpen: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Advocacy' },
  { href: '#insights', label: 'Insights' },
  { href: '#foundation', label: 'Foundation' },
  { href: '#media', label: 'Media' },
];

export default function Header({ onMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || window.pageYOffset) > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center justify-between px-[clamp(1.25rem,5vw,5.5rem)] border-b transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        scrolled
          ? 'bg-cream/88 backdrop-blur-[14px] text-ink border-border'
          : 'bg-transparent text-white border-transparent'
      }`}
    >
      <a
        href="#home"
        className="font-merriweather font-extrabold text-[1.12rem] tracking-[0.18em] text-inherit"
      >
        MISS&nbsp;RAYNELLE
      </a>

      <nav className="hidden md:flex gap-[1.9rem] items-center">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-inherit text-[0.82rem] tracking-[0.04em] transition-opacity hover:opacity-65"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="text-[0.74rem] tracking-[0.12em] uppercase border border-current px-[1.15rem] py-[0.62rem] text-inherit transition-colors hover:bg-white hover:text-navy-dark"
        >
          Contact
        </a>
        <button
          className="md:hidden grid place-items-center w-[42px] h-[42px] text-inherit"
          aria-label="Open menu"
          onClick={onMenuOpen}
        >
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
