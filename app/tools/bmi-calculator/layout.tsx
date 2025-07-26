import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bmi Converter - Free Online Tool | YourSiteName',
  description: 'Use our free bmi converter tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Bmi Converter', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Bmi Converter - Free Online Tool',
    description: 'Free online tool for bmi converter tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/bmi-converter',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bmi Converter - Free Online Tool',
    description: 'Online tool for bmi converter. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
