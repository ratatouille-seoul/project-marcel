import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../styles/opening.css";
import "../styles/door.css";
import "../styles/welcome.css";
import "../styles/menu.css";
import "../styles/question.css";
import "../styles/result.css";
import "../styles/ending.css";

export const metadata: Metadata = {
  title: "오늘의 프랑스 요리 — Ratatouille in Séoul",
  description:
    "마르셀의 레스토랑에 오신 것을 환영해요. 간단한 심리 테스트로 오늘의 기분에 어울리는 프랑스 요리와 와인, 음악을 추천해 드립니다.",
  openGraph: {
    title: "오늘의 프랑스 요리 — Ratatouille in Séoul",
    description: "오늘의 기분에 어울리는 프랑스 요리를 마르셀이 찾아드려요.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171d29",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Gowun+Batang:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
