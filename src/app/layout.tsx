import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <div className="bg-[#181818] text-[#fff] max-w-[250px] h-screen overflow-y-auto md:min-w-[240px]">
            {/* SideBar */}
            <Sidebar />
          </div>

          <div className=" relative flex-1 bg-[#212121] h-screen overflow-hidden text-[#fff]">
            {/* Header */}
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
