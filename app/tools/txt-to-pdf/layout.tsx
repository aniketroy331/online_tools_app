import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Txt To Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free txt to pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Txt To Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Txt To Pdf - Free Online Tool',
    description: 'Free online tool for txt to pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/txt-to-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Txt To Pdf - Free Online Tool',
    description: 'Online tool for txt to pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
