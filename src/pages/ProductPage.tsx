import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ProductMockup from "@/components/ProductMockup";
import { Upload, MessageSquare, FileCheck, Search, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ProductPage = () => {
  const { locale, t } = useI18n();

  const steps = [
    { icon: Upload, num: "01" },
    { icon: Search, num: "02" },
    { icon: MessageSquare, num: "03" },
    { icon: FileCheck, num: "04" },
  ];

  const flowSteps = t.productPage.flow;

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.productPage.title[locale]}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {t.productPage.subtitle[locale]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product mockup */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProductMockup />
          </motion.div>
        </div>
      </section>

      {/* How the flow works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.productPage.flowTitle[locale]}
          </motion.h2>
          <motion.p
            className="text-white/50 leading-relaxed max-w-2xl mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.productPage.flowDesc[locale]}
          </motion.p>

          {/* Flow visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
              {flowSteps.map((step: { title: Record<string, string>; desc: Record<string, string> }, i: number) => {
                const Icon = steps[i].icon;
                return (
                  <div key={i} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1 relative md:text-center">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-primary/15">
                        <ArrowRight className="h-3 w-3 text-primary/30 absolute -right-1.5 -top-1.5" />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-bold text-primary/50 tracking-widest uppercase">{steps[i].num}</span>
                      <h3 className="font-heading font-bold text-white text-sm mt-1">{step.title[locale]}</h3>
                      <p className="text-xs text-white/40 leading-relaxed mt-1 max-w-[200px] md:mx-auto">{step.desc[locale]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {t.productPage.features.map((feature: { title: Record<string, string>; desc: Record<string, string> }, i: number) => (
              <motion.div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? 'md:items-end md:text-right' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="max-w-lg">
                  <div className="w-8 h-px bg-primary mb-4" />
                  <h3 className="font-heading font-bold text-white text-xl mb-3">{feature.title[locale]}</h3>
                  <p className="text-white/45 leading-relaxed">{feature.desc[locale]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
