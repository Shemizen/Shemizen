import { motion } from 'motion/react';
import { ThermometerSnowflake, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function StorageLearnPage() {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase leading-tight md:leading-tight"
          >
            PEPTIDE STORAGE GUIDE: MAXIMIZING SHELF LIFE.
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300 uppercase tracking-widest leading-relaxed">
            Scientific Knowledge Base
          </p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 space-y-12"
        >
          {/* Section 1 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <ThermometerSnowflake className="h-6 w-6 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500 uppercase leading-snug">Storage Requirements</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm overflow-hidden">
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="font-bold mb-2 uppercase tracking-wide">Lyophilized (Powder)</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li><span className="font-semibold px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">Room temp:</span> Stable for several weeks. Short transit durations generally do not cause degradation.</li>
                  <li><span className="font-semibold px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">Refrigerator (2°C to 8°C):</span> Recommended for short-to-medium term storage spanning 1 to 3 months.</li>
                  <li><span className="font-semibold px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">Freezer (-20°C):</span> Ideal for long-term storage, maintaining peptide stability for up to 24 months.</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-50 dark:bg-neutral-900/50">
                <h3 className="font-bold mb-2 uppercase tracking-wide">Reconstituted (Liquid)</h3>
                <p>
                  Once reconstituted with an appropriate solvent (e.g., bacteriostatic water), the solution <strong>must be refrigerated (2°C to 8°C)</strong>. For optimal experimental integrity, it should be utilized within 21 to 30 days. Do not freeze after reconstitution.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase leading-snug">Handling Precautions</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <h3 className="font-bold mb-2 uppercase tracking-wide flex items-start sm:items-center gap-2 leading-snug">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0" /> Light and Motion Sensitivity
              </h3>
              <p className="mb-4">
                Synthetic peptides are susceptible to degradation via photolysis. Vials should be shielded from direct UV exposure and sustained ambient light. Store in dark enclosures when not actively in use.
              </p>
              <p>
                During the reconstitution process, introducing the solvent must be done with care. Direct the stream of liquid against the glass wall of the vial rather than directly onto the powder bed. <strong>Avoid vigorous shaking</strong>, as forceful agitation can fracture the delicate peptide bonds. Instead, employ a gentle swirling motion to encourage complete dissolution.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Disclaimer */}
        <div className="mt-12 py-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            RESEARCH USE ONLY - NOT FOR HUMAN CONSUMPTION
          </p>
        </div>
      </div>
    </section>
  );
}
