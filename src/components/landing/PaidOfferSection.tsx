const features = [
  "Find exactly which user questions AI is getting wrong about you",
  "Build 1-2 comparison pages (you vs. your biggest competitors)",
  "Create the documentation and use-case pages AI tools look for",
  "Fix your FAQ and content so AI can actually read it",
  "Add the hidden code (structured data) that tells AI your real facts",
  "Clean up your site so AI stops getting confused",
  "Post-launch check to make sure it's working",
];

const PaidOfferSection = () => {
  return (
    <section id="sprint" className="section-padding px-7 section-dark">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Left copy */}
          <div className="reveal below-fold">
            <div className="w-10 h-[2px] bg-primary/40 mb-6" />
            <h2 className="display-lg text-white mb-5">Get AI to Recommend You</h2>
            <p className="text-lg-body !text-white/60 mb-5">
              A fixed-price sprint for software companies and tools that want to stop losing users to competitors in AI search. We fix your site so ChatGPT, Perplexity, and other AI tools recommend you first.
            </p>

            <div className="mt-7 p-5 border border-white/10 rounded-lg text-sm !text-white/55 leading-relaxed">
              After the free check, we implement the highest-priority fixes in a focused sprint. <strong className="!text-white/90 font-medium">Most projects complete in 7-10 business days.</strong>
            </div>
          </div>

          {/* Right card */}
          <div className="reveal below-fold reveal-delay-2 bg-[#17171C] border border-[#232329] rounded-2xl p-10 shadow-lg relative overflow-hidden">
            {/* Top shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <p className="font-serif text-[52px] leading-none text-white tracking-[-0.025em] mb-1.5">$2,500</p>
            <p className="text-sm text-white/40 mb-8">Fixed price · Typically 7-10 business days</p>

            <p className="text-[11px] font-medium tracking-[0.07em] uppercase text-white/35 mb-4">What's included</p>

            <div className="flex flex-col gap-[11px] mb-9">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-[11px] text-[14.5px] text-white/75 leading-relaxed">
                  <div className="w-[18px] h-[18px] rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-[9px] h-[9px] text-[#6b9fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#snapshot"
              className="w-full inline-flex items-center justify-center gap-2 text-base font-medium rounded-lg py-4 bg-primary text-white shadow-[0_1px_2px_rgba(36,82,232,.3),inset_0_1px_0_rgba(255,255,255,.12)] hover:bg-[#3460F0] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(36,82,232,.28)] transition-all duration-200"
            >
              Book a Call
            </a>
            <p className="mt-3.5 text-center text-[12.5px] text-white/30">
              Free AI check first, no commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidOfferSection;
