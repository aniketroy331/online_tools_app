import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extract Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free extract pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Extract Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Extract Pdf - Free Online Tool',
    description: 'Free online tool for extract pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/extract-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extract Pdf - Free Online Tool',
    description: 'Online tool for extract pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
