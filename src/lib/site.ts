/**
 * Public origin for absolute canonical, Open Graph, and sitemap URLs.
 * Leave unset until the domain is chosen. Do not default this to a host.
 */
export function getSiteUrl(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  return new URL(raw);
}
