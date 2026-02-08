"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  User,
  Clock,
  Video,
  CalendarClock,
  Volume2,
  Target,
  Check,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const container = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
};

const item = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35 },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827]"
      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      {/* ========== (1) Hero ========== */}
      <section className="relative overflow-hidden bg-white px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            className="lg:pr-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#111827] md:text-4xl lg:text-5xl">
              孤独な努力は、もう終わり。Webカメラでつながる、没入型オンライン自習室
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B7280]">
              誰かが見ているから、サボれない。スマホ・PCのカメラをつなぐだけで、そこは緊張感のある図書館に変わります。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-[#6366f1] px-6 py-3.5 text-base font-medium text-white shadow-sm transition hover:bg-[#4F46E5]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                今すぐ無料で体験する
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-6 py-3.5 text-base font-medium text-[#111827] transition hover:border-[#6366f1] hover:text-[#6366f1]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                仕組みを見る
              </motion.a>
            </div>
          </motion.div>

          {/* 自習室UI風ビジュアル（右側） */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-lg md:p-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#6B7280]">
                <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                自習室 — 入室中 12 人
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <div className="mb-2 h-12 w-12 rounded-full bg-[#6366f1]/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-[#6366f1]" />
                    </div>
                    <div className="h-2 w-14 rounded bg-[#E5E7EB]" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-10 flex-1 rounded-lg bg-[#E5E7EB]" />
                <div className="h-10 w-20 rounded-lg bg-[#6366f1]/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== (2) Problem & Solution ========== */}
      <section id="problem" className="bg-[#F9FAFB] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-center text-2xl font-semibold text-[#111827] md:text-3xl"
            {...fadeUp}
          >
            なぜ家では集中できないのか？
          </motion.h2>
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            variants={container}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: Smartphone,
                title: "スマホの誘惑",
                text: "通知やSNSが気になって、つい手が伸びてしまう。",
              },
              {
                icon: User,
                title: "孤独感",
                text: "一人だとダレてしまう。誰かと一緒の空気感が欲しい。",
              },
              {
                icon: Clock,
                title: "メリハリのなさ",
                text: "時間の区切りがなく、だらだら過ごしてしまう。",
              },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={item}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#6366f1]/10 p-3">
                  <Icon className="h-6 w-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
                <p className="mt-2 text-[#6B7280]">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== (3) Features - Bento Grid ========== */}
      <section id="features" className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="text-center text-2xl font-semibold text-[#111827] md:text-3xl"
            {...fadeUp}
          >
            機能紹介
          </motion.h2>
          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: Video,
                title: "カメラ共有",
                desc: "手元や横顔を映して程よい緊張感を。",
              },
              {
                icon: CalendarClock,
                title: "24時間入室可能",
                desc: "いつでも世界中の仲間と。",
              },
              {
                icon: Volume2,
                title: "無音の空間",
                desc: "会話禁止。環境音のみ。",
              },
              {
                icon: Target,
                title: "目標宣言",
                desc: "入室時に今日のやることを宣言。",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 transition hover:border-[#6366f1]/30 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#6366f1]/10 p-3">
                  <Icon className="h-6 w-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
                <p className="mt-2 text-sm text-[#6B7280]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== (4) Pricing ========== */}
      <section id="pricing" className="bg-[#F9FAFB] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-center text-2xl font-semibold text-[#111827] md:text-3xl"
            {...fadeUp}
          >
            料金プラン
          </motion.h2>
          <motion.div
            className="mt-14 flex justify-center"
            variants={container}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={item}
              className="w-full max-w-md rounded-2xl border-2 border-[#6366f1] bg-white p-8 shadow-xl md:p-10"
            >
              <h3 className="text-xl font-semibold text-[#111827] md:text-2xl">
                スタンダードプラン
              </h3>
              <p className="mt-2 text-3xl font-bold text-[#111827] md:text-4xl">
                月額500円
                <span className="text-base font-normal text-[#6B7280]">（税込）</span>
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "24時間いつでも利用可能",
                  "カメラONで強制集中モード",
                  "参加者同士の相互監視機能",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#6B7280]">
                    <Check className="h-5 w-5 shrink-0 text-[#10B981]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <motion.button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 rounded-lg bg-[#6366f1] py-4 text-center text-base font-medium text-white transition hover:bg-[#4F46E5]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  500円で今すぐ始める
                </motion.button>
                {new Date() < new Date("2026-02-12T23:59:59+09:00") && (
                  <div className="flex flex-1 flex-col items-center gap-1">
                    <span className="text-xs font-bold text-[#EA580C]">今だけ！</span>
                    <motion.a
                      href="https://retro-chat-1984.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-lg border-2 border-[#EA580C] bg-white py-4 text-center text-base font-medium text-[#EA580C] transition hover:bg-[#EA580C] hover:text-white"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      期間限定 無料公開（2/12まで）
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 有料プランお知らせモーダル */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(false)}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="modal-title" className="text-xl font-semibold text-[#111827]">
                有料プランの受付について
              </h2>
              <p className="mt-4 whitespace-pre-line leading-relaxed text-[#374151]">
                {`現在、有料プラン（スタンダードプラン）の新規受付は調整中のため停止しております。
まずは『期間限定 無料公開』の方から、自習室をご体験ください。`}
              </p>
              <div className="mt-6 flex justify-end">
                <motion.button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg bg-[#6366f1] px-6 py-2.5 text-base font-medium text-white transition hover:bg-[#4F46E5]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  閉じる
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== (5) Footer ========== */}
      <footer className="border-t border-[#E5E7EB] bg-white px-6 py-12 md:px-10 lg:px-16">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#problem" className="text-[#6B7280] hover:text-[#111827]">
              課題解決
            </a>
            <a href="#features" className="text-[#6B7280] hover:text-[#111827]">
              機能
            </a>
            <a href="#pricing" className="text-[#6B7280] hover:text-[#111827]">
              料金
            </a>
            <Link href="/contact" className="text-[#6B7280] hover:text-[#111827]">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="text-[#6B7280] hover:text-[#111827]">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-[#6B7280] hover:text-[#111827]">
              利用規約
            </Link>
          </nav>
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} オンライン自習室. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
