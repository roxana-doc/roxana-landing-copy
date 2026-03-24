import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ValueSection = () => {
  const { locale, t } = useI18n();

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              {t.value.title[locale]}
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              {t.value.subtitle[locale]}
            </p>
          </motion.div>

          <div className="space-y-6">
            {t.value.points.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white text-base">{point.title[locale]}</span>
                  <span className="text-white/40 text-base ml-2">{point.desc[locale]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
