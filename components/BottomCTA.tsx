"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" as const };

const ctaLinks = [
  { label: "資料請求する", href: "#", external: false },
  { label: "コース紹介", href: "/courses/standard", external: false },
  { label: "LINE友だち登録", href: "https://line.me/R/ti/p/@361nbhjg", external: true },
  { label: "キャンペーン", href: "/news/spring-campaign", external: false },
];

export default function BottomCTA() {
  return (
    <section className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-3xl bg-white p-8 shadow-sm md:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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
            <Link
              href="/apply"
              className="mt-6 inline-flex items-center whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 md:px-8 md:text-sm"
            >
              まずは7日間 無料トライアル
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {ctaLinks.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
