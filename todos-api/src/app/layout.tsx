"use client";
import type { Metadata } from "next";
import 'remixicon/fonts/remixicon.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "../css/global.scss";
import { useStoreTheme } from "@/store/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { HeroUIProvider } from '@heroui/react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isDark = useStoreTheme((st:any)=>st.isDark);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isDark?"dark":"white"}`}
      >
          <HeroUIProvider>{children}</HeroUIProvider>
        
      </body>
    </html>
  );
}
