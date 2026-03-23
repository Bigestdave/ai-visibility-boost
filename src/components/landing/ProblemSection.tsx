const queries = [
  "\"What's the best tool for [your category]?\"",
  "\"Should I use [You] or [Competitor]?\"",
  "\"Best alternatives to [Your Product] for enterprises?\"",
  "\"Which platform is better for my use case?\"",
  "\"How does [Your Product] pricing compare?\"",
  "\"Is [Competitor] better than [You] for startups?\"",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="section-header mb-14">
          <div className="accent-line mb-6 reveal below-fold" />
          <h2 className="display-lg text-foreground reveal below-fold reveal-delay-1">
            Your users are asking AI<br />what to choose. You're not the answer.
          </h2>
        </div>

        <div className="max-w-[680px] reveal below-fold reveal-delay-2">
          <p className="text-lg-body mb-12">
            Before a prospect ever visits your website or signs up for a trial, they're asking ChatGPT and Perplexity which tool they should use. If the AI doesn't know you, or worse, recommends your competitor, you've already lost the deal.
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
            If ChatGPT is <strong className="text-foreground font-medium">recommending your competitor, ignoring you, or getting your facts wrong</strong>, you're losing users before they ever visit your site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
