import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unit Converter - Free Online Tool | YourSiteName',
  description: 'Use our free unit converter tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Unit Converter', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Unit Converter - Free Online Tool',
    description: 'Free online tool for unit converter tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/unit-converter',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Converter - Free Online Tool',
    description: 'Online tool for unit converter. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
