import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'chelizi.AI - AI Coder数字游民',
  description: 'AI Coder | 第一代AI编程个体开发者',
  icons: {
    icon: '/avatar.svg',
    shortcut: '/avatar.svg',
    apple: '/avatar.svg',
    other: {
      rel: 'mask-icon',
      url: '/avatar.svg',
      color: '#FF4D1C'
    }
  }
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
        {children}
      </body>
    </html>
  );
}
