const aiTools = [
  { name: "ChatGPT", desc: "AI search queries" },
  { name: "Perplexity", desc: "Cited answers" },
  { name: "Gemini", desc: "Product comparisons" },
  { name: "Claude", desc: "Buyer research" },
  { name: "AI Overview", desc: "Google AI results" },
];

const ProofStrip = () => {
  return (
    <div className="border-t border-b border-border py-5 px-7 bg-white">
      <div className="max-w-[1080px] mx-auto flex items-center justify-center gap-2.5 flex-wrap text-center">
        {aiTools.map((tool, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-[13px] font-medium text-ink-2">{tool.name}</span>
            <span className="text-[13px] text-ink-3">· {tool.desc}</span>
            {i < aiTools.length - 1 && (
              <span className="hidden sm:block w-px h-4 bg-border ml-2.5" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProofStrip;
