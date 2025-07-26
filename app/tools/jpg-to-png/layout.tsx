import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jpg To Png - Free Online Tool | YourSiteName',
  description: 'Use our free jpg to png tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Jpg To Png', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Jpg To Png - Free Online Tool',
    description: 'Free online tool for jpg to png tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/jpg-to-png',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jpg To Png - Free Online Tool',
    description: 'Online tool for jpg to png. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
