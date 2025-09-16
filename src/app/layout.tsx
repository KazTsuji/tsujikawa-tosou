// layout.tsx
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

// SEO対策用のメタデータをここに記述
export const metadata: Metadata = {
  title: '泉大津市の外壁塗装・屋根塗装は辻川塗装｜『まるで新築!!』の仕上がり',
  description: '大阪府泉大津市で創業15年の塗装専門業者。大手ハウスメーカーで培った確かな技術と地域密着のサービスで、お客様の大切な建物を美しく保護します。無料見積もり実施中！',
  keywords: ['外壁塗装 泉大津', '屋根塗装 泉大津', '塗装 泉大津', '辻川塗装', '大阪府 塗装', '地域密着 塗装'],
  openGraph: {
    title: '泉大津市の外壁塗装・屋根塗装は辻川塗装｜『まるで新築!!』の仕上がり',
    description: '大阪府泉大津市で創業15年の塗装専門業者。大手ハウスメーカーで培った確かな技術と地域密着のサービスで、お客様の大切な建物を美しく保護します。',
    url: 'https://tsujikawa-tosou.vercel.app',
    siteName: '辻川塗装',
    /*
    images: [
      {
        url: 'https://www.your-website.com/ogp-image.jpg',
        width: 1200,
        height: 630,
        alt: '辻川塗装の外壁塗装・屋根塗装',
      },
    ],*/
    locale: 'ja_JP',
    type: 'website',
  },
  verification: {
    google: '<meta name="google-site-verification" content="2YohHhXh5CmVA5a1aJfM-RH9twAYWySG5RJKt8RF1U8" />', // コピーした文字列に置き換える
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}