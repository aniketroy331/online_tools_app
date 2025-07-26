import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free compress pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Compress Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Compress Pdf - Free Online Tool',
    description: 'Free online tool for compress pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/compress-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Pdf - Free Online Tool',
    description: 'Online tool for compress pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
