import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/navigation/TopNav";
import SmoothScroll from "@/components/shared/SmoothScroll";
import localFont from 'next/font/local';

const syne = localFont({
  src: [
    { path: '../../public/fonts/Syne-400.ttf', weight: '400' },
    { path: '../../public/fonts/Syne-600.ttf', weight: '600' },
    { path: '../../public/fonts/Syne-700.ttf', weight: '700' },
  ],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: "Asif's Protfolio",
  description: "Welcome!",
  icons: [{ rel: "icon", url: "/asif.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.className} antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <TopNav />
          <main className="min-h-screen">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
