import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | オンライン自習室",
  description: "オンライン自習室サービスのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      {/* ヘッダー */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6 md:px-10">
          <Link
            href="/"
            className="text-lg font-bold text-gray-900 transition-colors hover:text-blue-600"
          >
            Study Ops
          </Link>
        </div>
      </header>

      {/* 本文 */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          プライバシーポリシー
        </h1>
        <p className="mt-2 text-sm text-gray-500">2026年2月9日 制定</p>

        <div className="mt-10 space-y-8 leading-relaxed text-gray-700">
          <p>
            当社は、「個人情報の保護に関する法律」（以下、「法」といいます）に基づき、個人情報の適切な保護と利用に関する個人情報保護方針を制定し、公表いたします。
          </p>

          {/* 個人情報保護方針 */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-gray-900">個人情報保護方針</h2>
            <ol className="list-none space-y-3 pl-0">
              <li>
                <span className="font-bold text-gray-900">1.</span>{" "}
                当社は、個人情報の適切な保護と利用に関し、関連法令等に加えて、本方針に定めた事項を遵守し、お客さまの個人情報の適切な保護と利用に努めるとともに、情報化の進展に適切に対応するため、当社における個人情報保護の管理体制およびその取組みについて、継続的な改善に努めます。
              </li>
              <li>
                <span className="font-bold text-gray-900">2.</span>{" "}
                当社は、お客さまの個人情報について、利用目的を特定するとともに、法で定める場合等を除き、その利用目的の達成に必要な範囲内において利用いたします。
              </li>
              <li>
                <span className="font-bold text-gray-900">3.</span>{" "}
                当社では、前記2で特定した利用目的の達成に必要な範囲で、適正かつ適法な手段により、お客さまの個人情報を取得いたします。
              </li>
              <li>
                <span className="font-bold text-gray-900">4.</span>{" "}
                当社は、法に定める場合を除き、あらかじめご本人の同意を得ることなく、お客さまの個人情報を第三者に提供することはいたしません。
              </li>
              <li>
                <span className="font-bold text-gray-900">5.</span>{" "}
                当社は、お客さまの個人情報に関し、情報の紛失・改ざんおよび漏えい等の防止のため、適切な安全管理措置を実施いたします。また、お客さまの個人情報を取扱う全ての役職員に対し、個人情報保護の重要性についての教育を行うとともに、お客さまの個人情報を委託する場合には、委託先について適切に監督いたします。
              </li>
              <li>
                <span className="font-bold text-gray-900">6.</span>{" "}
                当社は、保有個人データ（開示、内容の訂正等の権限を有する個人データであって、その存否が明らかになることにより公益その他の利益が害されるものとして政令で定めるもの、または6ヶ月以内に消去することとなるもの以外のものをいいます）につき、法令に基づきご本人からの開示、訂正等に応じます。当社の個人情報の取扱いにつきまして、ご意見・ご質問がございましたら、当社の個人情報相談窓口にて対応させて頂きます。
              </li>
              <li>
                <span className="font-bold text-gray-900">7.</span>{" "}
                当社は、取り扱う個人情報につき、ご本人からの苦情に対し迅速かつ適切に取り組み、そのための社内体制の整備に努めます。
              </li>
              <li>
                <span className="font-bold text-gray-900">8.</span>{" "}
                当社は本方針の内容を継続的に見直し、その改善に努めます。
              </li>
            </ol>
          </section>

          {/* 個人情報保護法に基づく公表文 */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-gray-900">
              個人情報保護法に基づく公表文
            </h2>
            <p>
              当社は、個人情報の保護に関する法律、個人情報の保護に関する基本方針（閣議決定）、個人情報の保護に関する法律施行令および個人情報の保護に関する法律に基づく主務大臣の定めるガイドライン等に基づき、取得する個人情報および保有個人データの利用目的、第三者提供、開示、訂正等のご請求、および苦情受付に関する事項を公表いたします。なお、従業員などの雇用管理に関する個人情報については、本公表には含みません。
            </p>
          </section>

          {/* 公表事項 */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-gray-900">公表事項</h2>

            {/* 1. 利用目的 */}
            <h3 className="mb-3 font-bold text-gray-900">
              1. 個人情報の利用目的について
            </h3>
            <p className="mb-3">
              当社は、個人情報の保護に関する法律（平成15年5月30日法律第57号）に基づき、お客さまの個人情報を、下記業務ならびに利用目的の達成に必要な範囲で利用いたします。
            </p>

            <p className="mb-2 font-bold text-gray-900">＜業務内容＞</p>
            <ol className="mb-4 list-decimal space-y-1 pl-6">
              <li>オンライン個別指導</li>
              <li>受験コンサルティング</li>
              <li>インターネットによる教材提供事業</li>
              <li>オンライン自習室</li>
              <li>その他、上記各項に関連し、または附帯する事業</li>
            </ol>

            <p className="mb-2 font-bold text-gray-900">＜利用目的＞</p>
            <ol className="mb-8 list-decimal space-y-1 pl-6">
              <li>各種商品の申込受付のため</li>
              <li>本人確認法に基づくご本人さまの確認等や、商品やサービスをご利用いただく資格等の確認のため</li>
              <li>授業のスケジュール管理等、継続的な役務における管理のため</li>
              <li>授業のお申込や継続的なご利用等に際しての判断のため</li>
              <li>お客さまとの契約や法律等に基づく権利の行使や義務の履行のため</li>
              <li>市場調査、ならびにデータ分析やアンケートの実施等による商品やサービスの研究や開発のため</li>
              <li>ダイレクトメールの発送等、商品やサービスに関する各種ご提案のため</li>
              <li>提携会社等の商品やサービスの各種ご提案のため</li>
              <li>各種ご契約の解約やお取引解約後の事後管理のため</li>
            </ol>

            {/* 2. 正確性の確保 */}
            <h3 className="mb-3 font-bold text-gray-900">
              2. 個人データの正確性の確保について
            </h3>
            <p className="mb-8">
              当社は、利用目的の達成に必要な範囲内において、個人データが正確かつ最新の内容に保たれるよう努めます。お届け事項に変更があったときは、書面によりお取引店にお届け下さい。
            </p>

            {/* 3. 共同利用 */}
            <h3 className="mb-3 font-bold text-gray-900">
              3. 個人情報の共同利用について
            </h3>
            <p className="mb-3">
              Study Grit社では以下の取扱いにより個人情報を相互に提供し共同で利用いたします。
            </p>
            <ol className="mb-3 list-decimal space-y-3 pl-6">
              <li>
                共同利用における皆様の個人情報の利用目的は次のとおりです。
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>各種指導契約の締結、継続・維持管理</li>
                  <li>各種商品・サービスのご案内・提供・ＤＭ発送</li>
                  <li>当グループの業務に関する情報提供・運営管理、商品・サービスの充実</li>
                </ul>
              </li>
              <li>
                Study Grit社では、下記の相互提供項目の全部または一部について、皆様の個人情報を相互に提供し、上記利用目的の達成に必要な範囲内で、その情報を取得・利用いたします。
              </li>
              <li>
                相互提供項目は次のとおりです。
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>ご本人に関して：氏名、生年月日、性別、連絡先（住所・電話番号、メールアドレスなど）、職業、就業先および勤務先、口座振替に使用する口座情報</li>
                  <li>ご契約に関して：契約種類、契約日、契約期間、契約終了日、授業料の金額および支払い方法、契約時にご提出いただく各種書類の記載事項</li>
                </ul>
              </li>
              <li>
                共同利用における当社が保持する皆様の個人情報に関しては当社が管理責任を負います。皆様の個人情報の共同利用に関するお問い合わせ、お申し出は、Study Grit社相談窓口またはお電話にて受け付けております。
              </li>
            </ol>

            {/* 4. 開示請求 */}
            <h3 className="mb-3 mt-8 font-bold text-gray-900">
              4. 開示請求等手続きについて
            </h3>
            <p className="mb-3">
              当社は、法第24条2項、第25条、第26条1項、ならびに第27条1項および2項に基づき（以下、これらの手続きを総称して「開示請求等手続」といいます）、ご本人またはその代理人からのご依頼により、以下の要領で開示請求等手続に対応いたします。なお、法第24条2項に基づき利用目的の通知をご希望される場合、及び、法第27条1項および2項に基づき保有個人データの利用停止等をお申し出の場合は、最寄りの本社または支店にお申し出下さい。
            </p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <span className="font-bold text-gray-900">開示請求等手続きの対象となる保有個人データの項目</span>
                <br />
                氏名、住所、電話番号、生年月日、勤務先（勤務先名または職業・電話番号）、取引の履歴に関する情報等
              </li>
              <li>
                <span className="font-bold text-gray-900">開示請求等手続きの受付窓口</span>
                <br />
                受付窓口URL：（準備中）
              </li>
              <li>
                <span className="font-bold text-gray-900">ご提出いただくもの</span>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>個人情報開示依頼書</li>
                  <li>本人確認のための書類（運転免許証やパスポート等の写し1点）</li>
                  <li>法定代理人による開示請求等の場合は、上記に加え代理権があることを確認するための書類</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-gray-900">手数料</span>
                <br />
                法第25条に基づく開示請求の場合は、当社が下記に定める手数料をいただきます。
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>氏名、生年月日、性別、連絡先（住所・電話番号、メールアドレスなど）、職業、就業先および勤務先：1,000円</li>
                  <li>契約種類、契約日、契約期間、契約終了時、授業料の金額および支払い方法、契約時にご提出いただく各種書類の記載事項：3,000円</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-gray-900">回答方法</span>
                <br />
                ご本人よりお届けいただいた住所宛てにご郵送する方法で遅滞なく書面にて回答いたします。なお、代理人によるご依頼の場合であっても、ご本人に直接回答することがございますので、予めご了承願います。
              </li>
              <li>
                <span className="font-bold text-gray-900">開示請求等手続きに関して</span>
                <br />
                取得した個人情報の利用目的：開示請求等手続きにより当社が取得した個人情報は、当該手続きのための調査、ご本人ならびに代理人の本人確認、および当該開示請求等に対する回答に利用いたします。
              </li>
              <li>
                <span className="font-bold text-gray-900">開示しない場合のお取扱いについて</span>
                <br />
                次に定める場合は、開示いたしかねますので、予めご了承願います。開示しないことを決定した場合は、その旨理由を付して通知申し上げます。
                <ol className="mt-2 list-decimal space-y-1 pl-6">
                  <li>ご本人の確認ができない場合</li>
                  <li>代理人によるご依頼に際して、代理権が確認できない場合</li>
                  <li>所定の依頼書類に不備があった場合</li>
                  <li>ご依頼のあった情報項目が、保有個人データに該当しない場合</li>
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>他の法令に違反することとなる場合</li>
                </ol>
              </li>
              <li>
                <span className="font-bold text-gray-900">その他お問い合わせについて</span>
                <br />
                当社の個人情報に関するお問い合わせ、苦情等につきましては、下記窓口までお願い致します。
              </li>
            </ol>

            {/* 5. Cookie */}
            <h3 className="mb-3 mt-8 font-bold text-gray-900">
              5. クッキー（Cookie）について
            </h3>
            <p>
              本ウェブサイトには、お客さまに一層便利にご利用いただくために一部のページで「Cookie」という技術を使用しています。Cookieとはウェブサーバからお客様のブラウザに送信される小規模なデータのことで、これによりお客さまのコンピューターを識別することができますが、お客さまのお名前、ご住所、電話番号、メールアドレスといった個人を特定することが可能な情報を取得することは一切ありません。本ウェブサイトでは、Cookieにより取得した情報を、ホームページをより便利にご利用頂けるよう改良したり、Yahoo!Japan・Google からの広告を表示するために利用しております。
            </p>
            <p className="mt-3">
              お客さまは、ご利用いただくブラウザの設定によりCookieの受け取りを拒否したり、Cookieを受け取ったときに警告を表示させたりすることができます。なお、お客様がCookieの受け取りを拒否された場合も本ウェブサイトをご利用いただけますが、一部機能がご利用になれない場合があります。
            </p>
          </section>

          <p className="pt-6 text-center font-bold text-gray-900">以上</p>

          <div className="mt-16 text-center">
            <Link href="/" className="text-gray-600 underline transition-colors hover:text-gray-900">
              ホームへ戻る
            </Link>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="mt-auto border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="font-medium text-blue-600">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-500 transition-colors hover:text-gray-900">
              利用規約
            </Link>
            <Link href="/disclaimer" className="text-gray-500 transition-colors hover:text-gray-900">
              免責事項
            </Link>
          </nav>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Study Ops. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
