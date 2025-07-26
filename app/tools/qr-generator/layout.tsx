import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qr Code Generator - Free Online Tool | YourSiteName',
  description: 'Use our free qr code generator tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Qr Code Generator', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Qr Code Generator - Free Online Tool',
    description: 'Free online tool for qr code generator tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/qr-code-generator',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qr Code Generator - Free Online Tool',
    description: 'Online tool for qr code generator. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
