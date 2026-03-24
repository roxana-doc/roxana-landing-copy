import { motion } from "framer-motion";
import { MessageSquareText, FileText, Globe, Plug } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ProductMockup from "@/components/ProductMockup";

const Features = () => {
  const { locale, t } = useI18n();
  const icons = [MessageSquareText, FileText, Globe, Plug];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.features.title[locale]}
        </motion.h2>

        {/* Product mockup as hero of this section */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ProductMockup />
        </motion.div>

        {/* Feature list - minimal rows, not cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {t.features.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1">{f.title[locale]}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc[locale]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
