import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [pastForm, setPastForm] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
      const formEl = document.getElementById("snapshot");
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        setPastForm(rect.top < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-7 h-16 flex items-center border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/[0.88] backdrop-blur-[16px] backdrop-saturate-[180%] border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="white" />
              </svg>
            </div>
            <span className="font-serif text-[19px] tracking-[-0.02em] text-foreground">Citeable</span>
            <span className="text-xs text-ink-3 ml-1 font-normal hidden md:inline">· Get Recommended by AI</span>
          </a>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="/#problem" className="text-sm text-ink-2 hover:text-foreground transition-colors">Problem</a>
            <a href="/#how-it-works" className="text-sm text-ink-2 hover:text-foreground transition-colors">How it works</a>
            <a href="/#sprint" className="text-sm text-ink-2 hover:text-foreground transition-colors">Pricing</a>
            <a href="/#faq" className="text-sm text-ink-2 hover:text-foreground transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href="/#snapshot"
              className="hidden sm:inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-[22px] py-3 bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
            >
              Free AI Check
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 p-2 text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          {[
            { label: "Problem", href: "/#problem" },
            { label: "How it works", href: "/#how-it-works" },
            { label: "Pricing", href: "/#sprint" },
            { label: "FAQ", href: "/#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-serif text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#snapshot"
            className="mt-4 bg-foreground text-white px-8 py-4 rounded-lg text-base font-medium w-64 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Free AI Check
          </a>
        </div>
      )}

      {/* Floating CTA bar */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-white rounded-full py-3.5 px-5 sm:px-6 flex items-center gap-4 shadow-[0_8px_40px_rgba(0,0,0,.25)] z-[999] border border-white/[0.08] whitespace-nowrap transition-transform duration-500 ${
          pastHero && !pastForm ? "translate-y-0" : "translate-y-[100px]"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
      >
        <span className="text-sm text-white/60 hidden sm:block">AI is sending users to your competitor.</span>
        <a
          href="/#snapshot"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-[18px] py-[9px] bg-primary text-white shadow-[0_1px_2px_rgba(36,82,232,.3),inset_0_1px_0_rgba(255,255,255,.12)] hover:bg-[#3460F0] hover:-translate-y-px transition-all duration-200"
        >
          Free AI Check
        </a>
      </div>
    </>
  );
};

export default Header;
