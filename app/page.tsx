"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Minus, Award, Menu, X, LogIn, Smartphone, Clock, UserX, Circle } from "lucide-react";
import DocumentRequestDrawer from "@/components/DocumentRequestDrawer";

/* ────────────────────────────
   アニメーション定義
   ──────────────────────────── */

const VP = { once: true, margin: "-80px" as const };

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.7, ease: "easeOut" as const },
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
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ────────────────────────────
   小さいUI部品
   ──────────────────────────── */

function Dot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />;
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
      className={`mb-4 flex items-center gap-2.5 ${center ? "justify-center" : ""}`}
    >
      <Dot />
      <span className="text-sm font-medium tracking-widest text-amber-700">
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
    <div className="border border-slate-200 bg-white p-5 md:p-7">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 text-left"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 text-slate-400">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
        <span className="font-serif text-base font-semibold text-slate-800 md:text-lg">
          {q}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-4 pl-12 leading-relaxed text-slate-600">{a}</p>
      </motion.div>
    </div>
  );
}

function FAQCategoryAccordion({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: { q: string; a: string }[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between border-b border-slate-300 pb-3 text-left transition-colors hover:text-amber-700"
      >
        <h3 className="font-serif text-xl font-semibold text-slate-800">【{title}】</h3>
        <ChevronRight
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="space-y-4 pt-6">
          {items.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
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

  const touchRef = useRef<{ startX: number; startY: number; swiping: boolean }>({
    startX: 0,
    startY: 0,
    swiping: false,
  });

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

  const navigate = useCallback(
    (dir: number) => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      setPos((p) => p + dir);
    },
    [],
  );

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

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      swiping: false,
    };
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchRef.current.startX;
    const dy = e.touches[0].clientY - touchRef.current.startY;
    if (!touchRef.current.swiping && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      touchRef.current.swiping = true;
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchRef.current.swiping) return;
      const dx = e.changedTouches[0].clientX - touchRef.current.startX;
      const threshold = 40;
      if (dx < -threshold) navigate(1);
      else if (dx > threshold) navigate(-1);
    },
    [navigate],
  );

  const arrow =
    "flex h-12 w-12 items-center justify-center border border-slate-300 bg-white transition-all hover:bg-slate-50";

  return (
    <section id="voices" className="bg-stone-50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div {...fadeUp}>
          <SectionLabel>利用者の声</SectionLabel>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            ref={containerRef}
            className="touch-pan-y overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                  <div className="flex h-full flex-col justify-between border border-slate-200 bg-white p-7 md:p-9">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <Dot />
                        <span className="text-sm font-medium tracking-wide text-amber-700">
                          {t.badge}
                        </span>
                      </div>
                      <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-slate-900">
                        &ldquo;{t.summary}&rdquo;
                      </h3>
                      <p className="mt-5 text-sm leading-loose text-slate-600">
                        {t.body}
                      </p>
                    </div>
                    <p className="mt-7 text-right text-sm text-slate-500">
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
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <button
            type="button"
            onClick={() => navigate(1)}
            className={arrow}
            aria-label="次へ"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
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
  { label: "選ばれる理由", href: "#reasons" },
  { label: "コース紹介", href: "#courses" },
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
    title: "スマホのカメラで「見られる」ことによる圧倒的な集中力",
    desc: "最大の敵だったスマホを、あなたを監視する「目」に変えます。全国のライバルや管理者の存在を感じる適度な緊張感が、極限の集中空間を叩き出します。",
    image: "/HP_Img04.jpg",
  },
  {
    title: "24時間365日、いつでもそこがあなたの自習室",
    desc: "深夜でも、早朝でも、モチベーションが上がったその瞬間にすぐアクセス可能。「自習室が閉まっているから」という言い訳はもう通用しません。",
    image: "/HP_Img02.jpg",
  },
  {
    title: "難関大を突破した現役医学部生にいつでも質問できる",
    desc: "「わからない」で手が止まる時間をゼロに。厳しい受験を勝ち抜いた現役医学部生が常に待機しており、疑問をその場で解消できます。",
    image: "/HP_Img03.jpg",
  },
];

