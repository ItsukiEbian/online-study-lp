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

export default function StandardCoursePage() {
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

      {/* メインコンテンツ */}
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-28 md:px-8 md:pt-32">
        {/* パンくず */}
        <motion.nav {...fadeUp()} className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Standardコース</span>
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
                Standardコース
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                Proプランでは、Standardプランに加え、担当制の医学部生メンターが目標から逆算した専用の学習ルートを設計し、無駄と迷いのない最短距離での実力向上を強制します。
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
                  同じ授業を受けているのに差がでるのはなぜか。それは「受けっぱなし」か「自ら勉強し自分の糧にするか」の違いです。「授業のききっぱなし」状態から脱却し、手元にある良質な教材を「自らの実力」へと変換するための実行管理に特化したプランです。志望校合格・成績UPに必要なのは新しい塾、授業ではなく、目の前の1冊を完璧にやり抜くことです。本プランでは、スマホの物理遮断と現役医学部生による常時監視・質問を組み合わせることで、いつでもどこでも「絶対にサボれない最高峰の自習環境」へとアップデートし、圧倒的な演習量を確保します。
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
                    { label: "高校1年生", text: "中学までの学習習慣が通用しなくなり、スマホやSNSに時間を奪われ始めている生徒" },
                    { label: "高校2年生", text: "学校の課題や部活に追われ、自学自習の時間が「スマホの片手間」になっている生徒" },
                    { label: "高校3年生・高卒生", text: "やるべき教材は決まっているが、長時間の自習において集中力が途切れてしまう生徒・早朝や深夜に勉強する場所がない生徒" },
                    { label: "全学年共通", text: "塾や予備校・学校の授業を受けてはいるが、その復習（アウトプット）が追いついていない生徒" },
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
                  Standardプランのコア機能と詳細
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  当プランでは、教科学習の指導ではなく「学習行動そのものの徹底管理」を行います。
                </p>

                <ol className="space-y-6">
                  {[
                    {
                      title: "デジタル・ノイズの完全遮断（スマホの無力化）",
                      body: "自習開始と同時に、スマートフォンを「手元を映すカメラ」として使い、物理的にスマホに触れられない環境を提供します。（触ったら視点がぶれ、確認した監視員が注意を行います）通知やSNSの誘惑といった学習における最大の阻害要因を根本から排除します。",
                    },
                    {
                      title: "現役医学部生によるリアルタイム監視（朝5:00〜深夜2:00まで毎日開放）",
                      body: "オンライン自習室に接続し、難関校を突破した現役医学部生があなたの演習を常に見守ります。「常に見られている」という適度な緊張感が、自宅にいながらにして大手予備校の自習室以上の集中力を引き出します。",
                    },
                    {
                      title: "現役医学部生への「質問し放題」チャットサポート",
                      body: "自習中、分からない問題で手が止まるのは最大のタイムロスです。当プランでは、自習中に生じた疑問を医学部生メンターにいつでも質問可能です。（※深夜・早朝帯にいただいた質問は、稼働状況により回答が遅れる場合がありますが、必ず【24時間以内】に医学部生が論理的かつ明確な解答プロセスを返信し、あなたの学習の停滞を防ぎます。18-24時ではリアルタイムの質問が可能です）。",
                    },
                    {
                      title: "「休憩・離席」マネジメント",
                      body: "人間の集中力には限界があります。一方、休憩時間がスマホのせいで長くなってしまう。休憩時間を決めることでメリハリがつくようになります。モニター生からは「ダラダラと休む理由がなくなり、結果的に休憩時間が短縮されたけど、いつもより休憩出来て、すぐに集中に戻れるようになった」という声が多く上がっています。",
                    },
                    {
                      title: "保護者様への「学習ログ」可視化レポート",
                      body: "学習開始・終了時間、および質問内容等を可視化し、月に1度、ご報告します。「本当に部屋で勉強しているのか？」という保護者様の不安を払拭し、日々の努力をデータとしてお届けします。",
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
                  単なる「自習の推奨」ではなく、本質的な「やり抜く力（Grit）」の育成を重視しています。これは東大時代、成績上位者には総じて高い集中力とやり抜く力があった体験からスタートしました。成績上位者はみんな分かっています。成績の分かれ目は、やるか、やらないか。それだけだと。人間の意志の力は脆弱です。「今日こそはやろう」という決意は、簡単に崩れ去ります。だからこそ、当サービスでは「意志」に一切頼りません。カメラのセット、オンライン自習室への接続、医学部生の監視と質問対応。この「型」に自分をはめ込むだけで、自動的に2〜3時間の密度の高い演習が完了する。この「強制された成功体験」を毎日繰り返すことで、最終的にはどんな環境でも自分をコントロールできる本物の自律性を養います。
                </p>
              </motion.section>

              {/* モニター生が実証した「行動の変化」 */}
              <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
              >
                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                  モニター生が実証した「行動の変化」（Traction）
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  成績向上の手前にある、確実な「行動の変容」をお約束します。
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      title: "学習時間の劇的な純増",
                      text: "帰宅後の学習では1週間のスマホ使用時間が平均8時間減少し、勉強時間が平均98%増を記録しました。",
                    },
                    {
                      title: "休憩の質の向上",
                      text: "前述の通り、休憩中にデジタル機器に触れないことで脳がリセットされ、「気づけば休憩が短くなり、自ら進んで机に向かうようになった。だけど休憩はスマホ触っていたより質が高い」という声が多数報告されています。",
                    },
                    {
                      title: "大手予備校の「消化不良」からの完全脱却",
                      text: "授業の予習・復習が全く追いついていない生徒が、当システム導入により「授業を受けたその日のうちに復習を終わらせる」サイクルが定着しました。分からない箇所は深夜でも即座に医学部生に質問して解決できるため、高額な予備校の授業が最高効率で「確実な実力」へと変わって、成績向上という結果を叩き出しています。",
                    },
                  ].map((item) => (
                    <motion.li
                      key={item.title}
                      variants={staggerItem}
                      className="flex gap-3"
                    >
                      <Dot />
                      <div>
                        <span className="font-bold text-gray-900">{item.title}：</span>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              {/* 結びの文 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.6 }}
              >
                <p className="rounded-xl bg-blue-50 p-6 text-base font-medium leading-relaxed text-blue-900 md:p-8 md:text-lg">
                  これらの徹底した環境管理により、今まで「持っているだけ」だった優秀な教材・授業が、確実に皆様の偏差値を押し上げる強力な武器へと変わります。
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
