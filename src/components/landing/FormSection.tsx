import { useState } from "react";

const categories = [
  "Agency / Lead Gen",
  "Consulting / Advisory",
  "SaaS / Software",
  "Law Firm / Legal",
  "Professional Services",
  "Marketing / Creative",
  "Finance / Accounting",
  "Other B2B",
];

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="snapshot" className="bg-white border-t border-border py-20 sm:py-[100px] px-7">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 max-w-[1080px] mx-auto items-start">
        {/* Left copy */}
        <div className="reveal below-fold">
          <h2 className="display-md text-foreground mb-5">See what AI says about you</h2>
          <p className="text-base-body mb-8">
            Fill out the form and we'll ask ChatGPT, Perplexity, and other AI tools the same questions your buyers are asking. You'll get a plain-English report showing exactly what AI says, and what to fix.
          </p>

          <div className="flex flex-col gap-4 mt-9">
            {[
              { icon: "shield", text: "Your information is kept confidential" },
              { icon: "clock", text: "Takes less than 2 minutes to complete" },
              { icon: "chart", text: "Limited spots: we cap reviews each week" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-ink-3">
                <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="reveal below-fold reveal-delay-2">
          {submitted ? (
            <div className="bg-background border border-border rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-foreground">Request received</h3>
              <p className="mt-2 text-base text-ink-2">We'll check what AI says about your company and get back to you within 3–5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-8 sm:p-10">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <FormField label="Full Name" name="name" type="text" required placeholder="Alex Johnson" />
                <FormField label="Work Email" name="email" type="email" required placeholder="alex@company.com" />
              </div>

              {/* Company + Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <FormField label="Company Name" name="company" type="text" required placeholder="Acme Inc." />
                <FormField label="Company Website" name="website" type="url" required placeholder="https://acme.com" />
              </div>

              {/* Category */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-medium text-ink-2 mb-[7px]">What kind of business?</label>
                <select
                  name="category"
                  defaultValue=""
                  className="w-full py-3 px-4 text-[15px] text-foreground bg-white border border-border rounded-lg outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--accent))] appearance-none"
                >
                  <option value="" disabled>Select your category…</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Competitors */}
              <div className="mb-[18px]">
                <FormField label="Top 2 Competitors" name="competitors" type="text" required placeholder="e.g. Rival Agency, Competitor Co." />
              </div>

              {/* Notes */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-medium text-ink-2 mb-[7px]">
                  Anything specific you want us to check? <span className="text-ink-3 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="e.g. I think ChatGPT is recommending our competitor instead of us…"
                  className="w-full py-3 px-4 text-[15px] text-foreground bg-white border border-border rounded-lg outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--accent))] resize-vertical min-h-[90px] placeholder:text-ink-3"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 text-base font-medium rounded-lg py-4 bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
              >
                Check What AI Says About Me
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="mt-3.5 text-center text-[12.5px] text-ink-3 flex items-center justify-center gap-1.5">
                <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                We review a limited number of companies each week to keep each analysis personalized.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, name, type, required, placeholder }: { label: string; name: string; type: string; required?: boolean; placeholder?: string }) => (
  <div>
    <label htmlFor={name} className="block text-[13px] font-medium text-ink-2 mb-[7px]">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full py-3 px-4 text-[15px] text-foreground bg-white border border-border rounded-lg outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--accent))] placeholder:text-ink-3"
    />
  </div>
);

export default FormSection;
