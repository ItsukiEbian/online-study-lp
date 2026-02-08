import Link from "next/link";

export const metadata = {
  title: "利用規約 | オンライン自習室",
  description: "オンライン自習室サービスの利用規約",
};

function SimpleHeader() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="text-lg font-semibold text-[#111827] hover:text-[#6366f1] transition"
        >
          オンライン自習室
        </Link>
      </div>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white px-6 py-12 md:px-10 lg:px-16 mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/#problem" className="text-[#6B7280] hover:text-[#111827]">
            課題解決
          </Link>
          <Link href="/#features" className="text-[#6B7280] hover:text-[#111827]">
            機能
          </Link>
          <Link href="/#pricing" className="text-[#6B7280] hover:text-[#111827]">
            料金
          </Link>
          <Link href="/#pricing" className="text-[#6B7280] hover:text-[#111827]">
            お問い合わせ
          </Link>
          <Link href="/privacy" className="text-[#6B7280] hover:text-[#111827]">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="text-[#6366f1] font-medium">
            利用規約
          </Link>
        </nav>
        <p className="text-sm text-[#9CA3AF]">
          © {new Date().getFullYear()} オンライン自習室. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] font-sans text-[#111827]">
      <SimpleHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-2xl font-semibold text-[#111827] md:text-3xl">
          利用規約
        </h1>
        <p className="mt-2 text-sm text-[#6B7280]">
          2026年2月8日 制定
        </p>

        <div className="mt-10 space-y-8 text-[#374151] leading-relaxed">
          <p>
            この利用規約（以下「本規約」といいます。）は、[あなたのサービス名または会社名]（以下「当社」といいます。）が提供するオンライン自習室サービス（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第1条（適用）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
              <li>当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます。）をすることがあります。これら個別規定はその名称にいかかわらず、本規約の一部を構成するものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第2条（利用登録）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本サービスにおいては、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
              <li>未成年者が本サービスを利用する場合、親権者等の法定代理人の同意を得るものとします。</li>
              <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                <ul className="list-none pl-4 mt-2 space-y-1">
                  <li>(1) 利用登録の申請に際して虚偽の事項を届け出た場合</li>
                  <li>(2) 本規約に違反したことがある者からの申請である場合</li>
                  <li>(3) その他、当社が利用登録を相当でないと判断した場合</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
              <li>ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第4条（利用料金および支払方法）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、本サービスの有料部分（Proプラン等）を利用する場合、当社が別途定め本サイトに表示する利用料金を、当社が指定する方法により支払うものとします。</li>
              <li>ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。</li>
              <li>一度支払われた利用料金については、理由の如何を問わず返金を行わないものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第5条（禁止事項）</h2>
            <p className="mb-3">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <div className="space-y-3">
              <p className="font-medium text-[#111827]">1. 映像・配信に関する禁止事項</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>(1) 公序良俗に反する映像（わいせつ、暴力的、残虐な映像等）を配信する行為</li>
                <li>(2) 他のユーザーまたは第三者の肖像権、プライバシーを侵害する映像を配信する行為</li>
                <li>(3) 本サービスの画面を録画、スクリーンショット、キャプチャし、SNS等に公開する行為（他のユーザーのプライバシー保護のため）</li>
                <li>(4) 政治活動、宗教活動、マルチ商法等の勧誘を目的とした配信や行為</li>
                <li>(5) 生活音や雑音等により、他のユーザーの集中を著しく妨げる行為（音声機能がある場合）</li>
              </ul>
              <p className="font-medium text-[#111827] pt-2">2. その他の禁止事項</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>(1) 法令または公序良俗に反する行為</li>
                <li>(2) 犯罪行為に関連する行為</li>
                <li>(3) 当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>(4) 当社のサービスの運営を妨害するおそれのある行為</li>
                <li>(5) 他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>(6) 不正アクセスをし、またはこれを試みる行為</li>
                <li>(7) 他のユーザーに成りすます行為</li>
                <li>(8) 反社会的勢力等に対して直接または間接に利益を供与する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第6条（本サービスの提供の停止等）</h2>
            <p className="mb-2">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第7条（利用制限および登録抹消）</h2>
            <p className="mb-2">当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>登録事項に虚偽の事実があることが判明した場合</li>
              <li>料金等の支払債務の不履行があった場合</li>
              <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第8条（退会）</h2>
            <p>ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第9条（保証の否認および免責事項）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。</li>
              <li>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等（カメラ映像を通じたトラブル等を含みます）について一切責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第10条（サービス内容の変更等）</h2>
            <p>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第11条（利用規約の変更）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                <ul className="list-none pl-4 mt-2 space-y-1">
                  <li>(1) 本規約の変更がユーザーの一般の利益に適合するとき。</li>
                  <li>(2) 本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                </ul>
              </li>
              <li>当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第12条（個人情報の取扱い）</h2>
            <p>当社は、本サービスの利用によって取得する個人情報については、当社「<Link href="/privacy" className="text-[#6366f1] hover:underline">プライバシーポリシー</Link>」に従い適切に取り扱うものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第13条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所（東京地方裁判所等）を専属的合意管轄とします。</li>
            </ol>
          </section>

          <p className="text-center font-medium text-[#111827] pt-6">以上</p>
          <p className="text-center text-sm text-[#6B7280]">2026年2月8日 制定</p>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
}
