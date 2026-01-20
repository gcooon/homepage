import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "원킷(OneKit) - AI통합자산관리서비스",
    template: "%s | 원킷(OneKit)",
  },
  description: "AI 기반 기업 자산 생애주기 관리 플랫폼. 자산실사부터 폐기까지 원스톱 솔루션.",
  keywords: ["자산관리", "AI 자산관리", "통합자산관리", "기업자산관리", "원킷", "OneKit"],
  authors: [{ name: "도구모음" }],
  creator: "도구모음",
  publisher: "도구모음",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://onekit.co.kr",
    siteName: "원킷(OneKit)",
    title: "원킷(OneKit) - AI통합자산관리서비스",
    description: "AI 기반 기업 자산 생애주기 관리 플랫폼",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "원킷(OneKit) - AI통합자산관리서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "원킷(OneKit) - AI통합자산관리서비스",
    description: "AI 기반 기업 자산 생애주기 관리 플랫폼",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
