import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Apple, Monitor } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useDownload } from "@/hooks/use-download";

const FinalCTA = () => {
  const { locale, t } = useI18n();
  const { platform, urls } = useDownload();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.finalCta.headline[locale]}
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            {t.finalCta.subtitle[locale]}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:demo@roxana.ai">
                {t.finalCta.cta[locale]}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
              <a href={platform === "mac" ? urls.mac : urls.windows}>
                <Download className="mr-1.5 h-4 w-4" />
                {platform === "mac"
                  ? t.finalCta.downloadMac[locale]
                  : t.finalCta.downloadWin[locale]}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/30">
            {platform === "mac" ? (
              <a href={urls.windows} className="hover:text-white/50 underline underline-offset-2">
                <Monitor className="inline h-3 w-3 mr-1" />
                {t.finalCta.alsoAvailable[locale]} Windows
              </a>
            ) : (
              <a href={urls.mac} className="hover:text-white/50 underline underline-offset-2">
                <Apple className="inline h-3 w-3 mr-1" />
                {t.finalCta.alsoAvailable[locale]} macOS
              </a>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
