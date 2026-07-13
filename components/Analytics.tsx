import Script from 'next/script';

// GA4 Measurement ID. Falls back to the site's ID; override with NEXT_PUBLIC_GA_ID.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-QXJT389959';

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
