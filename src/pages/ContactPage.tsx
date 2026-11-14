import { useState, type FormEvent } from "react";
import { Page } from "../components/Page";

const H2 = "font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]";
const BTN =
  "inline-block cursor-pointer rounded-md bg-ink px-[26px] py-[14px] text-[16px] font-medium leading-[normal] text-white transition-colors duration-150 hover:bg-signal motion-reduce:transition-none";
const LABEL = "mb-2 block text-[15px] font-medium";
const INPUT =
  "w-full rounded-md border border-[#b9bcc3] bg-white px-4 py-[14px] text-[16px] leading-[normal] text-ink";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: send `name`, `email` and `message` to your form provider or API here.
    setSent(true);
  }

  return (
    <Page title="Contact | Immersyn">
      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,9vw,120px)]">
        <h1 className="mb-7 max-w-[20ch] font-display text-[clamp(36px,5.6vw,68px)] font-light leading-[1.08] tracking-[-.01em]">
          Say hello.
        </h1>
        <p className="font-display text-[clamp(18px,2vw,24px)] font-medium leading-[1.4]">
          Questions, partnerships, press. We read everything ourselves.
        </p>
      </section>

      <section className="border-t border-hair px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="grid grid-cols-[1.1fr_.9fr] items-start gap-[clamp(32px,6vw,96px)] max-[820px]:grid-cols-1">
          <div>
            {sent ? (
              <p className="font-medium text-ink" role="status">
                Thanks, {name}. We’ll be in touch at {email}.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex max-w-[560px] flex-col gap-4">
                <div>
                  <label htmlFor="name" className={LABEL}>Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>Email address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={LABEL}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us what you’re building…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div>
                  <button className={BTN} type="submit">Send message</button>
                </div>
              </form>
            )}
          </div>

          <div>
            <h2 className={`${H2} mb-6`}>Reach us directly.</h2>
            <ul className="max-w-[40ch] space-y-6 text-graphite">
              <li>
                <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Email</h3>
                <a className="text-ink underline-offset-[5px] hover:underline" href="mailto:hello@immersyn.ai">
                  hello@immersyn.ai
                </a>
              </li>
              <li>
                <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Response time</h3>
                <p>A few days, by a human. No bots, no ticket numbers.</p>
              </li>
              <li>
                <h3 className="mb-1 font-display text-[18px] font-medium text-ink">Press & partnerships</h3>
                <p>Same address — put “Press” in the subject and it finds the right desk.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Page>
  );
}
