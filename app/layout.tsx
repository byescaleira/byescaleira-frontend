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
    "iOS Specialist building native Apple products that scale. 7+ years shipping Swift, SwiftUI, and clean architecture across Globo/Cartola, fintech, and edtech.",
  keywords: [
    "iOS",
    "Swift",
    "SwiftUI",
    "iOS Developer",
    "Rafael Escaleira",
    "byescaleira",
    "Cartola FC",
    "Globo",
    "Mobile Architecture",
    "Swift Package Manager",
  ],
  authors: [{ name: "Rafael E. Escaleira", url: "https://byescaleira.com" }],
  openGraph: {
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist building native Apple products that scale. 7+ years shipping Swift, SwiftUI, and clean architecture.",
    url: "https://byescaleira.com",
    siteName: "byescaleira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist building native Apple products that scale. Swift, SwiftUI, clean architecture.",
    creator: "@byescaleira",
  },
  robots: "index, follow",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-void text-starlight">
        {children}
      </body>
    </html>
  );
}
