import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";

const HEADING = "editorial-heading text-[clamp(32px,4.2vw,54px)]";
const VALUES = [
  { title: "Measure on real devices.", body: "Every model is timed on the laptops and phones it claims to run on—not on a server rack in a lab." },
  { title: "Small is the feature.", body: "If a capability needs a data center, we work until it doesn't. Speed and privacy follow from size." },
  { title: "Open by default.", body: "Weights, benchmarks and mistakes: we share what we learn so anyone can check our work." },
];
const TIMELINE = [
  { year: "2022", title: "The question.", body: "We noticed the gap between what large models could do and what an ordinary laptop could run. We started asking whether the gap was necessary." },
  { year: "2023", title: "The first model.", body: "Our first on-device prototype ran on a three-year-old consumer laptop in under a second per token. Rough, but it answered the question." },
  { year: "2024", title: "Serious compression.", body: "We published our first compression results, cutting model size by 60% with less than 2% quality loss. The community noticed." },
  { year: "2025", title: "Building the product.", body: "We assembled the team, started the application layer, and opened the waitlist. Early feedback shapes everything." },
];
const TEAM = [
  { name: "Research", number: "01", description: "Our research team focuses on model compression, quantisation and efficient attention—the core science of making big things small." },
  { name: "Engineering", number: "02", description: "Platform engineers build the runtime that gets models onto consumer hardware as fast as physically possible." },
  { name: "Product", number: "03", description: "We believe private AI should feel as approachable as a note-taking app. Product asks: what does that actually feel like to use?" },
];
const OPEN_SOURCE = [
  { label: "Model weights", text: "We intend to release model weights openly so anyone can inspect, audit and run them." },
  { label: "Benchmarks", text: "Every benchmark includes methodology, hardware specs and raw numbers—not just the headline figure." },
  { label: "Research papers", text: "Our compression and quantisation findings will be published for peer review before or alongside launch." },
];

