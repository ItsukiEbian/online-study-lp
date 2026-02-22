"use client";

/** Formspree のフォーム送信先: https://formspree.io/f/xykdyajb */
const FORM_ID = "xykdyajb";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

function SimpleHeader() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="text-lg font-semibold text-[#111827] transition hover:text-[#6366f1]"
        >
          Study Ops
        </Link>
      </div>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white py-10">
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
  );
}

const inputBase =
  "w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20";
const labelBase = "mb-1.5 block text-sm font-medium text-[#374151]";

export default function ContactPage() {
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] font-sans text-[#111827]">
      <SimpleHeader />
      <main className="mx-auto flex w-full max-w-lg flex-1 items-center px-6 py-12 md:py-16">
        <div className="w-full">
          <motion.h1
            className="text-center text-2xl font-semibold text-[#111827] md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            お問い合わせ
          </motion.h1>

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-center leading-relaxed text-[#374151]">
                  お問い合わせありがとうございます。確認次第ご連絡いたします。
                </p>
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-[#6366f1] px-6 py-3 text-base font-medium text-white transition hover:bg-[#4F46E5]"
                  >
                    トップページへ戻る
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-md md:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {state.errors && state.errors.getFormErrors?.().length > 0 && (
                  <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
                    {state.errors.getFormErrors().map((err) => (
                      <p key={err.message}>{err.message}</p>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className={labelBase}>
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className={inputBase}
                      placeholder="山田 太郎"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="お名前" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className={inputBase}
                      placeholder="example@example.com"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="メールアドレス" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelBase}>
                      件名
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className={inputBase}
                      placeholder="お問い合わせの件名"
                      disabled={state.submitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputBase} resize-y min-h-[120px]`}
                      placeholder="お問い合わせ内容をご記入ください"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="お問い合わせ内容" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full rounded-lg bg-[#6366f1] py-4 text-base font-medium text-white transition hover:bg-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-70"
                    whileHover={state.submitting ? {} : { scale: 1.01 }}
                    whileTap={state.submitting ? {} : { scale: 0.99 }}
                  >
                    {state.submitting ? "送信中..." : "送信する"}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
}
