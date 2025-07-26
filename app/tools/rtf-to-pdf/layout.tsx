import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rtf To Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free rtf to pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Rtf To Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Rtf To Pdf - Free Online Tool',
    description: 'Free online tool for rtf to pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/rtf-to-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rtf To Pdf - Free Online Tool',
    description: 'Online tool for rtf to pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
