const queries = [
  "\"What's the best software for this use case?\"",
  "\"[Brand] vs [Competitor] — which is better?\"",
  "\"Best alternatives to [Brand] for agencies?\"",
  "\"Which tool is better for enterprise teams?\"",
  "\"How does [Brand] pricing compare?\"",
  "\"Is [Brand] good for startups vs enterprise?\"",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="section-header mb-14">
          <div className="accent-line mb-6 reveal below-fold" />
          <h2 className="display-lg text-foreground reveal below-fold reveal-delay-1">
            AI search is already<br />influencing buying decisions
          </h2>
        </div>

        <div className="max-w-[680px] reveal below-fold reveal-delay-2">
          <p className="text-lg-body mb-12">
            When buyers research software today, they're no longer relying only on Google. They're asking AI tools direct buying questions — before they ever land on your site.
          </p>
        </div>

        {/* Query list */}
        <div className="flex flex-col mt-9 border-t border-border max-w-[680px]">
          {queries.map((query, i) => (
            <div key={i} className={`reveal below-fold reveal-delay-${Math.min(i + 1, 6)} flex items-center gap-4 py-4 border-b border-border`}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 ml-1" />
              <p className="text-[15px] leading-relaxed text-ink-2 italic">{query}</p>
            </div>
          ))}
        </div>

        {/* Conclusion card */}
        <div className="reveal below-fold mt-12 max-w-[640px] p-7 bg-white border border-border rounded-[var(--radius-lg)] border-l-[3px] border-l-primary">
          <p className="text-base text-ink-2 leading-[1.7]">
            If your product is <strong className="text-foreground font-medium">missing, poorly explained, or outmatched by competitors</strong> in those answers, you may be losing buyer trust before a prospect ever books a demo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