const testimonials = [
  {
    badge: "高校教師",
    summary: "勉強前の「重い腰」を、医学部生の視線で、軽やかに。",
    body: "勉強で一番高いハードルは「スマホを置いて机に向かう」までの心理的抵抗です。多くの生徒がこの数分間に苦戦し、その解消のためにわざわざ通塾しています。この仕組みの白眉は、最大の敵であるスマホを、現役医学部生による「伴走の場」に変えた点。自宅を最短距離で集中空間へ変える、極めて合理的な解決策です。",
    name: "M先生",
  },
  {
    badge: "T高校・高校1年生",
    summary: "学習効率が上がった",
    body: "塾に行かずに自宅で学習が可能な点が便利だと考え、利用を始めました。以前の自宅での学習では、誘惑が多く集中が途切れてしまいがちでしたが、利用を開始してからは、効率的に学習ができ、メリハリのある生活を送ることができるようになりました。",
    name: "K君",
  },
  {
    badge: "T高校・高校2年生",
    summary: "自然と机に向かう時間が増えました",
    body: "これまでは、やろうと思っても集中が続かず、家で勉強する習慣もありませんでした。この環境には、ほどよい拘束感とプレッシャーがあります。スマホが制限され、お互いの取り組みが見えることで、自然と机に向かう時間が増えました。わからないところはすぐに質問できるので、流れが止まりません。集中を妨げる行動も減り、勉強に入り込みやすくなりました。",
    name: "U君",
  },
  {
    badge: "T高校・高校2年生",
    summary: "誘惑に勝つ必要はない、不戦勝だ",
    body: "光があれば影が生まれるように、利便性には常に誘惑が伴う。私たちはその圧力に抗おうと努めてきた。誘惑は一見すると外発的な事象に思えるが、実のところ内発的な欲求によって生じるものである。つまり、外から刺激を受けても、心に欲求がなければ誘惑にはなり得ない。志望校合格という光へ歩み続けるとき、後ろを見る機会がなければ自らの影に気づくことはできない。誘惑は断ち切るものではなく、その存在を意識せずにいられるべきものだ。誘惑を忘れられる環境が、ここにはある。私はそれを保証する。",
    name: "U君",
  },
];

