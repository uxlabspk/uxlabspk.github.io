import { Link } from "react-router-dom";
import { Page } from "../components/Page";

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";
const BTN =
  "inline-block cursor-pointer rounded-md bg-ink px-[26px] py-[14px] text-[16px] font-medium leading-[normal] text-white transition-colors duration-150 hover:bg-signal motion-reduce:transition-none";

const VALUES = [
  {
    title: "Measure on real devices.",
    body: "Every model is timed on the laptops and phones it claims to run on, not on a server rack in a lab.",
  },
  {
    title: "Small is the feature.",
    body: "If a capability needs a data center, we cut it until it doesn't. Speed and privacy are consequences of size.",
  },
  {
    title: "Open by default.",
    body: "Weights, benchmarks and mistakes: we share what we learn so anyone can check our work and build on it.",
  },
];

const TIMELINE = [
  {
    year: "2022",
    title: "The question.",
    body: "We noticed the gap between what large models could do and what an ordinary laptop could run. We started asking whether the gap was necessary.",
  },
  {
    year: "2023",
    title: "The first model.",
    body: "Our first on-device prototype ran on a three-year-old consumer laptop in under a second per token. Rough, but it answered the question.",
  },
  {
    year: "2024",
    title: "Serious compression.",
    body: "We published our first compression results, cutting model size by 60% with less than 2% quality loss. The community noticed.",
  },
  {
    year: "2025",
    title: "Building the product.",
    body: "We assembled the team, started the application layer, and opened the waitlist. Early feedback shapes everything.",
  },
];

const TEAM = [
  {
    name: "Research",
    description:
      "Our research team focuses on model compression, quantisation and efficient attention — the core science of making big things small.",
  },
  {
    name: "Engineering",
    description:
      "Platform engineers build the runtime that gets models onto consumer hardware as fast as physically possible.",
  },
  {
    name: "Product",
    description:
      "We believe private AI should be as approachable as a note-taking app. Product asks: what does that actually feel like to use?",
  },
];

const OPEN_SOURCE = [
  {
    label: "Model weights",
    text: "We intend to release model weights openly so anyone can inspect, audit and run them.",
  },
  {
    label: "Benchmarks",
    text: "Every benchmark we publish includes methodology, hardware specs and raw numbers — not just the headline figure.",
  },
  {
    label: "Research papers",
    text: "Our compression and quantisation findings will be published for peer review before or alongside any product launch.",
  },
];

