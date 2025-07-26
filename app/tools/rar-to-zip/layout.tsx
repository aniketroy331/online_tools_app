import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rar To Zip - Free Online Tool | YourSiteName',
  description: 'Use our free rar to zip tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Rar To Zip', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Rar To Zip - Free Online Tool',
    description: 'Free online tool for rar to zip tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/rar-to-zip',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rar To Zip - Free Online Tool',
    description: 'Online tool for rar to zip. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
