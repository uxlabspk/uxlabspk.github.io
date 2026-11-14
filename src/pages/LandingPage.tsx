import { useEffect, useState, type FormEvent } from "react";
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

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";
// Size utilities live outside BTN_BASE: btn and btn-sm must not fight over padding/font-size.
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
      <section className="grid grid-cols-[1.05fr_1fr] items-center gap-[clamp(32px,6vw,96px)] px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)] max-[820px]:grid-cols-1">
          <div>
            <h1 className="mb-7 font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
              AI shouldn’t need
              <br />a data center.
            </h1>
            <p className="mb-5 font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
              It shouldn’t need permission, either.
            </p>
            <p className="mb-9 max-w-[46ch] text-[18px] text-graphite">
              Immersyn is an AI research lab making models small enough to run on your own
              device, built for everyone.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a className={BTN} href="#access">Get early access</a>
              <a className="text-ink underline-offset-[5px]" href="#watch">
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
              aria-label={small ? "Showing a model on your device. Select to see it at data center size." : "Showing a data center sized model. Select to shrink it."}
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
            <p className="flex gap-5 font-display text-[14px] font-medium leading-[normal] text-hair" aria-live="polite">
              <span className={small ? MOTION : `${MOTION} text-ink`}>Data center</span>
              <span className={small ? `${MOTION} text-ink` : MOTION}>Your device</span>
            </p>
          </div>
        </section>

        <section id="why" className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
          <h2 className={`${H2} mb-12`}>So we’re making it small.</h2>
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
            aria-label="Immersyn intro: AI shouldn’t need a data center"
            className="mx-auto block aspect-video w-full max-w-[1040px] rounded-[10px] bg-black"
          />
        </section>

        <section id="access" className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
          <h2 className={`${H2} mb-4`}>Run AI on your own terms.</h2>
          <p className="mb-8 max-w-[48ch] text-graphite">
            Leave your email and we’ll tell you when Immersyn is ready to try.
          </p>
          {sent ? (
            <p className="font-medium text-ink" role="status">
              You’re on the list. We’ll write to {email}.
            </p>
          ) : (
            <form onSubmit={onSubmit}>
              <label htmlFor="email" className="mb-2 block text-[15px] font-medium">
                Email address
              </label>
              <div className="flex max-w-[560px] flex-wrap gap-3">
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow shrink basis-[260px] rounded-md border border-[#b9bcc3] bg-white px-4 py-[14px] text-[16px] leading-[normal] text-ink"
                />
                <button className={BTN} type="submit">Get early access</button>
              </div>
            </form>
          )}
        </section>
    </Page>
  );
}
