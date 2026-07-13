const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theraynelleboadu.com';

export default function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#raynelle`,
        name: 'Raynelle Boadu',
        alternateName: ['Miss Raynelle', 'Raynelle Nana Yaa Boadu'],
        jobTitle: 'Gender Advocate, Confidence & Self-Awareness Coach, Founder',
        description:
          'Raynelle Boadu is a Ghanaian gender advocate, communications professional, confidence and self-awareness coach, social commentator, and writer. She is the Founder & CEO of the Gutsy Women Foundation.',
        url: SITE_URL,
        image: `${SITE_URL}/images/raynelle-portrait.jpeg`,
        email: 'raynelle@gutsywomenfoundation.org',
        telephone: '+233549094441',
        gender: 'Female',
        nationality: 'Ghanaian',
        knowsAbout: [
          'Gender advocacy',
          'Women empowerment',
          'Confidence coaching',
          'Self-awareness coaching',
          'Public speaking',
          'Mentorship',
          'Leadership development',
          'Social commentary',
          'Political analysis',
        ],
        worksFor: { '@id': `${SITE_URL}/#gwf` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Accra',
          addressCountry: 'GH',
        },
        sameAs: ['https://www.tiktok.com/@miss_raynelle'],
      },
      {
        '@type': ['Organization', 'NGO'],
        '@id': `${SITE_URL}/#gwf`,
        name: 'Gutsy Women Foundation',
        description:
          'The Gutsy Women Foundation equips women and girls with the confidence, knowledge, leadership skills, and opportunities to thrive through education, mentorship, and advocacy.',
        url: 'https://www.gustywomenfoundation.org',
        founder: { '@id': `${SITE_URL}/#raynelle` },
        foundingLocation: { '@type': 'Place', name: 'Accra, Ghana' },
        areaServed: { '@type': 'Country', name: 'Ghana' },
        email: 'raynelle@gutsywomenfoundation.org',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Accra',
          addressCountry: 'GH',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Raynelle Boadu',
        description:
          'Official website of Raynelle Boadu — gender advocate, confidence coach, and Founder & CEO of the Gutsy Women Foundation.',
        publisher: { '@id': `${SITE_URL}/#raynelle` },
        inLanguage: 'en',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/#mentorship`,
        name: 'One-on-One Mentorship with Raynelle Boadu',
        serviceType: 'Personal mentorship & coaching',
        description:
          'Personal one-on-one mentorship sessions for women on confidence, public speaking, career direction, leadership, personal branding, and purpose-driven work. Available virtually worldwide or in person in Accra, Ghana.',
        provider: { '@id': `${SITE_URL}/#raynelle` },
        areaServed: [
          { '@type': 'Country', name: 'Ghana' },
          { '@type': 'Place', name: 'Worldwide (virtual sessions)' },
        ],
        url: `${SITE_URL}/#mentorship`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
