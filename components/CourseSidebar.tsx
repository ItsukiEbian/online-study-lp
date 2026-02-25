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
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
          <span className="text-sm font-bold text-gray-900">コース一覧</span>
        </div>

        <nav className="space-y-1">
          {courses.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {c.label}
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active
                      ? "text-blue-600"
                      : "text-gray-300 group-hover:translate-x-0.5 group-hover:text-gray-400"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <Link
            href="/apply"
            className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            まずは7日間 無料トライアル
          </Link>
        </div>
      </div>
    </aside>
  );
}
