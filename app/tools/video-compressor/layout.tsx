import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Compressor - Free Online Tool | YourSiteName',
  description: 'Use our free video compressor tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Video Compressor', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Video Compressor - Free Online Tool',
    description: 'Free online tool for video compressor tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/video-compressor',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Compressor - Free Online Tool',
    description: 'Online tool for video compressor. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
