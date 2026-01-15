import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Zen_Kaku_Gothic_New, Allura } from "next/font/google"
import "./globals.css"

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif-jp",
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans-jp",
})

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "麺屋-希楽夢 | 宇治田原町 - 自家製麺と無化調のWスープ",
  description:
    "麺屋 希楽夢 kiramu｜京都・宇治田原町のラーメン店。魚貝×鶏の無化調ダブルスープと北海道産小麦の自家製麺。塩・醤油・限定20食きらむ白湯、限定メニューも人気。",
  generator: "v0.app",

  // ✅ ここが重要：metadataの中に icons を入れる
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${notoSerif.variable} ${allura.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
