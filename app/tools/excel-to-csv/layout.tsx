import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excel To Csv - Free Online Tool | YourSiteName',
  description: 'Use our free excel to csv tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Excel To Csv', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Excel To Csv - Free Online Tool',
    description: 'Free online tool for excel to csv tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/excel-to-csv',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel To Csv - Free Online Tool',
    description: 'Online tool for excel to csv. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
