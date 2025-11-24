import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/navigation/TopNav";
import SmoothScroll from "@/components/shared/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
