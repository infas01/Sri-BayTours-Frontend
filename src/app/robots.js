//This file tells Google's robot: "Hello, you are allowed to scan this site, and here is my sitemap."
export const revalidate = 86400; // Re-generate once per day

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Block endpoints / private pages if any
    },
    sitemap: 'https://www.sribaytours.lk/sitemap.xml',
  };
}
