import { useState } from "react";
import { motion } from "framer-motion";

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="snapshot" className="section-padding bg-card">
      <div className="container-page">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
              Request your free snapshot
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Fill out the form and we'll review your AI search visibility across buyer-intent queries. You'll receive a focused teardown within 3–5 business days.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-muted-foreground">Your information is kept confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">Takes less than 2 minutes to complete</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-sm text-muted-foreground">Limited spots — we cap reviews each week</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="rounded-[20px] border border-border bg-background p-10 text-center" style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.04)",
              }}>
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Request received</h3>
                <p className="mt-2 text-base text-muted-foreground">We'll review your company and get back to you within 3–5 business days.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[20px] border border-border bg-background p-8 md:p-10 space-y-5"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.04)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" name="name" type="text" required />
                  <FormField label="Work Email" name="email" type="email" required />
                </div>
                <FormField label="Company Name" name="company" type="text" required />
                <FormField label="Company Website" name="website" type="url" required placeholder="https://yourcompany.com" />
                <FormField label="Main Product Category" name="category" type="text" required placeholder="e.g., Sales engagement, HR software" />
                <FormField label="Top 2 Competitors" name="competitors" type="text" required placeholder="e.g., Competitor A, Competitor B" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground block mb-1.5">
                    Anything specific you want us to check? <span className="text-muted-foreground/60">(Optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full bg-background border-[1.5px] border-border focus:border-primary focus:shadow-[0_0_0_3px_rgba(79,70,229,0.1)] rounded-lg px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all resize-none"
                    placeholder="Optional — e.g., specific queries, pages, or competitors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-base hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:-translate-y-px transition-all flex items-center justify-center gap-2"
                >
                  Send My Snapshot Request <span>→</span>
                </button>
                <p className="text-[13px] text-muted-foreground text-center flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  We review a limited number of companies each week to keep each analysis personalized and actionable.
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
      {label}{required && <span className="text-muted-foreground/60">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-background border-[1.5px] border-border focus:border-primary focus:shadow-[0_0_0_3px_rgba(79,70,229,0.1)] rounded-lg px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all"
    />
  </div>
);

export default FormSection;
