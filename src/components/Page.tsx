import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

const BRAND =
  "inline-flex items-center gap-3 font-display text-[14px] font-semibold tracking-[.28em] text-ink";
const NAV_LINK = "max-[820px]:hidden text-graphite hover:text-ink";
const BTN_SM =
  "inline-block cursor-pointer rounded-md bg-ink px-4 py-[9px] text-[14px] font-medium leading-[normal] text-white transition-colors duration-150 hover:bg-signal motion-reduce:transition-none";

function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 30" aria-hidden="true">
      <path d="M2 8 12 3v19L2 27z" fill="currentColor" opacity=".55" />
      <path d="M14 1l12 5v18l-12 5z" fill="currentColor" />
    </svg>
  );
}

export function Page({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans leading-[1.6] text-ink">
      <header className="flex items-center justify-between border-b border-hair px-[clamp(20px,5vw,64px)] py-5">
        <Link className={BRAND} to="/" onClick={() => window.scrollTo(0, 0)} aria-label="Immersyn home">
          <Logo className="h-6 w-[22px]" />
          <span>IMMERSYN</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 text-[15px]">
          <a href="/#why" className={NAV_LINK}>Why small</a>
          <a href="/#watch" className={NAV_LINK}>Watch</a>
          <Link to="/about" className={NAV_LINK}>About</Link>
          <Link to="/contact" className={NAV_LINK}>Contact</Link>
          <a href="/#access" className={BTN_SM}>Get early access</a>
        </nav>
      </header>

      <main className="grow">{children}</main>

      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-hair px-[clamp(20px,5vw,64px)] py-7 text-[14px] text-graphite">
        <span className={BRAND}>
          <Logo className="h-6 w-[22px]" />
          <span>IMMERSYN</span>
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/about" className="hover:text-ink">About</Link>
          <Link to="/contact" className="hover:text-ink">Contact</Link>
          <Link to="/privacy" className="hover:text-ink">Privacy</Link>
        </nav>
        <span>AI research. Small. On-device. For everyone.</span>
      </footer>
    </div>
  );
}
