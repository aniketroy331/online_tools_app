import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Repair Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free repair pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Repair Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Repair Pdf - Free Online Tool',
    description: 'Free online tool for repair pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/repair-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repair Pdf - Free Online Tool',
    description: 'Online tool for repair pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
