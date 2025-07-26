import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organize Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free organize pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Organize Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Organize Pdf - Free Online Tool',
    description: 'Free online tool for organize pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/organize-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organize Pdf - Free Online Tool',
    description: 'Online tool for organize pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
