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

export default function EnglishCoursePage() {
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
              className="whitespace-nowrap border border-slate-900 bg-slate-900 px-4 py-2.5 text-xs font-medium tracking-wide text-white transition-colors hover:bg-slate-800 md:px-5 md:text-sm"
            >
              まずは7日間 無料トライアル
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
          <span className="text-slate-900">英語4技能 / 英検対策</span>
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
                英語4技能 / 英検対策
              </h1>
              <p className="mt-4 font-light leading-loose text-slate-700">
                Reading・Listening・Writing・Speakingの4技能をバランスよく鍛え、英検をはじめとする各種英語資格の取得を目指すコースです。
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
                  英語4技能対策コースでは、英検（実用英語技能検定）の準2級〜1級を中心に、TOEIC・TOEFLなどの各種英語試験にも対応したカリキュラムを提供しています。オンライン自習室の集中環境を活用し、リスニングやスピーキングの反復練習、ライティングの添削対策も効率的に進めます。
                </p>
              </section>

              {/* 対象学年 */}
              <motion.section {...fadeUp(0.15)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  対象学年
                </h2>
                <ul className="space-y-2">
                  {[
                    "中学1年生〜中学3年生",
                    "高校1年生〜高校3年生",
                    "高卒生・社会人",
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

              {/* 指導内容 */}
              <motion.section {...fadeUp(0.2)} className="mb-10">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  指導内容
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      subject: "Reading",
                      details: "長文読解、速読トレーニング、語彙力強化",
                    },
                    {
                      subject: "Listening",
                      details: "シャドーイング、ディクテーション、音声把握",
                    },
                    {
                      subject: "Writing",
                      details: "英作文、エッセイライティング、添削指導",
                    },
                    {
                      subject: "Speaking",
                      details: "面接対策、発音矯正、プレゼン演習",
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
                    英語4技能をバランスよく伸ばすためには、日々のインプットとアウトプットの両立が欠かせません。当コースでは、オンライン自習室を活用した毎日の集中学習に加え、週ごとの目標設定と振り返りを通じて着実な成長をサポートします。
                  </p>
                  <p>
                    英検の級別に最適化されたカリキュラムと、個別の弱点分析に基づくオーダーメイドの学習プランで、最短合格を目指します。
                  </p>
                </div>
              </motion.section>

              {/* 対応資格・検定 */}
              <motion.section {...fadeUp(0.3)}>
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  対応資格・検定
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-bold text-slate-900">英検</h3>
                    <ul className="space-y-2 text-sm font-light text-slate-700">
                      {[
                        "英検5級〜1級",
                        "英検S-CBT対策",
                        "二次面接（スピーキング）対策",
                      ].map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-slate-900">その他</h3>
                    <ul className="space-y-2 text-sm font-light text-slate-700">
                      {[
                        "TOEIC L&R / S&W",
                        "TOEFL iBT",
                        "GTEC / TEAP",
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
          </nav>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Study Ops. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
