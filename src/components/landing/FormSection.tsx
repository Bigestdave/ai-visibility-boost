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
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Free · No pitch call needed</span>
          </div>

          <h2 className="heading-section text-foreground">
            Request your free snapshot
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-[560px]">
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
                <span className="text-base text-muted-foreground">{item}</span>
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
                <p className="mt-2 text-base text-muted-foreground">We'll review your company and get back to you within 2–3 business days.</p>
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
                  <label htmlFor="category" className="text-sm font-medium text-muted-foreground block mb-1.5">
                    Main Product Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full bg-amber-50/40 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground outline-none transition-all appearance-none"
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
                  <label className="text-sm font-medium text-muted-foreground block mb-1.5">
                    Anything specific you want us to check? <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full bg-amber-50/40 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all resize-none"
                    placeholder="e.g. We're losing to Competitor X in ChatGPT comparisons, or we have no alternatives page…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
                >
                  Send My Snapshot
                </button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
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
    <label htmlFor={name} className="text-sm font-medium text-muted-foreground block mb-1.5">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-amber-50/40 border border-border focus:border-foreground rounded-xl px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all"
    />
  </div>
);

export default FormSection;
