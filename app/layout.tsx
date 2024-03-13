import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Sitename',
    default: "Sample Site",
  },
  description: "The best place for the best things",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Robin', url: 'https://nextjs.org' }],
  creator: 'Robin',
  publisher: 'Robin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />

        {/* Include the Header component */}
        {/* Layout UI */}
        {children}
        {/*  strategy="afterInteractive"  */}
        </body>
    </html>
  );
}
