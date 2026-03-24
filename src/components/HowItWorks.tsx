import { motion } from "framer-motion";
import { Upload, MessageSquare, FileCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const HowItWorks = () => {
  const { locale, t } = useI18n();
  const icons = [Upload, MessageSquare, FileCheck];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.howItWorks.title[locale]}
        </motion.h2>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            {/* Connector line - desktop */}
            <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />

            {t.howItWorks.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  className="flex md:flex-col items-start md:items-center gap-5 md:gap-4 md:text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  {/* Step number + icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {i < 2 && (
                    <div className="md:hidden absolute left-7 top-14 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}

                  <div className="md:mt-2">
                    <span className="text-xs font-bold text-primary/50 tracking-widest uppercase block mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading font-bold text-white text-base mb-1">{step.title[locale]}</h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-[240px] md:mx-auto">{step.desc[locale]}</p>
                  </div>

                  {/* Arrow between steps - desktop */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-7 -right-2 text-primary/30 text-lg">→</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
