import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Png To Jpg - Free Online Tool | YourSiteName',
  description: 'Use our free png to jpg tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Png To Jpg', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Png To Jpg - Free Online Tool',
    description: 'Free online tool for png to jpg tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/png-to-jpg',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Png To Jpg - Free Online Tool',
    description: 'Online tool for png to jpg. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
