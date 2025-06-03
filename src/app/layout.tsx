import type { Metadata } from "next";
import { Geist, Geist_Mono, Jacques_Francois_Shadow } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jacques = Jacques_Francois_Shadow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jacques',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jacques.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
