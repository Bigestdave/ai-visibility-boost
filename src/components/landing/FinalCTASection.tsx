import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[640px] mx-auto text-center"
        >
          <h2 className="heading-section text-foreground">
            Want to see how AI tools are representing your company?
          </h2>
          <p className="mt-5 text-body-lg text-muted-foreground">
            Request a free AI Visibility Snapshot. We'll show you where your brand stands, where competitors are winning, and what to fix first.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Get My Free AI Visibility Snapshot
            </a>
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 rounded-full font-medium text-base hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              Book a Call
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground uppercase tracking-wide font-medium">
            Free · No pitch call needed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
