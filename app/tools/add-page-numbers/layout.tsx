import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Page Numbers - Free Online Tool | YourSiteName',
  description: 'Use our free add page numbers tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Add Page Numbers', 'Free Online Tool', 'Convert', 'Edit', 'Utility','count page'],
  openGraph: {
    title: 'Add Page Numbers - Free Online Tool',
    description: 'Free online tool to add page numbers to documents.',
    url: 'https://yourdomain.com/tools/add-page-numbers',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Page Numbers - Free Online Tool',
    description: 'Easily add page numbers to files online. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
