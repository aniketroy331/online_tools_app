import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mp4 To Avi - Free Online Tool | YourSiteName',
  description: 'Use our free mp4 to avi tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Mp4 To Avi', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Mp4 To Avi - Free Online Tool',
    description: 'Free online tool for mp4 to avi tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/mp4-to-avi',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mp4 To Avi - Free Online Tool',
    description: 'Online tool for mp4 to avi. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
