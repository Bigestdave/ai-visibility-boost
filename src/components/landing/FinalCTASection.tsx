const FinalCTASection = () => {
  return (
    <section className="py-[100px] px-7 text-center bg-background">
      <div className="max-w-[680px] mx-auto reveal below-fold">
        <div className="accent-line mx-auto mb-6" />
        <h2 className="display-lg text-foreground mb-5">
          Find out what AI is telling buyers about your company
        </h2>
        <p className="text-lg-body mb-10 max-w-[520px] mx-auto">
          We'll ask ChatGPT the same questions your buyers are asking and show you exactly what it says. Free, no commitment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <a
            href="#snapshot"
            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-7 py-[15px] bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
          >
            Get My Free AI Check
          </a>
          <a
            href="#snapshot"
            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-[22px] py-3 bg-transparent text-ink-2 border border-border hover:border-ink-3 hover:text-foreground hover:bg-[hsl(var(--bg-alt))] transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
        <p className="text-sm text-ink-3">Free · No pitch call needed</p>
      </div>
    </section>
  );
};

export default FinalCTASection;
