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

export const metadata = {
  title: 'Miss Raynelle | Gender Advocate · Political Analyst · Writer',
  description:
    'Miss Raynelle is a respected Gender Advocate, Social Commentator, Political Analyst, and Writer. Founder & CEO of Gutsy Women Foundation, Accra, Ghana.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${assistant.variable} ${merriweatherSans.variable} ${anonymousPro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
