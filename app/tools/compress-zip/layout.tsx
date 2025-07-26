import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress To Zip - Free Online Tool | YourSiteName',
  description: 'Use our free compress to zip tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Compress To Zip', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Compress To Zip - Free Online Tool',
    description: 'Free online tool for compress to zip tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/compress-to-zip',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress To Zip - Free Online Tool',
    description: 'Online tool for compress to zip. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