const faqCategories = [
  {
    title: "対象・入会条件について",
    items: [
      { q: "偏差値60以上の中高に通う生徒限定とはどういうことですか？", a: "生徒様ご本人の偏差値ではなく、在籍校の基準です。それ以外の学校の方も入会可能ですが、当塾の提供レベルの観点から推奨はしておりません。" },
      { q: "医学部ではなく難関国公立の理系志望なのですが大丈夫ですか？", a: "強く推奨します。理系最高峰の医学部生の知見を使い倒してください。難関国公立の理系学部に向けた専用の学習ルートも完備しております。" },
      { q: "文系志望でも入会できますか？", a: "現時点では推奨しておりません。理系に特化した指導環境となっております。今後、文系向けのサービスも速やかに展開していく予定です。" },
    ],
  },
  {
    title: "システム・環境について",
    items: [
      { q: "家だとついダラダラしてしまう子でも、本当に集中できるのでしょうか？", a: "スマホを固定し物理的に隔離。さらに医学部生が常時監視するため、意志に頼らず自宅が「絶対にサボれない自習室」へ強制的に変わります。" },
      { q: "自習室の営業時間や、質問の対応時間を教えてください。", a: "自習室は平日朝5〜9時、15〜翌深夜2時。質問は15〜24時までリアルタイム回答。それ以外の時間も原則24時間以内に必ず回答します。休日・祝日は朝5時-翌2時まで。質問対応は9-24時までとなっております。" },
      { q: "どこで使うサービスですか？図書館などでも利用できますか？", a: "どこでも利用可能ですが、学習習慣の確立という観点から「自宅」でのご利用を強く推奨しています。自宅が最高の自習室に変わります。" },
      { q: "用意する機材や必要なものはありますか？三脚などは必要ですか？", a: "お客様のスマートフォンのみで完結します。三脚等も不要で、当塾のシステムをご利用いただくだけで、今日からすぐに始められます。" },
      { q: "自分の顔や部屋全体がカメラに映るのが恥ずかしいのですが。", a: "映すのは「手元のノートと手」だけで構いません。またぼかし機能もあり、顔や部屋の背景を映す必要はないため、プライバシーを守りつつ学習にのみ没頭できます。" },
    ],
  },
  {
    title: "サポート・ルールについて",
    items: [
      { q: "普通のオンライン家庭教師や個別指導塾との決定的な違いは何ですか？", a: "家庭教師はその「授業の瞬間」だけですが、当塾は常に医学部生に質問し放題な上、監視自習室で日々の演習を「完遂」させる点が異なります。" },
      { q: "質問回数や、自習室の使用時間に上限はありますか？", a: "一切ありません。無限に使い放題です。あなたの限界まで自習室を活用し、医学部生の頭脳を何度でも引き出してください。" },
      { q: "勉強中に、英単語や分からないことを調べたい時はどうすればいいですか？", a: "学校配布の学習用タブレット等の使用を推奨します。個人のスマホはSNS等へ逃げる原因になるため、監視用として完全に無力化していただきます。" },
      { q: "ずっと監視されていると、疲れたり息苦しくなったりしませんか？", a: "「監視というよりライバルと空間を共有する感覚」と好評です。休憩時間もシステムで管理するため、息苦しさよりも高い集中力が持続します。" },
      { q: "学校の宿題や、定期テストの勉強をやってもいいですか？", a: "もちろんです。Proプランなら目標点から逆算し、学校の膨大な課題も最適な優先順位で確実に完遂させます。推薦枠狙いの方にも最適です。" },
      { q: "小論文や総合型選抜（AO入試）の対策についても相談できますか？", a: "対応可能です。現在、当塾のメンバーがAO対策に特化したAIアプリを独自開発しており、最新のテクノロジーを用いたサポートも提供予定です。" },
    ],
  },
  {
    title: "プラン・料金・手続きについて",
    items: [
      { q: "無料相談や体験はありますか？オンライン塾が初めてで不安なのですが。", a: "随時受け付けております。まずは1週間の無料体験をご利用ください。オンライン特有の不安を解消するため、まずは一度ご相談をおすすめします。" },
      { q: "StandardプランとProプラン、どちらを選べばいいか迷っています。", a: "強制環境のみ必要ならStandardを、ルート設計から面談まで求めるならProを。お悩みの方は、ぜひ無料相談で現状をお聞かせください。" },
      { q: "現在、大手の予備校に通っていますが、併用は可能ですか？", a: "併用を強く推奨します。成績不振の最大の原因である「予備校の復習不足」を当サービスの強制環境で完遂させ、教育投資の費用対効果を最大化させます。" },
      { q: "メンターは本当に「現役医学部生」だけなのでしょうか？", a: "はい、東海や南女などの難関校を突破した現役医学部生のみを採用しています。厳しい選考を通過した勝者の思考プロセスを直接ご提供します。" },
      { q: "支払い方法について教えてください。", a: "クレジットカード決済のみとなります。毎月自動更新となりますので、お支払いの手間なく、学習環境の維持に集中していただけます。" },
      { q: "兄弟で入会する場合の割引はありますか？", a: "兄弟割引をご用意しております。ご兄弟でご入会いただいた場合、お一人様分の入会金（通常料金）を無料とさせていただきます。" },
      { q: "月の途中からの入会や、退塾・休会は可能ですか？", a: "月途中の入会は日割り計算となります。退塾は前月20日までにお知らせください。病気やご都合による休会（最大半年・再入会金免除）も可能です。" },
    ],
  },
];

const newsItems = [
  {
    title: "新春の入会キャンペーン実施中！",
    date: "2026.02.24",
    category: "キャンペーン",
    href: "/news/spring-campaign",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
  },
];

const ctaSubLinks = [
  { label: "資料請求する", href: "#", isDrawer: true },
  { label: "コース紹介", href: "#courses", isDrawer: false },
  { label: "LINE友だち登録", href: "https://line.me/R/ti/p/@361nbhjg", isDrawer: false, external: true },
  { label: "キャンペーン", href: "#news", isDrawer: false },
];

