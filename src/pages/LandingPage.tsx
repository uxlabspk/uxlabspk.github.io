import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";

/**
 * Immersyn landing page (light mode).
 * Put immersyn_intro_720p.mp4 in your /public folder.
 * Fonts: loaded in index.html <head> (Montserrat + IBM Plex Sans).
 * Theme colors/fonts live in src/index.css @theme.
 */

// Grid classes below hardcode 28/11: Tailwind cannot scan interpolated class names.
const DOTS = Array.from({ length: 28 * 11 }, (_, i) => i);

const PRINCIPLES = [
  {
    title: "Private.",
    body: "Your prompts, files and results stay on your device. Nothing is sent anywhere to be answered.",
  },
  {
    title: "Offline.",
    body: "Models small enough to run where you are: on a plane, in a lab, with the Wi-Fi off.",
  },
  {
    title: "Yours.",
    body: "No data center to rent, no permission to ask for. The model runs on hardware you already own.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Download once.",
    body: "Install the Immersyn app and pull a model to your machine — the same way you download any other file.",
  },
  {
    num: "02",
    title: "Open, don't connect.",
    body: "Launch it without Wi-Fi, without a login, without anything leaving your device.",
  },
  {
    num: "03",
    title: "Work as normal.",
    body: "Chat, summarise, generate and analyse. Every result stays local, in your files.",
  },
];

const USE_CASES = [
  {
    icon: "🔬",
    label: "Research",
    text: "Analyse sensitive documents and data without letting them touch an external server.",
  },
  {
    icon: "✈️",
    label: "Travel",
    text: "Full capability on a laptop in airplane mode. No connectivity required.",
  },
  {
    icon: "🏥",
    label: "Healthcare",
    text: "Patient records never leave the building. Compliance by architecture, not by promise.",
  },
  {
    icon: "👩‍💻",
    label: "Development",
    text: "Code assistance that never phones home with your proprietary source.",
  },
  {
    icon: "📚",
    label: "Education",
    text: "Put AI in classrooms and low-bandwidth regions without cloud dependencies.",
  },
  {
    icon: "🏢",
    label: "Enterprise",
    text: "Deploy to air-gapped infrastructure. Full performance, zero data egress.",
  },
];

const STATS = [
  { value: "< 4 GB", label: "Model size" },
  { value: "< 1 s", label: "First-token latency" },
  { value: "0", label: "Network requests at inference" },
  { value: "100%", label: "On-device processing" },
];

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";
const BTN_BASE =
  "inline-block cursor-pointer rounded-md bg-ink font-medium leading-[normal] text-white transition-colors duration-150 hover:bg-signal motion-reduce:transition-none";
const BTN = `${BTN_BASE} px-[26px] py-[14px] text-[16px]`;
const MOTION = "transition-colors duration-400 motion-reduce:transition-none";
const CHIP_PSEUDO =
  "before:absolute before:bottom-[12%] before:left-[-9px] before:top-[12%] before:w-[7px] before:bg-[repeating-linear-gradient(to_bottom,var(--color-ink)_0_2px,transparent_2px_7px)] before:content-[''] after:absolute after:bottom-[12%] after:right-[-9px] after:top-[12%] after:w-[7px] after:bg-[repeating-linear-gradient(to_bottom,var(--color-ink)_0_2px,transparent_2px_7px)] after:content-['']";

