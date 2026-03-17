const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-base font-semibold text-foreground">Citeable</span>
          <p className="text-sm text-muted-foreground mt-0.5">AI Search Optimization for B2B SaaS</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Citeable</p>
          <p className="text-sm text-muted-foreground mt-0.5">hello@citeable.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
