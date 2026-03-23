const Footer = () => {
  return (
    <footer className="border-t border-border py-9 px-7 bg-background">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="font-serif text-[17px] text-foreground flex items-center gap-2">
            <span className="w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="white" />
              </svg>
            </span>
            Citeable
          </span>
          <p className="text-[12.5px] text-ink-3 mt-1">Get recommended by AI when users ask what to choose</p>
        </div>
        <div className="text-[12.5px] text-ink-3 text-right">
          © {new Date().getFullYear()} Citeable
        </div>
      </div>
    </footer>
  );
};

export default Footer;
