import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webp To Png - Free Online Tool | YourSiteName',
  description: 'Use our free webp to png tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Webp To Png', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Webp To Png - Free Online Tool',
    description: 'Free online tool for webp to png tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/webp-to-png',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webp To Png - Free Online Tool',
    description: 'Online tool for webp to png. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
