import { motion } from "framer-motion";

const WhyNowSection = () => {
  return (
    <section className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="heading-section text-foreground">
            The journey has moved.
          </h2>
          <div className="mt-8 space-y-5 text-body text-muted-foreground">
            <p>
              Buyers are skipping the search results page and going straight to the answer engine. If your product isn't in the summary, you're not in the shortlist.
            </p>
            <p>
              Prospects are using AI tools to compare competitors, validate claims, understand pricing and fit, narrow shortlists, and summarize what your product does.
            </p>
            <p>
              If those systems can't clearly retrieve and interpret your product information, you lose control of how your software is understood during the evaluation process.
            </p>
            <p className="text-foreground font-medium">
              This is not about "gaming AI." It's about making sure your company is clearly represented where modern buying decisions are happening.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNowSection;
