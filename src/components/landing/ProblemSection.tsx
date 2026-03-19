const queries = [
  "\"Who's the best agency for B2B lead generation?\"",
  "\"Should I hire [You] or [Competitor]?\"",
  "\"Best alternatives to [Your Company] for enterprises?\"",
  "\"Which consulting firm is better for startups?\"",
  "\"How does [Your Company] pricing compare?\"",
  "\"Is [Competitor] better than [You] for my use case?\"",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="section-header mb-14">
          <div className="accent-line mb-6 reveal below-fold" />
          <h2 className="display-lg text-foreground reveal below-fold reveal-delay-1">
            Your buyers are asking AI<br />who to hire. You're not the answer.
          </h2>
        </div>

        <div className="max-w-[680px] reveal below-fold reveal-delay-2">
          <p className="text-lg-body mb-12">
            Before a prospect ever visits your website or books a call, they're asking ChatGPT and Perplexity who they should work with. If the AI doesn't know you — or worse, recommends your competitor — you've already lost the deal.
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
            If ChatGPT is <strong className="text-foreground font-medium">recommending your competitor, ignoring you, or getting your facts wrong</strong>, you're losing deals before anyone picks up the phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
