import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Html To Markdown - Free Online Tool | YourSiteName',
  description: 'Use our free html to markdown tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Html To Markdown', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Html To Markdown - Free Online Tool',
    description: 'Free online tool for html to markdown tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/html-to-markdown',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Html To Markdown - Free Online Tool',
    description: 'Online tool for html to markdown. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
