import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-white/8 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-extrabold text-xs">R</span>
            </div>
            <span className="font-heading font-extrabold text-base text-white/80">ROXANA</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <Link to="/produkt" className="text-white/40 hover:text-white/70 transition-colors">{t.footer.produkt[locale]}</Link>
            <Link to="/anvandning" className="text-white/40 hover:text-white/70 transition-colors">{t.footer.useCases[locale]}</Link>
            <Link to="/sakerhet" className="text-white/40 hover:text-white/70 transition-colors">{t.footer.sakerhet[locale]}</Link>
            <Link to="/faq" className="text-white/40 hover:text-white/70 transition-colors">FAQ</Link>
            <a href="mailto:demo@roxana.ai" className="text-white/40 hover:text-white/70 transition-colors">{t.footer.kontakt[locale]}</a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Roxana. {t.footer.rights[locale]}
          </p>
          <span className="text-xs text-white/25">{t.footer.integritet[locale]}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
