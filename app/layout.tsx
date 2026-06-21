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
  title: "Rafael Escaleira — iOS Specialist",
  description:
    "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale. Currently leading AI adoption at Globo on Cartola FC.",
  keywords: [
    "iOS",
    "Swift",
    "SwiftUI",
    "UIKit",
    "mobile architecture",
    "Clean Architecture",
    "TDD",
    "Swift Package Manager",
    "Rafael Escaleira",
    "byescaleira",
  ],
  authors: [{ name: "Rafael E. Escaleira", url: "https://byescaleira.com" }],
  openGraph: {
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale.",
    url: "https://byescaleira.com",
    siteName: "byescaleira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale.",
    creator: "@byescaleira",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
