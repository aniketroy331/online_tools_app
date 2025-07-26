import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rotate Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free rotate pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Rotate Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Rotate Pdf - Free Online Tool',
    description: 'Free online tool for rotate pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/rotate-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate Pdf - Free Online Tool',
    description: 'Online tool for rotate pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
