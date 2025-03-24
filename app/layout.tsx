import type { Metadata } from 'next';

import { openSans } from '@/components/extension-ui/fonts';

import Header from '@/components/extension-ui/header/header';
import Footer from '@/components/extension-ui/footer/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adventure Belarus',
  description: 'Empty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <Header />
        <main className="flex flex-grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
