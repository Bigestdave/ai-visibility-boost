const Footer = () => {
  return (
    <footer className="py-10" style={{ background: "#0A0A0F" }}>
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-white">Citeable</span>
          <span className="text-sm text-white/40">AI Search Visibility for B2B SaaS</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} Citeable</span>
          <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
