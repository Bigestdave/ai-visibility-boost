import { useState } from "react";
import { motion } from "framer-motion";

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" className="section-padding bg-accent">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Why Now copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="heading-section text-foreground">
              Request your free snapshot
            </h2>
            <div className="mt-6 space-y-4 text-body text-muted-foreground">
              <p>The buyer journey is changing fast.</p>
              <p>
                More prospects are skipping traditional search and asking AI tools direct buying questions. The companies that adapt early will be easier to understand, easier to trust, and easier to shortlist.
              </p>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Helping software companies improve visibility across AI-driven research and comparison workflows.
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="rounded-xl border border-border bg-background p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Request received</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll review your company and get back to you within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-background p-6 md:p-8 space-y-5">
                <FormField label="Full Name" name="name" type="text" required />
                <FormField label="Work Email" name="email" type="email" required />
                <FormField label="Company Name" name="company" type="text" required />
                <FormField label="Company Website" name="website" type="url" required />
                <FormField label="Main Product Category" name="category" type="text" required />
                <FormField label="Top 2 Competitors" name="competitors" type="text" required />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Anything specific you want us to check?
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full bg-accent border border-border focus:border-primary focus:ring-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors resize-none"
                    placeholder="Optional"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] transition-all text-base"
                >
                  Send My Snapshot Request
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We review a limited number of companies each week to keep the analysis personalized.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) => (
  <div>
    <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-accent border border-border focus:border-primary focus:ring-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
    />
  </div>
);

export default FormSection;
