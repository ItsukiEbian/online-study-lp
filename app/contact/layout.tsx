import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | オンライン自習室",
  description: "オンライン自習室サービスへのお問い合わせ",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
