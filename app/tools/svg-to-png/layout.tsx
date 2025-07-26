import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Svg To Png - Free Online Tool | YourSiteName',
  description: 'Use our free svg to png tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Svg To Png', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Svg To Png - Free Online Tool',
    description: 'Free online tool for svg to png tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/svg-to-png',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Svg To Png - Free Online Tool',
    description: 'Online tool for svg to png. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
