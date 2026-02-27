import Link from "next/link";

export const metadata = {
  title: "利用規約 | オンライン自習室",
  description: "オンライン自習室サービスの利用規約",
};

function SimpleHeader() {
  return (
    <header className="border-b border-slate-200/60 bg-stone-50">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-slate-900 hover:text-amber-700 transition"
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

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-slate-900">
      <SimpleHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          利用規約
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          2026年2月9日 制定
        </p>

        <div className="mt-10 space-y-8 font-light text-slate-700 leading-relaxed">
          <p>
            この利用規約（以下「本規約」といいます。）は、[あなたのサービス名]（以下「当社」といいます。）が提供するオンライン自習室サービス（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
          </p>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第1条（適用）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
              <li>当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます。）をすることがあります。これら個別規定はその名称にいかかわらず、本規約の一部を構成するものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第2条（利用登録）</h2>
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
            <h2 className="text-lg font-bold text-slate-900 mb-3">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
              <li>ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第4条（利用料金および支払方法）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本サービスの有料プラン（以下「有料プラン」といいます。）は、サブスクリプション方式とします。</li>
              <li>ユーザーは、当社の定める方法（クレジットカード決済等）により利用料金を支払うものとします。</li>
              <li>本サービスの契約期間は、利用契約の締結日（または利用開始日）から起算して1ヶ月間とし、以降も解約手続きが行われない限り、1ヶ月ごとに自動的に更新されるものとします。</li>
              <li>契約期間の途中で解約手続きが行われた場合でも、当該契約期間満了日までの利用料金は全額発生し、日割り計算等による返金は行わないものとします。なお、解約手続き完了後も、当該契約期間満了日までは本サービスを利用することができます。</li>
              <li>前項の規定にかかわらず、当社の責めに帰すべき事由によりサービスが全く利用できなかった期間がある場合など、法令の定める場合はこの限りではありません。</li>
              <li>ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第5条（禁止事項）</h2>
            <p className="mb-3">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <div className="space-y-3">
              <p className="font-medium text-slate-900">1. 映像・配信内容に関する禁止事項</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>(1) 法令または公序良俗に反する映像（わいせつ、暴力的、残虐な映像等）を配信する行為</li>
                <li>(2) 過度に露出の多い服装（上半身裸を含む）、または下着姿等で配信する行為</li>
                <li>(3) 自身の個人情報（住所が特定できる窓の外の風景、郵便物、クレジットカード、身分証等）が映り込む状態で配信する行為</li>
                <li>(4) 勉強や作業の意図が見受けられない、長時間の睡眠や放置行為</li>
                <li>(5) 飲酒、喫煙を行いながらの配信</li>
                <li>(6) 政治活動、宗教活動、マルチ商法等の勧誘を目的とした配信や行為</li>
                <li>(7) 生活音や雑音等により、他のユーザーの集中を著しく妨げる行為（音声機能がある場合）</li>
              </ul>
              <p className="font-medium text-slate-900 pt-2">2. その他の禁止事項</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>(1) 犯罪行為に関連する行為</li>
                <li>(2) 当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>(3) 他のユーザーへの嫌がらせや誹謗中傷、ストーカー行為</li>
                <li>(4) 他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>(5) 不正アクセスをし、またはこれを試みる行為</li>
                <li>(6) 他のユーザーに成りすます行為</li>
                <li>(7) 反社会的勢力等に対して直接または間接に利益を供与する行為</li>
                <li>(8) その他、当社が不適切と判断する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第6条（本サービスの提供の停止等）</h2>
            <p className="mb-2">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
            <ul className="list-none pl-4 space-y-1">
              <li>(1) 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>(2) 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>(3) コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>(4) その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第7条（利用制限および登録抹消）</h2>
            <p className="mb-2">当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
            <ul className="list-none pl-4 space-y-1">
              <li>(1) 本規約のいずれかの条項に違反した場合</li>
              <li>(2) 登録事項に虚偽の事実があることが判明した場合</li>
              <li>(3) 料金等の支払債務の不履行があった場合</li>
              <li>(4) その他、当社が本サービスの利用を適当でないと判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第8条（退会）</h2>
            <p>ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第9条（保証の否認および免責事項）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。</li>
              <li>ユーザーは、本サービスが映像を共有するサービスであることを理解し、自身の背景、服装、映り込む物品等について自らの責任で管理するものとします。意図せず個人情報やプライバシーに関わる情報が配信された場合であっても、当社は一切の責任を負いません。</li>
              <li>本サービスはオンライン上の公開された場としての性質を持ちます。ユーザーは、自身の配信する映像が他のユーザーによって閲覧され、スクリーンショット等で保存・共有される可能性があることを予め承諾するものとします。これに起因して生じたトラブルについて、当社は一切関知しません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第10条（サービス内容の変更等）</h2>
            <p>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第11条（利用規約の変更）</h2>
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
            <h2 className="text-lg font-bold text-slate-900 mb-3">第12条（個人情報の取扱い）</h2>
            <p>当社は、本サービスの利用によって取得する個人情報については、当社「<Link href="/privacy" className="text-amber-700 hover:underline">プライバシーポリシー</Link>」に従い適切に取り扱うものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">第13条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当社の本店所在地（個人事業主の場合はその住所地）を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>
          </section>

          <p className="text-center font-medium text-slate-900 pt-6">以上</p>

          <div className="mt-16 text-center">
            <Link href="/" className="text-slate-600 underline transition-colors hover:text-slate-800">
              ホームへ戻る
            </Link>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
}
