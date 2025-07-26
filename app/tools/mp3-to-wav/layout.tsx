import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mp3 To Wav - Free Online Tool | YourSiteName',
  description: 'Use our free mp3 to wav tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Mp3 To Wav', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Mp3 To Wav - Free Online Tool',
    description: 'Free online tool for mp3 to wav tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/mp3-to-wav',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mp3 To Wav - Free Online Tool',
    description: 'Online tool for mp3 to wav. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
