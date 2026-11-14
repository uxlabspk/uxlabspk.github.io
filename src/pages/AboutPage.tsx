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
    body: "If a capability needs a data center, we cut it until it doesn’t. Speed and privacy are consequences of size.",
  },
  {
    title: "Open by default.",
    body: "Weights, benchmarks and mistakes: we share what we learn so anyone can check our work and build on it.",
  },
];

export default function AboutPage() {
  return (
    <Page title="About | Immersyn">
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)]">
        <h1 className="mb-7 max-w-[20ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
          Built small on purpose.
        </h1>
        <p className="mb-5 font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
          One stubborn idea, and a lot of measuring.
        </p>
        <p className="max-w-[46ch] text-[18px] text-graphite">
          We started Immersyn because the most interesting models shouldn’t need a
          warehouse, a lease, or a login to someone else’s computer.
        </p>
      </section>

      <section className="bg-wash px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-8`}>Why we started.</h2>
        <div className="max-w-[68ch] space-y-6 text-graphite">
          <p>
            Useful AI has gotten expensive to reach. If your work needs a live connection,
            a growing budget and someone else’s permission, then it isn’t really yours.
          </p>
          <p>
            We thought the opposite was possible: models small enough for ordinary
            hardware, quick enough to feel instant, and private enough that nothing ever
            leaves the room.
          </p>
        </div>
      </section>

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

      <section className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <h2 className={`${H2} mb-4`}>Come see it work.</h2>
        <p className="mb-8 max-w-[48ch] text-graphite">
          The idea takes 26 seconds. Getting early access takes one email.
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link className={BTN} to="/contact">Get in touch</Link>
          <a className="text-ink underline-offset-[5px]" href="/#watch">
            Watch the 26-second intro
          </a>
        </div>
      </section>
    </Page>
  );
}
