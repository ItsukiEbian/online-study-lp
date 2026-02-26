import { ArrowRight } from "lucide-react";

/** ヒーロー背景画像（public/hero-bg.jpg を置くと表示されます） */
const HERO_BG_IMAGE = "/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-accent md:min-h-screen"
      aria-label="ヒーロー"
    >
      {/* 背景画像 ＋ オーバーレイ（画像がない場合はグラデーションのみ表示） */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/75 to-accent/90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
        <h1 className="font-serif-jp mb-6 text-4xl font-medium tracking-wide text-white drop-shadow-sm md:text-5xl lg:text-6xl">
          自宅学習を最適化
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/95 md:text-xl">
          一人ひとりのペースと目標に合わせて、成果につながる学習環境を
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-accent"
          >
            無料相談はこちら
            <ArrowRight className="size-5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
