import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.peyzedex.com';

  // These are the static routes in the application
  const routes = [
    '',
    '/hizmetler',
    '/paketler',
    '/surec',
    '/projeler',
    '/demolar',
    '/sss',
    '/iletisim',
    '/demo-talep',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
