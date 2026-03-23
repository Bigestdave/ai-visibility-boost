const fitItems = [
  "Users research and compare options before signing up",
  "Your competitors are showing up in AI and you're not",
  "You don't have comparison or \"vs\" pages on your site",
  "You charge premium prices and one lost deal hurts",
  "You want AI tools to send users your way",
];

const verticals = [
  "SaaS and software companies",
  "Developer tools and APIs",
  "Web3 protocols and platforms",
  "Fintech and infrastructure tools",
  "Any tech company with clear competitors",
];

const WhoItsForSection = () => {
  return (
    <section className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="section-header mb-12">
          <div className="accent-line mb-6 reveal below-fold" />
          <h2 className="display-md text-foreground reveal below-fold reveal-delay-1">Built for software companies and tools</h2>
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
