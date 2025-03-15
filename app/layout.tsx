import type { Metadata } from "next";
import { rethinkSans } from "@/components/extension-ui/fonts";
import Header from "@/components/extension-ui/header/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Adventure Belarus",
  description: "Empty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
