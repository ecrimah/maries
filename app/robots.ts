import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.shopmarieshair.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/checkout',
          '/cart',
          '/account/',
          '/auth/',
          '/pay/',
          '/order-success',
          '/order-tracking',
          '/maintenance',
          '/offline',
          '/pwa-settings',
          '/support/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
