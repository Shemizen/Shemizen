import { motion } from 'motion/react';
import { ShieldCheck, Copy, CheckCircle, MapPin, Beaker, Truck, FileCheck, Scale, Globe, AlertTriangle } from 'lucide-react';

interface TermsOfServicePageProps {
  onCopyEmail?: () => void;
}

export default function TermsOfServicePage({ onCopyEmail }: TermsOfServicePageProps) {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl sm:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase"
          >
            TERMS OF SERVICE
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300 uppercase tracking-widest leading-relaxed">
            Binding agreement and operational protocols governing the procurement and utilization of precision research compounds.
          </p>
        </div>

        {/* Sections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">1. Acceptance of Terms</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                By accessing the ShenzenLabs portal or acquiring materials, you enter into a binding agreement to abide by these Terms of Service. If these protocols are not acceptable to you, you must terminate use of this platform immediately.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">2. Institutional Jurisdiction</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                ShenzenLabs operates within the regulatory framework of the People's Republic of China. All materials are dispatched in compliance with local commercial statutes. It is the researcher's sole responsibility to ensure compliance with the laws of their own jurisdiction upon receipt.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">3. Researcher Eligibility</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                Access is restricted strictly to individuals at least 21 years of age. By engaging with this site, you affirm you meet this age requirement and hold the necessary authorization to procure laboratory research materials on behalf of yourself or your institution.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Beaker className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">4. Laboratory-Use Only</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 space-y-4">
              <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 border border-neutral-200 dark:border-neutral-800/80 mb-4 rounded-sm">
                <p className="text-xs font-bold text-neutral-900 dark:text-white mb-1 uppercase tracking-widest">Critical Notice</p>
                <p className="text-sm">All compounds provided by ShenzenLabs are intended strictly for in-vitro laboratory research and analytical use.</p>
              </div>
              <p>
                Under no circumstances are these materials intended or approved for human or animal consumption, therapeutic application, clinical trials, or diagnostic use. Any indication of intent to deviate from approved laboratory applications will result in immediate order cancellation and permanent account termination.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <FileCheck className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">5. Researcher Certification</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                By purchasing from our catalog, you certify that you possess the requisite technical expertise, chemical knowledge, and specialized equipment necessary for the safe handling, storage, and disposal of precision research compounds.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">6. Restricted Activities</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                The use of ShenzenLabs products for ingestion, injection, administration to humans or animals, or any application outside of a controlled, well-ventilated laboratory environment is strictly prohibited and constitutes a material breach of these terms.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Globe className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">7. Global Logistics</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                International shipments are systematically subject to customs oversight and inspection. ShenzenLabs is not liable for logistical delays, import duties, seizure, or institutional restrictions imposed by customs authorities in the destination country.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Scale className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">8. Liability Framework</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                All biochemical materials are provided "as-is" without expressed or implied warranties of any kind. Under no circumstances shall ShenzenLabs be held liable for incidental, consequential, direct, or indirect damages resulting from the handling, storage, or application of these products.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">9. Secure Contact</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p className="mb-6">
                For inquiries regarding regulatory compliance, institutional protocols, or clarification on any aspect of these terms, please engage our administration securely.
              </p>
              <div className="inline-block w-full sm:w-auto">
                <button 
                  onClick={onCopyEmail}
                  className="inline-flex items-center justify-center gap-2 border border-cyan-500 px-4 sm:px-6 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] active:scale-95 w-full sm:w-auto break-all"
                >
                  <Copy className="h-4 w-4 flex-shrink-0" />
                  shenzenlabs@protonmail.com
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
