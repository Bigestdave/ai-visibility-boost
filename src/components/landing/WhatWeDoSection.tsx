import { useEffect, useRef, useState } from "react";

const items = [
  "See exactly what ChatGPT and Perplexity say about you when users ask",
  "Find out where AI is recommending your competitors instead of you",
  "Fix the hidden code on your site so AI can actually read your facts",
  "Build the comparison and documentation pages AI tools look for",
  "Get your product recommended first when users ask AI what to choose",
];

const platforms = [
  { name: "ChatGPT", dot: "#10a37f", badge: "Partial", level: 45 },
  { name: "Perplexity", dot: "#1c7ed6", badge: "Missing", level: 8 },
  { name: "Gemini", dot: "#8b5cf6", badge: "Weak", level: 20 },
  { name: "Claude", dot: "#0ea5e9", badge: "Missing", level: 5 },
  { name: "AI Overviews", dot: "#f59e0b", badge: "Partial", level: 40 },
];

const competitorPlatforms = [
  { name: "ChatGPT", dot: "#10a37f", badge: "Strong", level: 92 },
  { name: "Perplexity", dot: "#1c7ed6", badge: "Cited", level: 85 },
];

const barColor = (badge: string) => {
  if (badge === "Strong" || badge === "Cited") return "#22C55E";
  if (badge === "Partial" || badge === "Weak") return "#F59E0B";
  return "#EF4444";
};

const WhatWeDoSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding px-7 bg-background">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left copy */}
          <div className="max-w-[520px]">
            <div className="accent-line mb-6 reveal below-fold" />
            <h2 className="display-md text-foreground mb-6 reveal below-fold reveal-delay-1">
              We make AI recommend you instead of your competitor
            </h2>
            <p className="text-lg-body mb-6 reveal below-fold reveal-delay-2">
              Your website was built for Google and human visitors. But ChatGPT, Perplexity, and other AI tools read your site differently. If they can't find clear facts, comparisons, and documentation, they'll recommend someone else.
            </p>
            <p className="text-lg-body mb-6 reveal below-fold reveal-delay-2">
              We fix the code and content on your site so AI tools can actually understand what you do, and start telling users to choose you.
            </p>

            <div className="flex flex-col gap-3.5 reveal below-fold reveal-delay-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-ink-2 leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visibility Dashboard */}
          <div className="reveal below-fold reveal-delay-4" ref={cardRef}>
            <div className="relative rounded-[20px] overflow-hidden" style={{ background: 'linear-gradient(145deg, #0C0C10 0%, #1a1a22 100%)' }}>
              {/* Top bar */}
              <div className="flex items-center gap-2 px-6 pt-5 pb-4">
                <span className="w-[7px] h-[7px] rounded-full bg-[#EF4444]/70" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#F59E0B]/70" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E]/70" />
                <span className="ml-auto text-[10px] tracking-[0.08em] uppercase text-white/25 font-medium">Live scan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              </div>

              <div className="px-6 pb-6">
                {/* Your brand */}
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 mb-3">Your product</p>
                <div className="space-y-[1px]">
                  {platforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-[10px]">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                      <span className="text-[13px] text-white/70 font-medium w-[100px] flex-shrink-0">{p.name}</span>
                      <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: isVisible ? `${p.level}%` : '0%',
                            background: barColor(p.badge),
                            transition: `width 1.2s cubic-bezier(.16,1,.3,1) ${i * 0.15}s`,
                          }}
                        />
                      </div>
                      <span
                        className="text-[11px] font-medium w-[52px] text-right transition-opacity duration-500"
                        style={{
                          color: barColor(p.badge),
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${i * 0.15 + 0.6}s`,
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-white/[0.06] my-4" />

                {/* Competitor */}
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 mb-3">Your competitor</p>
                <div className="space-y-[1px]">
                  {competitorPlatforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-[10px]">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                      <span className="text-[13px] text-white/70 font-medium w-[100px] flex-shrink-0">{p.name}</span>
                      <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: isVisible ? `${p.level}%` : '0%',
                            background: '#22C55E',
                            transition: `width 1.2s cubic-bezier(.16,1,.3,1) ${(i + platforms.length) * 0.15}s`,
                          }}
                        />
                      </div>
                      <span
                        className="text-[11px] font-medium w-[52px] text-right text-[#22C55E] transition-opacity duration-500"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${(i + platforms.length) * 0.15 + 0.6}s`,
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-white/[0.05] bg-white/[0.02]">
                <p className="text-[11px] text-white/25 italic">Example snapshot output, your results may vary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
