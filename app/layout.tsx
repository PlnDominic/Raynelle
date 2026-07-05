import type { Metadata } from 'next';
import { Assistant, Merriweather_Sans, Anonymous_Pro } from 'next/font/google';
import './globals.css';

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-assistant',
  display: 'swap',
});

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-merriweather-sans',
  display: 'swap',
});

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-anonymous-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raynelle Boadu | Gender Advocate, Coach & Founder of Gutsy Women Foundation',
  description:
    'Raynelle Boadu is a gender advocate, communications professional, confidence and self-awareness coach, and writer. Founder & CEO of the Gutsy Women Foundation, empowering women and girls through education, mentorship, and advocacy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${merriweatherSans.variable} ${anonymousPro.variable}`}
    >
      <body className="font-assistant text-ink bg-cream">{children}</body>
    </html>
  );
}
