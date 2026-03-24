import { motion } from "framer-motion";
import { ShieldCheck, Server, FileCheck2, Lock, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useI18n } from "@/lib/i18n";

const SecurityPage = () => {
  const { locale, t } = useI18n();
  const deployIcons = [Building, Server];

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
              {t.security.title[locale]}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {t.security.subtitle[locale]}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-20">

            {/* Data control */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-bold text-white text-xl">{t.securityPage.dataControlTitle[locale]}</h2>
              </div>
              <p className="text-white/50 leading-relaxed">{t.securityPage.dataControl[locale]}</p>
            </motion.div>

            {/* Deployment options */}
            <div>
              <motion.h2
                className="font-heading font-bold text-white text-xl mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {t.securityPage.deployTitle[locale]}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.security.options.map((opt, i) => {
                  const Icon = deployIcons[i];
                  return (
                    <motion.div
                      key={i}
                      className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/12 transition-all"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Icon className="h-6 w-6 text-primary mb-4" />
                      <h3 className="font-heading font-bold text-white text-lg mb-3">{opt.title[locale]}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{opt.desc[locale]}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Source transparency */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCheck2 className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-bold text-white text-xl">{t.security.sourceTitle[locale]}</h2>
              </div>
              <p className="text-white/50 leading-relaxed">{t.security.sourceDesc[locale]}</p>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-bold text-white text-xl">{t.securityPage.trustTitle[locale]}</h2>
              </div>
              <p className="text-white/50 leading-relaxed">{t.securityPage.trustDesc[locale]}</p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityPage;
