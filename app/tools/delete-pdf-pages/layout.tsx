import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Pdf Pages - Free Online Tool | YourSiteName',
  description: 'Use our free delete pdf pages tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Delete Pdf Pages', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Delete Pdf Pages - Free Online Tool',
    description: 'Free online tool for delete pdf pages tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/delete-pdf-pages',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Pdf Pages - Free Online Tool',
    description: 'Online tool for delete pdf pages. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
