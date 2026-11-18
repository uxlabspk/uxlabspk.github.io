import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Container } from "../components/Container";
import { Icon, type IconName } from "../components/Icon";

const DOTS = Array.from({ length: 28 * 11 }, (_, index) => index);
const PRINCIPLES = [
  { number: "01", title: "Private by nature", body: "Your prompts, files and results stay on your device. Nothing is sent away to be answered." },
  { number: "02", title: "Ready offline", body: "Small enough to run wherever you are: in the field, on a plane, or with the Wi-Fi off." },
  { number: "03", title: "Completely yours", body: "No data center to rent and no permission to ask for. It runs on hardware you already own." },
];
const STEPS = [
  { num: "01", title: "Download once.", body: "Install Immersyn and get a model on your machine, just like any other file." },
  { num: "02", title: "Open, don't connect.", body: "Launch without Wi-Fi, without a login, and without sending anything anywhere." },
  { num: "03", title: "Get to work.", body: "Chat, summarize, generate and analyze. Your work stays local, in your files." },
];
const USE_CASES: { icon: IconName; label: string; text: string }[] = [
  { icon: "flask", label: "Research", text: "Explore sensitive documents and data without exposing them to an external server." },
  { icon: "plane", label: "On the move", text: "Bring full capability on a laptop in airplane mode. No connection required." },
  { icon: "health", label: "Healthcare", text: "Keep patient records where they belong: inside your organization." },
  { icon: "code", label: "Development", text: "Get thoughtful code assistance without sending proprietary source anywhere." },
  { icon: "book", label: "Education", text: "Bring practical AI to classrooms and communities with limited connectivity." },
  { icon: "building", label: "Enterprise", text: "Deploy to air-gapped environments. No data egress, by design." },
];
const STATS = [
  { value: "< 4 GB", label: "Target model size" },
  { value: "< 1 sec", label: "Prototype first token" },
  { value: "0", label: "Inference network calls" },
  { value: "100%", label: "On-device processing" },
];
const HEADING = "editorial-heading text-[clamp(32px,4.2vw,54px)]";
const BUTTON = "button-primary";

