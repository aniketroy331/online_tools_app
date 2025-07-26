import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free sign pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Sign Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Sign Pdf - Free Online Tool',
    description: 'Free online tool for sign pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/sign-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Pdf - Free Online Tool',
    description: 'Online tool for sign pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
