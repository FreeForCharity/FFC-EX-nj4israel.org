import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  const now = new Date()
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/operating-principles', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/our-history', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/leadership', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/our-partners', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/media-coverage', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/financial-reports', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/volunteer', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/donate', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ]
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