export default function LandingPage() {
  const [small, setSmall] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setSmall(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Page title="Immersyn | Private AI, at home on your device">
      <section className="hero-section relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-hair bg-white/70 px-3.5 py-2 text-[12px] font-medium text-graphite shadow-[0_2px_12px_rgba(23,25,24,.04)]">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/40" /><span className="relative inline-flex h-2 w-2 rounded-full bg-signal" /></span>
                Independent AI research · Early development
              </div>
              <h1 className="editorial-heading mb-6 max-w-[680px] text-[clamp(48px,7.4vw,88px)]">
                Intelligence,
                <br />without the <span className="hero-italic">infrastructure.</span>
              </h1>
              <p className="mb-8 max-w-[470px] text-[17px] leading-[1.8] text-graphite sm:text-[18px]">
                We make AI models small enough to run on the device in your hands. Private, offline, and built around you—not a data center.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a className={BUTTON} href="#access">Get early access <Icon name="arrow-right" className="h-4 w-4" /></a>
                <a className="inline-flex min-h-[50px] items-center gap-2 px-2 text-[14px] font-medium text-ink transition-colors hover:text-signal" href="#watch">
                  See the idea <span className="grid h-7 w-7 place-items-center rounded-full border border-hair"><Icon name="arrow-right" className="h-3.5 w-3.5" /></span>
                </a>
              </div>
              <div className="mt-10 flex items-center gap-3 text-[12px] text-graphite">
                <span className="flex -space-x-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-paper bg-[#e3e5e0]"><Icon name="lock" className="h-3.5 w-3.5" /></span>
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-paper bg-[#e9eaf0]"><Icon name="globe" className="h-3.5 w-3.5" /></span>
                </span>
                Designed for privacy from the first prompt
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[590px] flex-col items-center gap-5">
              <button
                type="button"
                className="model-illustration relative grid aspect-[2/1] w-full cursor-pointer place-items-center bg-transparent"
                onClick={() => setSmall((value) => !value)}
                aria-pressed={small}
                aria-label={small ? "Showing a model on your device. Select to see it at data center size." : "Showing a data center sized model. Select to shrink it."}
              >
                <span className={`model-device-chip pointer-events-none absolute h-[27%] w-[27%] rounded-[7px] border-2 border-ink transition-opacity delay-700 duration-500 motion-reduce:transition-none ${small ? "opacity-100" : "opacity-0"}`} />
                <span className="model-particles grid aspect-[28/11] w-full grid-cols-[repeat(28,1fr)] transition-transform duration-1000 ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none" style={{ transform: small ? "scale(.2)" : "scale(1)" }}>
                  {DOTS.map((dot) => <i key={dot} className="model-particle" />)}
                </span>
              </button>
              <p className="flex gap-5 font-mono text-[11px] uppercase tracking-[.12em]" aria-live="polite">
                <span className={!small ? "text-ink" : "text-graphite/55"}>Data center</span>
                <span className="text-graphite/40">/</span>
                <span className={small ? "text-ink" : "text-graphite/55"}>Your device</span>
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-5 text-[11px] font-medium uppercase tracking-[.12em] text-graphite/80 sm:mt-20">
            <span>Local-first intelligence</span><span className="hidden text-hair sm:block">/</span><span>Built for real hardware</span><span className="hidden text-hair sm:block">/</span><span>Privacy by architecture</span>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-9 sm:py-11">
        <Container>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {STATS.map((stat) => <div key={stat.label} className="border-l border-white/15 pl-4 sm:pl-6"><dt className="font-display text-[clamp(25px,3vw,38px)] font-light tracking-[-.04em] text-white">{stat.value}</dt><dd className="mt-1 text-[12px] text-white/45">{stat.label}</dd></div>)}
          </dl>
        </Container>
      </section>

      <section id="why" className="section-space">
        <Container>
          <div className="mb-12 grid items-end gap-5 sm:mb-16 sm:grid-cols-[1fr_auto]">
            <div><p className="section-kicker mb-5">A different kind of AI</p><h2 className={`${HEADING} max-w-[620px]`}>The best technology feels like it belongs to you.</h2></div>
            <Link to="/about" className="group inline-flex items-center gap-2 pb-1 text-[13px] font-medium text-graphite transition-colors hover:text-signal">Meet the team <Icon name="arrow-up-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((item) => <article key={item.number} className="principle-card"><span className="font-mono text-[11px] text-signal">{item.number} / 03</span><div className="mt-9 h-px w-10 bg-signal/45" /><h3 className="mt-5 font-display text-[21px] font-medium tracking-[-.025em]">{item.title}</h3><p className="mt-3 max-w-[34ch] text-[14px] leading-[1.8] text-graphite">{item.body}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#efefeb]">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32"><p className="section-kicker mb-5">A simpler way to work</p><h2 className={`${HEADING} max-w-[450px]`}>Powerful tools. No strings attached.</h2><p className="mt-5 max-w-[40ch] text-[15px] leading-[1.8] text-graphite">No cloud account. No subscription required to think. Just capable models that show up wherever you do.</p></div>
            <div className="divide-y divide-hair border-y border-hair">
              {STEPS.map((step) => <article key={step.num} className="grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-9"><span className="font-mono text-[11px] text-signal">{step.num}</span><div><h3 className="font-display text-[20px] font-medium tracking-[-.025em]">{step.title}</h3><p className="mt-2 max-w-[46ch] text-[14px] leading-[1.8] text-graphite">{step.body}</p></div></article>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="mb-12 max-w-[680px] sm:mb-14"><p className="section-kicker mb-5">Made to go where you go</p><h2 className={`${HEADING} max-w-[600px]`}>Good technology adapts to the work.</h2><p className="mt-4 max-w-[48ch] text-[15px] leading-[1.8] text-graphite">For sensitive work, unpredictable connections, and information that should stay put.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((item, index) => <article key={item.label} className="usecase-card group" style={{ animationDelay: `${index * 60}ms` }}><span className="grid h-10 w-10 place-items-center rounded-md border border-hair bg-paper text-ink transition-colors group-hover:border-signal/30 group-hover:bg-signal/5 group-hover:text-signal"><Icon name={item.icon} className="h-[19px] w-[19px]" /></span><div className="mt-8"><h3 className="font-display text-[17px] font-medium">{item.label}</h3><p className="mt-2 text-[13px] leading-[1.75] text-graphite">{item.text}</p></div><Icon name="arrow-up-right" className="absolute right-5 top-5 h-4 w-4 text-graphite/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" /></article>)}
          </div>
        </Container>
      </section>

      <section id="watch" className="pb-20 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#171a1a] p-6 text-white sm:p-10 lg:p-14">
            <div className="video-glow pointer-events-none absolute -right-10 -top-36 h-[390px] w-[390px] rounded-full" />
            <div className="relative z-10 mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#a9baff]">A note from our lab</p><h2 className="editorial-heading text-[clamp(28px,4vw,46px)]">A different future for AI.</h2></div><p className="text-[13px] text-white/50">The idea, in 26 seconds.</p></div>
            <video controls preload="metadata" playsInline src="/immersyn_intro_720p.mp4" aria-label="Immersyn intro: AI shouldn't need a data center" className="relative z-10 block aspect-video w-full rounded-md border border-white/10 bg-black" />
          </div>
        </Container>
      </section>

      <section id="access" className="waitlist-section relative overflow-hidden border-t border-hair py-20 sm:py-28">
        <div className="waitlist-decoration pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-[650px] text-center">
            <p className="section-kicker mb-5">A seat at the table</p>
            <h2 className="editorial-heading text-[clamp(35px,5.5vw,62px)]">The next chapter is <span className="hero-italic">closer than you think.</span></h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.8] text-graphite">Join the early access list. One note when Immersyn is ready to try—nothing more.</p>
            {sent ? (
              <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-md border border-[#bad9c4] bg-[#eef6ef] px-5 py-4 text-left text-[14px] text-ink" role="status"><Icon name="check" className="h-5 w-5 text-[#358554]" /><span>You're on the list. We'll write to <strong>{email}</strong>.</span></p>
            ) : (
              <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-[500px]">
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="flex flex-col gap-2.5 sm:flex-row"><input id="email" type="email" required autoComplete="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-[52px] min-w-0 grow rounded-md border border-hair bg-white px-4 text-[14px] text-ink placeholder:text-graphite/60 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/15" /><button className={`${BUTTON} shrink-0`} type="submit">Join the waitlist <Icon name="arrow-right" className="h-4 w-4" /></button></div>
                <p className="mt-3 text-left text-[11px] text-graphite/80 sm:text-center">No spam. No selling your address. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </Container>
      </section>
    </Page>
  );
}
