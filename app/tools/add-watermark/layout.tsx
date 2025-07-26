import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Watermark - Free Online Tool | YourSiteName',
  description: 'Use our free add watermark tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Add Watermark', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Add Watermark - Free Online Tool',
    description: 'Free online tool for add watermark tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/add-watermark',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Watermark - Free Online Tool',
    description: 'Online tool for add watermark. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
