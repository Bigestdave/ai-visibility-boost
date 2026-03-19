import { useState } from "react";

const faqs = [
  {
    q: "What do you actually do?",
    a: "We fix your website so that when buyers ask ChatGPT, Perplexity, or other AI tools who they should hire, the AI recommends you, not your competitor. We do this by adding the right pages, facts, and hidden code that AI tools need to understand your company.",
  },
  {
    q: "Can you guarantee AI will recommend us?",
    a: "No one can guarantee that. What we can guarantee is that we'll fix the specific things on your site that are preventing AI from understanding and recommending you. The results speak for themselves.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO helps you rank on Google. This helps you get recommended when buyers ask AI tools like ChatGPT \"who should I hire?\" They're two different channels — and AI is growing fast.",
  },
  {
    q: "What kind of changes do you make to our site?",
    a: "We build comparison pages (you vs. competitors), add case study pages AI can read, fix your FAQ content, and add hidden code called \"structured data\" that tells AI your real facts. Nothing weird or spammy.",
  },
  {
    q: "How long does it take?",
    a: "Most projects are done in 7–10 business days. It's a focused sprint, not a drawn-out engagement.",
  },
  {
    q: "Who is this for?",
    a: "Any B2B company where one new client is worth $5,000 or more. Agencies, consultants, SaaS companies, law firms, professional services — if buyers compare options before hiring, this is for you.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding px-7 bg-background">
      <div className="container-page">
        <div className="max-w-[760px] mx-auto">
          <div className="section-header section-header--center text-center mb-12">
            <div className="accent-line mx-auto mb-6 reveal below-fold" />
            <h2 className="display-lg text-foreground reveal below-fold reveal-delay-1">Frequently asked questions</h2>
          </div>

          <div className="flex flex-col reveal below-fold reveal-delay-2">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`border-b border-border ${i === 0 ? "border-t" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-5 py-[22px] text-left text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen ? "bg-primary border-primary" : "border-border"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-45 text-white" : "text-ink-3"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: isOpen ? "400px" : "0px",
                      paddingBottom: isOpen ? "22px" : "0px",
                      transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    <p className="text-[15px] text-ink-2 leading-[1.7] max-w-[640px]">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
