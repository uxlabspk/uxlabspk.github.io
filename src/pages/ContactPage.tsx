import { useState, type FormEvent } from "react";
import { Page } from "../components/Page";
import { Container } from "../components/Container";

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";
const BTN =
  "inline-block cursor-pointer rounded-md bg-ink px-[26px] py-[14px] text-[16px] font-medium leading-[normal] text-white transition-colors duration-150 hover:bg-signal motion-reduce:transition-none";
const LABEL = "mb-2 block text-[15px] font-medium";
const INPUT =
  "w-full rounded-md border border-[#b9bcc3] bg-white px-4 py-[14px] text-[16px] leading-[normal] text-ink transition-shadow duration-150 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/25 placeholder:text-[#b0b4bd]";

const TOPICS = [
  { value: "general",     label: "General enquiry" },
  { value: "early-access", label: "Early access" },
  { value: "partnership", label: "Partnership" },
  { value: "press",       label: "Press" },
  { value: "research",    label: "Research collaboration" },
  { value: "other",       label: "Something else" },
];

const FAQ = [
  {
    q: "When will Immersyn be available?",
    a: "We're in active development. Join the waitlist and you'll be the first to know. We'll send one email when it's ready — no newsletters or drip campaigns.",
  },
  {
    q: "What hardware do I need?",
    a: "Our target is any modern consumer laptop or desktop. We've run prototypes on machines with 8 GB of RAM and no discrete GPU. We'll publish minimum specs before launch.",
  },
  {
    q: "Will there be a free version?",
    a: "We intend to make a meaningful free tier available. The specifics aren't locked yet, but private, offline AI for everyone is the whole point — that has to include accessible pricing.",
  },
  {
    q: "Is Immersyn open source?",
    a: "We plan to open-source model weights and publish our research before or alongside any product launch. Full details on our open-source commitment are on the About page.",
  },
  {
    q: "How do you make money if the data never leaves my device?",
    a: "We're exploring a one-time purchase model and an optional subscription for updates and new models. We won't monetise your data because we never see it.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: send to form provider / API
    setSent(true);
  }

  return (
    <Page title="Contact | Immersyn">

      {/* ── Hero ── */}
      <section className="py-[clamp(48px,9vw,120px)]">
        <Container>
          <p className="mb-5 text-[14px] font-semibold uppercase tracking-[.18em] text-graphite">Contact</p>
          <h1 className="mb-7 max-w-[20ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
            Say hello.
          </h1>
          <p className="max-w-[46ch] font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
            Questions, partnerships, press. We read everything ourselves — no ticket numbers,
            no auto-replies.
          </p>
        </Container>
      </section>

      {/* ── Form + contact info ── */}
      <section className="border-t border-hair py-[clamp(56px,8vw,112px)]">
        <Container>
          <div className="grid grid-cols-[1.1fr_.9fr] items-start gap-[clamp(32px,6vw,96px)] max-[820px]:grid-cols-1">

            {/* Form */}
            <div>
              <h2 className={`${H2} mb-8`}>Send us a message.</h2>
              {sent ? (
                <div className="rounded-xl border border-hair bg-wash p-8" role="status">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-signal">
                    <svg viewBox="0 0 12 10" className="h-4 w-4" aria-hidden="true">
                      <path d="M1 5l3 3 7-7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="mb-2 font-display text-[22px] font-medium">Message sent.</p>
                  <p className="text-graphite">
                    Thanks, {name}. We'll be in touch at{" "}
                    <span className="font-medium text-ink">{email}</span> within a few days.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex max-w-[560px] flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
                    <div>
                      <label htmlFor="name" className={LABEL}>Name</label>
                      <input
                        id="name" type="text" required autoComplete="name"
                        placeholder="Ada Lovelace" value={name}
                        onChange={(e) => setName(e.target.value)} className={INPUT}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={LABEL}>Email address</label>
                      <input
                        id="email" type="email" required autoComplete="email"
                        placeholder="ada@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} className={INPUT}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className={LABEL}>Topic</label>
                    <select
                      id="topic" value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className={`${INPUT} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a5e66' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")] bg-[right_16px_center] bg-no-repeat pr-10`}
                    >
                      {TOPICS.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={LABEL}>Message</label>
                    <textarea
                      id="message" required rows={6}
                      placeholder="Tell us what you're building, working on, or curious about…"
                      value={message} onChange={(e) => setMessage(e.target.value)}
                      className={`${INPUT} resize-y`}
                    />
                  </div>

                  <div>
                    <button className={BTN} type="submit">Send message</button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="sticky top-28">
              <h2 className={`${H2} mb-6`}>Reach us directly.</h2>
              <ul className="mb-10 space-y-7 text-graphite">
                <li>
                  <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Email</h3>
                  <a className="text-ink underline-offset-[5px] hover:underline" href="mailto:hello@immersyn.ai">
                    hello@immersyn.ai
                  </a>
                </li>
                <li>
                  <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Response time</h3>
                  <p>A few days, by a human. No bots, no ticket numbers, no "your request is #4821."</p>
                </li>
                <li>
                  <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Press & partnerships</h3>
                  <p>Same address — put "Press" or "Partnership" in the subject and it finds the right desk faster.</p>
                </li>
                <li>
                  <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Research collaboration</h3>
                  <p>We're open to collaboration with academic groups and independent researchers. Describe your work and we'll read it properly.</p>
                </li>
              </ul>

              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[.14em] text-graphite">Follow our work</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "X / Twitter", href: "https://twitter.com/immersyn" },
                  { label: "GitHub",      href: "https://github.com/immersyn" },
                  { label: "arXiv",       href: "https://arxiv.org" },
                ].map((s) => (
                  <a
                    key={s.label} href={s.href}
                    className="rounded-md border border-hair px-4 py-2 text-[14px] text-graphite transition-colors duration-150 hover:border-ink hover:text-ink"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-wash py-[clamp(56px,8vw,112px)]">
        <Container>
          <div className="grid grid-cols-[1fr_1.6fr] items-start gap-[clamp(32px,6vw,80px)] max-[820px]:grid-cols-1">
            <div>
              <h2 className={`${H2} mb-4`}>Frequently asked.</h2>
              <p className="max-w-[36ch] text-graphite">
                Some questions we hear a lot. If yours isn't here, the form above is the fastest path.
              </p>
            </div>
            <div className="divide-y divide-hair">
              {FAQ.map((item, i) => (
                <div key={i} className="py-5">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-display text-[17px] font-medium text-ink">{item.q}</span>
                    <span
                      className={`mt-1 shrink-0 text-graphite transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 12 8" className="h-3 w-3" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="mt-4 max-w-[58ch] text-[15px] text-graphite">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </Page>
  );
}
