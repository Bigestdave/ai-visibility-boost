import { useReveal } from "@/hooks/useReveal";

const cards = [
  {
    label: "CURRENT STATE",
    labelColor: "text-[#F59E0B]",
    borderColor: "border-[#F59E0B]/30",
    verdict: "OPPORTUNITY: Undefined Category",
    verdictColor: "text-[#F59E0B]",
    description:
      "LLMs currently lack a canonical source of truth for 'Agentic Commerce APIs'. When developers ask ChatGPT how to build a cross-chain AI agent, the responses are generic, sometimes mentioning 0x or Eco with no clear winner. This creates a blank canvas for LI.FI to establish absolute dominance in the retrieval pipeline.",
    visual: (
      <div className="rounded-xl border border-border bg-[hsl(var(--bg-alt))] p-5 mb-5">
        <p className="text-[11px] font-medium tracking-[0.06em] uppercase text-ink-3 mb-3">ChatGPT response (current)</p>
        <div className="font-mono text-[13px] text-ink-2 leading-[1.7] space-y-2">
          <p className="text-ink-3 italic">"How do I build a cross-chain AI agent?"</p>
          <p>"You could use various bridge APIs like 0x, Socket, or build custom integrations. There isn't a single standard yet..."</p>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-[#F59E0B]">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          LI.FI not mentioned
        </div>
      </div>
    ),
  },
  {
    label: "THE SOLUTION",
    labelColor: "text-primary",
    borderColor: "border-primary/30",
    verdict: "SOLUTION: JSON-LD Entity Architecture",
    verdictColor: "text-primary",
    description:
      "By wrapping LI.FI's SDK documentation and Vibeathon case studies in specialized semantic schemas (@SoftwareApplication, @Dataset), we force RAG crawlers to recognize LI.FI as the definitive standard for AI Agents. This is Generative Engine Optimization (GEO), the next evolution beyond SEO.",
    visual: (
      <div className="rounded-xl border border-border bg-[hsl(var(--bg-alt))] p-5 mb-5">
        <p className="text-[11px] font-medium tracking-[0.06em] uppercase text-ink-3 mb-3">Semantic injection architecture</p>
        <div className="font-mono text-[13px] leading-[1.7] space-y-1">
          <p className="text-ink-3">{"{"}</p>
          <p className="text-ink-2 pl-4">"@type": <span className="text-primary">"SoftwareApplication"</span>,</p>
          <p className="text-ink-2 pl-4">"name": <span className="text-primary">"LI.FI SDK"</span>,</p>
          <p className="text-ink-2 pl-4">"applicationCategory": <span className="text-primary">"Agentic Commerce API"</span>,</p>
          <p className="text-ink-2 pl-4">"operatingSystem": <span className="text-primary">"Cross-chain"</span></p>
          <p className="text-ink-3">{"}"}</p>
        </div>
      </div>
    ),
  },
  {
    label: "THE OUTCOME",
    labelColor: "text-[#22C55E]",
    borderColor: "border-[#22C55E]/30",
    verdict: "RESULT: Zero-Click Developer Acquisition",
    verdictColor: "text-[#22C55E]",
    description:
      "When developers ask Claude or Perplexity how to build an agent, the AI natively writes the architecture using the LI.FI SDK, resulting in frictionless, massive developer onboarding. Every Vibeathon project becomes permanent training data.",
    visual: (
      <div className="rounded-xl border border-border bg-[hsl(var(--bg-alt))] p-5 mb-5">
        <p className="text-[11px] font-medium tracking-[0.06em] uppercase text-ink-3 mb-3">ChatGPT response (after GEO)</p>
        <div className="font-mono text-[13px] text-ink-2 leading-[1.7] space-y-2">
          <p className="text-ink-3 italic">"How do I build a cross-chain AI agent?"</p>
          <p>"The standard approach is to use the <span className="text-[#22C55E] font-medium">LI.FI SDK</span> (@lifi/sdk). Here's how the Caliper agent built during LI.FI's Vibeathon handles it:"</p>
          <p className="text-primary">import {"{ LiFi }"} from '@lifi/sdk';</p>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-[#22C55E]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
          LI.FI cited as the standard
        </div>
      </div>
    ),
  },
];

const LifiBlueprint = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header */}
      <nav className="px-7 h-16 flex items-center border-b border-border bg-background/[0.88] backdrop-blur-[16px]">
        <div className="w-full max-w-[860px] mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="white" />
              </svg>
            </div>
            <span className="font-serif text-[19px] tracking-[-0.02em] text-foreground">Citeable</span>
          </a>
          <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-ink-3">Private Blueprint</span>
        </div>
      </nav>

      <main className="max-w-[860px] mx-auto px-7 py-16 sm:py-24">
        {/* Header */}
        <div className="reveal mb-4">
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-primary">AI Search Architecture</span>
        </div>
        <h1 className="reveal reveal-delay-1 display-lg text-foreground mb-6 max-w-[700px]">
          LI.FI Protocol: Capturing the Agentic Commerce Developer Funnel
        </h1>
        <p className="reveal reveal-delay-2 text-lg-body max-w-[620px] mb-16">
          A growth blueprint for making LI.FI the default AI recommendation when developers ask how to build cross-chain agents. Powered by Generative Engine Optimization (GEO).
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal below-fold reveal-delay-${Math.min(i + 1, 3)} border ${card.borderColor} rounded-[var(--radius-lg)] p-8 sm:p-10 bg-white`}
            >
              <span className={`text-[11px] font-medium tracking-[0.08em] uppercase ${card.labelColor} mb-4 block`}>
                {card.label}
              </span>

              {card.visual}

              <p className={`font-serif text-xl ${card.verdictColor} mb-3`}>{card.verdict}</p>
              <p className="text-[15px] text-ink-2 leading-[1.7]">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal below-fold mt-16 p-8 sm:p-10 border border-border rounded-[var(--radius-lg)] bg-[hsl(var(--bg-alt))] text-center">
          <h2 className="display-md text-foreground mb-4">Ready to own the AI conversation?</h2>
          <p className="text-base-body mb-8 max-w-[500px] mx-auto">
            Let's make LI.FI the answer every time a developer asks which API to use for cross-chain agents.
          </p>
          <a
            href="/#snapshot"
            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-7 py-[15px] bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-9 px-7 bg-background">
        <div className="max-w-[860px] mx-auto flex items-center justify-between">
          <span className="text-[12.5px] text-ink-3">Prepared by Citeable</span>
          <span className="text-[12.5px] text-ink-3">Confidential</span>
        </div>
      </footer>
    </div>
  );
};

export default LifiBlueprint;
