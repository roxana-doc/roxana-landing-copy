import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const FAQCompact = () => {
  const { locale, t } = useI18n();

  const items = t.faq.items.slice(0, 4);

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.faq.title[locale]}
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq, i) => (
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

          <div className="text-center mt-8">
            <Button variant="outline" size="default" asChild className="border-white/15 text-white/70 hover:bg-white/5 hover:border-white/25 hover:text-white">
              <Link to="/faq">
                {locale === "sv" ? "Se alla frågor" : "See all questions"}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQCompact;
