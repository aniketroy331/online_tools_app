import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie List - Free Online Tool | YourSiteName',
  description: 'Use our free movie list tool online with fast, secure, and easy access. No sign-up required.',
  keywords: ['Movie List', 'Free Online Tool', 'Convert', 'Edit', 'Utility'],
  openGraph: {
    title: 'Movie List - Free Online Tool',
    description: 'Free online tool for movie list tasks. Fast, secure and reliable.',
    url: 'https://yourdomain.com/tools/movie-list',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie List - Free Online Tool',
    description: 'Online tool for movie list. Fast and free!',
    images: ['/og-image.png'],
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
