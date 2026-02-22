"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Minus, Award, Menu, X, LogIn } from "lucide-react";
import DocumentRequestDrawer from "@/components/DocumentRequestDrawer";

/* ────────────────────────────
   アニメーション定義
   ──────────────────────────── */

const VP = { once: true, margin: "-80px" as const };

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.7, ease: "easeOut" },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ────────────────────────────
   小さいUI部品
   ──────────────────────────── */

function Dot() {
  return <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />;
}

function SectionLabel({
  children,
  center,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}
    >
      <Dot />
      <span className="text-sm font-semibold tracking-wide text-blue-600">
        {children}
      </span>
    </div>
  );
}

/* ────────────────────────────
   FAQ アコーディオン
   ──────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-5 md:p-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 text-left"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
        <span className="text-base font-semibold text-gray-900 md:text-lg">
          {q}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-4 pl-12 leading-relaxed text-gray-600">{a}</p>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────
   カルーセル
   ──────────────────────────── */

function TestimonialsCarousel() {
  const total = testimonials.length;
  const [pos, setPos] = useState(total);
  const [skipAnim, setSkipAnim] = useState(false);
  const animatingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ container: 0, card: 0, showTwo: false });

  const GAP = 24;

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      let cardW: number;
      let showTwo: boolean;

      if (w >= 768) {
        showTwo = true;
        cardW = Math.min((w * 0.85 - GAP) / 2, 460);
      } else {
        showTwo = false;
        cardW = Math.min(w * 0.8, 340);
      }

      setDims({ container: w, card: cardW, showTwo });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const cloned = [...testimonials, ...testimonials, ...testimonials];
  const step = dims.card + GAP;
  const visibleW = dims.showTwo ? 2 * dims.card + GAP : dims.card;
  const centerOffset = (dims.container - visibleW) / 2;
  const tx = centerOffset - pos * step;

  const navigate = (dir: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setPos((p) => p + dir);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== "transform") return;
    let corrected = pos;
    if (pos < total) corrected = pos + total;
    else if (pos >= total * 2) corrected = pos - total;
    if (corrected !== pos) {
      setSkipAnim(true);
      setPos(corrected);
    } else {
      animatingRef.current = false;
    }
  };

  useEffect(() => {
    if (skipAnim) {
      const id = requestAnimationFrame(() => {
        setSkipAnim(false);
        animatingRef.current = false;
      });
      return () => cancelAnimationFrame(id);
    }
  }, [skipAnim]);

  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-100";

  return (
    <section id="voices" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div {...fadeUp}>
          <SectionLabel>利用者の声</SectionLabel>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            利用者の目標達成に寄り添い、未来へ導く
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${tx}px)`,
                transition: skipAnim
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cloned.map((t, i) => (
                <div
                  key={`t-${i}`}
                  className="flex-shrink-0"
                  style={{ width: `${dims.card}px` }}
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 shadow-sm md:p-8">
                    <div>
                      <div className="flex items-center gap-2">
                        <Dot />
                        <span className="text-sm font-bold text-blue-600">
                          {t.badge}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900">
                        &ldquo;{t.summary}&rdquo;
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        {t.body}
                      </p>
                    </div>
                    <p className="mt-6 text-right text-sm text-gray-500">
                      {t.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={arrow}
            aria-label="前へ"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>
          <button
            type="button"
            onClick={() => navigate(1)}
            className={arrow}
            aria-label="次へ"
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────
   データ
   ──────────────────────────── */

const navLinks = [
  { label: "コース紹介", href: "#courses" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "生徒さんの声", href: "#voices" },
  { label: "よくある質問", href: "#faq" },
  { label: "お知らせ", href: "#news" },
];

const courses = [
  { label: "Standardコース", href: "/courses/standard" },
  { label: "Proコース", href: "/courses/pro" },
];

const strengths = [
  {
    title: "スマホの誘惑を強制シャットアウト",
    desc: "カメラONの環境では、スマホに手を伸ばす行為が自然と抑制されます。誰かに見られている意識が、あなたの集中力を守ります。",
  },
  {
    title: "24時間いつでも、世界中の仲間と",
    desc: "早朝でも深夜でも、世界中で頑張っている仲間がいます。時間を選ばず、あなたのペースで入室できます。",
  },
  {
    title: "程よい緊張感を生む、相互見守りシステム",
    desc: "参加者同士がカメラを通じて互いの姿を確認。図書館や自習室のような心地よい緊張感がオンラインで実現します。",
  },
];

const testimonials = [
  {
    badge: "大学受験生",
    summary: "偏差値が3ヶ月で12もアップしました",
    body: "自宅だとどうしてもスマホを触ってしまっていたのですが、オンライン自習室に入ってからは驚くほど集中できるようになりました。周りの人が頑張っている姿が見えるのが大きいです。",
    name: "高校3年生 佐藤さん",
  },
  {
    badge: "社会人・資格勉強",
    summary: "仕事の後でも毎日2時間勉強できるように",
    body: "仕事終わりに一人で勉強するのは本当につらかったのですが、同じ時間に頑張っている人がいると思うとモチベーションが続きます。おかげで資格試験に一発合格できました。",
    name: "会社員 田中さん（30代）",
  },
  {
    badge: "中学生の保護者",
    summary: "子どもが自分から机に向かうようになりました",
    body: "「勉強しなさい」と言わなくても、自分から自習室にログインして勉強するようになりました。見守りの仕組みがあるので、親としても安心です。",
    name: "中学2年生の保護者 山田さん",
  },
  {
    badge: "高校受験生",
    summary: "志望校にE判定から逆転合格できました",
    body: "塾の自習室が閉まった後も、オンライン自習室で遅くまで勉強できました。毎日カメラの向こうで頑張っている仲間がいて、絶対に負けたくないという気持ちで乗り越えられました。",
    name: "中学3年生 鈴木さん",
  },
  {
    badge: "英検対策",
    summary: "英検準1級に高校2年で合格しました",
    body: "リスニングやライティングの自主学習は一人だとサボりがちでしたが、自習室に入ると自然とスイッチが入ります。毎日2時間の英語学習が習慣になり、目標を前倒しで達成できました。",
    name: "高校2年生 高橋さん",
  },
  {
    badge: "医学部志望",
    summary: "1日12時間の学習ペースを維持できた",
    body: "浪人中で孤独になりがちでしたが、朝から晩まで自習室で仲間と一緒に勉強できたことが精神的に大きな支えでした。長時間の集中を保つにはこの環境が不可欠でした。",
    name: "高卒生 中村さん",
  },
];

const faqs = [
  { q: "入学の時期は決まっていますか？", a: "いいえ、入学時期は決まっておりません。月の途中からでもいつでもご入会いただけます。お申し込み後、最短で翌日からご利用を開始できます。" },
  { q: "無料体験授業はありますか？", a: "はい、すべてのコースで無料体験を実施しております。実際の自習室環境や質問対応を体験していただいたうえで、ご入会をご検討いただけます。" },
  { q: "授業料の支払い方法は？", a: "クレジットカード（VISA / Mastercard / JCB）および銀行振込に対応しております。月額制のため、毎月自動でお支払いいただく形となります。" },
  { q: "兄弟で入学する場合、割引はありますか？", a: "はい、兄弟姉妹割引をご用意しております。2人目以降は月額料金から10%割引となります。詳しくはお問い合わせください。" },
  { q: "途中退塾は可能ですか？", a: "はい、いつでも退塾いただけます。退塾届をご提出いただいた月の末日まで利用可能で、翌月以降の料金は発生しません。" },
];

const newsItems = [
  {
    title: "新春の入会キャンペーン実施中！",
    date: "2024.07.08",
    category: "キャンペーン",
    href: "/news/spring-campaign",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
  },
];

const ctaSubLinks = [
  { label: "資料請求する", href: "#", isDrawer: true },
  { label: "コース紹介", href: "/courses/university", isDrawer: false },
  { label: "LINE友だち登録", href: "https://line.me/R/ti/p/@361nbhjg", isDrawer: false, external: true },
  { label: "キャンペーン", href: "#", isDrawer: false },
];

/* ────────────────────────────
   メインページ
   ──────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== ① ヘッダー ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Study Ops
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://app.studyops.jp/dashboard"
              className="text-sm font-bold text-gray-600 transition-colors hover:text-blue-600"
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

          {/* ハンバーガー（スマホ） */}
          <button
            type="button"
            className="flex items-center justify-center md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
        </div>
      </header>

      {/* ===== モバイルメニュー（フルスクリーン） ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* 閉じるボタン */}
            <div className="flex h-16 items-center justify-end px-4 md:px-8">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="メニューを閉じる"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
            </div>

            {/* メニュー本体 */}
            <nav className="px-8 pt-4">
              <ul className="space-y-8">
                <li>
                  <a
                    href="#"
                    onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    ホーム
                  </a>
                </li>
                <li>
                  <span className="text-2xl font-bold text-gray-900">コース紹介</span>
                  <div className="mt-4 flex gap-6">
                    <Link
                      href="/courses/standard"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 text-base text-gray-700"
                    >
                      Standardコース
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
                      </span>
                    </Link>
                    <Link
                      href="/courses/pro"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 text-base text-gray-700"
                    >
                      Proコース
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <a
                    href="#voices"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-gray-900"
                  >
                    生徒さんの声
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-gray-900"
                  >
                    よくある質問
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-gray-900"
                  >
                    お知らせ・キャンペーン
                  </a>
                </li>
              </ul>

              <div className="mt-12 flex flex-col gap-3">
                <Link
                  href="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-blue-600 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  無料体験に申し込む
                </Link>
                <a
                  href="https://app.studyops.jp/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-6 py-3.5 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <LogIn className="h-4 w-4" />
                  ログイン
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== ② ヒーロー ===== */}
      <section className="bg-white pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
          {/* 左: テキストエリア */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600">
              <Award className="h-3.5 w-3.5" />
              今だけ入学キャンペーン実施中！
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              君の鞄にはもう
              <br />
              <span className="inline-block whitespace-nowrap">「正解」が入ってる。</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              「授業をしない」だけではまだ甘い。
              <br />
              魔法の授業も参考書も存在しない。目指す高みへ到達する唯一の方法は、君の鞄の中にある「一冊」を、君の「実力」へと変えることだ。
              <br />
              〜偏差値58以上の中高に通う生徒限定〜
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.a
                href="/apply"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                無料体験に申し込む
              </motion.a>
              <motion.button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                資料請求する
              </motion.button>
            </div>
          </motion.div>

          {/* 右: 画像エリア */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-first lg:order-last"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl rounded-bl-[80px]">
              <Image
                src="/HP_Women.jpg"
                alt="スマホをスタンドに立てて勉強する学生"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ③ コース紹介 ===== */}
      <section id="courses" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* 上部: 見出し＋本文の2カラム */}
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            {/* 左: 見出し */}
            <motion.div {...fadeUp}>
              <SectionLabel>コース紹介</SectionLabel>
              <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl lg:text-4xl">
                最高の環境で勉強を
                <br />
                やり抜く独自のシステム
                <br />
                質問対応×オンライン自習室
              </h2>
            </motion.div>

            {/* 右: 本文 */}
            <motion.div
              {...fadeUp}
              className="space-y-4 text-base leading-relaxed text-gray-700"
            >
              <p>
                塾や進学校のハイレベルな授業を受けている。けれど、多くの優秀な生徒が伸び悩む最大の原因は、授業ではなく、「自学自習での定着（演習）」が圧倒的に足りないからです。
              </p>
              <p>
                そんな課題を解決するための、演習特化型オンライン自習室です。いつでもどこでも、名門予備校の自習室以上の集中環境と、家庭教師以上の質問対応を同時に提供します。スマホを独自の仕組みで使えないようにし、医学部生の監視が入ることで、自分一人では到達できなかった密度で学習を完遂。毎日の「やり抜いた」という事実が、あなたを志望校合格へと必ず近づけます。
              </p>
              <p>
                Proプランでは、難関突破の経験を持つ医学部生メンターがスタオプ独自のルートからあなた専用の学習ルートを設計し、2週に1度の1on1面談で計画のズレを冷徹に修正します。何をやればいいか分からないという悩みに医学部生のノウハウを用いることで、日々の演習を確実な「成績向上」と「合格」へと繋げます。新しい授業ではなく、手元や本屋にある教材を「いつ、どの順序で、どこまでやるか」という明確なロードマップこそ、志望校合格、成績向上に必要です。
              </p>
            </motion.div>
          </div>

          {/* コースボタン */}
          <motion.div
            className="mt-12 grid gap-3 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {courses.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                variants={itemVariants}
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
              >
                {c.label}
                <ChevronRight className="h-5 w-5 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ===== ④ 選ばれる理由 ===== */}
      <section id="reasons" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionLabel center>選ばれる理由</SectionLabel>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              オンライン自習室が選ばれる3つの強み
            </h2>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/10] w-full bg-gray-200" />
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ⑤ 利用者の声 ===== */}
      <TestimonialsCarousel />

      {/* ===== ⑥ FAQ ===== */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            {/* 左: 見出し */}
            <motion.div {...fadeUp}>
              <SectionLabel>よくある質問</SectionLabel>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                入会・授業について
              </h2>
            </motion.div>

            {/* 右: Q&A */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {faqs.map((f) => (
                <motion.div key={f.q} variants={itemVariants}>
                  <FAQItem q={f.q} a={f.a} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ⑦ お知らせ ===== */}
      <section id="news" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp}>
            <SectionLabel>お知らせ</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              新着情報・キャンペーン
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {newsItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="w-full max-w-sm"
              >
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="h-48 bg-gray-200 bg-cover bg-center"
                    style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
                  />
                  <div className="p-6">
                    <h3 className="line-clamp-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <time>{item.date}</time>
                      <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-600">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ===== ⑧ 下部CTA ===== */}
      <section id="cta" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600">
                  入会キャンペーン実施中！
                </span>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  無料体験入会はこちら
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  まずは無料体験で、オンライン自習室の集中できる環境を実感してください。クレジットカード不要、メールアドレスのみで始められます。
                </p>
                <motion.a
                  href="/apply"
                  className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  無料体験に申し込む
                </motion.a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ctaSubLinks.map((l) =>
                  l.isDrawer ? (
                    <button
                      key={l.label}
                      type="button"
                      onClick={() => setDrawerOpen(true)}
                      className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                    >
                      {l.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ドロワー */}
      <DocumentRequestDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* ===== ⑧ フッター ===== */}
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
