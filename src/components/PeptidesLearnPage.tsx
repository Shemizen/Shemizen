import { motion } from 'motion/react';
import { Beaker, ShieldCheck, Scale } from 'lucide-react';

export default function PeptidesLearnPage() {
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
            WHAT ARE PEPTIDES? A GUIDE TO RESEARCH COMPOUNDS.
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
              <Beaker className="h-6 w-6 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500 uppercase leading-snug">Definition & Structure</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p className="mb-4">
                Peptides are short chains of 2 to 50 amino acids linked by peptide bonds that act as critical signaling molecules within biological systems. They function as hormones, neurotransmitters, and enzymes, orchestrating a vast array of physiological processes.
              </p>
              <p>
                In a laboratory context, synthetic peptides are precisely synthesized sequences designed to mimic, block, or enhance natural biological pathways. This allows researchers to isolate specific cellular responses without the confounding variables often present when using complex proteins.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase leading-snug">Peptides vs. Proteins</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p className="mb-4">
                While both are constructed from amino acids, the primary distinction lies in size and structural complexity. Peptides are smaller, typically consisting of 50 or fewer amino acids, lacking the complex tertiary and quaternary folding structures that characterize full proteins.
              </p>
              <p>
                This smaller size allows for easier laboratory synthesis, greater stability in diverse conditions, and higher precision when targeting specific cellular receptors in structural biology and pharmacology studies.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500 uppercase leading-snug">The Importance of Research Purity</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p className="mb-4">
                Experimental reproducibility fundamentally depends on compound purity. Impurities, truncated sequences, or solvent residues can trigger unintended cellular responses, invalidating study results.
              </p>
              <p>
                High-Performance Liquid Chromatography (HPLC) remains the gold standard for purity verification. Furthermore, providing peptides in a lyophilized (freeze-dried) state ensures maximum structural stability during transit, requiring proper reconstitution with bacteriostatic water or alternative buffers prior to application.
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
