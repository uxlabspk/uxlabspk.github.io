import { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";

const H2 = "font-display text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.2]";
const BODY = "text-[16px] leading-[1.75] text-graphite";

const SECTIONS = [
  { id: "collect", label: "What we collect" },
  { id: "on-device", label: "On-device by design" },
  { id: "website", label: "This website" },
  { id: "third-parties", label: "Third parties" },
  { id: "retention", label: "Data retention" },
  { id: "rights", label: "Your rights" },
  { id: "changes", label: "Policy changes" },
  { id: "questions", label: "Questions" },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  function handleAnchorClick(id: string) {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Page title="Privacy | Immersyn">

      {/* ── Hero ── */}
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)]">
        <p className="mb-5 text-[14px] font-semibold uppercase tracking-[.18em] text-graphite">
          Privacy policy
        </p>
        <h1 className="mb-7 max-w-[22ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
          Privacy, in plain words.
        </h1>
        <p className="mb-6 max-w-[46ch] font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
          The short version: your data stays yours.
        </p>
        <div className="inline-flex items-center gap-2 rounded-md border border-hair bg-wash px-4 py-2 text-[13px] text-graphite">
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          Last updated: January 2025
        </div>
      </section>

      {/* ── Policy body with TOC ── */}
      <section className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="grid grid-cols-[200px_1fr] items-start gap-[clamp(32px,6vw,80px)] max-[820px]:grid-cols-1">

          {/* Sticky TOC — hidden on mobile */}
          <aside className="sticky top-28 hidden min-[820px]:block">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[.14em] text-graphite">
              On this page
            </p>
            <nav aria-label="Table of contents">
              <ul className="space-y-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      className={`text-left text-[14px] transition-colors duration-150 hover:text-ink ${activeSection === s.id ? "font-medium text-ink" : "text-graphite"}`}
                      onClick={() => handleAnchorClick(s.id)}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="max-w-[68ch] space-y-14">

            <article id="collect">
              <h2 className={`${H2} mb-4`}>What we collect.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  When you join our waitlist, we store one piece of information: your email
                  address. That's it. We use it for one purpose: to tell you when Immersyn
                  is ready to try.
                </p>
                <p>
                  We do not create accounts, we do not ask for your name, and we do not
                  collect any usage data. When you use Immersyn (once released), no prompts,
                  files, or results are ever sent to us — the product is designed so that
                  collection is architecturally impossible, not merely policy-prohibited.
                </p>
              </div>
            </article>

            <article id="on-device">
              <h2 className={`${H2} mb-4`}>On-device by design.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  Prompts, files and results are processed entirely on your device. The model
                  runs locally. No network request is made when you use Immersyn — not to our
                  servers, not to any third party.
                </p>
                <p>
                  There is no server-side record of what you asked or what the model answered.
                  This means there is nothing of yours for us to lose in a breach, sell to a
                  buyer, or hand over to a third party. Privacy here is a consequence of
                  architecture, not of contractual promises you have to trust.
                </p>
                <div className="rounded-xl border border-hair bg-wash p-6">
                  <p className="mb-2 font-medium text-ink">Why this matters.</p>
                  <p className="text-[15px]">
                    Most AI tools send your words to a remote server, process them, and return a
                    result. At every step, your data exists somewhere outside your control. We
                    cut that chain entirely: inference happens on your hardware, in your memory,
                    with no outbound connection.
                  </p>
                </div>
              </div>
            </article>

            <article id="website">
              <h2 className={`${H2} mb-4`}>This website.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  This site is static HTML, CSS and JavaScript — no server-side code, no
                  cookies, no analytics scripts. We do not use Google Analytics, Mixpanel,
                  or any other tracking service.
                </p>
                <p>
                  Your browser makes one request to a third party when it loads this page:
                  Google Fonts CDN, to retrieve Montserrat and IBM Plex Sans. If you prefer to
                  avoid even that, a local font will render as the fallback. No other external
                  request is made.
                </p>
              </div>
            </article>

            <article id="third-parties">
              <h2 className={`${H2} mb-4`}>Third parties.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  We do not sell, rent, or share your email address with any third party for
                  commercial purposes. We may use a transactional email provider to send you
                  the single notification message when Immersyn launches — if so, your email
                  will pass through that provider's infrastructure for delivery only.
                </p>
                <p>
                  We will name any such provider here before we use them. Currently, no such
                  provider is active.
                </p>
              </div>
            </article>

            <article id="retention">
              <h2 className={`${H2} mb-4`}>Data retention.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  We hold your email address until Immersyn launches and we've sent the
                  notification, or until you ask us to remove it — whichever comes first.
                </p>
                <p>
                  To be removed from the waitlist at any time, email{" "}
                  <a
                    className="text-ink underline-offset-[5px] hover:underline"
                    href="mailto:hello@immersyn.ai?subject=Remove me from waitlist"
                  >
                    hello@immersyn.ai
                  </a>{" "}
                  with the subject "Remove me from waitlist." We'll confirm deletion within
                  48 hours.
                </p>
              </div>
            </article>

            <article id="rights">
              <h2 className={`${H2} mb-4`}>Your rights.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  Depending on where you live, you may have rights under privacy laws (such
                  as GDPR or CCPA) including the right to access, correct, or delete the
                  data we hold about you. Because we hold only your email address, exercising
                  any of these rights is straightforward.
                </p>
                <p>
                  Write to{" "}
                  <a
                    className="text-ink underline-offset-[5px] hover:underline"
                    href="mailto:hello@immersyn.ai"
                  >
                    hello@immersyn.ai
                  </a>{" "}
                  and a human will handle your request within a reasonable time.
                </p>
              </div>
            </article>

            <article id="changes">
              <h2 className={`${H2} mb-4`}>Policy changes.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  If we change this policy in a meaningful way, we will update the "last
                  updated" date at the top of this page and, if the change affects how we
                  handle data we already hold, we will email anyone on the waitlist to let
                  them know.
                </p>
                <p>
                  Minor editorial changes (correcting a typo, clarifying a sentence without
                  changing its meaning) will be made silently.
                </p>
              </div>
            </article>

            <article id="questions">
              <h2 className={`${H2} mb-4`}>Questions.</h2>
              <div className={`${BODY} space-y-4`}>
                <p>
                  Anything unclear, anything you'd like changed, anything you think we've
                  missed?{" "}
                  <Link
                    className="text-ink underline-offset-[5px] hover:underline"
                    to="/contact"
                  >
                    Write to us
                  </Link>{" "}
                  and a human will answer. We take privacy seriously because on-device AI
                  only means something if we're honest about the parts of the system that
                  aren't on your device yet.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── Summary strip ── */}
      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(40px,6vw,80px)]">
        <h2 className="mb-8 font-display text-[clamp(22px,2.8vw,32px)] font-light">
          The one-paragraph version.
        </h2>
        <div className="grid grid-cols-3 gap-6 max-[820px]:grid-cols-1">
          {[
            {
              icon: "📬",
              title: "Waitlist: email only.",
              text: "One email address, used only to tell you when we're ready. Never sold, never shared.",
            },
            {
              icon: "🔒",
              title: "Product: no data, ever.",
              text: "The app processes everything on your device. Zero network calls during inference.",
            },
            {
              icon: "🌐",
              title: "Website: no tracking.",
              text: "No cookies, no analytics. The only external request is Google Fonts.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="mt-1 text-[24px] leading-none">{item.icon}</span>
              <div>
                <p className="mb-1 font-medium text-ink">{item.title}</p>
                <p className="text-[15px] text-graphite">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
