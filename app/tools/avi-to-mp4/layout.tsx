import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avi To Mp4 - Free Online Tool | YourSiteName',
  description: 'Use our free avi to mp4 tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Avi To Mp4', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Avi To Mp4 - Free Online Tool',
    description: 'Free online tool for avi to mp4 tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/avi-to-mp4',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avi To Mp4 - Free Online Tool',
    description: 'Online tool for avi to mp4. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
