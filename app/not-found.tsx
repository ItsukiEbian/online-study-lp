"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BottomCTA from "@/components/BottomCTA";

const VP = { once: true, margin: "-80px" as const };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ヘッダー */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Study Ops
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://app.studyops.jp/dashboard"
              className="hidden text-sm font-bold text-gray-600 transition-colors hover:text-blue-600 md:inline"
            >
              ログイン
            </a>
            <Link
              href="/apply"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              今すぐ無料で体験
            </Link>
          </div>
        </div>
      </header>

      {/* 404 メインコンテンツ */}
      <main className="pt-16">
        <motion.div
          className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
            404 Not Found
          </h1>
          <p className="leading-relaxed text-gray-600">
            お探しのページはアクセスできない状況にあるか、移動または削除された可能性があり、
            <br />
            見つけられませんでした。
            <br />
            URL、ファイル名にタイプミスがないかご確認ください。
          </p>
          <Link
            href="/"
            className="mt-8 text-gray-600 underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            ホームへ戻る
          </Link>
        </motion.div>

        {/* 下部CTA */}
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <BottomCTA />
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 transition-colors hover:text-gray-900">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-500 transition-colors hover:text-gray-900">
              利用規約
            </Link>
            <Link href="/disclaimer" className="text-gray-500 transition-colors hover:text-gray-900">
              免責事項
            </Link>
          </nav>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Study Ops. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
