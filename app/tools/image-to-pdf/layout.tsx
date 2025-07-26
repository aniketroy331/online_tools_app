import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image To Pdf - Free Online Tool | YourSiteName',
  description: 'Use our free image to pdf tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Image To Pdf', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Image To Pdf - Free Online Tool',
    description: 'Free online tool for image to pdf tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/image-to-pdf',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image To Pdf - Free Online Tool',
    description: 'Online tool for image to pdf. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
