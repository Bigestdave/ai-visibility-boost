import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pastForm, setPastForm] = useState(false);

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
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-serif text-lg font-bold leading-none">"</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground font-sans">Citeable</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#sprint" className="hover:text-foreground transition-colors">Sprint</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#snapshot"
              className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Free Snapshot
            </a>
          </div>
          <button
            className="md:hidden p-2 text-foreground"
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
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-5 right-6 p-2 text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            {["How It Works", "Sprint", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-2xl font-serif font-semibold text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#snapshot"
              className="mt-4 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium w-64 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Snapshot
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky bottom CTA bar */}
      <AnimatePresence>
        {pastHero && !pastForm && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[999] bg-background/95 backdrop-blur-2xl border-t border-border py-3 px-6"
          >
            <div className="container-page flex items-center justify-center gap-4">
              <span className="hidden sm:inline text-sm text-muted-foreground">
                AI buyers can't find you.
              </span>
              <a
                href="#snapshot"
                className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity sm:w-auto w-full text-center"
              >
                Get Free Snapshot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