export default function AboutPage() {
  return (
    <Page title="About | Immersyn Research Lab">
      <section className="inner-hero relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <p className="section-kicker mb-6">About Immersyn</p>
          <div className="grid items-end gap-9 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
            <div><h1 className="editorial-heading max-w-[750px] text-[clamp(50px,8vw,92px)]">Built small <span className="hero-italic">on purpose.</span></h1><p className="mt-6 max-w-[48ch] text-[16px] leading-[1.85] text-graphite">We started Immersyn because the most interesting models shouldn't need a warehouse, a lease, or a login to someone else's computer.</p></div>
            <blockquote className="border-l border-signal pl-6 lg:mb-2"><p className="font-display text-[20px] font-light leading-[1.55] tracking-[-.02em] text-graphite sm:text-[23px]">“The best AI works where you are, not somewhere you have to go.”</p><footer className="mt-5 text-[11px] font-medium uppercase tracking-[.1em] text-ink">Immersyn Research Team</footer></blockquote>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#efefeb]">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
            <div><p className="section-kicker mb-5">Why we started</p><h2 className={`${HEADING} mb-7 max-w-[470px]`}>The promise of AI shouldn't come with a lease.</h2><div className="space-y-5 text-[14px] leading-[1.9] text-graphite"><p>Useful AI has gotten expensive to reach. If your work needs a live connection, a growing budget and someone else's permission, then it isn't really yours.</p><p>We thought the opposite was possible: models small enough for ordinary hardware, quick enough to feel instant, and private enough that nothing ever leaves the room.</p><p>That belief sent us deep into compression research. It turned out the gap between “runs in a data center” and “runs on your laptop” was mostly unnecessary—a byproduct of optimising for capability benchmarks rather than real-world deployment.</p></div></div>
            <div className="grid gap-3">
              {[{ value: "60%", desc: "Model size reduction achieved in our 2024 compression research, with under 2% quality loss on standard benchmarks." }, { value: "< 1 sec", desc: "Time-to-first-token on a three-year-old consumer laptop in our prototype runs." }, { value: "0", desc: "Network requests made during inference. Your words never leave your machine." }].map((item, index) => <div key={item.value} className="metric-card"><span className="font-mono text-[10px] text-graphite/65">0{index + 1} / RESEARCH NOTE</span><p className="mt-4 font-display text-[clamp(36px,4vw,50px)] font-light tracking-[-.045em]">{item.value}</p><p className="mt-2 max-w-[43ch] text-[13px] leading-[1.75] text-graphite">{item.desc}</p></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="mb-12"><p className="section-kicker mb-5">Our principles</p><h2 className={HEADING}>How we work.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">{VALUES.map((item, index) => <article key={item.title} className="principle-card"><span className="font-mono text-[11px] text-signal">0{index + 1} / PRINCIPLE</span><h3 className="mt-8 font-display text-[19px] font-medium tracking-[-.025em]">{item.title}</h3><p className="mt-3 text-[13px] leading-[1.8] text-graphite">{item.body}</p></article>)}</div>
        </Container>
      </section>

      <section className="section-space bg-[#efefeb]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="section-kicker mb-5">The journey</p><h2 className={`${HEADING} max-w-[340px]`}>A question worth following.</h2></div><div className="timeline-list">{TIMELINE.map((item) => <article key={item.year} className="timeline-item"><span className="font-mono text-[12px] text-signal">{item.year}</span><div><h3 className="font-display text-[19px] font-medium tracking-[-.02em]">{item.title}</h3><p className="mt-2 max-w-[54ch] text-[13px] leading-[1.8] text-graphite">{item.body}</p></div></article>)}</div></div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="section-kicker mb-5">The disciplines</p><h2 className={HEADING}>One team, one question.</h2></div><p className="max-w-[33ch] text-[13px] leading-[1.8] text-graphite">A small group of researchers and engineers who care more about the problem than the press release.</p></div>
          <div className="grid gap-3 md:grid-cols-3">{TEAM.map((item) => <article key={item.name} className="team-card"><span className="font-mono text-[11px] text-graphite/60">{item.number} / 03</span><h3 className="mt-8 font-display text-[21px] font-medium tracking-[-.03em]">{item.name}</h3><p className="mt-3 text-[13px] leading-[1.8] text-graphite">{item.description}</p></article>)}</div>
          <p className="mt-7 text-[13px] text-graphite">We're small and we plan to stay that way. <Link to="/contact" className="font-medium text-ink underline decoration-hair underline-offset-4 hover:decoration-signal">Get in touch if you want to work with us.</Link></p>
        </Container>
      </section>

      <section className="section-space bg-[#efefeb]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="section-kicker mb-5">Open by default</p><h2 className={`${HEADING} max-w-[430px]`}>Privacy for you. Transparency from us.</h2><p className="mt-5 max-w-[42ch] text-[14px] leading-[1.85] text-graphite">Your data stays local; our research doesn't stay hidden. We intend to publish openly—weights, methods and all.</p></div><div className="divide-y divide-hair border-y border-hair">{OPEN_SOURCE.map((item, index) => <article key={item.label} className="grid gap-3 py-6 sm:grid-cols-[42px_1fr]"><span className="grid h-7 w-7 place-items-center rounded-full bg-signal text-white"><Icon name="check" className="h-4 w-4" /></span><div><h3 className="font-display text-[16px] font-medium">{item.label}</h3><p className="mt-1 text-[13px] leading-[1.8] text-graphite">{item.text}</p></div><span className="sr-only">Item {index + 1}</span></article>)}</div></div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container><div className="cta-band flex flex-wrap items-end justify-between gap-8"><div><p className="section-kicker mb-5">Come see it work</p><h2 className="editorial-heading max-w-[550px] text-[clamp(32px,4.4vw,54px)]">One idea. A whole different direction.</h2><p className="mt-4 max-w-[44ch] text-[13px] leading-[1.8] text-white/60">See the idea in 26 seconds, or get in touch with the people building it.</p></div><div className="flex flex-wrap items-center gap-4"><Link className="button-primary !border-white !bg-white !text-ink hover:!border-[#cdd6ff] hover:!bg-[#cdd6ff]" to="/contact">Get in touch <Icon name="arrow-right" className="h-4 w-4" /></Link><a className="inline-flex items-center gap-2 text-[13px] text-white/70 hover:text-white" href="/#watch">Watch the intro <Icon name="arrow-up-right" className="h-4 w-4" /></a></div></div></Container>
      </section>
    </Page>
  );
}
