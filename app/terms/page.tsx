import type { Metadata } from "next";
import { jsonLdScript, webPageNode } from "@/lib/json-ld";
import { LogoGlyph } from "@/components/logo";
import { CTA_FOOTER, demoUrl, installUrl, OG_IMAGES } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of service | Guide post-purchase platform",
  description:
    "The terms governing merchant use of the Guide platform, covering fees, coverage, data processing, liability, and how to terminate.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of service | Guide post-purchase platform",
    description:
      "The terms governing merchant use of the Guide platform, covering fees, coverage, data processing, liability, and how to terminate.",
    url: "/terms",
    images: OG_IMAGES,
  },
};

export default function TermsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/terms",
              name: "Terms of service | Guide post-purchase platform",
              description:
                "The terms governing merchant use of the Guide platform, covering fees, coverage, data processing, liability, and how to terminate.",
            }),
          ]),
        }}
      />

      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="canvas" />
        <div className="wrap">
          <div className="stack-20" style={{ maxWidth: 760 }}>
            <span className="kicker">Legal</span>
            <h1 className="d1" style={{ fontSize: "clamp(2.4rem,4.6vw,3.6rem)" }}>
              Terms of use
            </h1>
            <p className="lead" style={{ fontSize: "1.12rem" }}>
              Guide, LLC. Effective 8 April 2024.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p className="small">Effective: 08/04/2024</p>

            <h2>1. Acceptance of Terms of Use; Changes in Terms of Use</h2>
            <p>
              The purpose of this terms of use agreement (&quot;Terms of Use&quot;) is to set forth the
              terms and conditions whereby Guide, LLC (&quot;Guide&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;), make our Shopify application (the &quot;App&quot;), as well as any products
              and services made available thereon, including but not limited to our shipping protection
              services (the &quot;Guide Protection&quot;) (collectively the App, the Guide Protection and
              other products and services made available through the App, the &quot;Services&quot;) and
              the content and materials available on the Services (the &quot;Content&quot;) available to
              merchants (&quot;you&quot; or &quot;your&quot;) and the conditions under which such merchants
              may have access to and use such Services and Content. The Terms of Use, any updates to the
              Terms of Use are referred to as the &quot;Agreement.&quot; These Terms of Use include the
              provisions in this document, as well as those in the{" "}
              <Link href="/privacy">Guide Privacy Policy</Link>.
            </p>
            <p>
              By accessing or using the Services, clicking on a button or taking any other action to
              signify your acceptance of these Terms of Use, you: (1) agree to be bound by these Terms and
              any future amendments and additions to these Terms as published from time to time through
              the App; and (2) represent you are of legal age in your jurisdiction of residence to form a
              binding contract with Guide. YOU UNDERSTAND THAT THE COMPANY PROVIDES THE SERVICES AND DOES
              NOT PROVIDE INSURANCE OR INSURANCE SERVICES.
            </p>
            <p>
              We may revise and update these Terms of Use from time to time in our sole discretion. All
              changes are effective immediately when we post them, and apply to all access to and use of
              the Services thereafter. However, any changes to the dispute resolution provisions set forth
              in Governing Law and Jurisdiction will not apply to any disputes for which the parties have
              actual notice on or prior to the date the change is posted.
            </p>
            <p>
              Your continued use of the Services following the posting of revised Terms of Use means that
              you accept and agree to the changes. You are expected to check this page frequently so you
              are aware of any changes, as they are binding on you. See our current{" "}
              <Link href="/privacy">Privacy Policy</Link> for information and notices regarding our
              collection and use of personal information.
            </p>

            <h2>2. Use of Services and Content</h2>
            <h3>Intellectual Property Rights</h3>
            <p>
              The Services are made available to you by Guide and is designed to enhance your e-commerce
              platform. The App allows you to offer your customers the opportunity to add their shipments
              to the Guide Protection (as described below). The App allows your customers to file a notice
              of loss and track the location of their shipments.
            </p>
            <p>
              The Services, features and functionality (including but not limited to all information,
              software, text, displays, images, video and audio, and the design, selection and arrangement
              thereof), are owned by Guide, its licensors or other providers of such material and are
              protected by United States and international copyright, trademark, patent, trade secret and
              other intellectual property or proprietary rights laws.
            </p>
            <p>
              Subject to these Terms of Use, Guide grants you a limited license to install and use the
              Services solely for the purpose of operating your online store. Any future release, update,
              or other addition to the Services and/or Content shall be subject to these Terms of Use.
              Guide, its suppliers, and its service providers reserve all rights not granted in Terms of
              Use.
            </p>
            <p>
              The Guide name, the Guide logo and all related names, logos, product and service names,
              designs and slogans are trademarks of Guide or its affiliates. You must not use such marks
              without the prior written permission of Guide. All other names, logos, product and service
              names, designs and slogans on the App or through the Services are the trademarks of their
              respective owners.
            </p>
            <h3>Prohibited Uses</h3>
            <p>
              You may use the Services only for lawful purposes and in accordance with these Terms of Use.
              You agree not to use the App or the Services:
            </p>
            <ul>
              <li>
                In any way that violates any applicable federal, state, local or international law or
                regulation (including, without limitation, any laws regarding the export of data or
                software to and from the US or other countries).
              </li>
              <li>
                For the purpose of exploiting, harming or attempting to exploit or harm minors in any way
                by exposing them to inappropriate content, asking for personally identifiable information
                or otherwise.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material without our
                prior written consent, including any &quot;junk mail&quot;, &quot;chain letter&quot; or
                &quot;spam&quot; or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate Guide, a Company employee, another user or any
                other person or entity (including, without limitation, by using e-mail addresses or screen
                names associated with any of the foregoing).
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of
                the Services, or which, as determined by us, may harm Guide or users of the Services or
                expose them to liability.
              </li>
            </ul>
            <p>Additionally, you agree not to:</p>
            <ul>
              <li>
                Use the App or Services in any manner that could disable, overburden, damage, or impair the
                App or interfere with any other party&apos;s use of the App, including their ability to
                engage in real time activities through the App.
              </li>
              <li>
                Use any robot, spider or other automatic device, process or means to access the App for any
                purpose, including monitoring or copying any of the material on the App.
              </li>
              <li>
                Use any manual process to monitor or copy any of the material on the App or for any other
                unauthorized purpose without our prior written consent.
              </li>
              <li>Use any device, software or routine that interferes with the proper working of the App.</li>
              <li>
                Introduce any viruses, trojan horses, worms, logic bombs or other material which is
                malicious or technologically harmful.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the
                App, the server on which the App is stored, or any server, computer or database connected
                to the App.
              </li>
              <li>Otherwise attempt to interfere with the proper working of the Services.</li>
            </ul>

            <h2>3. Guide Protection</h2>
            <h3>Generally</h3>
            <p>
              The Guide Protection extends coverage to shipments where the transportation is tracked
              through Guide. This offer is not intended to provide shipping protection to you directly, and
              the Guide Protection does not constitute insurance. Your election to add packages to Guide
              Protection is entirely optional. You have the option of obtaining protection from an
              alternative source or not at all.
            </p>
            <p>
              The Guide Protection provides shipping protection for your customers&apos; online purchases
              that are lost or damaged while in transit or &quot;porch pirated&quot; (&quot;porch
              pirated&quot; meaning the carrier reports the status as &quot;delivered&quot; but the parcel
              has been stolen from the delivery address and reasonable measures have been taken to locate
              it). Guide also offers custom chargeback protection to qualifying Shopify Plus merchants.
            </p>
            <p>
              Guide will provide your customers with a summary of the Guide Protection and instructions to
              file a notice of loss. Upon your agreement to these Terms of Use, the App and access to the
              Guide Protection will be activated on your site. Guide reserves the right to change pricing
              at any time. If your customers opt in to the Guide Protection, this charge will appear for
              such customers to review and verify at checkout.
            </p>
            <p>
              Guide reserves the right, at the mutual discretion of both the customer and Guide to issue a
              full refund, with such refund transaction to be executed through the Shopify platform.
            </p>
            <p>
              Guide, in accordance with its discretion and adherence to the Guide guidelines, shall furnish
              customers with a replacement order including the cost of shipping, and such replacement shall
              be processed through the Shopify platform.
            </p>
            <h3>Exclusions</h3>
            <p>
              The Guide Protection does not cover the following without a specific written amendment
              (email or service agreement) from Guide: single orders for Basic Shopify, Shopify or Advanced
              Shopify merchants exceeding $500 USD in value, single orders for Shopify Plus merchants
              exceeding $5,000 in value, cash, cigarettes, and other tobacco products; computer memory
              modules and cards; cotton; fine art (defined as art valued in excess of $5,000 per piece);
              fresh foods (excepting frozen foods in refrigerated containers); live animals; negotiable
              papers; perishable commodities (defined as commodities which spoil or deteriorate when not
              carried or stored in a temperature controlled environment); pharmaceutical drugs; precious
              stones and metals; securities; automobiles and motorcycles; boats and yachts; ceramic, marble
              or granite tiles; slabs blocks; countertops; statues; glass windows, plate glass and similar
              goods; lumber; used household goods and personal effects; scrap metal; and steel metal and
              steel metal products. If you sell any of the goods that fall under the categories outlined in
              this section, your customers are not eligible to use the Guide Protection. By agreeing to
              these Terms of Use, you represent that you do not sell any such excluded goods.
            </p>
            <p>
              All fees paid for the Services are non-refundable and non-transferable except as may be
              expressly provided in these Terms of Use. You may cancel the Services at any time at no
              charge: simply uninstall the Services you no longer want to use, and Guide will cease
              providing the Services to you.
            </p>
            <p>
              Claims for packages marked &quot;delivered&quot; yet not received and where there is no
              evidence of &quot;porch piracy&quot; must be made 5 days after the &quot;delivery date&quot;
              but no longer than 30 to 45 days to ensure it was not mis-delivered or easily found around the
              premises.
            </p>
            <p>
              Claims for packages presumed to be lost (where the status is not &quot;delivered&quot;) must
              be filed after 5 days (20 for international) and within 30 to 45 days from the last
              checkpoint.
            </p>
            <p>
              Customers with 3+ approved claims over the trailing 6 months will be inspected and assumed
              fraudulent. Guide reserves the right to investigate and deny any such claims as fraud
              according to our discretion and judgement.
            </p>

            <h2>4. Third Party Services</h2>
            <p>
              Your use of the Services may contain links to third-party services (&quot;Third-Party
              Services&quot;). When you use Third-Party Services, we will not warn you that you have left
              the Guide Services and are subject to the terms and conditions (including privacy policies)
              of another website or destination. Such Third-Party Services are not under the control of
              Guide, and, consequently, Guide is not responsible for any Third-Party Services. Guide
              provides these Third-Party Services only as a convenience and does not review, approve,
              monitor, endorse, warrant, or make any representations with respect to Third-Party Services,
              or any product or service provided in connection therewith. You use all links in Third-Party
              Services at your own risk. When you leave the App, the Agreement and policies no longer
              govern. You should review applicable terms and policies, including privacy and data gathering
              practices, of any Third-Party Services, and make whatever investigation you feel necessary or
              appropriate before proceeding with any transaction with any third party.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              You understand that we cannot and do not guarantee or warrant that files available for
              downloading from the internet or the App will be free of viruses or other destructive code.
              You are responsible for implementing sufficient procedures and checkpoints to satisfy your
              particular requirements for anti-virus protection and accuracy of data input and output, and
              for maintaining a means external to our site for any reconstruction of any lost data. WE WILL
              NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES
              OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER
              PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SERVICES OR ANY SERVICES
              OR ITEMS OBTAINED THROUGH THE SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR
              ON ANY WEBSITE LINKED TO IT.
            </p>
            <p>
              YOUR USE OF THE SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES IS AT YOUR OWN RISK. THE
              SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND
              &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              NEITHER GUIDE NOR ANY PERSON ASSOCIATED WITH GUIDE MAKES ANY WARRANTY OR REPRESENTATION WITH
              RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE
              SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER GUIDE NOR ANYONE ASSOCIATED WITH GUIDE
              REPRESENTS OR WARRANTS THAT THE SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
              ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR
              SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR
              THAT THE SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
              EXPECTATIONS.
            </p>
            <p>
              GUIDE HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR
              OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT
              AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p>
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER
              APPLICABLE LAW.
            </p>

            <h2>6. Limitation on Liability</h2>
            <p>
              IN NO EVENT WILL GUIDE, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
              AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
              ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, ANY WEBSITES
              LINKED TO IT, ANY CONTENT ON THE SERVICES OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS
              OBTAINED THROUGH THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT,
              SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL
              INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF
              BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER
              CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>
            <p>
              THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER
              APPLICABLE LAW.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to defend, indemnify and hold harmless Guide, its affiliates, licensors and service
              providers, and its and their respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors and assigns from and against any claims, liabilities,
              damages, judgments, awards, losses, costs, expenses or fees (including reasonable
              attorneys&apos; fees) arising out of or relating to your violation of the Agreement or your
              use of the Services, including, but not limited to, any use of the Services and products
              other than as expressly authorized in these Terms of Use or your use of any information
              obtained from the Services.
            </p>

            <h2>8. Governing Law and Jurisdiction</h2>
            <p>
              All matters relating to the Services and the Agreement and any dispute or claim arising
              therefrom or related thereto (in each case, including non-contractual disputes or claims),
              shall be governed by and construed in accordance with the internal laws of the State of Utah
              without giving effect to any choice or conflict of law provision or rule (whether of the State
              of Utah or any other jurisdiction).
            </p>
            <p>
              Any legal suit, action or proceeding arising out of, or related to, the Agreement or the
              Services shall be instituted exclusively in the federal courts of the United States or the
              courts of the State of Utah in each case located in the City of Salt Lake City and County of
              Salt Lake, although we retain the right to bring any suit, action or proceeding against you
              for breach of the Agreement in your state or country of residence or any other relevant state
              or country. You waive any and all objections to the exercise of jurisdiction over you by such
              courts and to venue in such courts.
            </p>

            <h2>9. Payment of Fees</h2>
            <p>
              Customer will pay Guide the then applicable fees (the &quot;Fees&quot;). The Consumer pays
              the Fees to the Merchant during the checkout process. Merchant agrees to hold and pay the Fees
              to Guide. Guide utilizes Shopify&apos;s Billing API service to precisely debit the total fees
              accumulated for Guide Shipping Protection. This debit shall transpire at intervals of 30 days,
              enabling the merchant to review the deposited amount in their Shopify Statement.
            </p>
            <p>
              Customer shall be responsible for all taxes associated with Services other than U.S. taxes
              based on Company&apos;s net income.
            </p>

            <h2>10. Termination</h2>
            <p>
              At its sole discretion, Guide may modify or discontinue the Services, or may modify, suspend,
              or terminate your access to the Services, for any reason, with or without notice to you and
              without liability to you or any third party. Guide will not be responsible for refunding or
              otherwise paying any funds, amounts or credits that may be owed to you if we have suspended or
              terminated your permission to use the Services. In addition to suspending or terminating your
              access to the Services, Guide reserves the right to take appropriate legal action, including
              without limitation pursuing civil, criminal or injunctive remedies. Even after your right to
              use the Services is terminated, this Agreement will remain enforceable against you and unpaid
              amounts you owe to Guide for any purchases will remain due.
            </p>

            <h2>11. Arbitration</h2>
            <p>
              At Guide&apos;s sole discretion, it may require you to submit any disputes arising from the
              use of the Services or this Agreement, including disputes arising from or concerning their
              interpretation, violation, invalidity, non-performance, or termination, to final and binding
              arbitration under the Rules of Arbitration of the American Arbitration Association applying
              Utah law.
            </p>

            <h2>12. Limitation on Time to File Claims</h2>
            <p>
              ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR
              THE SERVICES MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES,
              OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
            </p>

            <h2>13. Waiver and Severability</h2>
            <p>
              No waiver by Guide of any term or condition set forth in these Terms of Use shall be deemed a
              further or continuing waiver of such term or condition or a waiver of any other term or
              condition, and any failure of the Company to assert a right or provision under these Terms of
              Use shall not constitute a waiver of such right or provision.
            </p>
            <p>
              If any provision of these Terms of Use is held by a court or other tribunal of competent
              jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be
              eliminated or limited to the minimum extent such that the remaining provisions of these Terms
              of Use will continue in full force and effect.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              The Agreement and our <Link href="/privacy">Privacy Policy</Link>, as applicable, constitute
              the sole and entire agreement between you and Guide, with respect to the Services and
              supersede all prior and contemporaneous understandings, agreements, representations and
              warranties, both written and oral, with respect to the Services.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-wrap">
        <div className="cta-glow" />
        <div className="canvas" />
        <div className="narrow center">
          <div className="stack-28 rv" style={{ justifyItems: "center" }}>
            <span className="logo-tile">
              <LogoGlyph />
            </span>
            <h2 className="d2">Questions about the terms?</h2>
            <p className="lead maxw-md">
              Email info@guideprotection.com and a person will answer, not a ticket queue.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("terms-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("terms-cta")} target="_blank" rel="noopener">
                <svg
                  className="bicon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 8h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z" />
                  <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" />
                </svg>
                Install on Shopify
              </a>
            </div>
            <p className="small">
              {CTA_FOOTER}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
