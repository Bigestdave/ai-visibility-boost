import { useState } from "react";

const faqs = [
  {
    q: "What exactly is AI search visibility?",
    a: "It's how your company appears when buyers use tools like ChatGPT, Perplexity, Gemini, and AI-driven search experiences to research software, compare products, and validate shortlists. If those tools describe your product inaccurately, incompletely, or not at all — you lose influence over the evaluation before a prospect ever reaches your site.",
  },
  {
    q: "Do you guarantee rankings or mentions in AI tools?",
    a: "No. No one can credibly guarantee that. What we do is improve the content, page structure, and factual clarity AI systems rely on when interpreting and citing software companies.",
  },
  {
    q: "How is this different from SEO?",
    a: "Traditional SEO focuses on search engine rankings and traffic. AI search visibility focuses on how AI systems summarize, compare, and cite your product during research and evaluation.",
  },
  {
    q: "What kinds of pages do you improve?",
    a: "Usually comparison pages, alternatives pages, use-case pages, product facts pages, FAQs, and other high-intent content that helps both buyers and AI systems understand your product clearly.",
  },
  {
    q: "How long does the sprint take?",
    a: "Most projects are completed in 7–10 business days depending on scope and access.",
  },
  {
    q: "Who is this best suited for?",
    a: "B2B SaaS companies with clear competitors, comparison-based buying behavior, and a product that prospects research before purchase.",
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
