"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import CourseSidebar from "@/components/CourseSidebar";
import BottomCTA from "@/components/BottomCTA";

const VP = { once: true, margin: "-80px" as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function Dot() {
  return <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />;
}

export default function ProCoursePage() {
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
              まずは7日間 無料トライアル
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-28 md:px-8 md:pt-32">
        {/* パンくず */}
        <motion.nav {...fadeUp()} className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Proコース</span>
        </motion.nav>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* サイドバー (PC) */}
          <div className="hidden lg:block">
            <CourseSidebar />
          </div>

          {/* 右カラム */}
          <div>
            {/* ページヘッダー */}
            <motion.div {...fadeUp()} className="mb-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span className="text-sm font-semibold tracking-wide text-blue-600">
                  コース紹介
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Proコース
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                「そもそも何から手をつければいいか分からない」「勉強時間は確保しているのに成績が伸びない」。その原因は、学習の「向かっている方向」が定まっていないからです。
                <br />
                Proプランは、Standardの「圧倒的な実行環境」に、医学部生メンターによる「目標からの完全逆算ルート」を掛け合わせた最上位プランです。
              </p>
            </motion.div>

            {/* コンテンツカード */}
            <motion.div
              {...fadeUp(0.1)}
              className="space-y-12 rounded-2xl bg-white p-8 shadow-sm md:p-12"
            >
              {/* コース概要 */}
              <section>
                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                  コース概要
                </h2>
                <p className="leading-relaxed text-gray-700">
                  一般入試での志望校合格や、推薦を狙うための定期考査アップにおいて必要なのは、「いつ、何を、どのレベルまでやるべきか」を明確にすることです。本プランでは、専属メンターが現在の成績と目標から最短ルートを設計します。何をやるべきかという「迷い」を完全に消し去り、自分の実力に合わない勉強で時間を無駄にするリスクを防ぐことで、すべての努力を確実な結果へと直結させます。
                </p>
              </section>

              {/* 対象となる生徒の課題 */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
              >
                <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
                  対象となる生徒の課題
                </h2>
                <ul className="space-y-4">
                  {[
                    { label: "高校1年生", text: "難関大や推薦枠を見据えているが、今の時期に具体的に何をどれくらいやればいいのか分からず、学習のペースが掴めない生徒" },
                    { label: "高校2年生", text: "指定校推薦や一般入試に向けて勉強時間を増やしたいが、部活や学校の課題に追われ、効率的な学習ルートが分からない生徒" },
                    { label: "高校3年生・高卒生", text: "予備校のテキストや市販の参考書など、手元に教材が溢れかえっており、どれから手をつければいいか優先順位が完全に崩壊している生徒" },
                    { label: "全学年共通", text: "自分で学習計画を立てるのが苦手で、「今日はこれをやればいい」とプロに明確に指示してもらい、あとは実行するだけに集中したい生徒" },
                  ].map((item) => (
                    <motion.li
                      key={item.label}
                      variants={staggerItem}
                      className="flex gap-3"
                    >
                      <Dot />
                      <div>
                        <span className="font-bold text-gray-900">{item.label}：</span>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              {/* コア機能と詳細 */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
              >
                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                  Proプランのコア機能と詳細
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Standardプランの「スマホ遮断・常時監視・質問し放題」機能のすべてに加え、以下の戦略的指導を行います。
                </p>

                <ol className="space-y-6">
                  {[
                    {
                      title: "現役医学部生の「専属メンター」",
                      body: "難関突破の経験を持つ医学部生が、あなた専用のメンターとして1名専属で伴走します。あなたの学習計画や性格、定期考査のスケジュールまで完全に把握し、迷いなく勉強に没頭させるための「最強の司令塔」となります。",
                    },
                    {
                      title: "迷いをゼロに逆算し、「間違った数十時間」を救う、ルート設計と課題の仕分け",
                      body: "志望校合格や定期テストの目標点から逆算し、スタオプ独自のルートと、手持ちの教材から「今日やるべき教材」まで落とし込んだ生徒専用の学習ルートを設計します。何をすべきか悩む時間や、合わない教材で時間を無駄にするリスクを未然に防ぎます。",
                    },
                    {
                      title: "軌道修正を強制する、2週に1度の「戦略1on1面談」",
                      body: "2週間に1度、専属メンターとオンライン面談を実施し、計画と実際の進捗のズレを測定・修正します。「ただこなしているだけ」の状態をいち早く検知し、医学部生が直接指導することで、常に最高効率の学習状態を維持します。",
                    },
                  ].map((item, i) => (
                    <motion.li
                      key={item.title}
                      variants={staggerItem}
                      className="flex gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="mt-1 leading-relaxed text-gray-700">{item.body}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.section>

              {/* 運営・完遂方針 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                  運営・完遂方針
                </h2>
                <p className="leading-relaxed text-gray-700">
                  Proプランの目的は、生徒から「何をすべきか」という学習計画のストレスを完全に取り除き、実行だけに100%集中させることです。
                </p>
                <p className="mt-4 leading-relaxed text-gray-700">
                  一般入試の極限の競争でも、校内の熾烈な定期考査争いでも、戦略がなければ無駄な努力に終わります。専属メンターが提示する【迷いのないルート】を、Standardプランの【最高峰の学習環境】で完遂し、2週に1度の【面談】で軌道を修正する。この極めて合理的なループを回し続けることで、最短・最速で目標の成績を突き抜ける実力を養成します。
                </p>
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