/* ────────────────────────────
   メインページ
   ──────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      {/* ===== ① ヘッダー ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="font-serif text-lg font-semibold tracking-wide text-slate-900">
            Study Ops
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-normal text-slate-600 transition-colors hover:text-amber-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href="https://app.studyops.jp/dashboard"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-700"
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

          <button
            type="button"
            className="flex items-center justify-center md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
          >
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </header>

      {/* ===== モバイルメニュー（フルスクリーン） ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-stone-50"
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
                className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-slate-100"
              >
                <X className="h-6 w-6 text-slate-900" />
              </button>
            </div>

            {/* メニュー本体 */}
            <nav className="px-8 pt-4">
              <ul className="space-y-8">
                <li>
                  <a
                    href="#"
                    onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="font-serif text-2xl font-semibold text-slate-900"
                  >
                    ホーム
                  </a>
                </li>
                <li>
                  <a
                    href="#reasons"
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl font-semibold text-slate-900"
                  >
                    選ばれる理由
                  </a>
                </li>
                <li>
                  <span className="font-serif text-2xl font-semibold text-slate-900">コース紹介</span>
                  <div className="mt-4 flex gap-6">
                    <Link
                      href="/courses/standard"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 text-base text-slate-700"
                    >
                      Standardコース
                      <span className="flex h-6 w-6 items-center justify-center border border-slate-200">
                        <ChevronRight className="h-3.5 w-3.5 text-slate-700" />
                      </span>
                    </Link>
                    <Link
                      href="/courses/pro"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 text-base text-slate-700"
                    >
                      Proコース
                      <span className="flex h-6 w-6 items-center justify-center border border-slate-200">
                        <ChevronRight className="h-3.5 w-3.5 text-slate-700" />
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <a
                    href="#voices"
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl font-semibold text-slate-900"
                  >
                    生徒さんの声
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl font-semibold text-slate-900"
                  >
                    よくある質問
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl font-semibold text-slate-900"
                  >
                    お知らせ・キャンペーン
                  </a>
                </li>
              </ul>

              <div className="mt-14 flex flex-col gap-3">
                <Link
                  href="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="whitespace-nowrap bg-slate-900 px-6 py-3.5 text-center text-sm font-medium tracking-wide text-white transition-colors hover:bg-slate-800"
                >
                  まずは7日間 無料トライアル
                </Link>
                <a
                  href="https://app.studyops.jp/dashboard"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 px-6 py-3.5 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
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
      <section className="overflow-hidden bg-stone-50 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="relative w-full"
        >
          <Image
            src="/hero-new.jpg"
            alt="スマホをスタンドに立てて勉強する学生"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </motion.div>

        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" as const }}
            className="relative z-10 pt-10 text-center md:pt-14"
          >
            <span className="inline-flex items-center gap-2 border border-amber-600/40 bg-amber-50/60 px-6 py-2.5 text-base font-medium tracking-wide text-amber-800 md:text-lg">
              <Award className="h-5 w-5" />
              今だけ入学キャンペーン実施中
            </span>

            <h1 className="mt-8 whitespace-nowrap font-serif text-xl font-semibold leading-relaxed tracking-wide text-slate-900 sm:text-2xl md:text-4xl lg:text-5xl">
              家での勉強に、
              <br />
              かつてない緊張感を。
              <br />
              難関大志望者のための、
              <br />
              24時間繋がるオンライン自習室。
            </h1>

            <p className="mt-5 text-base font-normal tracking-wider text-slate-600 md:text-xl">
              〜偏差値60以上の中高に通う生徒限定〜
            </p>

            <motion.a
              href="/apply"
              className="mx-auto mt-12 block w-full max-w-md border border-slate-900 bg-slate-900 px-6 py-5 text-center text-white transition-all hover:bg-slate-800"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="block whitespace-nowrap text-lg font-medium tracking-wide md:text-2xl lg:text-3xl">
                まずは7日間 無料トライアル
              </span>
            </motion.a>
          </motion.div>
        </div>

        <div className="h-20 md:h-32" />
      </section>

      {/* ===== スマホ追従CTA ===== */}
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="border-t border-slate-200/60 bg-stone-50/90 px-4 pb-[env(safe-area-inset-bottom,8px)] pt-2 backdrop-blur-md">
          <a
            href="/apply"
            className="block w-full bg-slate-900 px-4 py-3.5 text-center text-white"
          >
            <span className="block whitespace-nowrap text-base font-medium tracking-wide leading-tight">
              まずは7日間 無料トライアル
            </span>
          </a>
        </div>
      </div>

      {/* ===== 問題提起 ===== */}
      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <motion.h2
            {...fadeUp}
            className="text-center font-serif text-2xl font-semibold leading-relaxed text-slate-900 md:text-4xl"
          >
            塾の授業は受けているのに、
            <br />
            テストの点数が上がらない…
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            className="mx-auto mt-10 max-w-3xl text-center text-lg font-light leading-loose text-slate-700 md:text-xl"
          >
            その理由は、あなたの能力不足ではありません。
            <br />
            <span className="relative inline-block font-bold text-red-700">
              <span className="absolute inset-x-0 bottom-0 h-[40%] bg-red-50" />
              <span className="relative">『圧倒的な自習不足』</span>
            </span>
            です。
            <br className="hidden sm:inline" />
            知識を完璧に定着させるには、授業時間の「約2〜2.5倍」の自習時間が必要だと言われています。
            <br className="hidden sm:inline" />
            ライバルと本当の差がつくのは、授業中ではなく「自習の質と量」なのです。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="mt-14"
          >
            <Image
              src="/jishu-chart.jpg"
              alt="授業と自習の時間比率を示す図解"
              width={1200}
              height={800}
              className="mx-auto h-auto w-full max-w-5xl shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== 共感（自習の壁） ===== */}
      <section className="bg-stone-50 py-24 md:py-36">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <motion.h2
            {...fadeUp}
            className="mb-14 text-center font-serif text-2xl font-semibold leading-relaxed text-slate-900 md:mb-20 md:text-3xl"
          >
            でも、いざ自習しようとしても、
            <br />
            こんな
            <span className="text-amber-700">「3つの壁」</span>
            にぶつかっていませんか？
          </motion.h2>

          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {[
              {
                icon: Smartphone,
                title: "スマホの誘惑",
                items: [
                  "気づけばSNSや動画を開いてしまう",
                  "「5分だけ」が1時間に膨らんでいる",
                ],
              },
              {
                icon: Clock,
                title: "場所と時間の制限",
                items: [
                  "塾や学校の自習室は24時間開いていない",
                  "夜や早朝に集中できる場所がない",
                ],
              },
              {
                icon: UserX,
                title: "孤独によるモチベーション低下",
                items: [
                  "一人だと自分に甘くなる",
                  "頑張っている人の姿が見えず緊張感がない",
                ],
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="border border-slate-300 bg-white px-6 py-7 md:px-9 md:py-8"
              >
                <div className="flex items-center justify-center gap-2.5">
                  <card.icon className="h-5 w-5 text-slate-700" />
                  <h3 className="font-serif text-lg font-semibold text-slate-800 md:text-xl">
                    {card.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-light leading-relaxed text-slate-700 md:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ③ 選ばれる理由 ===== */}
      <section id="reasons" className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionLabel center>解決策</SectionLabel>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">
              だからこそ、難関大志望者は
              <br className="hidden sm:inline" />
              「Study Ops」を選びます。
            </h2>
          </motion.div>

          <motion.div
            className="mt-20 grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="group overflow-hidden border border-slate-200 bg-white transition-shadow hover:shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-medium tracking-widest text-amber-700">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-loose text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ④ コース紹介 ===== */}
      <section id="courses" className="bg-stone-50 py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionLabel center>コース紹介</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          >
            <div className="overflow-x-auto border border-slate-200">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 bg-slate-50 px-6 py-5 text-left font-medium text-slate-700 md:w-[34%]">
                      比較・機能項目
                    </th>
                    <th className="border-b border-l border-slate-200 bg-slate-900 px-6 py-5 text-center font-medium tracking-wide text-white md:w-[33%]">
                      <span>Standardプラン</span>
                      <span className="ml-2 inline-block border border-amber-400/60 bg-amber-50 px-2 py-0.5 text-[10px] font-medium leading-none text-amber-800">
                        人気
                      </span>
                    </th>
                    <th className="border-b border-l border-slate-200 bg-slate-800 px-6 py-5 text-center font-medium tracking-wide text-white md:w-[33%]">
                      Proプラン
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { label: "常時監視", std: true, pro: true },
                    { label: "質問し放題チャット", std: true, pro: true },
                    { label: "休憩マネジメント", std: true, pro: true },
                    { label: "毎月の学習レポート", std: true, pro: true },
                    { label: "専属メンター", std: false, pro: true },
                    { label: "専用ルート設計", std: false, pro: true },
                    { label: "月２回の面談", std: false, pro: true },
                  ].map((row) => (
                    <tr key={row.label} className="transition-colors hover:bg-slate-50/60">
                      <td className="px-6 py-5 font-normal text-slate-800">
                        {row.label}
                      </td>
                      <td className="border-l border-slate-100 px-6 py-5 text-center">
                        {row.std
                          ? <Circle className="mx-auto h-7 w-7 text-slate-800 md:h-8 md:w-8" strokeWidth={3} />
                          : <X className="mx-auto h-7 w-7 text-slate-300 md:h-8 md:w-8" strokeWidth={2} />}
                      </td>
                      <td className="border-l border-slate-100 px-6 py-5 text-center">
                        {row.pro
                          ? <Circle className="mx-auto h-7 w-7 text-slate-800 md:h-8 md:w-8" strokeWidth={3} />
                          : <X className="mx-auto h-7 w-7 text-slate-300 md:h-8 md:w-8" strokeWidth={2} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/courses/standard"
                className="group flex items-center justify-between border border-slate-300 bg-white px-6 py-5 text-sm font-medium text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Standardコースの詳細を見る
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-600 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/courses/pro"
                className="group flex items-center justify-between border border-slate-300 bg-white px-6 py-5 text-sm font-medium text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Proコースの詳細を見る
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ⑤ 利用者の声 ===== */}
      <TestimonialsCarousel />

      {/* ===== ⑥ FAQ ===== */}
      <section id="faq" className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp}>
            <SectionLabel>よくある質問</SectionLabel>
          </motion.div>

          <div className="mt-16 space-y-10">
            {faqCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
              >
                <FAQCategoryAccordion
                  title={cat.title}
                  items={cat.items}
                  defaultOpen={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ⑦ お知らせ ===== */}
      <section id="news" className="bg-stone-50 py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div {...fadeUp}>
            <SectionLabel>お知らせ</SectionLabel>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">
              新着情報・キャンペーン
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
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
                  className="group block overflow-hidden border border-slate-200 bg-white transition-transform hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div
                    className="h-48 bg-slate-100 bg-cover bg-center"
                    style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
                  />
                  <div className="p-7">
                    <h3 className="line-clamp-2 font-serif text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                      <time>{item.date}</time>
                      <span className="border border-slate-200 px-3 py-0.5 text-xs font-medium text-slate-600">
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
      <section id="cta" className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            {...fadeUp}
            className="overflow-hidden border border-slate-200 bg-white p-10 md:p-16"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="inline-block border border-amber-600/40 bg-amber-50/60 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-800">
                  入会キャンペーン実施中
                </span>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">
                  無料体験入会はこちら
                </h2>
                <p className="mt-4 text-sm font-light leading-loose text-slate-600">
                  まずは無料体験で、オンライン自習室の集中できる環境を実感してください。クレジットカード不要、メールアドレスのみで始められます。
                </p>
                <motion.a
                  href="/apply"
                  className="mt-8 inline-flex items-center whitespace-nowrap border border-slate-900 bg-slate-900 px-6 py-3.5 text-xs font-medium tracking-wide text-white transition-colors hover:bg-slate-800 md:px-8 md:text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  まずは7日間 無料トライアル
                </motion.a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {ctaSubLinks.map((l) =>
                  l.isDrawer ? (
                    <button
                      key={l.label}
                      type="button"
                      onClick={() => setDrawerOpen(true)}
                      className="flex items-center justify-center border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-normal text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
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
                      className="flex items-center justify-center border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-normal text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
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

      {/* ===== フッター ===== */}
      <footer className="border-t border-slate-200 bg-stone-50 py-12 pb-28 md:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
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
