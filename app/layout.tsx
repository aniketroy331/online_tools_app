import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Free Online Tools | AllTools",
    template: "%s | YourSiteName",
  },
  description:
    "Access free online tools to convert, compress, and edit files including PDFs, images, videos, and more.",
  metadataBase: new URL("https://yourdomain.com"), // Replace with actual domain when deployed
  openGraph: {
    title: "Free Online Tools",
    description:
      "All-in-one toolset for your file conversion and editing needs.",
    url: "https://yourdomain.com", // Replace with your domain
    siteName: "YourSiteName",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Tools Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools | AllTools",
    description: "Convert, compress, and edit files easily online.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
