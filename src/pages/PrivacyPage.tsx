import { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";

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
const SUMMARY = [
  { icon: "mail" as const, title: "Waitlist: email only.", text: "One email address, used only to tell you when we're ready. Never sold, never shared." },
  { icon: "lock" as const, title: "Product: no data, ever.", text: "The app processes everything on your device. Zero network calls during inference." },
  { icon: "globe" as const, title: "Website: no tracking.", text: "No cookies, no analytics. The only external request is Google Fonts." },
];
const HEADING = "font-display text-[clamp(20px,2.5vw,30px)] font-medium leading-[1.3] tracking-[-.025em]";
const BODY = "space-y-4 text-[14px] leading-[1.9] text-graphite";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  function handleAnchorClick(id: string) {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Page title="Privacy | Immersyn">
      <section className="inner-hero relative overflow-hidden py-16 sm:py-24 lg:py-28"><div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" /><Container className="relative"><p className="section-kicker mb-6">A clear promise</p><h1 className="editorial-heading max-w-[850px] text-[clamp(46px,7.5vw,84px)]">Privacy, in <span className="hero-italic">plain words.</span></h1><div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3"><p className="font-display text-[18px] text-graphite">The short version: your data stays yours.</p><span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/70 px-3 py-1.5 text-[11px] text-graphite"><Icon name="clock" className="h-3.5 w-3.5" />Updated January 2025</span></div></Container></section>

      <section className="section-space border-t border-hair"><Container><div className="grid items-start gap-10 lg:grid-cols-[190px_1fr] lg:gap-20">
        <aside className="sticky top-28 hidden lg:block"><p className="footer-label">In this policy</p><nav aria-label="Table of contents"><ul className="space-y-1">{SECTIONS.map((item, index) => <li key={item.id}><button type="button" className={`toc-link ${activeSection === item.id ? "toc-link--active" : ""}`} onClick={() => handleAnchorClick(item.id)}><span className="font-mono text-[10px] text-graphite/50">0{index + 1}</span><span>{item.label}</span></button></li>)}</ul></nav><div className="mt-8 border-t border-hair pt-5"><p className="text-[11px] leading-[1.8] text-graphite">A question about your data?</p><a className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink hover:text-signal" href="mailto:hello@immersyn.ai">Email our team <Icon name="arrow-up-right" className="h-3.5 w-3.5" /></a></div></aside>

        <div className="privacy-articles max-w-[720px] space-y-12">
          <article id="collect"><span className="privacy-index">01 / COLLECTION</span><h2 className={`${HEADING} mb-4`}>What we collect.</h2><div className={BODY}><p>When you join our waitlist, we store one piece of information: your email address. That's it. We use it for one purpose: to tell you when Immersyn is ready to try.</p><p>We do not create accounts, we do not ask for your name, and we do not collect any usage data. When you use Immersyn (once released), no prompts, files, or results are ever sent to us—the product is designed so that collection is architecturally impossible, not merely policy-prohibited.</p></div></article>
          <article id="on-device"><span className="privacy-index">02 / THE PRODUCT</span><h2 className={`${HEADING} mb-4`}>On-device by design.</h2><div className={BODY}><p>Prompts, files and results are processed entirely on your device. The model runs locally. No network request is made when you use Immersyn—not to our servers, not to any third party.</p><p>There is no server-side record of what you asked or what the model answered. This means there is nothing of yours for us to lose in a breach, sell to a buyer, or hand over to a third party. Privacy here is a consequence of architecture, not of contractual promises you have to trust.</p><div className="privacy-callout"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-signal/10 text-signal"><Icon name="lock" className="h-[18px] w-[18px]" /></div><div><p className="mb-1 font-medium text-ink">Why this matters.</p><p className="text-[13px] leading-[1.8]">Most AI tools send your words to a remote server, process them, and return a result. At every step, your data exists somewhere outside your control. We cut that chain entirely: inference happens on your hardware, in your memory, with no outbound connection.</p></div></div></div></article>
          <article id="website"><span className="privacy-index">03 / THIS WEBSITE</span><h2 className={`${HEADING} mb-4`}>This website.</h2><div className={BODY}><p>This site is static HTML, CSS and JavaScript—no server-side code, no cookies, no analytics scripts. We do not use Google Analytics, Mixpanel, or any other tracking service.</p><p>Your browser makes one request to a third party when it loads this page: Google Fonts CDN, to retrieve Montserrat and IBM Plex Sans. If you prefer to avoid even that, a local font will render as the fallback. No other external request is made.</p></div></article>
          <article id="third-parties"><span className="privacy-index">04 / SHARING</span><h2 className={`${HEADING} mb-4`}>Third parties.</h2><div className={BODY}><p>We do not sell, rent, or share your email address with any third party for commercial purposes. We may use a transactional email provider to send you the single notification message when Immersyn launches—if so, your email will pass through that provider's infrastructure for delivery only.</p><p>We will name any such provider here before we use them. Currently, no such provider is active.</p></div></article>
          <article id="retention"><span className="privacy-index">05 / RETENTION</span><h2 className={`${HEADING} mb-4`}>Data retention.</h2><div className={BODY}><p>We hold your email address until Immersyn launches and we've sent the notification, or until you ask us to remove it—whichever comes first.</p><p>To be removed from the waitlist at any time, email <a className="inline-link" href="mailto:hello@immersyn.ai?subject=Remove me from waitlist">hello@immersyn.ai</a> with the subject “Remove me from waitlist.” We'll confirm deletion within 48 hours.</p></div></article>
          <article id="rights"><span className="privacy-index">06 / YOUR RIGHTS</span><h2 className={`${HEADING} mb-4`}>Your rights.</h2><div className={BODY}><p>Depending on where you live, you may have rights under privacy laws (such as GDPR or CCPA) including the right to access, correct, or delete the data we hold about you. Because we hold only your email address, exercising any of these rights is straightforward.</p><p>Write to <a className="inline-link" href="mailto:hello@immersyn.ai">hello@immersyn.ai</a> and a human will handle your request within a reasonable time.</p></div></article>
          <article id="changes"><span className="privacy-index">07 / UPDATES</span><h2 className={`${HEADING} mb-4`}>Policy changes.</h2><div className={BODY}><p>If we change this policy in a meaningful way, we will update the “last updated” date at the top of this page and, if the change affects how we handle data we already hold, we will email anyone on the waitlist to let them know.</p><p>Minor editorial changes (correcting a typo, clarifying a sentence without changing its meaning) will be made silently.</p></div></article>
          <article id="questions"><span className="privacy-index">08 / CONTACT</span><h2 className={`${HEADING} mb-4`}>Questions?</h2><div className={BODY}><p>Anything unclear, anything you'd like changed, anything you think we've missed? <Link className="inline-link" to="/contact">Write to us</Link> and a human will answer. We take privacy seriously because on-device AI only means something if we're honest about the parts of the system that aren't on your device yet.</p></div></article>
        </div>
      </div></Container></section>

      <section className="section-space bg-[#efefeb]"><Container><div className="mb-9"><p className="section-kicker mb-4">The short version</p><h2 className="editorial-heading text-[clamp(28px,3.5vw,42px)]">Your privacy, at a glance.</h2></div><div className="grid gap-3 md:grid-cols-3">{SUMMARY.map((item, index) => <article key={item.title} className="summary-card"><div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-md border border-hair bg-paper text-ink"><Icon name={item.icon} className="h-[17px] w-[17px]" /></span><span className="font-mono text-[10px] text-graphite/55">0{index + 1}</span></div><h3 className="mt-6 font-display text-[15px] font-medium">{item.title}</h3><p className="mt-2 text-[12px] leading-[1.8] text-graphite">{item.text}</p></article>)}</div></Container></section>
    </Page>
  );
}
