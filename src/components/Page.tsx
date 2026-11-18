import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { Icon } from "./Icon";

const NAV_LINK =
  "relative py-2 text-[14px] font-medium text-graphite transition-colors duration-200 hover:text-ink";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M3 10.5 14.5 5v22L3 32.5v-22Z" fill="currentColor" opacity=".46" />
      <path d="M17 3 31 9v19l-14 6V3Z" fill="currentColor" />
      <path d="M8 14v12" stroke="white" strokeOpacity=".55" strokeWidth="1.5" />
    </svg>
  );
}

export function Page({ title, children }: { title: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { document.title = title; }, [title]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path: string) => pathname === path;
  const navClass = (path: string) => `${NAV_LINK} ${isActive(path) ? "text-ink after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-signal" : ""}`;

  return (
    <div className="site-shell flex min-h-screen flex-col bg-paper font-sans text-ink">
      <header className="site-header sticky top-0 z-50 border-b border-hair/80 bg-paper/90 backdrop-blur-xl">
        <Container className="flex h-[76px] items-center justify-between">
          <Link
            className="group inline-flex items-center gap-3 font-display text-[13px] font-semibold tracking-[.22em] text-ink"
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="Immersyn home"
          >
            <LogoMark className="h-[31px] w-[31px] transition-transform duration-300 group-hover:rotate-[-5deg]" />
            <span>IMMERSYN</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 min-[820px]:flex">
            <a href="/#why" className={NAV_LINK}>Why small</a>
            <a href="/#watch" className={NAV_LINK}>The idea</a>
            <Link to="/about" className={navClass("/about")}>About</Link>
            <Link to="/contact" className={navClass("/contact")}>Contact</Link>
            <a href="/#access" className="button-primary button-primary--small ml-1">
              Get early access <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-hair text-ink transition-colors hover:border-ink min-[820px]:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>
      </header>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 flex flex-col gap-2 overflow-y-auto bg-paper px-6 py-8 min-[820px]:hidden"
        >
          <a href="/#why" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Why small <Icon name="arrow-up-right" className="h-4 w-4" /></a>
          <a href="/#watch" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>The idea <Icon name="arrow-up-right" className="h-4 w-4" /></a>
          <Link to="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About <Icon name="arrow-up-right" className="h-4 w-4" /></Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact <Icon name="arrow-up-right" className="h-4 w-4" /></Link>
          <Link to="/privacy" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Privacy <Icon name="arrow-up-right" className="h-4 w-4" /></Link>
          <a href="/#access" className="button-primary mt-5 justify-center" onClick={() => setMenuOpen(false)}>
            Get early access <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </nav>
      )}

      <main className="grow">{children}</main>

      <footer className="site-footer border-t border-hair bg-[#f1f1ee]">
        <Container className="py-14 sm:py-[72px]">
          <div className="grid grid-cols-[1.5fr_.65fr_.65fr] gap-12 max-[640px]:grid-cols-1 max-[640px]:gap-10">
            <div>
              <Link className="inline-flex items-center gap-3 font-display text-[13px] font-semibold tracking-[.22em] text-ink" to="/">
                <LogoMark className="h-[31px] w-[31px]" /><span>IMMERSYN</span>
              </Link>
              <p className="mt-5 max-w-[36ch] text-[14px] text-graphite">
                An independent AI research lab making powerful models small enough to run on your own device.
              </p>
              <a className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-signal" href="mailto:hello@immersyn.ai">
                hello@immersyn.ai <Icon name="arrow-up-right" className="h-4 w-4" />
              </a>
            </div>
            <div>
              <p className="footer-label">Explore</p>
              <nav aria-label="Footer company" className="flex flex-col gap-3 text-[14px]">
                <Link to="/about" className="footer-link">About us</Link>
                <Link to="/contact" className="footer-link">Get in touch</Link>
                <Link to="/privacy" className="footer-link">Privacy policy</Link>
              </nav>
            </div>
            <div>
              <p className="footer-label">Discover</p>
              <nav aria-label="Footer product" className="flex flex-col gap-3 text-[14px]">
                <a href="/#why" className="footer-link">Why small</a>
                <a href="/#watch" className="footer-link">Watch the intro</a>
                <a href="/#access" className="footer-link">Early access</a>
              </nav>
            </div>
          </div>
        </Container>
        <div className="border-t border-hair/80">
          <Container className="flex flex-wrap items-center justify-between gap-3 py-5 text-[12px] text-graphite">
            <span>© {new Date().getFullYear()} Immersyn Research. All rights reserved.</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-signal" /> Independent research. Built with intention.</span>
          </Container>
        </div>
      </footer>
    </div>
  );
}
