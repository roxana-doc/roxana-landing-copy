import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { locale, t } = useI18n();

  return (
    <section className="pt-20 sm:pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-display font-extrabold text-white text-balance mb-5 md:mb-6 tracking-tight leading-[1.1] whitespace-pre-line">
            {t.hero.headline[locale]}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-10 px-2">
            {t.hero.subheadline[locale]}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
            <Button size="lg" asChild>
              <a href="mailto:demo@roxana.ai">
                {t.hero.cta[locale]}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
              <Link to="/produkt">
                {t.hero.secondaryCta[locale]}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
