import { useState, type FormEvent } from "react";
import { Page } from "../components/Page";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";

const FAQ = [
  { q: "When will Immersyn be available?", a: "We're in active development. Join the waitlist and you'll be the first to know. We'll send one email when it's ready—no newsletters or drip campaigns." },
  { q: "What hardware do I need?", a: "Our target is any modern consumer laptop or desktop. We've run prototypes on machines with 8 GB of RAM and no discrete GPU. We'll publish minimum specs before launch." },
  { q: "Will there be a free version?", a: "We intend to make a meaningful free tier available. The specifics aren't locked yet, but private, offline AI for everyone is the whole point—that has to include accessible pricing." },
  { q: "Is Immersyn open source?", a: "We plan to open-source model weights and publish our research before or alongside any product launch. Full details on our open-source commitment are on the About page." },
  { q: "How do you make money if the data never leaves my device?", a: "We're exploring a one-time purchase model and an optional subscription for updates and new models. We won't monetise your data because we never see it." },
];
const TOPICS = [
  { value: "general", label: "General enquiry" },
  { value: "early-access", label: "Early access" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "research", label: "Research collaboration" },
  { value: "other", label: "Something else" },
];
const LABEL = "mb-2 block text-[12px] font-medium text-ink";
const INPUT = "w-full rounded-md border border-hair bg-white px-4 py-[13px] text-[14px] leading-normal text-ink transition-shadow placeholder:text-graphite/55 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/15";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Page title="Contact | Immersyn">
      <section className="inner-hero relative overflow-hidden py-16 sm:py-24 lg:py-28"><div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" /><Container className="relative"><p className="section-kicker mb-6">Contact our lab</p><h1 className="editorial-heading text-[clamp(54px,8vw,92px)]">Say <span className="hero-italic">hello.</span></h1><div className="mt-5 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end"><p className="max-w-[49ch] text-[15px] leading-[1.85] text-graphite">Questions, partnerships, press. We read everything ourselves—no ticket numbers, no auto-replies.</p><a className="inline-flex items-center gap-2 text-[13px] font-medium text-ink transition-colors hover:text-signal" href="mailto:hello@immersyn.ai"><Icon name="mail" className="h-4 w-4" />hello@immersyn.ai <Icon name="arrow-up-right" className="h-4 w-4" /></a></div></Container></section>

      <section className="section-space border-t border-hair">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-24">
            <div><div className="mb-8"><p className="section-kicker mb-4">Start a conversation</p><h2 className="editorial-heading text-[clamp(28px,3.4vw,42px)]">What's on your mind?</h2></div>
              {sent ? (
                <div className="rounded-lg border border-[#c5ddcd] bg-[#f0f7f1] p-7" role="status"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#dceee0] text-[#358554]"><Icon name="check" className="h-5 w-5" /></span><h3 className="mt-5 font-display text-[20px] font-medium">Message received.</h3><p className="mt-2 text-[13px] leading-[1.8] text-graphite">Thanks, {name}. We'll be in touch at <strong className="text-ink">{email}</strong> within a few days.</p></div>
              ) : (
                <form onSubmit={onSubmit} className="contact-form flex flex-col gap-5 rounded-lg border border-hair bg-[#fbfbf9] p-5 sm:p-7">
                  <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="name" className={LABEL}>Your name</label><input id="name" type="text" required autoComplete="name" placeholder="Ada Lovelace" value={name} onChange={(event) => setName(event.target.value)} className={INPUT} /></div><div><label htmlFor="email" className={LABEL}>Email address</label><input id="email" type="email" required autoComplete="email" placeholder="ada@example.com" value={email} onChange={(event) => setEmail(event.target.value)} className={INPUT} /></div></div>
                  <div><label htmlFor="topic" className={LABEL}>What is this about?</label><div className="relative"><select id="topic" value={topic} onChange={(event) => setTopic(event.target.value)} className={`${INPUT} cursor-pointer appearance-none pr-10`}>{TOPICS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select><Icon name="chevron-down" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite" /></div></div>
                  <div><label htmlFor="message" className={LABEL}>Your message</label><textarea id="message" required rows={6} placeholder="Tell us what you're building, working on, or curious about…" value={message} onChange={(event) => setMessage(event.target.value)} className={`${INPUT} resize-y`} /></div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1"><p className="max-w-[30ch] text-[11px] leading-[1.6] text-graphite">Your message stays between you and our team.</p><button className="button-primary" type="submit">Send message <Icon name="arrow-right" className="h-4 w-4" /></button></div>
                </form>
              )}
            </div>

            <aside className="space-y-8 lg:sticky lg:top-32"><div><p className="section-kicker mb-4">The human side</p><h2 className="editorial-heading text-[clamp(26px,3vw,36px)]">A real person, every time.</h2></div><div className="divide-y divide-hair border-y border-hair">{[{ label: "Response time", text: "A few days, by a human. No bots, no ticket numbers, no “your request is #4821.”" }, { label: "Press & partnerships", text: "Same address. Add “Press” or “Partnership” to the subject and we'll find the right person." }, { label: "Research collaboration", text: "We're open to work with academic groups and independent researchers. Tell us what you're exploring." }].map((item) => <div key={item.label} className="py-5"><h3 className="text-[12px] font-medium text-ink">{item.label}</h3><p className="mt-1.5 max-w-[44ch] text-[13px] leading-[1.8] text-graphite">{item.text}</p></div>)}</div><div><p className="footer-label">Follow the research</p><div className="flex flex-wrap gap-2">{[{ label: "X / Twitter", href: "https://twitter.com/immersyn" }, { label: "GitHub", href: "https://github.com/immersyn" }, { label: "arXiv", href: "https://arxiv.org" }].map((item) => <a key={item.label} href={item.href} className="inline-flex items-center gap-1.5 rounded-full border border-hair px-3.5 py-2 text-[12px] text-graphite transition-colors hover:border-ink hover:text-ink" target="_blank" rel="noopener noreferrer">{item.label}<Icon name="arrow-up-right" className="h-3 w-3" /></a>)}</div></div></aside>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#efefeb]"><Container><div className="grid items-start gap-10 lg:grid-cols-[.68fr_1.32fr] lg:gap-24"><div><p className="section-kicker mb-5">A few answers</p><h2 className="editorial-heading text-[clamp(31px,4vw,48px)]">Good questions.</h2><p className="mt-4 max-w-[34ch] text-[13px] leading-[1.8] text-graphite">If yours isn't here, the form above is the fastest path to a real person.</p></div><div className="divide-y divide-hair border-y border-hair">{FAQ.map((item, index) => <article key={item.q} className="py-5"><h3><button type="button" className="flex w-full items-center justify-between gap-5 text-left" aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="font-display text-[15px] font-medium tracking-[-.01em]">{item.q}</span><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hair text-graphite transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}><Icon name="chevron-down" className="h-3.5 w-3.5" /></span></button></h3>{openFaq === index && <p id={`faq-answer-${index}`} className="mt-3 max-w-[60ch] pr-10 text-[13px] leading-[1.8] text-graphite">{item.a}</p>}</article>)}</div></div></Container></section>
    </Page>
  );
}
