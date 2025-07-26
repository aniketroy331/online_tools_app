import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merge Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free merge pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Merge Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Merge Pdf - Free Online Tool',
    description: 'Free online tool for merge pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/merge-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge Pdf - Free Online Tool',
    description: 'Online tool for merge pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
