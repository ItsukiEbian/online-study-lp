"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

const FORMSPREE_ID = "YOUR_FORM_ID";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const inputBase =
  "w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20";
const labelBase = "mb-1.5 block text-sm font-medium text-slate-700";

const courses = [
  "Standardプラン",
  "Proプラン",
];

const gradeOptions = [
  "中学1年生",
  "中学2年生",
  "中学3年生",
  "高校1年生",
  "高校2年生",
  "高校3年生",
  "既卒・浪人生",
  "社会人",
  "その他",
];

export default function ApplyPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-slate-900">
      {/* ヘッダー */}
      <header className="border-b border-slate-200/60 bg-stone-50">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-wide text-slate-900 transition-colors hover:text-amber-700"
          >
            Study Ops
          </Link>
        </div>
      </header>

      {/* メイン */}
      <main className="flex flex-1 items-start justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-3xl">
          <motion.div {...fadeUp()} className="mb-8 text-center">
            <div className="mx-auto mb-3 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
              <span className="text-sm font-medium tracking-widest text-amber-700">
                無料体験申し込み
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              無料体験のお申し込み
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              以下のフォームに必要事項をご記入の上、送信してください。
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="thanks"
                className="border border-slate-200 bg-white p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-slate-200 bg-slate-50">
                    <svg
                      className="h-8 w-8 text-amber-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                    お申し込みありがとうございます
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    確認次第、担当者よりご連絡いたします。
                    <br />
                    しばらくお待ちください。
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex items-center bg-slate-900 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-slate-800"
                  >
                    トップページへ戻る
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="border border-slate-200 bg-white p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {state.errors &&
                  state.errors.getFormErrors?.().length > 0 && (
                    <div className="mb-6 bg-red-50 p-4 text-sm text-red-700">
                      {state.errors.getFormErrors().map((err) => (
                        <p key={err.message}>{err.message}</p>
                      ))}
                    </div>
                  )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* お名前 */}
                  <motion.div {...fadeUp(0.05)}>
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
                    <ValidationError
                      prefix="お名前"
                      field="name"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>

                  {/* ふりがな */}
                  <motion.div {...fadeUp(0.1)}>
                    <label htmlFor="furigana" className={labelBase}>
                      ふりがな <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="furigana"
                      type="text"
                      name="furigana"
                      required
                      className={inputBase}
                      placeholder="やまだ たろう"
                      disabled={state.submitting}
                    />
                    <ValidationError
                      prefix="ふりがな"
                      field="furigana"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>

                  {/* メールアドレス */}
                  <motion.div {...fadeUp(0.15)}>
                    <label htmlFor="email" className={labelBase}>
                      連絡先メールアドレス{" "}
                      <span className="text-red-500">*</span>
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
                    <ValidationError
                      prefix="メールアドレス"
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>

                  {/* 電話番号 */}
                  <motion.div {...fadeUp(0.2)}>
                    <label htmlFor="phone" className={labelBase}>
                      電話番号
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className={inputBase}
                      placeholder="090-1234-5678"
                      disabled={state.submitting}
                    />
                  </motion.div>

                  {/* 学年 */}
                  <motion.div {...fadeUp(0.25)}>
                    <label htmlFor="grade" className={labelBase}>
                      学年 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      required
                      className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                      defaultValue=""
                      disabled={state.submitting}
                    >
                      <option value="" disabled>
                        選択してください
                      </option>
                      {gradeOptions.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <ValidationError
                      prefix="学年"
                      field="grade"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>

                  {/* 希望コース */}
                  <motion.div {...fadeUp(0.3)}>
                    <fieldset>
                      <legend className={labelBase}>
                        希望コース <span className="text-red-500">*</span>
                      </legend>
                      <div className="mt-2 space-y-3">
                        {courses.map((course) => (
                          <label
                            key={course}
                            className="flex cursor-pointer items-center gap-3 border border-slate-200 px-4 py-3 transition-colors hover:border-slate-400 hover:bg-slate-50/50 has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50"
                          >
                            <input
                              type="radio"
                              name="course"
                              value={course}
                              required
                              className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
                              disabled={state.submitting}
                            />
                            <span className="text-sm font-medium text-slate-700">
                              {course}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </motion.div>

                  {/* プライバシーポリシー同意 */}
                  <motion.div {...fadeUp(0.35)}>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacy_agreement"
                        value="同意する"
                        required
                        className="mt-0.5 h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
                        disabled={state.submitting}
                      />
                      <span className="text-sm leading-relaxed text-slate-600">
                        <Link
                          href="/privacy"
                          target="_blank"
                          className="font-medium text-slate-800 underline underline-offset-2 hover:text-amber-700"
                        >
                          プライバシーポリシー
                        </Link>
                        に同意して送信する{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </motion.div>

                  {/* 送信ボタン */}
                  <motion.div {...fadeUp(0.4)}>
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-slate-900 py-4 text-base font-medium tracking-wide text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                      whileHover={state.submitting ? {} : { scale: 1.01 }}
                      whileTap={state.submitting ? {} : { scale: 0.99 }}
                    >
                      {state.submitting
                        ? "送信中..."
                        : "この内容で申し込む"}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-stone-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-slate-500 transition-colors hover:text-slate-800"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 transition-colors hover:text-slate-800"
            >
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
