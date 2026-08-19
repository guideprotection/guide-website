import type { Metadata } from "next";
import { jsonLdScript, webPageNode } from "@/lib/json-ld";
import { LogoGlyph } from "@/components/logo";
import { demoUrl, installUrl, OG_IMAGES } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy | Guide post-purchase OS",
  description:
    "How Guide collects, uses, stores and protects personal data for merchants and their shoppers, including sub-processors and retention.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy policy | Guide post-purchase OS",
    description:
      "How Guide collects, uses, stores and protects personal data for merchants and their shoppers, including sub-processors and retention.",
    url: "/privacy",
    images: OG_IMAGES,
  },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            webPageNode({
              path: "/privacy",
              name: "Privacy policy | Guide post-purchase OS",
              description:
                "How Guide collects, uses, stores and protects personal data for merchants and their shoppers, including sub-processors and retention.",
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
              Privacy policy
            </h1>
            <p className="lead" style={{ fontSize: "1.12rem" }}>
              Guide, LLC. Last modified 4 January 2024.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p className="small">Last modified: January 4, 2024</p>

            <h2>Introduction</h2>
            <p>
              Guide, LLC, a Utah limited liability company (&quot;Guide&quot; or &quot;We&quot;) provides a
              shipment tracking application (the &quot;App&quot;) that provides shipping protection for
              orders in transit (the &quot;Service&quot;) to merchants who use Shopify to power their
              online stores. Your use of Shopify is also subject to the{" "}
              <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener">
                Shopify privacy policy
              </a>
              .
            </p>
            <p>
              Guide respects your privacy and is committed to protecting it through our compliance with
              this policy. This policy describes:
            </p>
            <ul>
              <li>
                The types of information we may collect or that you may provide when you install, access,
                or use the App.
              </li>
              <li>
                Our practices for collecting, using, maintaining, protecting, and disclosing that
                information.
              </li>
            </ul>
            <p>
              This policy applies only to information we collect in this App and in email, text, and other
              electronic communications sent through or in connection with this App.
            </p>
            <p>This policy DOES NOT apply to information that:</p>
            <ul>
              <li>
                We collect offline or on any other Company apps or websites, including websites you may
                access through this App.
              </li>
              <li>You provide to or is collected by any third party.</li>
            </ul>
            <p>
              Our websites and apps, and these other third parties may have their own privacy policies,
              which we encourage you to read before providing information on or through them.
            </p>
            <p>
              Please read this policy carefully to understand our policies and practices regarding your
              information and how we will treat it. If you do not agree with our policies and practices, do
              not download or use this App. By downloading, accessing, or using this App, you agree to this
              privacy policy. This policy may change from time to time. Your continued use of this App
              after we revise this policy means you accept those changes, so please check the policy
              periodically for updates. The App is currently only available to U.S. residents.
            </p>

            <h2>Children Under the Age of 16</h2>
            <p>
              The App is not intended for children under 16 years of age, and we do not knowingly collect
              personal information from children under 16. If we learn we have collected or received
              personal information from a child under 16 without verification of parental consent, we will
              delete that information. If you believe we might have any information from or about a child
              under 16 please contact us at <a href="mailto:info@guideprotection.com">info@guideprotection.com</a>.
            </p>

            <h2>Information We Collect and How We Collect It</h2>
            <p>We collect information from and about users of our App:</p>
            <ul>
              <li>Directly from you when you provide it to us.</li>
              <li>Automatically when you use the App.</li>
            </ul>
            <h3>Information We Collect</h3>
            <p>
              When you install the App, we are automatically able to access certain types of information
              from your Shopify account, including:
            </p>
            <ul>
              <li>Shopify account data: such as email address, phone number and location of your store.</li>
              <li>
                Order data: all order details including customer emails, phone numbers, physical addresses,
                geolocations, IP address and browser user agents.
              </li>
              <li>
                Fulfillment and shipping information related with each order, including fulfillment
                location and shipping carrier.
              </li>
              <li>
                Information included in the above by which you may be personally identified, such as name,
                postal address, email address, or telephone number (&quot;personal information&quot;).
              </li>
            </ul>
            <p>This information includes:</p>
            <ul>
              <li>Information that you provide by filling in forms in the App.</li>
              <li>
                Records and copies of your correspondence (including email addresses and phone numbers), if
                you contact us.
              </li>
              <li>Details of transactions you carry out through the App and of the fulfillment of your orders.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any
              personal information, to:
            </p>
            <ul>
              <li>
                Provide you with the App and the Service, and any other information, products or services
                that you request from us.
              </li>
              <li>Fulfill any other purpose for which you provide it.</li>
              <li>
                Carry out our obligations and enforce our rights arising from any contracts entered into
                between you and us, including for billing and collection.
              </li>
              <li>
                Notify you when App updates are available, and of changes to any products or services we
                offer or provide through it.
              </li>
            </ul>
            <p>
              The usage information we collect helps us to improve our App and the Service and to deliver a
              better and more personalized experience by enabling us to:
            </p>
            <ul>
              <li>Estimate our audience size and usage patterns.</li>
              <li>
                Store information about your preferences, allowing us to customize our App according to
                your individual interests.
              </li>
              <li>Speed up your searches.</li>
              <li>Recognize you when you use the App.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not
              identify any individual or device, without restriction.
            </p>
            <p>In addition, we may disclose personal information that we collect or you provide:</p>
            <ul>
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>
                To a buyer or other successor in the event of a merger, divestiture, restructuring,
                reorganization, dissolution, or other sale or transfer of some or all of Guide&apos;s
                assets, whether as a going concern or as part of bankruptcy, liquidation, or similar
                proceeding, in which personal information held by Guide about our App users is among the
                assets transferred.
              </li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
              <li>
                To comply with any court order, law, or legal process, including to respond to any
                government or regulatory request.
              </li>
              <li>
                If we believe disclosure is necessary or appropriate to protect the rights, property, or
                safety of Guide, our customers or others.
              </li>
            </ul>

            <h2>Your Choices About Our Collection, Use, and Disclosure of Your Information</h2>
            <p>
              We strive to provide you with choices regarding the personal information you provide to us.
              This section describes mechanisms we provide for you to control certain uses and disclosures
              of your information.
            </p>
            <p>
              We do not control third parties&apos; collection or use of your information to serve
              interest-based advertising. However these third parties may provide you with ways to choose
              not to have your information collected or used in this way. You can opt out of receiving
              targeted ads from members of the Network Advertising Initiative (&quot;NAI&quot;) on the
              NAI&apos;s website.
            </p>
            <p>California residents may have additional personal information rights and choices.</p>

            <h2>Your California Privacy Rights</h2>
            <p>
              If you are a California resident, California law may provide you with additional rights
              regarding our use of your personal information. To learn more about your California privacy
              rights, visit{" "}
              <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener">
                oag.ca.gov/privacy/ccpa
              </a>
              .
            </p>

            <h2>Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental
              loss and from unauthorized access, use, alteration, and disclosure.
            </p>
            <p>
              Unfortunately, the transmission of information via the internet and mobile platforms is not
              completely secure. Although we do our best to protect your personal information, we cannot
              guarantee the security of your personal information transmitted through our App. Any
              transmission of personal information is at your own risk. We are not responsible for
              circumvention of any privacy settings or security measures we provide.
            </p>

            <h2>Changes to Our Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. If we make material changes to how we
              treat our users&apos; personal information, we will post the new privacy policy on this page
              with a notice that the privacy policy has been updated.
            </p>
            <p>
              The date the privacy policy was last revised is identified at the top of the page. You are
              responsible for ensuring we have an up-to-date active and deliverable email address for you
              and for periodically visiting this privacy policy to check for any changes.
            </p>

            <h2>Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us
              at <a href="mailto:info@guideprotection.com">info@guideprotection.com</a>.
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
            <h2 className="d2">Questions about your data?</h2>
            <p className="lead maxw-md">
              Email info@guideprotection.com and a person will answer, not a ticket queue.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a className="btn btn-dark btn-lg arw" href={demoUrl("privacy-cta")} target="_blank" rel="noopener">
                Book a Demo<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link className="btn btn-ghost btn-lg" href="/products">
                Explore the platform
              </Link>
              <a className="btn btn-app btn-lg" href={installUrl("privacy-cta")} target="_blank" rel="noopener">
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
              Thirty minutes, on your own catalogue &middot; Or install free and set it up yourself
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