export default function LandingPage() {
  const [small, setSmall] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSmall(true);
      return;
    }
    const t = window.setTimeout(() => setSmall(true), 1600);
    return () => window.clearTimeout(t);
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: send `email` to your waitlist provider or API here.
    setSent(true);
  }

  return (
    <Page title="Immersyn | Private AI that runs on your own device">
      {/* ── Hero ── */}
      <section className="grid grid-cols-[1.05fr_1fr] items-center gap-[clamp(32px,6vw,96px)] px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)] max-[820px]:grid-cols-1">
        <div>

          <h1 className="mb-7 font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
            AI shouldn't need
            <br />a data center.
          </h1>
          <p className="mb-5 font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
            It shouldn't need permission, either.
          </p>
          <p className="mb-9 max-w-[46ch] text-[18px] text-graphite">
            Immersyn is an AI research lab making models small enough to run on your own
            device — private, offline, and built for everyone.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a className={BTN} href="#access">Get early access</a>
            <a className="text-ink underline-offset-[5px] hover:underline" href="#watch">
              Watch the 26-second intro
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[18px]">
          <button
            type="button"
            className="relative grid aspect-[28/14] w-full max-w-[560px] cursor-pointer place-items-center bg-transparent"
            onClick={() => setSmall((s) => !s)}
            aria-pressed={small}
            aria-label={
              small
                ? "Showing a model on your device. Select to see it at data center size."
                : "Showing a data center sized model. Select to shrink it."
            }
          >
            <span
              className={`absolute h-[27%] w-[27%] rounded-[7px] border-2 border-ink transition-opacity delay-900 duration-600 motion-reduce:transition-none ${small ? "opacity-100" : "opacity-0"} ${CHIP_PSEUDO}`}
            />
            <span
              className={`grid aspect-[28/11] w-full grid-cols-[repeat(28,1fr)] transition-transform duration-1400 ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none ${small ? "scale-[.2]" : "scale-100"}`}
            >
              {DOTS.map((d) => (
                <i key={d} className="aspect-square w-[36%] justify-self-center self-center rounded-full bg-ink" />
              ))}
            </span>
          </button>
          <p
            className="flex gap-5 font-display text-[14px] font-medium leading-[normal] text-hair"
            aria-live="polite"
          >
            <span className={small ? MOTION : `${MOTION} text-ink`}>Data center</span>
            <span className={small ? `${MOTION} text-ink` : MOTION}>Your device</span>
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-hair bg-ink px-[clamp(20px,5vw,64px)] py-10">
        <dl className="grid grid-cols-4 gap-8 max-[640px]:grid-cols-2">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="mb-1 font-display text-[clamp(28px,3.5vw,40px)] font-light text-white">
                {s.value}
              </dt>
              <dd className="text-[14px] text-[#9ba0aa]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Why small ── */}
      <section id="why" className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className={H2}>So we're making it small.</h2>
          <Link
            to="/about"
            className="text-[15px] text-graphite underline-offset-[5px] hover:text-ink hover:underline"
          >
            Read more about us →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-[clamp(24px,4vw,64px)] max-[820px]:grid-cols-1">
          {PRINCIPLES.map((p) => (
            <article key={p.title} className="border-t-2 border-ink pt-5">
              <h3 className="mb-3 font-display text-[22px] font-medium uppercase tracking-[.14em]">
                {p.title}
              </h3>
              <p className="max-w-[34ch] text-graphite">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-4`}>How it works.</h2>
        <p className="mb-12 max-w-[52ch] text-[18px] text-graphite">
          No cloud account. No subscription. No data leaving your machine. Just a model
          that runs where you are.
        </p>
        <div className="grid grid-cols-3 gap-[clamp(24px,4vw,64px)] max-[820px]:grid-cols-1">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              <span className="font-display text-[14px] font-semibold tracking-[.2em] text-graphite">
                {step.num}
              </span>
              <div className="h-px w-full bg-hair" />
              <h3 className="font-display text-[22px] font-medium leading-[1.3]">{step.title}</h3>
              <p className="max-w-[34ch] text-graphite">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-4`}>Who it's for.</h2>
        <p className="mb-12 max-w-[52ch] text-[18px] text-graphite">
          If the work is sensitive, the connection is unreliable, or the data must stay
          put — Immersyn was designed for you.
        </p>
        <div className="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[500px]:grid-cols-1">
          {USE_CASES.map((u) => (
            <article
              key={u.label}
              className="rounded-xl border border-hair bg-paper p-6 transition-shadow duration-150 hover:shadow-md"
            >
              <span className="mb-4 block text-[32px] leading-none">{u.icon}</span>
              <h3 className="mb-2 font-display text-[18px] font-semibold">{u.label}</h3>
              <p className="text-[15px] text-graphite">{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Watch ── */}
      <section id="watch" className="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 className={H2}>Built for everyone.</h2>
          <p className="text-graphite">The idea in 26 seconds.</p>
        </div>
        <video
          controls
          preload="metadata"
          playsInline
          src="/immersyn_intro_720p.mp4"
          aria-label="Immersyn intro: AI shouldn't need a data center"
          className="mx-auto block aspect-video w-full max-w-[1040px] rounded-[10px] bg-black"
        />
      </section>

      {/* ── Waitlist ── */}
      <section
        id="access"
        className="border-t border-hair bg-ink px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]"
      >
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="mb-4 font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15] text-white">
            Run AI on your own terms.
          </h2>
          <p className="mb-10 text-[18px] text-[#9ba0aa]">
            Leave your email and we'll tell you when Immersyn is ready to try. No spam,
            no selling your address — just one message when it's time.
          </p>
          {sent ? (
            <p className="font-medium text-white" role="status">
              You're on the list. We'll write to{" "}
              <span className="text-signal">{email}</span>.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex w-full max-w-[520px] flex-wrap gap-3">
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow shrink basis-[220px] rounded-md border border-[#3a3d47] bg-[#22242a] px-4 py-[14px] text-[16px] leading-[normal] text-white placeholder:text-[#5a5e66] focus:outline-none focus:ring-2 focus:ring-signal"
                />
                <button className={`${BTN} hover:bg-slate-200 hover:text-black`} type="submit">
                  Get early access
                </button>
              </div>
              <p className="text-[13px] text-[#5a5e66]">
                We collect only your email, used only to notify you. No trackers.
              </p>
            </form>
          )}
        </div>
      </section>
    </Page>
  );
}
