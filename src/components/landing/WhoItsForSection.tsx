const fitItems = [
  "Buyers compare multiple tools before booking demos",
  "Competitors are winning comparison-based attention in AI",
  "Site lacks \"vs,\" \"alternatives,\" or use-case pages",
  "Product is technical or nuanced to explain clearly",
  "You want to improve how AI tools represent your software",
];

const verticals = [
  "Sales and outbound software",
  "HR, payroll, and ops platforms",
  "Developer tools and infrastructure",
  "Productivity and workflow SaaS",
  "Any SaaS with clear, named competitors",
];

const WhoItsForSection = () => {
  return (
    <section className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="section-header mb-12">
          <div className="accent-line mb-6 reveal below-fold" />
          <h2 className="display-md text-foreground reveal below-fold reveal-delay-1">Built for B2B SaaS teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Strong fit */}
          <div className="reveal below-fold reveal-delay-2">
            <p className="text-xs font-medium tracking-[0.07em] uppercase text-ink-3 mb-5">Strong fit if…</p>
            <div className="flex flex-col">
              {fitItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 py-3.5 border-b border-border first:border-t text-[15px] text-ink-2 hover:text-foreground transition-colors">
                  <span className="w-[5px] h-[5px] rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Verticals */}
          <div className="reveal below-fold reveal-delay-3">
            <p className="text-xs font-medium tracking-[0.07em] uppercase text-ink-3 mb-5">Especially relevant for</p>
            <div className="flex flex-col">
              {verticals.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 py-3.5 border-b border-border first:border-t text-[15px] text-ink-2 hover:text-foreground transition-colors">
                  <span className="w-[5px] h-[5px] rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
