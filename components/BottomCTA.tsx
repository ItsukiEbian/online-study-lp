"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VP = { once: true, margin: "-80px" as const };

const ctaLinks = [
  { label: "コース紹介", href: "/courses/standard", external: false },
  { label: "LINE友だち登録", href: "https://line.me/R/ti/p/@361nbhjg", external: true },
];

export default function BottomCTA() {
  return (
    <section className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border border-slate-200 bg-white p-10 md:p-16"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              無料体験入会はこちら
            </h2>
            <p className="mt-4 text-sm font-light leading-loose text-slate-600">
              まずは無料体験で、オンライン自習室の集中できる環境を実感してください。クレジットカード不要、メールアドレスのみで始められます。
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-[#C5A059]/60 bg-slate-900 px-6 py-3.5 text-xs font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-[0.98] md:px-8 md:text-sm"
            >
              まずは7日間 無料トライアル
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ctaLinks.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-normal text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-center border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-normal text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
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
