"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CourseSidebar from "@/components/CourseSidebar";
import BottomCTA from "@/components/BottomCTA";

const VIEWPORT = { once: true, margin: "-100px" as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function UniversityCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
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

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-12 md:px-8 md:pt-32">
        {/* パンくず */}
        <motion.nav {...fadeUp()} className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">大学受験対策</span>
        </motion.nav>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* サイドバー */}
          <div className="hidden lg:block">
            <CourseSidebar />
          </div>

          {/* 右メインカラム */}
          <div>
            {/* ページヘッダー */}
            <motion.div {...fadeUp()} className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-blue-600">
                  コース詳細
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                大学受験対策
              </h1>
              <p className="mt-4 leading-relaxed text-gray-600">
                当塾の大学受験対策コースでは、志望校合格に向けた戦略的な学習計画と徹底した演習を提供しています。
              </p>
            </motion.div>

            {/* コンテンツカード */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl bg-white p-8 shadow-sm md:p-12"
            >
              {/* コース概要 */}
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  コース概要
                </h2>
                <p className="leading-relaxed text-gray-600">
                  大学受験対策コースは、国公立大学・難関私立大学への合格を目指す高校生・高卒生を対象としたコースです。基礎固めから応用演習、志望校別の対策まで、一人ひとりの学力レベルと目標に合わせたカリキュラムを提供します。オンライン自習室の集中環境を最大限に活用し、効率的かつ効果的な学習を実現します。
                </p>
              </section>

              {/* 対象学年 */}
              <motion.section {...fadeUp(0.15)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  対象学年
                </h2>
                <ul className="space-y-2">
                  {[
                    "高校1年生",
                    "高校2年生",
                    "高校3年生",
                    "高卒生（浪人生）",
                  ].map((g) => (
                    <li key={g} className="flex items-center gap-3 text-gray-600">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* 指導科目 */}
              <motion.section {...fadeUp(0.2)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  指導科目
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      subject: "国語",
                      details: "現代文（評論・小説）、古文、漢文",
                    },
                    {
                      subject: "数学",
                      details: "数学Ⅰ・A、数学Ⅱ・B、数学Ⅲ・C",
                    },
                    {
                      subject: "英語",
                      details: "リーディング、リスニング、英作文、文法",
                    },
                    {
                      subject: "理科",
                      details: "物理、化学、生物、地学",
                    },
                    {
                      subject: "社会",
                      details: "日本史、世界史、地理、政治経済、倫理",
                    },
                  ].map((s) => (
                    <div
                      key={s.subject}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <h3 className="font-bold text-gray-900">{s.subject}</h3>
                      <p className="mt-1 text-sm text-gray-500">{s.details}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* 指導方針 */}
              <motion.section {...fadeUp(0.25)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  指導方針
                </h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    当コースでは「理解→定着→実践」の3ステップを重視した指導を行います。単なる暗記に頼るのではなく、本質的な理解を深めることで、どのような問題にも対応できる応用力を養います。
                  </p>
                  <p>
                    また、オンライン自習室の相互見守りシステムを活用し、毎日の学習習慣を確実に定着させます。週次の学習計画レビューと月次の実力テストで、常に現在地を把握しながら最短ルートで合格を目指します。
                  </p>
                </div>
              </motion.section>

              {/* 合格実績 */}
              <motion.section {...fadeUp(0.3)}>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  合格実績
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900">
                      国公立大学
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        "東京大学 — 3名",
                        "京都大学 — 2名",
                        "大阪大学 — 5名",
                        "東北大学 — 4名",
                        "北海道大学 — 3名",
                        "名古屋大学 — 2名",
                        "九州大学 — 4名",
                        "その他国公立 — 28名",
                      ].map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-gray-900">
                      私立大学
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        "早稲田大学 — 8名",
                        "慶應義塾大学 — 6名",
                        "上智大学 — 5名",
                        "明治大学 — 12名",
                        "青山学院大学 — 7名",
                        "立教大学 — 9名",
                        "中央大学 — 6名",
                        "その他私立 — 45名",
                      ].map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            </motion.div>

            {/* モバイル用サイドバー */}
            <div className="mt-8 lg:hidden">
              <CourseSidebar />
            </div>

            {/* 下部CTA */}
            <BottomCTA />
          </div>
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
