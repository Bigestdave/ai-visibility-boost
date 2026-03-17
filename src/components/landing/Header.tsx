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
      setPastHero(window.scrollY > window.innerHeight * 0.8);
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
            ? "bg-white/80 backdrop-blur-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-16">
          <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
            Citeable
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#sprint" className="hover:text-primary transition-colors">Sprint</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#snapshot"
              className="text-[15px] font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Book a Call
            </a>
            <a
              href="#snapshot"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:-translate-y-px transition-all"
            >
              Get Free Snapshot
            </a>
          </div>
          {/* Mobile hamburger */}
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center gap-8"
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
                className="text-2xl font-semibold text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#snapshot"
              className="mt-4 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold w-64 text-center"
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
            className="fixed bottom-0 left-0 right-0 z-[999] bg-white/92 backdrop-blur-2xl border-t border-border py-3 px-6"
          >
            <div className="container-page flex items-center justify-center gap-4">
              <span className="hidden sm:inline text-[15px] font-medium text-muted-foreground">
                See how AI tools describe your software
              </span>
              <a
                href="#snapshot"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] transition-all sm:w-auto w-full text-center"
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
