import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/sidebar/AppSideBar";
import { DockBottom } from "@/components/shared/Dock";
import { SidebarProvider } from "@/components/dynami";

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
    <html lang="en">
      <body className={`${syne.className} antialiased`}>
        <SidebarProvider>
          <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 w-full pb-16">
              <AppSidebar />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </SidebarProvider>

        {/* DockDemo fixed at the bottom of the viewport for all devices */}
        <div className="fixed sm:hidden bottom-2 left-0 w-full z-50 px-2">
          <DockBottom />
        </div>
      </body>
    </html>
  );
}
