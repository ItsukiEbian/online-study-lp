import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Study Ops | 難関大志望者のためのオンライン自習室",
  description:
    "家での勉強に、かつてない緊張感を。難関大志望者のための、24時間繋がるオンライン自習室「Study Ops」。スマホをカメラとして使う監視システムで、極限の集中空間を提供します。",
  openGraph: {
    title: "Study Ops | 難関大志望者のためのオンライン自習室",
    description:
      "家での勉強に、かつてない緊張感を。難関大志望者のための、24時間繋がるオンライン自習室「Study Ops」。スマホをカメラとして使う監視システムで、極限の集中空間を提供します。",
    siteName: "Study Ops",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
