const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Citeable</span>
          <span className="text-sm text-muted-foreground">— AI Search Optimization for B2B SaaS</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Citeable. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
