"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";

const courses = [
  { label: "Standardコース", href: "/courses/standard" },
  { label: "Proコース", href: "/courses/pro" },
];

export default function CourseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24">
      <div className="border border-slate-200 bg-white p-6">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
          <span className="text-sm font-bold text-slate-900">コース一覧</span>
        </div>

        <nav className="space-y-1">
          {courses.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group flex items-center justify-between px-3 py-3 text-sm font-normal transition-colors ${active
                    ? "bg-slate-50 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                  }`}
              >
                {c.label}
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${active
                      ? "text-slate-800"
                      : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-slate-400"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t border-slate-200 pt-6">
          <Link
            href="/apply"
            className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-[#C5A059]/60 bg-slate-900 px-3 py-3 text-center text-xs font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-[0.98] md:px-4 md:text-sm"
          >
            まずは7日間 無料トライアル
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