export default function AboutPage() {
  return (
    <Page title="About | Immersyn">

      {/* ── Hero ── */}
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)]">
        <div className="grid grid-cols-[1fr_.9fr] items-end gap-[clamp(32px,6vw,96px)] max-[820px]:grid-cols-1">
          <div>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[.18em] text-graphite">
              About Immersyn
            </p>
            <h1 className="mb-7 max-w-[20ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
              Built small on purpose.
            </h1>
            <p className="mb-5 font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
              One stubborn idea, and a lot of measuring.
            </p>
            <p className="max-w-[46ch] text-[18px] text-graphite">
              We started Immersyn because the most interesting models shouldn't need a
              warehouse, a lease, or a login to someone else's computer.
            </p>
          </div>
          <blockquote className="border-l-4 border-signal pl-7">
            <p className="font-display text-[clamp(18px,2vw,26px)] font-light leading-[1.4] text-graphite">
              "The best AI is the one that works where you are, not the one that requires
              you to go somewhere."
            </p>
            <footer className="mt-5 text-[14px] font-medium text-ink">
              — Immersyn Research Team
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Why we started ── */}
      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="grid grid-cols-[1fr_1fr] items-start gap-[clamp(32px,6vw,80px)] max-[820px]:grid-cols-1">
          <div>
            <h2 className={`${H2} mb-8`}>Why we started.</h2>
            <div className="space-y-6 text-[17px] text-graphite">
              <p>
                Useful AI has gotten expensive to reach. If your work needs a live connection,
                a growing budget and someone else's permission, then it isn't really yours.
              </p>
              <p>
                We thought the opposite was possible: models small enough for ordinary
                hardware, quick enough to feel instant, and private enough that nothing ever
                leaves the room.
              </p>
              <p>
                That belief sent us deep into compression research. It turned out the gap
                between "runs in a data center" and "runs on your laptop" was mostly
                unnecessary — a byproduct of optimising for capability benchmarks rather
                than real-world deployment.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border border-hair bg-paper p-7">
              <p className="mb-2 font-display text-[36px] font-light text-ink">60%</p>
              <p className="text-[15px] text-graphite">
                Reduction in model size achieved in our 2024 compression research, with
                under 2% quality loss on standard benchmarks.
              </p>
            </div>
            <div className="rounded-xl border border-hair bg-paper p-7">
              <p className="mb-2 font-display text-[36px] font-light text-ink">&lt; 1 s</p>
              <p className="text-[15px] text-graphite">
                Time-to-first-token on a three-year-old consumer laptop in our
                prototype runs.
              </p>
            </div>
            <div className="rounded-xl border border-hair bg-paper p-7">
              <p className="mb-2 font-display text-[36px] font-light text-ink">0</p>
              <p className="text-[15px] text-graphite">
                Network requests made during inference. Your words never leave your
                machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-12`}>How we work.</h2>
        <div className="grid grid-cols-3 gap-[clamp(24px,4vw,64px)] max-[820px]:grid-cols-1">
          {VALUES.map((v) => (
            <article key={v.title} className="border-t-2 border-ink pt-5">
              <h3 className="mb-3 font-display text-[22px] font-medium uppercase tracking-[.14em]">
                {v.title}
              </h3>
              <p className="max-w-[34ch] text-graphite">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-12`}>How we got here.</h2>
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="absolute left-[72px] top-0 hidden h-full w-px bg-hair min-[820px]:block" />
          <div className="flex flex-col gap-10">
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex gap-10 max-[820px]:flex-col max-[820px]:gap-3">
                <div className="relative flex shrink-0 flex-col items-start min-[820px]:w-[72px]">
                  <span className="relative z-10 inline-block bg-wash font-display text-[14px] font-semibold tracking-[.12em] text-graphite min-[820px]:pr-4">
                    {t.year}
                  </span>
                </div>
                <div className="max-w-[52ch] pb-2">
                  <h3 className="mb-2 font-display text-[20px] font-medium">{t.title}</h3>
                  <p className="text-graphite">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The team ── */}
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-4`}>The team.</h2>
        <p className="mb-12 max-w-[52ch] text-[18px] text-graphite">
          A small group of researchers and engineers who care more about the problem
          than the press release.
        </p>
        <div className="grid grid-cols-3 gap-6 max-[820px]:grid-cols-1">
          {TEAM.map((t) => (
            <article
              key={t.name}
              className="rounded-xl border border-hair p-7 transition-shadow duration-150 hover:shadow-md"
            >
              <h3 className="mb-3 font-display text-[20px] font-semibold">{t.name}</h3>
              <p className="text-[15px] text-graphite">{t.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-[15px] text-graphite">
          We're small and we plan to stay that way.{" "}
          <Link to="/contact" className="text-ink underline-offset-[5px] hover:underline">
            Get in touch
          </Link>{" "}
          if you want to work with us.
        </p>
      </section>

      {/* ── Open source commitment ── */}
      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="grid grid-cols-[1fr_1.4fr] items-start gap-[clamp(32px,6vw,80px)] max-[820px]:grid-cols-1">
          <div>
            <h2 className={`${H2} mb-6`}>Open by default.</h2>
            <p className="max-w-[42ch] text-[17px] text-graphite">
              Private AI and open science aren't contradictions. The fact that your data
              stays local doesn't mean our work has to stay hidden. We intend to publish
              openly — weights, methods and all.
            </p>
          </div>
          <div className="space-y-6">
            {OPEN_SOURCE.map((item) => (
              <div key={item.label} className="flex gap-5">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-signal">
                  <svg viewBox="0 0 12 10" className="h-3 w-3" aria-hidden="true">
                    <path d="M1 5l3 3 7-7" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 font-medium text-ink">{item.label}</p>
                  <p className="text-[15px] text-graphite">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-8 max-[640px]:grid-cols-1">
          <div>
            <h2 className={`${H2} mb-4`}>Come see it work.</h2>
            <p className="max-w-[48ch] text-graphite">
              The idea takes 26 seconds. Getting early access takes one email.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link className={BTN} to="/contact">Get in touch</Link>
            <a className="text-ink underline-offset-[5px] hover:underline" href="/#watch">
              Watch the 26-second intro
            </a>
          </div>
        </div>
      </section>
    </Page>
  );
}
