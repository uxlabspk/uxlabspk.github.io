import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const BRAND =
  "inline-flex items-center gap-3 font-display text-[14px] font-semibold tracking-[.28em] text-ink";
const NAV_LINK =
  "text-[15px] text-graphite transition-colors duration-150 hover:text-ink";
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
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path: string) =>
    pathname === path
      ? "text-ink font-medium"
      : "";

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans leading-[1.6] text-ink">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-hair bg-paper/95 px-[clamp(20px,5vw,64px)] py-5 backdrop-blur-sm">
        <Link
          className={BRAND}
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Immersyn home"
        >
          <Logo className="h-6 w-[22px]" />
          <span>IMMERSYN</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-7 min-[820px]:flex">
          <a href="/#why" className={NAV_LINK}>Why small</a>
          <a href="/#watch" className={NAV_LINK}>Watch</a>
          <Link to="/about" className={`${NAV_LINK} ${isActive("/about")}`}>About</Link>
          <Link to="/contact" className={`${NAV_LINK} ${isActive("/contact")}`}>Contact</Link>
          <a href="/#access" className={BTN_SM}>Get early access</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-[5px] min-[820px]:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="fixed inset-0 top-[69px] z-40 flex flex-col gap-6 bg-paper px-8 py-10 text-[18px] min-[820px]:hidden"
        >
          <a href="/#why" className="text-graphite hover:text-ink" onClick={() => setMenuOpen(false)}>Why small</a>
          <a href="/#watch" className="text-graphite hover:text-ink" onClick={() => setMenuOpen(false)}>Watch</a>
          <Link to="/about" className={`text-graphite hover:text-ink ${isActive("/about")}`}>About</Link>
          <Link to="/contact" className={`text-graphite hover:text-ink ${isActive("/contact")}`}>Contact</Link>
          <Link to="/privacy" className={`text-graphite hover:text-ink ${isActive("/privacy")}`}>Privacy</Link>
          <div className="pt-2">
            <a
              href="/#access"
              className="inline-block rounded-md bg-ink px-6 py-3 font-medium text-white hover:bg-signal"
              onClick={() => setMenuOpen(false)}
            >
              Get early access
            </a>
          </div>
        </nav>
      )}

      <main className="grow">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-hair bg-wash">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-16 gap-y-8 px-[clamp(20px,5vw,64px)] py-12 max-[640px]:grid-cols-1">
          {/* Brand col */}
          <div>
            <span className={`${BRAND} mb-4 inline-flex`}>
              <Logo className="h-6 w-[22px]" />
              <span>IMMERSYN</span>
            </span>
            <p className="mt-3 max-w-[34ch] text-[14px] text-graphite">
              AI research dedicated to making powerful models small enough to run
              on your own device — private, offline, and yours.
            </p>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[.14em] text-graphite">Company</p>
            <nav aria-label="Footer company" className="flex flex-col gap-3 text-[15px]">
              <Link to="/about" className="text-graphite hover:text-ink">About</Link>
              <Link to="/contact" className="hover:text-ink text-graphite">Contact</Link>
              <Link to="/privacy" className="text-graphite hover:text-ink">Privacy</Link>
            </nav>
          </div>

          {/* Product links */}
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[.14em] text-graphite">Product</p>
            <nav aria-label="Footer product" className="flex flex-col gap-3 text-[15px]">
              <a href="/#why" className="text-graphite hover:text-ink">Why small</a>
              <a href="/#watch" className="text-graphite hover:text-ink">Watch intro</a>
              <a href="/#access" className="text-graphite hover:text-ink">Early access</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hair px-[clamp(20px,5vw,64px)] py-5 text-[13px] text-graphite">
          <span>© {new Date().getFullYear()} Immersyn. All rights reserved.</span>
          <span>AI research. Small. On-device. For everyone.</span>
        </div>
      </footer>
    </div>
  );
}
