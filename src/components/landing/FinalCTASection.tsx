import { motion } from "framer-motion";

const FinalCTASection = () => {
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
            Want to see how AI tools are representing your company?
          </h2>
          <p className="mt-6 text-body text-muted-foreground max-w-2xl">
            Request a free AI Visibility Snapshot and we'll show you where your brand stands, where competitors are winning, and what to fix first.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] transition-all text-base"
            >
              Get a Free AI Visibility Snapshot
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center border border-border bg-background px-8 py-4 rounded-lg font-medium hover:bg-accent transition-colors text-base"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
