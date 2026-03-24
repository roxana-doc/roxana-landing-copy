import { motion } from "framer-motion";
import { Wrench, Code2, HeadphonesIcon, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useI18n } from "@/lib/i18n";

const UseCasesPage = () => {
  const { locale, t } = useI18n();
  const icons = [Wrench, Code2, HeadphonesIcon, Zap];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <section className="pt-20 md:pt-28 pb-16">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.useCases.title[locale]}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {t.useCases.subtitle[locale]}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-20">
            {t.useCases.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-white text-2xl">{item.title[locale]}</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-white/50 leading-relaxed mb-4">{item.scenario[locale]}</p>
                    <div className="bg-white/[0.04] border border-white/8 rounded-xl p-6">
                      <p className="text-sm text-white/60 leading-relaxed">
                        <span className="text-primary font-semibold">{locale === "sv" ? "Med Roxana:" : "With Roxana:"}</span>{" "}
                        {item.result[locale]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCasesPage;
