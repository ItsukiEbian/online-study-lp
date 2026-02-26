"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

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
          <span className="font-serif text-sm font-semibold text-slate-900">コース一覧</span>
        </div>

        <nav className="space-y-1">
          {courses.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group flex items-center justify-between px-3 py-3 text-sm font-normal transition-colors ${
                  active
                    ? "bg-slate-50 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {c.label}
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active
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
            className="block w-full whitespace-nowrap border border-slate-900 bg-slate-900 px-3 py-3 text-center text-xs font-medium tracking-wide text-white transition-colors hover:bg-slate-800 md:px-4 md:text-sm"
          >
            まずは7日間 無料トライアル
          </Link>
        </div>
      </div>
    </aside>
  );
}
