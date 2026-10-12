import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:4173';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-12T00:00:00Z');

  return [
    { url: `${siteUrl}/`, lastModified, priority: 1 },
    { url: `${siteUrl}/research/`, lastModified, priority: 0.9 },
    { url: `${siteUrl}/teaching/`, lastModified, priority: 0.7 },
    { url: `${siteUrl}/cv/`, lastModified, priority: 0.8 },
  ];
}
