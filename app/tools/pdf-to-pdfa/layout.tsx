import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pdf To Pdf/A - Free Online Tool | YourSiteName',
  description: 'Use our free pdf to pdf/a tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Pdf To Pdf/A', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Pdf To Pdf/A - Free Online Tool',
    description: 'Free online tool for pdf to pdf/a tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/pdf-to-pdf-a',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pdf To Pdf/A - Free Online Tool',
    description: 'Online tool for pdf to pdf/a. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
