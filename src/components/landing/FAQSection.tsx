import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What exactly is AI search visibility?",
    a: "It's how your company appears when buyers use tools like ChatGPT, Perplexity, Gemini, and AI-driven search experiences to research software, compare products, and validate options.",
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-accent">
      <div className="container-page max-w-[720px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="heading-section text-foreground text-center"
        >
          Frequently asked questions
        </motion.h2>

        <div className="mt-14">
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
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                <span className="text-muted-foreground flex-shrink-0 text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
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
