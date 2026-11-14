import { Link } from "react-router-dom";
import { Page } from "../components/Page";

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";

export default function PrivacyPage() {
  return (
    <Page title="Privacy | Immersyn">
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)]">
        <h1 className="mb-7 max-w-[20ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
          Privacy, in plain words.
        </h1>
        <p className="font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
          The short version: your data stays yours.
        </p>
      </section>

      <section className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="max-w-[68ch] space-y-12">
          <article>
            <h2 className={`${H2} mb-4`}>What we collect.</h2>
            <p className="text-graphite">
              Only the email you leave on the waitlist, and only to tell you when Immersyn
              is ready. No accounts, no analytics, no third-party trackers.
            </p>
          </article>
          <article>
            <h2 className={`${H2} mb-4`}>On-device by design.</h2>
            <p className="text-graphite">
              Prompts, files and results are processed on your device and never uploaded.
              There is no server-side record of what you asked: nothing of yours for us to
              lose, sell, or hand over.
            </p>
          </article>
          <article>
            <h2 className={`${H2} mb-4`}>This website.</h2>
            <p className="text-graphite">
              A static site with no cookies and no analytics. Your browser fetches its
              fonts from Google’s CDN; that is the only request you make to anyone else.
            </p>
          </article>
          <article>
            <h2 className={`${H2} mb-4`}>Questions.</h2>
            <p className="text-graphite">
              Anything unclear?{" "}
              <Link className="text-ink underline-offset-[5px] hover:underline" to="/contact">
                Write to us
              </Link>{" "}
              and a human will answer.
            </p>
          </article>
        </div>
      </section>
    </Page>
  );
}
