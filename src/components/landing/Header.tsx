import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
          Citeable
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Why AI Search</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#sprint" className="hover:text-foreground transition-colors">Sprint</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="#form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] transition-all hover:scale-[1.02]"
              >
                Get Snapshot
              </motion.a>
            )}
          </AnimatePresence>
          <a
            href="#form"
            className="hidden sm:inline-flex border border-border bg-background px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
