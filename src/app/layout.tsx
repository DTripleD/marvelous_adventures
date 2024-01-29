import type { Metadata } from "next";

import "./globals.css";

import Logo from "./components/logo";
import Footer from "./components/footer";
import Header from "./components/header";

import { Poppins } from "next/font/google";

const openSans = Poppins({
  subsets: ["latin"],
  // display: "swap",
  display: "block",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="h-screen flex flex-col justify-between">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
