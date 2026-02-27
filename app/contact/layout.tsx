import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Study Ops",
  description: "Study Opsへのお問い合わせはこちらから。サービスや料金に関するご質問など、お気軽にご相談ください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
