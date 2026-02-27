import Link from "next/link";

export const metadata = {
    title: "特定商取引法に基づく表記 | Study Ops",
    description: "Study Ops サービスの特定商取引法に基づく表記",
};

const rows = [
    { label: "事業者の名称", value: "吉岡昴" },
    { label: "屋号", value: "studyops" },
    {
        label: "事業者の所在地",
        value: "〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401",
    },
    {
        label: "事業者の連絡先（電話番号）",
        value: "090-XXXX-XXXX",
    },
    {
        label: "事業者の連絡先（メールアドレス）",
        value: "y.studyops@gmail.com",
    },
    {
        label: "販売価格",
        value:
            "各コース（Standardプラン: 24,800円、Proプラン: 49,800円）の紹介ページに記載",
    },
    {
        label: "代金の支払時期および方法",
        value: "クレジットカード決済（申込時）",
    },
    {
        label: "商品の引き渡し時期",
        value: "決済完了後、すぐにご利用いただけます。",
    },
    {
        label: "返品・キャンセルについて",
        value:
            "サービスの性質上、原則として返品・返金はお受けしておりません。解約は所定の手続きにより当月末で行えます。",
    },
];

export default function TokushohoPage() {
    return (
        <div className="flex min-h-screen flex-col bg-stone-50 text-slate-900">
            {/* ヘッダー */}
            <header className="border-b border-slate-200 bg-stone-50">
                <div className="mx-auto flex h-16 max-w-5xl items-center px-6 md:px-10">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-wide text-slate-900 transition-colors hover:text-amber-700"
                    >
                        Study Ops
                    </Link>
                </div>
            </header>

            {/* 本文 */}
            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
                <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    特定商取引法に基づく表記
                </h1>

                <div className="mt-10">
                    <div className="overflow-hidden border border-slate-200">
                        {rows.map((row, i) => (
                            <div
                                key={row.label}
                                className={`flex flex-col sm:flex-row ${i !== rows.length - 1 ? "border-b border-slate-200" : ""
                                    }`}
                            >
                                <div className="shrink-0 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-800 sm:w-64 sm:border-r sm:border-slate-200">
                                    {row.label}
                                </div>
                                <div className="px-6 py-4 text-sm font-light leading-relaxed text-slate-700">
                                    {row.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="text-slate-600 underline transition-colors hover:text-slate-800"
                    >
                        ホームへ戻る
                    </Link>
                </div>
            </main>

            {/* フッター */}
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
                        <Link href="/tokushoho" className="font-medium text-amber-700">
                            特定商取引法に基づく表記
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
