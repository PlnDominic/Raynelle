const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theraynelleboadu.com';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Explicitly welcome AI / generative-engine crawlers (GEO)
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
