const FALLBACK = 'https://www.theraynelleboadu.com';

/**
 * Resolve a clean, valid site URL from NEXT_PUBLIC_SITE_URL.
 *
 * Tolerates common misconfigurations so a bad env var can never crash the
 * build (metadataBase uses `new URL()`, which throws on invalid input):
 *  - surrounding whitespace, quotes, or angle brackets
 *  - a missing protocol ("www.example.com")
 *  - a trailing slash
 *  - a full markdown link, e.g. "[label](https://example.com/)"
 */
export function getSiteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  if (!raw) return FALLBACK;

  let value = raw;

  // If it's a markdown link [text](url), pull out the url.
  const md = value.match(/\((https?:\/\/[^)\s]+)\)/i);
  if (md) value = md[1];

  // Strip stray wrapping characters and whitespace.
  value = value.replace(/["'<>[\]()\s]/g, '');

  // Ensure a protocol.
  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value.replace(/^\/+/, '')}`;
  }

  // Normalise: drop trailing slashes.
  value = value.replace(/\/+$/, '');

  try {
    // Validate; new URL throws on anything malformed.
    new URL(value);
    return value;
  } catch {
    return FALLBACK;
  }
}

export const SITE_URL = getSiteUrl();
