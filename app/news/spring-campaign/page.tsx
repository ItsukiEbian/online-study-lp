"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function SpringCampaignPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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
              className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 md:px-5 md:text-sm"
            >
              まずは7日間 無料トライアル
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 md:pt-32">
        {/* セクションラベル */}
        <motion.div {...fadeUp()} className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-blue-600">
              新着情報・キャンペーン
            </span>
          </div>
        </motion.div>

        {/* 大見出し */}
        <motion.h1
          {...fadeUp(0.05)}
          className="text-center text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
        >
          新春の入会キャンペーン実施中！
        </motion.h1>

        {/* メタ情報 */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500"
        >
          <time>2026/02/24</time>
          <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-600">
            キャンペーン
          </span>
        </motion.div>

        {/* メイン画像 */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80)",
          }}
        />

        {/* 本文 */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 space-y-6 text-base leading-relaxed text-gray-800"
        >
          {/* リード文 */}
          <p>
            いよいよ学年末。1年間の総決算である定期テストや、新学年に向けて学習のギアを上げる極めて重要な時期ですね。「今の学年のやり残しを完璧に消化しておきたい」「春休みを最大限に活用して、ライバルに差をつけたい」難関大や医学部を目指すあなたなら、すでに高い目標を見据えているはずです。
          </p>
          <p>
            しかし、テスト休みや春休みに入り、学校や塾の「授業」というペースメーカーが外れた途端、膨大な自習時間を前にして学習リズムが崩れてしまう。これは、どれほど優秀な生徒であっても直面する「孤独な自学自習の限界」です。
          </p>
          <p>
            「分からない問題で手が止まり、気づけば時間を浪費している…」「やる気はあるのに、スマホのせいでどうしても集中力が切れてしまう…」「ライバルたちが今、どのレベルの演習をしているのか見えず不安になる…」
          </p>
          <p>
            Study Opsは、そんな難関大志望者のために用意された「最高峰の学習環境」と「トップ層だけが集う選抜環境」を提供するオンライン・アリーナです。
          </p>

          {/* 3つの理由 */}
          <h2 className="!mt-12 text-xl font-bold text-gray-900 md:text-2xl">
            Study Opsが、難関大志望者に選ばれる3つの理由
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900">
                1. 現役医学部生への質問・監視環境
              </h3>
              <p className="mt-1">
                自習中に生じた疑問で1時間悩むのは、難関大受験において致命的なタイムロスです。Study Opsでは、難関を突破した現役医学部生が常にオンラインに待機。分からない問題の解法や学習ルートの相談など、難関校を突破した先輩の「思考プロセス」をいつでも引き出せる他では得られない環境を提供します。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                2. 難関大を目指す学生のみが集う学習環境
              </h3>
              <p className="mt-1">
                自習室にログインすると、そこにはあなたと同じようにライバルたちが黙々とペンを動かしています。「周りがまだやっているなら、自分もここで終わるわけにはいかない」。このハイレベルなコミュニティ特有の強烈な「同調圧力」が、あなたの集中力を極限まで引き上げます。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                3. 深夜の延長戦も、早朝の朝活も。スマホを遮断する「学習環境」
              </h3>
              <p className="mt-1">
                「意志の力」でスマホのアルゴリズムに勝つことは不可能です。当システムは早朝から深夜まで稼働し、あなたの最も集中できるピークタイムを逃しません。自習開始と同時にスマホをカメラとして固定させ、物理的に触れない環境を構築。時間帯の言い訳やデジタルノイズを完全に排除し、いつでも自宅を「絶対にサボれない最高の自習室」へと変えます。
              </p>
            </div>
          </div>

          {/* キャンペーン詳細 */}
          <div className="!mt-12 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 md:p-8">
            <p className="text-center text-lg font-bold text-gray-900">
              🔥 学年末・新学年準備キャンペーン 🔥
            </p>
            <p className="mt-4">
              新学年を迎える前に、難関大合格・成績UPのためのサービスをより早くお使いいただくため、特別オファーをご用意しました。
            </p>
            <ul className="mt-6 space-y-5">
              <li>
                <span className="font-bold text-gray-900">
                  【特典1】1週間の無料体験
                </span>
                <br />
                まずは1週間、医学部生への質問環境と今までになく勉強ができる学習環境を体験してみてください
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  【特典2】最初の2ヶ月間のご利用料金が「半額」！
                </span>
                <br />
                無料体験後、本登録へ進まれた【先着5名様】に限り、Standard/Pro両プランの月額料金を2ヶ月間半額でご提供します。
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  【特典3】入会金2万円→0円！
                </span>
                <br />
                先着15名に限り、入会金が今なら無料！
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  キャンペーン期間：2026年2月21日〜3月15日まで
                </span>
                <br />
                ※本サービスは学習意欲を持つ生徒を対象としております。よって学習意欲が全く見られない場合、面接時に入会をお断りさせていただく場合があります。また、定員15名に達し次第、予告なく募集を終了いたしますので、お早めにお申し込みください。
              </li>
            </ul>
          </div>

          {/* 結びの文 */}
          <h2 className="!mt-12 text-xl font-bold text-gray-900 md:text-2xl">
            「環境と情報」への投資が、合否を分ける
          </h2>
          <p>
            成績UP、難関大合格に必要なのは、根性論ではありません。ライバルから受ける「刺激」と、迷いをなくす「戦略」、そしてそれに没頭できる「環境」です。この学年末、膨大な時間を無駄にする前に、私たちが提供する最強の学習インフラを手に入れてください。今年度こそ、妥協しない頑張る自分に出会ってみませんか？
          </p>
          <p>
            まずは1週間の無料体験から、この圧倒的な学習環境を体感してください！
          </p>
        </motion.div>

        {/* ホームへ戻る */}
        <motion.div {...fadeUp(0.25)} className="mt-14 text-center">
          <Link
            href="/"
            className="text-gray-600 underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            ホームへ戻る
          </Link>
        </motion.div>
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
