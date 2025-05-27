import { Analytics } from '@/components/analytics';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MetaSettings } from '@/components/MetaSettings';
import { RadixWrapper } from '@/components/RadixWrapper';
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming Geist is preferred as per guidelines. Changed from Inter to Geist.
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MetaSettings />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Analytics />
        <Header />
        <main className="flex-1">
          <RadixWrapper>
            {children}
          </RadixWrapper>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
