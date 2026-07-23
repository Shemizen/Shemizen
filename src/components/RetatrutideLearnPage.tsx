import { motion } from 'motion/react';
import { Beaker, FlaskConical, Target } from 'lucide-react';

export default function RetatrutideLearnPage() {
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
            WHAT IS RETATRUTIDE? A COMPLETE GUIDE FOR RESEARCHERS.
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
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500 uppercase leading-snug">Technical Profile</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p>
                Retatrutide (LY3437943) is an investigational triple-hormone receptor agonist. It is currently under extensive evaluation for its pleiotropic effects on cellular metabolism and energy homeostasis. As a unimolecular peptide, it is designed to simultaneously interact with three distinct metabolic pathways, setting it apart from mono or dual agonists.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase leading-snug">The "Triple G" Mechanism</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p className="mb-6">
                The primary mechanism of action relies on the synergistic activation of three key receptors:
              </p>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="font-bold min-w-[100px] text-blue-600 dark:text-blue-400">GLP-1</div>
                  <div>(Glucagon-like Peptide-1): Primarily investigated for its effects on appetite regulation, gastric motility, and insulin secretion pathways.</div>
                </li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="font-bold min-w-[100px] text-cyan-600 dark:text-cyan-400">GIP</div>
                  <div>(Glucose-dependent Insulinotropic Polypeptide): Studied for its role in metabolic response, glucagon moderation, and potential influence on white adipose tissue functioning.</div>
                </li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="font-bold min-w-[100px] text-teal-600 dark:text-teal-400">Glucagon</div>
                  <div>Evaluated for its impact on acute energy expenditure, lipid metabolism, and hepatic glucose production.</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="mb-6 flex items-start sm:items-center gap-3">
              <FlaskConical className="h-6 w-6 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500 uppercase leading-snug">Purity & Testing Protocol</h2>
            </div>
            <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans p-6 md:p-8 border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm shadow-sm">
              <p>
                Due to its complex molecular structure, rigorous analytical testing is mandatory to ensure reproducible research results. Validated lots must undergo High-Performance Liquid Chromatography (HPLC) to confirm sequence integrity and Mass Spectrometry (MS) to verify precise molecular weight. Only batches demonstrating ≥99% purity meet the thresholds required for controlled in-vitro environments.
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
