"use client";

/** Formspree のフォーム送信先: https://formspree.io/f/xykdyajb */
const FORM_ID = "xykdyajb";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SimpleHeader() {
  return (
    <header className="border-b border-slate-200 bg-stone-50">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-slate-900 transition hover:text-amber-700"
        >
          Study Ops
        </Link>
      </div>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-stone-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/privacy" className="text-slate-500 transition-colors hover:text-slate-800">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="text-slate-500 transition-colors hover:text-slate-800">
            利用規約
          </Link>
          <Link href="/disclaimer" className="text-slate-500 transition-colors hover:text-slate-800">
            免責事項
          </Link>
          <Link href="/tokushoho" className="text-slate-500 transition-colors hover:text-slate-800">
            特定商取引法に基づく表記
          </Link>
        </nav>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Study Ops. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const inputBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-700/50 focus:ring-2 focus:ring-amber-700/10";
const labelBase = "mb-1.5 block text-sm font-medium text-slate-700";

const inquiryTypes = [
  { value: "", label: "選択してください" },
  { value: "サービスについて", label: "サービスについて" },
  { value: "料金について", label: "料金について" },
  { value: "無料体験について", label: "無料体験について" },
  { value: "その他", label: "その他" },
];

export default function ContactPage() {
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-slate-900">
      <SimpleHeader />
      <main className="mx-auto flex w-full max-w-lg flex-1 items-center px-6 py-12 md:py-16">
        <div className="w-full">
          <motion.h1
            className="text-center text-2xl font-bold text-slate-900 md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            お問い合わせ
          </motion.h1>

          <motion.p
            className="mt-3 text-center text-sm font-light text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            ご不明点やご相談がございましたら、お気軽にお問い合わせください。
          </motion.p>

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                className="mt-8 rounded-lg border border-slate-200 bg-white p-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                  <svg className="h-7 w-7 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="mt-5 text-center text-lg font-bold text-slate-900">
                  お問い合わせを受け付けました
                </h2>
                <p className="mt-3 text-center leading-relaxed font-light text-slate-600">
                  担当者より順次ご返信いたします。
                  <br />
                  今しばらくお待ちくださいませ。
                </p>
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-md border border-[#C5A059]/60 bg-slate-900 px-6 py-3 text-base font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-[0.98]"
                  >
                    トップページへ戻る
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="mt-8 rounded-lg border border-slate-200 bg-white p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {state.errors && state.errors.getFormErrors?.().length > 0 && (
                  <div className="mb-6 rounded-md bg-red-50 p-4 text-sm text-red-700">
                    {state.errors.getFormErrors().map((err) => (
                      <p key={err.message}>{err.message}</p>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* お名前 */}
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

                  {/* メールアドレス */}
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

                  {/* お問い合わせ種別 */}
                  <div>
                    <label htmlFor="category" className={labelBase}>
                      お問い合わせ種別
                    </label>
                    <select
                      id="category"
                      name="category"
                      className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-10`}
                      disabled={state.submitting}
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* お問い合わせ内容 */}
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

                  {/* 送信ボタン */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#C5A059]/60 bg-slate-900 py-4 text-base font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                    whileHover={state.submitting ? {} : { scale: 1.01 }}
                    whileTap={state.submitting ? {} : { scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        送信中...
                      </>
                    ) : (
                      <>
                        送信する
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
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
