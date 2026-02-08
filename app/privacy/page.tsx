import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | オンライン自習室",
  description: "オンライン自習室サービスのプライバシーポリシー",
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
    <footer className="mt-auto border-t border-[#E5E7EB] bg-white px-6 py-12 md:px-10 lg:px-16">
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
          <Link href="/privacy" className="text-[#6366f1] font-medium">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="text-[#6B7280] hover:text-[#111827]">
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

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] font-sans text-[#111827]">
      <SimpleHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-2xl font-semibold text-[#111827] md:text-3xl">
          プライバシーポリシー
        </h1>
        <p className="mt-2 text-sm text-[#6B7280]">
          2026年2月8日 制定
        </p>

        <div className="mt-10 space-y-8 text-[#374151] leading-relaxed">
          <p>
            [あなたのサービス名または会社名]（以下「当社」といいます。）は、当社が提供するオンライン自習室サービス（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第1条（個人情報）</h2>
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第2条（個人情報の収集方法）</h2>
            <p className="mb-3">当社は、ユーザーが本サービスを利用する際に、以下の情報を収集することがあります。</p>
            <div className="space-y-3">
              <p className="font-medium text-[#111827]">1. ユーザーから提供される情報</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>ニックネーム（表示名）</li>
                <li>メールアドレス</li>
                <li>パスワード（暗号化して保存）</li>
                <li>お問い合わせ時の連絡先情報</li>
                <li>クレジットカード情報（※決済代行会社に直接送信され、当社サーバーでは保持しません）</li>
              </ul>
              <p className="font-medium text-[#111827] pt-2">2. サービス利用時に自動的に収集される情報</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>端末情報（OS、ブラウザの種類等）</li>
                <li>IPアドレス</li>
                <li>アクセスログ（利用日時、滞在時間等）</li>
                <li>Cookieおよび類似技術を用いた識別子</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第3条（カメラ映像および音声データの取扱い）</h2>
            <p className="mb-3">本サービスの核心機能である「自習室」におけるカメラ映像および音声データの取扱いは、以下の通り厳格に管理します。</p>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-[#111827]">1. 利用目的の限定</p>
                <p className="pl-4">カメラ映像および音声は、同じ自習室に入室している他のユーザーに対して、リアルタイムで相互通信を行う目的（WebRTC等を用いたP2P通信またはサーバーリレー通信）でのみ利用します。</p>
              </div>
              <div>
                <p className="font-medium text-[#111827]">2. 保存の禁止</p>
                <p className="pl-4">当社は、ユーザーのカメラ映像および音声を、当社のサーバー等の記録媒体に録画・録音・保存することはありません。これらは一時的なデータストリームとして処理され、通信終了後即時に破棄されます。</p>
              </div>
              <div>
                <p className="font-medium text-[#111827]">3. 顔認識等の不実施</p>
                <p className="pl-4">当社は、カメラ映像に対して顔認識技術等を用い、個人の特定や属性の分析を行うことはありません。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第4条（個人情報の利用目的）</h2>
            <p className="mb-3">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>本サービスの提供・運営のため（ログイン認証、自習室機能の提供等）</li>
              <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
              <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
              <li>有料プランの利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第5条（個人情報の第三者提供）</h2>
            <p className="mb-3">当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第6条（外部委託）</h2>
            <p>
              当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を外部（決済代行業者、サーバーホスティング業者等）に委託する場合があります。この場合、当社は当該委託先について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう必要かつ適切な監督を行います。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第7条（Cookieおよび解析ツールについて）</h2>
            <p>
              本サービスでは、Google Analytics等のアクセス解析ツールや、サービスの利便性向上のためにCookie（クッキー）を使用しています。これらは匿名で収集されており、個人を特定するものではありません。ユーザーはブラウザの設定によりCookieを無効にすることができますが、その場合、本サービスの一部機能が利用できなくなる可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第8条（個人情報の開示・訂正・削除）</h2>
            <p>
              ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除を請求することができます。当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく当該個人情報の訂正等を行います。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第9条（プライバシーポリシーの変更）</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。</li>
              <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">第10条（お問い合わせ窓口）</h2>
            <p>
              本ポリシーに関するお問い合わせは、本サービス内のお問い合わせフォームよりお願いいたします。
            </p>
          </section>

          <p className="text-center font-medium text-[#111827] pt-6">以上</p>
          <p className="text-center text-sm text-[#6B7280]">2026年2月8日 制定</p>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
}
