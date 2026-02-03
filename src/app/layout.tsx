import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActionButton from "@/components/ui/FloatingActionButton";

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
    default: "One Tool IT - B2B IT 자산관리 전문 솔루션",
    template: "%s | One Tool IT",
  },
  description: "기업 자산관리, 엑셀로 하고 계신가요? 비용은 줄이고 효율은 높이는 One Tool IT. 매각, 구매, 렌탈, 유지보수, 자산실사, SaaS 솔루션까지 원스톱으로 해결합니다.",
  keywords: ["IT자산관리", "B2B자산관리", "기업자산관리", "ITAM", "자산실사", "리퍼비시", "One Tool IT", "원툴IT"],
  authors: [{ name: "One Tool IT" }],
  creator: "One Tool IT",
  publisher: "One Tool IT",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://onetoolplan.com",
    siteName: "One Tool IT",
    title: "One Tool IT - B2B IT 자산관리 전문 솔루션",
    description: "비용 30% 절감, 관리시간 70% 단축. 기업 IT 자산의 전체 라이프사이클을 통합 관리하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "One Tool IT - B2B IT 자산관리 전문 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Tool IT - B2B IT 자산관리 전문 솔루션",
    description: "비용 30% 절감, 관리시간 70% 단축. 기업 IT 자산의 전체 라이프사이클을 통합 관리하세요.",
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
        <FloatingActionButton />
      </body>
    </html>
  );
}
