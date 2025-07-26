import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wav To Mp3 - Free Online Tool | YourSiteName',
  description: 'Use our free wav to mp3 tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Wav To Mp3', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Wav To Mp3 - Free Online Tool',
    description: 'Free online tool for wav to mp3 tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/wav-to-mp3',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wav To Mp3 - Free Online Tool',
    description: 'Online tool for wav to mp3. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
