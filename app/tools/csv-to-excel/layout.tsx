import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Csv To Excel - Free Online Tool | YourSiteName',
  description: 'Use our free csv to excel tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Csv To Excel', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Csv To Excel - Free Online Tool',
    description: 'Free online tool for csv to excel tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/csv-to-excel',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Csv To Excel - Free Online Tool',
    description: 'Online tool for csv to excel. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
