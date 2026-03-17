import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Sales & CRM",
  "Marketing & Automation",
  "HR & Payroll",
  "Developer Tools",
  "Productivity & Collaboration",
  "Operations & Workflow",
  "Finance & Accounting",
  "Security & Compliance",
  "Other",
];

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="snapshot" className="section-padding bg-background border-t border-border">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="accent-line mb-8" />
          <h2 className="heading-section text-foreground">
            Request your free snapshot
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-[560px] font-sans">
            Tell us about your company and we'll run a targeted audit of how your brand appears across AI search — and send you the teardown directly.
          </p>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left - Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              "Reviewed personally — not auto-generated",
              "Delivered within 2–3 business days",
              "Limited spots per week — kept intentionally small",
              "No obligation to purchase anything",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-muted-foreground font-sans">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-border p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Request received</h3>
                <p className="mt-2 text-base text-muted-foreground font-sans">We'll review your company and get back to you within 2–3 business days.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" name="name" type="text" required placeholder="Alex Johnson" />
                  <FormField label="Work Email" name="email" type="email" required placeholder="alex@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Company Name" name="company" type="text" required placeholder="Acme Inc." />
                  <FormField label="Company Website" name="website" type="url" required placeholder="https://acme.com" />
                </div>
                <div>
                  <label htmlFor="category" className="text-sm font-medium text-muted-foreground block mb-1.5 font-sans">
                    Main Product Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full bg-secondary/50 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground outline-none transition-all appearance-none font-sans"
                    defaultValue=""
                  >
                    <option value="" disabled>Select your category…</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <FormField label="Top 2 Competitors" name="competitors" type="text" required placeholder="e.g. Salesforce, HubSpot" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground block mb-1.5 font-sans">
                    Anything specific you want us to check? <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full bg-secondary/50 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all resize-none font-sans"
                    placeholder="e.g. We're losing to Competitor X in ChatGPT comparisons…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 rounded-xl font-medium text-base hover:opacity-90 transition-opacity font-sans"
                >
                  Send My Snapshot
                </button>
                <p className="text-xs text-muted-foreground text-center font-sans">
                  We review a limited number of companies each week. Your info stays private.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, name, type, required, placeholder }: { label: string; name: string; type: string; required?: boolean; placeholder?: string }) => (
  <div>
    <label htmlFor={name} className="text-sm font-medium text-muted-foreground block mb-1.5 font-sans">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-secondary/50 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all font-sans"
    />
  </div>
);

export default FormSection;
