import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zip To Rar - Free Online Tool | YourSiteName',
  description: 'Use our free zip to rar tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Zip To Rar', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Zip To Rar - Free Online Tool',
    description: 'Free online tool for zip to rar tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/zip-to-rar',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zip To Rar - Free Online Tool',
    description: 'Online tool for zip to rar. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
