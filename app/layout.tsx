import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import SideNav from "./components/side-nav";
import MarginWidthWrapper from "./components/margin-width-wrapper";
import Header from "./components/header";
import HeaderMobile from "./components/header-mobile";
import PageWrapper from "./components/page-wrapper";

const inter = Inter({ subsets: ["latin"] });
let title = "Color Pallets";
let description =
  "ColorPallets - A vibrant palette of hex codes for web developers to effortlessly elevate their digital creations.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>
        <Toaster />
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
