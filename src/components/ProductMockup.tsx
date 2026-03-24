import { MessageSquare, FileText, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProductMockup = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1200),   // question appears
      setTimeout(() => setStage(2), 2800),   // answer typing
      setTimeout(() => setStage(3), 4200),   // source highlight
      setTimeout(() => setStage(4), 6000),   // full state
    ];
    const loop = setInterval(() => {
      setStage(0);
      timers.push(
        setTimeout(() => setStage(1), 1200),
        setTimeout(() => setStage(2), 2800),
        setTimeout(() => setStage(3), 4200),
        setTimeout(() => setStage(4), 6000),
      );
    }, 9000);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  return (
    <div className="bg-[hsl(220,15%,12%)] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.03]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-white/30 text-center max-w-xs mx-auto border border-white/8">
            app.roxana.ai
          </div>
        </div>
      </div>

      {/* Three-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[340px] md:min-h-[420px]">
        {/* Chat panel */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/8 p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <span className="font-heading font-semibold text-sm text-white/90">Roxana Chat</span>
          </div>

          <div className="space-y-3 flex-1">
            {/* User message */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm px-3.5 py-2.5 text-xs max-w-[85%] leading-relaxed">
                Vad är maximal drifttemperatur för pump XR-500?
              </div>
            </motion.div>

            {/* AI response */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 rounded-xl rounded-tl-sm px-3.5 py-2.5 text-xs max-w-[90%] leading-relaxed text-white/80 border border-white/8">
                <p className="mb-2">Maximal drifttemperatur för XR-500 är <span className="font-semibold text-primary">85°C</span> vid kontinuerlig drift (sektion 4.3, driftsparametrar).</p>
                <motion.div
                  className="flex items-center gap-1.5 text-[10px] text-white/40 pt-1 border-t border-white/8 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 3 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FileText className="h-3 w-3" />
                  <span>Källa: XR-500_spec_v3.2.pdf, s. 47</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Input */}
          <div className="mt-4 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-white/8">
            <span className="text-xs text-white/30 flex-1">Sök i era dokument...</span>
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <Search className="h-3 w-3 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Document result panel */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/8 p-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <span className="font-heading font-semibold text-sm text-white/90">Sökresultat</span>
          </div>

          <motion.div
            className="bg-white/[0.03] rounded-xl border border-white/10 p-4 mb-3"
            animate={{
              borderColor: stage >= 3 ? "hsl(170 48% 33% / 0.3)" : "hsl(0 0% 100% / 0.1)",
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-white/80">XR-500 Teknisk Specifikation</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/8 text-white/40 font-medium">PDF</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium">Rev 3.2</span>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed mb-3">
              Sektion 4.3 – Driftsparametrar · s. 47
            </p>
            <div className="space-y-2">
              <div className="h-2 bg-white/8 rounded-full w-full" />
              <motion.div
                className="h-2 rounded-full w-full"
                animate={{
                  backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.25)" : "hsl(0 0% 100% / 0.08)",
                }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="h-2 rounded-full w-3/4"
                animate={{
                  backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.25)" : "hsl(0 0% 100% / 0.08)",
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <div className="h-2 bg-white/8 rounded-full w-full" />
              <div className="h-2 bg-white/8 rounded-full w-5/6" />
            </div>
          </motion.div>

          <div className="bg-white/[0.02] rounded-xl border border-white/6 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-white/60">Underhållsmanual XR-serie</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 text-white/40 font-medium">v2.1</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/6 rounded-full w-full" />
              <div className="h-2 bg-white/6 rounded-full w-4/5" />
              <div className="h-2 bg-white/6 rounded-full w-full" />
            </div>
          </div>
        </div>

        {/* PDF viewer panel */}
        <div className="md:col-span-4 p-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <Search className="h-4 w-4 text-primary" />
            </div>
            <span className="font-heading font-semibold text-sm text-white/90">Originaldokument</span>
          </div>

          <div className="bg-white/[0.02] rounded-xl border border-white/8 p-4 space-y-2.5">
            <div className="h-2 bg-white/6 rounded-full w-3/4" />
            <div className="h-2 bg-white/6 rounded-full w-full" />
            <div className="h-2 bg-white/6 rounded-full w-5/6" />
            <div className="h-2 bg-white/6 rounded-full w-full" />
            {/* Highlighted section */}
            <motion.div
              className="rounded-lg p-3 space-y-2 my-1"
              animate={{
                backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.1)" : "transparent",
                borderColor: stage >= 3 ? "hsl(170 48% 33% / 0.25)" : "transparent",
              }}
              style={{ borderWidth: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="h-2 rounded-full w-full" animate={{ backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.3)" : "hsl(0 0% 100% / 0.06)" }} transition={{ duration: 0.5 }} />
              <motion.div className="h-2 rounded-full w-4/5" animate={{ backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.3)" : "hsl(0 0% 100% / 0.06)" }} transition={{ duration: 0.5, delay: 0.1 }} />
              <motion.div className="h-2 rounded-full w-full" animate={{ backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.3)" : "hsl(0 0% 100% / 0.06)" }} transition={{ duration: 0.5, delay: 0.15 }} />
              <motion.div className="h-2 rounded-full w-2/3" animate={{ backgroundColor: stage >= 3 ? "hsl(170 48% 33% / 0.4)" : "hsl(0 0% 100% / 0.06)" }} transition={{ duration: 0.5, delay: 0.2 }} />
            </motion.div>
            <div className="h-2 bg-white/6 rounded-full w-full" />
            <div className="h-2 bg-white/6 rounded-full w-4/5" />
            <div className="h-2 bg-white/6 rounded-full w-full" />
            <div className="h-2 bg-white/6 rounded-full w-3/5" />
          </div>

          <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-white/30">
            <span>Sida 47 av 124</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;
