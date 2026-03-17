import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq" className="section-padding bg-background">
      <div className="container-page max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading-section text-foreground">Frequently asked questions</h2>
        </motion.div>

        <div className="mt-12 border-t border-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <span
                    className={`text-muted-foreground text-lg transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base text-muted-foreground leading-[1.7] max-w-[640px]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
