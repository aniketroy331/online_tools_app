import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Json To Csv - Free Online Tool | YourSiteName',
  description: 'Use our free json to csv tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Json To Csv', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Json To Csv - Free Online Tool',
    description: 'Free online tool for json to csv tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/json-to-csv',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Json To Csv - Free Online Tool',
    description: 'Online tool for json to csv. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
