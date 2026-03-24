import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

const UseCasesCompact = () => {
  const { locale, t } = useI18n();
  const [active, setActive] = useState(0);

  const items = t.useCases.items.slice(0, 4);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.useCases.title[locale]}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Tab buttons */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {item.title[locale]}
              </button>
            ))}
          </motion.div>

          {/* Active content */}
          <motion.div
            key={active}
            className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              {items[active].title[locale]}
            </h3>
            <p className="text-white/50 leading-relaxed">
              {items[active].desc[locale]}
            </p>
          </motion.div>

          <div className="text-center mt-8">
            <Button variant="outline" size="default" asChild className="border-white/15 text-white/70 hover:bg-white/5 hover:border-white/25 hover:text-white">
              <Link to="/anvandning">
                {locale === "sv" ? "Se fler exempel" : "See more examples"}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesCompact;
