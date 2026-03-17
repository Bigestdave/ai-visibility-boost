const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <span className="text-background font-serif text-base font-bold leading-none">"</span>
          </div>
          <div>
            <span className="text-base font-semibold text-foreground font-sans">Citeable</span>
            <p className="text-sm text-muted-foreground mt-0.5 font-sans">AI Search Visibility for B2B SaaS</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground font-sans">© {new Date().getFullYear()} Citeable</p>
          <p className="text-sm text-muted-foreground mt-0.5 font-sans">hello@citeable.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
