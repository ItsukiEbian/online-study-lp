import Link from "next/link";

export const metadata = {
  title: "免責事項 | オンライン自習室",
  description: "Study Ops サービスの免責事項",
};

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-slate-900">
      {/* ヘッダー */}
      <header className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6 md:px-10">
          <Link
            href="/"
            className="text-lg font-serif font-semibold tracking-wide text-slate-900 transition-colors hover:text-amber-700"
          >
            Study Ops
          </Link>
        </div>
      </header>

      {/* 本文 */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-center text-2xl font-serif font-semibold text-slate-900 md:text-3xl">
          免責事項
        </h1>

        <div className="mt-10 leading-relaxed font-light text-slate-700">
          {/* リード文 */}
          <p>
            Study Grit社（以下「当社」といいます。）が提供するオンライン自習室および学習支援サービス「Study Ops」（以下「本サービス」といいます。）の利用にあたり、ユーザー（受講者本人）およびその保護者（以下、総称して「ユーザー等」といいます。）は、以下の免責事項に同意するものとします。
          </p>

          {/* 第1条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第1条（成績向上および志望校合格の非保証）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              本サービスは、オンライン自習室の提供、メンターによる学習指導、およびアプリケーション等を通じた学習支援により、ユーザーの主体的な学習環境を整えることを目的とするものであり、特定の科目の成績向上や、大学をはじめとする志望校への合格を確実に保証するものではありません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              ユーザーの学習成果は、ユーザー本人の学習への取り組み、適性、およびその他の外部要因に大きく依存するものであり、当社およびメンターは、本サービスの利用の結果として生じた不利益（不合格、成績の低下等）について、一切の損害賠償責任を負いません。
            </li>
          </ol>

          {/* 第2条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第2条（メンターの指導およびシステムによるサポートの性質）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              本サービスにおいてメンターが提供する学習指導、進路相談、各種助言、ならびに本サービス内のシステム（AI等を含みます）が提供する解答や解説等の情報は、ユーザーの学習を補助するためのものであり、その内容の完全性、正確性、最新性、およびすべてのユーザーにとっての絶対的な正解であることを当社が保証するものではありません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              メンターの助言やシステムから得られた情報に基づきユーザーが選択した学習方法や進路等の決定は、ユーザー等の自己責任において行われるものとし、当該決定によって生じた結果について、当社はいかなる責任も負いません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              当社は、ユーザーが希望する特定の時間帯に、特定のメンターによる指導が受けられることを常に確約するものではありません。メンターのスケジュール等の都合により、指導日時の変更をお願いする場合があります。
            </li>
          </ol>

          {/* 第3条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第3条（通信環境、システム障害および不可抗力に関する免責）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              本サービスの利用にあたり、ユーザー側のインターネット回線、通信機器、PC、スマートフォン等の不具合やスペック不足により、映像や音声の乱れ、接続の切断、学習の遅れなどの損害が生じた場合、当社はこれらについて責任を負いません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              当社は、通常講ずるべき対策では防止できないウィルス被害、停電、火災、天災地変等の不可抗力、または当社の責に帰さないサーバーダウンやネットワークの障害等により、本サービスの提供が一時的に中断・停止した場合にユーザー等に生じた不利益や損害について、賠償する責任を負いません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              当社は、システムの保守・メンテナンス等、運用上あるいは技術上の理由により本サービスの中断が必要であると判断した場合、事前の通知（緊急時は事後通知）をもってサービスを一時停止することがあり、ユーザー等はこれをあらかじめ承諾するものとします。
            </li>
          </ol>

          {/* 第4条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第4条（外部サービスの利用に関する免責）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              本サービスの提供において、オンライン通話ツール（Zoom等）やその他の第三者が提供する外部のソフトウェア・アプリケーション（以下「外部サービス」といいます。）を利用する場合、ユーザー等は当該外部サービスの利用規約に従うものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              外部サービス自体のシステム障害、仕様変更、またはサービスの終了等に起因して、予定されていたオンライン指導や自習室の利用ができなかった場合、当社はその直接の責任を負わず、損害賠償や利用料金の返還等は原則として行いません。
            </li>
          </ol>

          {/* 第5条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第5条（ユーザー間および第三者とのトラブルに関する免責）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              オンライン自習室その他の本サービス内において、ユーザー同士、またはユーザーと第三者（他のユーザーの保護者を含みます。）との間で生じたトラブル（チャット等での不適切な発言、嫌がらせ、誹謗中傷、肖像権の侵害等を含みます。）について、当社は原則として介入する義務を負わず、一切の責任を負いません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              ユーザー間において前項のトラブルが生じた場合、当事者であるユーザー等の責任と費用において解決するものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              万一、ユーザー等の故意または過失に基づくトラブルや規約違反により当社が損害を被った場合、当社は該当するユーザー等に対して、当社が負担した弁護士費用を含む一切の費用および損害の賠償を請求できるものとします。
            </li>
          </ol>

          {/* 第6条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第6条（データの消失に関する免責）
          </h2>
          <p className="mt-4">
            本サービスに関連して記録された学習時間データ、メッセージやチャットの履歴、指導の記録等のデータが、システムの不具合等により消失した場合であっても、当社はデータの完全な復旧義務、および消失に伴う損害賠償の責任を負いません。ユーザー等は、自らの責任で必要な情報を適宜控え、保管するものとします。
          </p>

          {/* 第7条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第7条（損害賠償責任の制限と消費者契約法等の適用）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              本規約における当社の免責に関する各規定は、当社に故意または重過失がある場合には適用されません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              消費者契約法その他の強行法規の適用により、本規約の免責条項の一部が無効とされ、当社がユーザー等に対して損害賠償責任を負うと判断された場合であっても、当社の責任は、ユーザーに直接かつ現実に生じた通常の損害の範囲内に限定されるものとします。特別な事情から生じた損害（予見可能性の有無を問いません。）および逸失利益（将来の期待利益の喪失等）については責任を負わないものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              前項の場合における当社の損害賠償額の上限は、当該損害が発生した事象に関連して、過去1ヶ月間に当該ユーザー等が当社に支払った本サービスの利用料金の金額を上限とします。ただし、当社に故意または重過失がある場合はこの限りではありません。
            </li>
          </ol>

          {/* 第8条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第8条（著作権等）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              ユーザー等は、Study OpsおよびStudy Opsに関連して発生する著作物、公式問題集/授業テキストに関連する著作権、システム等についての著作権その他の知的財産権は、当社または当社に使用許諾を行った第三者に帰属するものであることを確認し、いかなる目的であれ転載、複製、送信、翻訳・翻案、改変・追加等の一切の使用行為を行わないものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              本条の規定に違反して紛争が生じた場合、ユーザー等は、自己の費用と責任において、当該紛争を解決するとともに、当社および第三者に一切の損害を与えないものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              ユーザー等は、自らが投稿、アップロード又は送信したあらゆる内容や、これに関する著作権、特許権、商標権その他の知的財産権や所有権について、無償で、非独占的で、ロイヤルティの発生しない、永久の、全世界的な、サブライセンス可能で、譲渡可能なライセンスを、当社に付与するものとします。本ライセンスは、ユーザー等が、自らまたは当社によって、Study Opsの利用を中止または停止した後であっても消滅しないものとします。ユーザー等は、当社又は当社から同様の権利を承継する第三者に対して、著作者人格権を含む人格権を行使しないことにも同意します。
            </li>
          </ol>

          {/* 第9条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第9条（当社の免責）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              当社は、以下の事項を保証するものではありません。
              <ul className="mt-2 list-none space-y-1 pl-6">
                <li>（1）Study Opsの提供に不具合やエラーや障害（学習履歴その他Study Ops内のデータの消失を含みますが、これに限られません。）が生じないこと</li>
                <li>（2）Study Opsから得られる情報等が正確なものであること</li>
                <li>（3）Study Opsを通じて入手できる役務、情報等がユーザー等の期待を満たすものであること</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              ユーザー等は、当社がStudy Opsにおいて当社または第三者より提供される情報（広告その他第三者により提供される情報等を含みますが、これらに限られません。）について、その最新性、真実性、合法性、安全性、適切性、有用性、Study Opsによる効果（Study Opsの利用によるユーザーの学力の向上等を含みます。）一切について何ら保証しないことを了承のうえ、自己の責任においてStudy Opsを利用するものとします。万一、ユーザー等につき、当該情報に関して何らかのトラブルが生じた場合にも、当社は、何ら責任を負いません。ただし、当社の故意または重過失により当該トラブルが発生した場合は、この限りではありません。
            </li>
          </ol>

          {/* 第10条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第10条（個人情報）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              Study Opsの利用によって当社が取得するユーザー等の個人情報の取扱いについては、別途定めるプライバシーポリシーに従うものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              ユーザー等は、Study Opsの利用にあたってユーザー等提供した個人情報を当社または提携サービス運営者が利用することに同意するものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              ユーザーは、Study Opsの利用にあたって取得されるStudy Opsの利用状況、成績、個人情報などについて、当社が利用保護者に提供できることに同意するものとします。
            </li>
          </ol>

          {/* 第11条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第11条（統計情報・属性情報・利用記録の閲覧、集計および利用）
          </h2>
          <p className="mt-4">
            当社は、会員登録・抹消の前後を問わず、Study Opsを利用してユーザー等が登録したユーザー等の個人情報、Study Opsの利用履歴（ページビュー、動画閲覧履歴、各種演習問題の学習履歴、Study Opsを通じた学習の過程、態様、成否のステータス等を含みますが、これらに限られません。）、およびこれらを個人を特定または特定しないで解析した後、個人を特定または特定しないで加工、集計および分析した統計データ、属性情報等を作成し、当該解析結果、利用履歴、統計データ、属性情報等につき何らの制限なく利用（ユーザーに関するこれらの情報を利用保護者に提供すること、企業への提案、市場の調査、新サービスの開発を含みますが、これらに限られません。）することができるものとし、ユーザー等はこれをあらかじめ承諾します。
          </p>

          {/* 第12条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第12条（当社の責任）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              Study Opsの各種サービスは、当社が定める水準（教師・講師の質、サポートの内容・提供手段、授業における音質、通信速度、通信の安定性等を含みますが、これらに限られません。）に基づき提供されるものであり、ユーザー等は、当該サービスの内容・サービス水準がユーザー等の期待を全て満たすものではないことを予め承諾するものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              当社は、ユーザー等によるStudy Opsの利用（これに付随する当社または第三者の情報提供行為等を含みます）、その他Study Opsを通じてアクセスできる第三者が提供するウェブサイトおよびサービス（提携サービスを含みますが、これに限られません。）によりユーザー等に生じる一切の損害（Study Opsの利用により生じた通信端末等の障害、第三者とのトラブル、精神的苦痛またはその他の金銭的損失を含む一切の不利益を含みますが、これらに限られません。）につき、当社の責に帰すべき事由がない限り、一切の責任を負わないものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              当社が債務不履行、不法行為等当社の責に帰すべき事由によりユーザー等に損害を与えた場合、当社は、ユーザー等について発生した直接かつ通常の損害に限り、賠償します。ただし、当社に故意または重過失がありこれにより損害を生じた場合は、かかる上限を超えて賠償するものとします。
            </li>
          </ol>

          {/* 第13条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第13条（反社会的勢力の排除）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              ユーザー等は、現在および将来にわたり、次の各号のいずれにも該当しないことを表明し、保証するものとします。
              <ul className="mt-2 list-none space-y-1 pl-6">
                <li>（1）暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団その他これらに準ずる者（以下これらを暴力団員等という）。</li>
                <li>（2）暴力団員等に経営を支配され、または経営に実質的に関与されていると認められる関係その他社会的に非難されるべき関係にある者。</li>
                <li>（3）自己もしくは第三者の不正利益目的または第三者への加害目的等、不当に暴力団員等を利用していると認められる関係にある者。</li>
                <li>（4）暴力団員等への資金等提供、便宜供与などの関与をしていると認められる関係にある者。</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              ユーザー等は、自らまたは第三者を利用して次の各号の一にでも該当する行為を行わないことを確約するものとします。
              <ul className="mt-2 list-none space-y-1 pl-6">
                <li>（1）暴力的または法的な責任を超えた不当な要求行為。</li>
                <li>（2）脅迫的な言動、暴力を用いる行為をし、または風説の流布、偽計もしくは威力を用いて当社の信用を毀損し、または当社の業務を妨害する行為。</li>
                <li>（3）その他前各号に準ずる行為。</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              ユーザー等が前2項に違反したときは、当社は、ユーザー等に対する何らの通知催告を要することなく、Study Opsの退会、利用停止、各種契約を解除できるものとし、また、当社に生じた損害を賠償する責を負うものとします。
            </li>
          </ol>

          {/* 第14条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第14条（譲渡等禁止）
          </h2>
          <p className="mt-4">
            ユーザー等は、当社の事前の書面による承諾なしに、本契約により生じた権利義務を第三者に譲渡し、承継させ、貸与し、または担保に供することはできないものとします。
          </p>

          {/* 第15条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第15条（利用停止）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              ユーザー等（保護者がいる場合は保護者のみを意味するものとします。）は、Study Opsの利用の全部または一部を停止したい場合、当社所定の利用停止手続きを行うことで、Study Opsの利用の全部または一部を一時的に停止することができるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              当社は、ユーザー等が前項の停止をした場合、Study Opsにおいて登録または利用した情報の全部または一部を削除する権限を有するものとし、ユーザー等はこれに異議を唱えられないものとします。ユーザー等は、自らの責任で必要な情報を保管するものとします。
            </li>
          </ol>

          {/* 第16条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第16条（退会）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              保護者は、Study Opsの利用の全部または一部を中止したい場合、当社所定の退会手続きを行うことで、Study Opsの利用の全部または一部を中止し、利用契約の全部または一部を解約することができるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              当社は、保護者が前項の退会をした場合、Study Opsにおいて登録または利用した情報の全部または一部を削除する権限を有するものとし、保護者はこれに異議を唱えられないものとします。保護者は、自らの責任で必要な情報を保管するものとします。
            </li>
          </ol>

          {/* 第17条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第17条（会員登録の抹消等）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              当社は、ユーザーまたは保護者のいずれかが本規約に違反したと判断した場合、ユーザー等に対し事前に通知することなく、当該ユーザー等に対して、Study Opsの全部または一部の利用の一時停止、会員登録の抹消、将来にわたる利用または会員登録の禁止、並びにメッセージまたはStudy Opsにおいて入力された情報の全部または一部の停止・削除、当該情報のStudy Ops上での非表示処理等、当社が適切と判断した措置を行うことができるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              当社は、利用契約が終了するなど合理的にみて必要となる場合、ユーザー等に対し事前に通知することなく、前項に定める措置を行うことができるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              当社は、ユーザーが一定期間以上Study Opsを利用しない場合、その他当社が合理的にみて必要と認めた場合には、当該ユーザー等に対し事前に通知したうえで、会員登録を抹消することがあります。
            </li>
          </ol>

          {/* 第18条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第18条（サービスの中断、変更、終了）
          </h2>
          <p className="mt-4">
            当社は、ユーザー等へ事前に通知することなく、Study Opsが提供するサービス内容の変更、一時的もしくは長期的な中断、またはサービス自体を終了することができ、ユーザー等はこれを予め承諾するものとします。
          </p>

          {/* 第19条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第19条（サービスの一時的な停止）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              当社は、以下の各号のいずれかに該当する場合には、ユーザー等への事前の通知をすることなく、Study Opsおよび当該サイト上で提供するサービスの一時的な運営の停止を行うことがあります。
              <ul className="mt-2 list-none space-y-1 pl-6">
                <li>（1）Study Opsの保守または仕様の変更を行う場合</li>
                <li>（2）天変地異その他非常事態が発生し、または発生するおそれがあり、Study Opsおよび当該サイト上で提供する各種サービスの運営ができなくなった場合</li>
                <li>（3）当社がやむを得ない事由によりStudy Opsおよび当該サイト上で提供する各種サービスの運営上一時的な停止が必要であると判断した場合</li>
              </ul>
            </li>
          </ol>

          {/* 第20条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第20条（不可抗力）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              当社は、通常講ずるべき対策では防止できないウィルス被害、停電被害、サーバ故障、回線障害、および天変地異による被害、その他当社の責によらない不可抗力に基づく事由（以下「不可抗力」といいます。）による被害がユーザー等に生じた場合、一切責任を負わないものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              前項は、Study Opsを運営するにあたっての当社の提携企業（当該提携企業の提携先・再委託先等も含み、以下「提携先等」といいます。）に発生する不可抗力においても適用されるものとし、提携先等が事業を行う国・地域における自然災害、暴動、労働争議および政情不安等の提携先等の責によらない事由により、Study Opsの提供が不可能である場合においても当然に適用されるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span>{" "}
              当社は、不可抗力に起因してStudy Opsにおいて管理または提供されるデータが消去・変更されないことを保証しません。
            </li>
          </ol>

          {/* 第21条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第21条（規約の変更）
          </h2>
          <ol className="mt-4 list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-slate-900">1.</span>{" "}
              当社は、当社ウェブサイトまたは本アプリに事前掲示することにより、本規約および規程等を変更（追加・削除を含みます。）することができるものとします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span>{" "}
              変更された本規約および規程等は、前項の事前掲示の際に定めた効力発生日から効力を生じるものとします。
            </li>
          </ol>

          {/* 第22条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第22条（分離条項）
          </h2>
          <p className="mt-4">
            本規約および規程等に定めるいずれかの条項が管轄権のある裁判所により無効である旨判断された場合には、かかる条項は、法律が許容する限りで、本来の条項の趣旨を最大限実現するように変更または解釈されるものとし、また、本規約および規程等のその他の条項の効力には何らの影響を与えないものとします。
          </p>

          {/* 第23条 */}
          <h2 className="mt-10 border-b border-slate-300 pb-2 text-lg font-serif font-semibold text-slate-900">
            第23条（準拠法および管轄）
          </h2>
          <p className="mt-4">
            本規約の準拠法は日本法とし、本規約に関する一切の紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

          {/* 附則 */}
          <p className="mt-12 text-right text-sm text-slate-500">
            （附則） 2026年2月19日作成・適用
          </p>

          <div className="mt-16 text-center">
            <Link href="/" className="text-slate-600 underline transition-colors hover:text-slate-800">
              ホームへ戻る
            </Link>
          </div>
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
            <Link href="/disclaimer" className="font-medium text-amber-700">
              免責事項
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
