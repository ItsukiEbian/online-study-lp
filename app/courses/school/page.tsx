"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CourseSidebar from "@/components/CourseSidebar";
import BottomCTA from "@/components/BottomCTA";

const VIEWPORT = { once: true, margin: "-100px" as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function SchoolCoursePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="text-lg font-bold tracking-wide text-slate-900">
            Study Ops
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://app.studyops.jp/dashboard"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-amber-700 md:inline"
            >
              ログイン
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-[#C5A059]/60 bg-slate-900 px-4 py-2.5 text-xs font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-[0.98] md:px-5 md:text-sm"
            >
              まずは7日間 無料トライアル
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-12 md:px-8 md:pt-32">
        {/* パンくず */}
        <motion.nav {...fadeUp()} className="mb-6 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-amber-700">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">中学・高校受験</span>
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
                <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                <span className="text-sm font-medium tracking-widest text-amber-700">
                  コース詳細
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
                中学・高校受験
              </h1>
              <p className="mt-4 font-light leading-loose text-slate-700">
                中学受験・高校受験に必要な基礎学力の定着から志望校対策まで、段階的にサポートするコースです。
              </p>
            </motion.div>

            {/* コンテンツカード */}
            <motion.div
              {...fadeUp(0.1)}
              className="border border-slate-200 bg-white p-10 md:p-14"
            >
              {/* コース概要 */}
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  コース概要
                </h2>
                <p className="font-light leading-loose text-slate-700">
                  中学・高校受験コースは、小学生・中学生を対象に、志望校合格に向けた学習習慣づくりと実力養成をサポートします。オンライン自習室の見守り環境を活用し、自宅でも塾のような緊張感を保ちながら日々の学習に取り組めます。定期テスト対策から入試本番まで、一貫したカリキュラムで合格へ導きます。
                </p>
              </section>

              {/* 対象学年 */}
              <motion.section {...fadeUp(0.15)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  対象学年
                </h2>
                <ul className="space-y-2">
                  {[
                    "小学4年生〜小学6年生（中学受験）",
                    "中学1年生〜中学3年生（高校受験）",
                  ].map((g) => (
                    <li key={g} className="flex items-center gap-3 font-light text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
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
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  指導科目
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      subject: "国語",
                      details: "読解力養成、文法、作文・記述対策",
                    },
                    {
                      subject: "算数 / 数学",
                      details: "計算力強化、図形、関数、証明問題",
                    },
                    {
                      subject: "英語",
                      details: "英文法基礎、リスニング、長文読解入門",
                    },
                    {
                      subject: "理科",
                      details: "実験・観察の理解、計算問題演習",
                    },
                    {
                      subject: "社会",
                      details: "地理・歴史・公民の基礎固め、資料問題",
                    },
                  ].map((s) => (
                    <div
                      key={s.subject}
                      className="border border-slate-200 bg-stone-50 p-5"
                    >
                      <h3 className="font-bold text-slate-900">{s.subject}</h3>
                      <p className="mt-1 text-sm font-light text-slate-700">{s.details}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* 指導方針 */}
              <motion.section {...fadeUp(0.25)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  指導方針
                </h2>
                <div className="space-y-3 font-light leading-loose text-slate-700">
                  <p>
                    中学・高校受験では「毎日コツコツ」の積み重ねが合否を分けます。当コースでは、オンライン自習室を活用した日々の学習習慣の確立を最も重視しています。
                  </p>
                  <p>
                    保護者の方への定期的な学習レポートも提供し、お子さまの学習状況を家庭でも把握できる体制を整えています。安心してお任せいただけるサポート体制で、志望校合格までしっかり伴走します。
                  </p>
                </div>
              </motion.section>

              {/* 合格実績 */}
              <motion.section {...fadeUp(0.3)}>
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  合格実績
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-bold text-slate-900">
                      中学受験
                    </h3>
                    <ul className="space-y-2 text-sm font-light text-slate-700">
                      {[
                        "開成中学 — 1名",
                        "麻布中学 — 2名",
                        "桜蔭中学 — 1名",
                        "渋谷教育学園渋谷 — 3名",
                        "その他私立中学 — 18名",
                      ].map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-slate-900">
                      高校受験
                    </h3>
                    <ul className="space-y-2 text-sm font-light text-slate-700">
                      {[
                        "都立日比谷高校 — 2名",
                        "都立西高校 — 3名",
                        "県立浦和高校 — 2名",
                        "早慶附属高校 — 5名",
                        "MARCH附属高校 — 8名",
                        "その他公立・私立 — 32名",
                      ].map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
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
      <footer className="border-t border-slate-200 bg-stone-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 transition-colors hover:text-slate-800">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-slate-500 transition-colors hover:text-slate-800">
              利用規約
            </Link>
            <Link href="/disclaimer" className="text-slate-500 transition-colors hover:text-slate-800">
              免責事項
            </Link>
            <Link href="/tokushoho" className="text-slate-500 transition-colors hover:text-slate-800">
              特定商取引法に基づく表記
            </Link>
          </nav>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Study Ops. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
