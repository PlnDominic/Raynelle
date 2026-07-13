import type { Metadata } from 'next';
import { Assistant, Merriweather_Sans, Anonymous_Pro } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theraynelleboadu.com';

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

const DESCRIPTION =
  'Raynelle Boadu is a gender advocate, communications professional, confidence and self-awareness coach, and writer. Founder & CEO of the Gutsy Women Foundation, empowering women and girls through education, mentorship, and advocacy.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Raynelle Boadu | Gender Advocate, Coach & Founder of Gutsy Women Foundation',
    template: '%s | Raynelle Boadu',
  },
  description: DESCRIPTION,
  keywords: [
    'Raynelle Boadu',
    'Miss Raynelle',
    'gender advocate Ghana',
    'women empowerment Ghana',
    'confidence coach',
    'self-awareness coaching',
    'public speaking coach',
    'mentorship for women',
    'Gutsy Women Foundation',
    'women leadership Ghana',
    'social commentator',
    'political analyst',
    'Accra Ghana',
  ],
  authors: [{ name: 'Raynelle Boadu', url: SITE_URL }],
  creator: 'Raynelle Boadu',
  publisher: 'Gutsy Women Foundation',
  applicationName: 'Raynelle Boadu',
  category: 'Nonprofit & Advocacy',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Raynelle Boadu',
    title: 'Raynelle Boadu | Gender Advocate, Coach & Founder of Gutsy Women Foundation',
    description: DESCRIPTION,
    locale: 'en_GH',
    images: [
      {
        url: '/images/raynelle-portrait.jpeg',
        width: 1170,
        height: 1565,
        alt: 'Raynelle Boadu — Gender Advocate & Founder of the Gutsy Women Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raynelle Boadu | Gender Advocate, Coach & Founder of Gutsy Women Foundation',
    description: DESCRIPTION,
    images: ['/images/raynelle-portrait.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'GH-AA',
    'geo.placename': 'Accra, Ghana',
    'geo.position': '5.6037;-0.1870',
    ICBM: '5.6037, -0.1870',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${merriweatherSans.variable} ${anonymousPro.variable}`}
    >
      <body className="font-assistant text-ink bg-cream">
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
