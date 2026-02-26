"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function DocumentRequestDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-stone-50 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-end px-5 pt-5">
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
                aria-label="閉じる"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {state.succeeded ? (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    資料請求ありがとうございました
                  </h3>
                  <p className="mt-6 font-light leading-loose text-slate-600">
                    ご返信に3営業日ほどお時間をいただいております。
                    <br />
                    3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-10 cursor-pointer text-slate-600 underline transition-colors hover:text-slate-900"
                  >
                    ホームへ戻る
                  </button>
                </div>
              ) : (
                <>
                  <div className="border-b border-slate-200 px-8 pb-6">
                    <h2 className="text-center text-2xl font-bold text-slate-900">
                      資料請求フォーム
                    </h2>
                    <p className="mt-4 text-sm font-light leading-relaxed text-slate-600">
                      ご希望の資料をPDF形式でご提供させていただきます。詳細な情報をご希望の方は、お気軽にお問い合わせください。
                    </p>
                  </div>

                  <div className="px-8 py-6">
                    {state.errors &&
                      state.errors.getFormErrors?.().length > 0 && (
                        <div className="mb-5 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                          {state.errors.getFormErrors().map((err) => (
                            <p key={err.message}>{err.message}</p>
                          ))}
                        </div>
                      )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="doc-name" className="mb-1.5 block text-sm font-medium text-slate-800">
                          お名前<span className="ml-1 text-red-500">*</span>
                        </label>
                        <input
                          id="doc-name"
                          type="text"
                          name="name"
                          required
                          className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/30"
                          placeholder="山田　太郎"
                          disabled={state.submitting}
                        />
                        <ValidationError
                          prefix="お名前"
                          field="name"
                          errors={state.errors}
                          className="mt-1 text-sm text-red-600"
                        />
                      </div>

                      <div>
                        <label htmlFor="doc-email" className="mb-1.5 block text-sm font-medium text-slate-800">
                          連絡先メールアドレス<span className="ml-1 text-red-500">*</span>
                        </label>
                        <input
                          id="doc-email"
                          type="email"
                          name="email"
                          required
                          className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/30"
                          placeholder="○○○@example.com"
                          disabled={state.submitting}
                        />
                        <ValidationError
                          prefix="メールアドレス"
                          field="email"
                          errors={state.errors}
                          className="mt-1 text-sm text-red-600"
                        />
                      </div>

                      <div>
                        <label htmlFor="doc-phone" className="mb-1.5 block text-sm font-medium text-slate-800">
                          電話番号
                        </label>
                        <input
                          id="doc-phone"
                          type="tel"
                          name="phone"
                          className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/30"
                          placeholder="00000000000"
                          disabled={state.submitting}
                        />
                      </div>

                      <div className="flex items-center justify-center pt-2">
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="checkbox"
                            name="privacy_agreement"
                            value="同意する"
                            required
                            className="h-4 w-4 border-slate-300 text-slate-800 focus:ring-slate-500"
                            disabled={state.submitting}
                          />
                          <span className="text-sm text-slate-700">
                            <Link
                              href="/privacy"
                              target="_blank"
                              className="font-medium text-slate-800 underline underline-offset-2 hover:text-amber-700"
                            >
                              プライバシーポリシー
                            </Link>
                            に同意して送信する
                          </span>
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-slate-900 py-3 text-base font-medium tracking-wide text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                        whileHover={state.submitting ? {} : { scale: 1.01 }}
                        whileTap={state.submitting ? {} : { scale: 0.99 }}
                      >
                        {state.submitting ? "送信中..." : "この内容で申し込む"}
                      </motion.button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
