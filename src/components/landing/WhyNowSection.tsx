import { motion } from "framer-motion";

const useCases = [
  { icon: "⚡", text: "Compare competitors" },
  { icon: "✓", text: "Validate claims" },
  { icon: "💰", text: "Understand pricing" },
  { icon: "📋", text: "Narrow shortlists" },
  { icon: "📝", text: "Summarize products" },
];

const WhyNowSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px] mx-auto text-center"
        >
          <p className="label-overline mb-4">Why Now</p>
          <h2 className="heading-section text-foreground">
            The buyer journey is shifting to AI
          </h2>

          <p className="mt-6 text-body-lg text-muted-foreground">
            More prospects are skipping traditional search and asking AI tools direct buying questions. That means your web presence now influences not just rankings — but how your product is summarized, compared, and recommended.
          </p>

          {/* Pull quote */}
          <div className="my-10 relative py-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-primary" />
            <p className="text-[22px] font-medium text-foreground leading-snug max-w-[560px] mx-auto px-8">
              This isn't about gaming AI. It's about making sure your company is clearly represented where modern buying decisions happen.
            </p>
          </div>

          <p className="text-body-lg text-muted-foreground">
            The companies that adapt early will be easier to understand, easier to trust, and easier to shortlist.
          </p>

          {/* Use case strip */}
          <div className="mt-10 bg-background rounded-xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="text-[15px] text-muted-foreground font-medium">Prospects already use AI to:</span>
            {useCases.map((uc, i) => (
              <span key={i} className="text-[15px] text-muted-foreground flex items-center gap-1.5">
                <span className="text-primary text-xs">{uc.icon}</span>
                {uc.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNowSection;
