import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import FinalCTA from "@/components/FinalCTA";
import { useI18n } from "@/lib/i18n";

const FAQPage = () => {
  const { locale, t } = useI18n();

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
              {t.faq.title[locale]}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white/[0.04] border border-white/8 rounded-2xl px-6 hover:bg-white/[0.06] transition-colors"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-white hover:no-underline py-5 text-base">
                    {faq.q[locale]}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 leading-relaxed pb-5 text-sm">
                    {faq.a[locale]}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default FAQPage;
