'use client';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Advocacy' },
  { href: '#insights', label: 'Insights' },
  { href: '#foundation', label: 'Foundation' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Scrim */}
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-[min(82vw,360px)] bg-cream pt-[5.5rem] px-8 pb-8 flex flex-col gap-1 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-[1.4rem] right-[1.4rem] w-10 h-10 grid place-items-center"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#16181f" strokeWidth="1.5">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>

        {links.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className={`font-merriweather text-[1.35rem] font-bold py-3 text-ink ${
              i < links.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
