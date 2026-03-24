import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scroll after navigation to homepage
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { label: t.nav.howItWorks[locale], href: "/#how-it-works" },
    { label: t.nav.useCases[locale], href: "/anvandning" },
    { label: t.nav.sakerhet[locale], href: "/sakerhet" },
    { label: t.nav.faq[locale], href: "/faq" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + "#" + id);
      }
    }
  };

  const renderLink = (link: { label: string; href: string }, className: string) => {
    if (link.href.startsWith("/#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className={className}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className={className}
        onClick={() => setMobileOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 bg-[hsl(220,15%,8%)]/80 ${scrolled ? 'border-b border-white/10 shadow-[0_1px_12px_-4px_rgba(0,0,0,0.5)]' : 'border-b border-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-primary-foreground font-heading font-extrabold text-sm">R</span>
          </div>
          <span className="font-heading font-extrabold text-lg tracking-tight text-white">
            ROXANA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            renderLink(
              link,
              `px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={() => setLocale(locale === "sv" ? "en" : "sv")}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-colors"
          >
            {locale === "sv" ? "EN" : "SV"}
          </button>
          <Button variant="ghost" size="sm" asChild className="text-white/70 hover:text-white hover:bg-white/10">
            <a href="/login">{t.nav.loggain[locale]}</a>
          </Button>
          <Button size="default" asChild>
            <a href="mailto:demo@roxana.ai">{t.nav.bokademo[locale]}</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[hsl(220,15%,8%)]/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            renderLink(
              link,
              "block w-full text-left px-4 py-3 text-sm font-medium rounded-lg text-white/70 hover:text-white hover:bg-white/5"
            )
          )}
          <div className="pt-3 px-1 space-y-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocale(locale === "sv" ? "en" : "sv")}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-white/15 text-white/50"
              >
                {locale === "sv" ? "EN" : "SV"}
              </button>
              <Button variant="ghost" size="sm" asChild className="flex-1 text-white/70 hover:text-white hover:bg-white/10 border border-white/15">
                <a href="/login" onClick={() => setMobileOpen(false)}>
                  {t.nav.loggain[locale]}
                </a>
              </Button>
            </div>
            <Button size="default" className="w-full" asChild>
              <a href="mailto:demo@roxana.ai" onClick={() => setMobileOpen(false)}>
                {t.nav.bokademo[locale]}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
