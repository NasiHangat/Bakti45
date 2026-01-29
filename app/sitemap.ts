import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const baseUrl = 'https://www.bakti45sejahtera.my.id';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic routes from Sanity
  const query = groq`*[_type == "kegiatan"] { slug, publishedAt }`;
  const kegiatanItems = await client.fetch(query);

  const kegiatanUrls = kegiatanItems.map((item: any) => ({
    url: `${baseUrl}/kegiatan/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl, // Home
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/profil`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kegiatan`, // Index Activities
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...kegiatanUrls,
  ];
}