import { motion } from 'motion/react';
import type { SVGProps } from 'react';
import { ShieldCheck, FileText, FlaskConical, Scale, Lock, Award, Activity } from 'lucide-react';

interface QualityPageProps {
  onCopyEmail?: () => void;
}

export default function QualityPage({ onCopyEmail }: QualityPageProps) {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* 1. Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl sm:text-6xl font-bold font-stiff text-neutral-900 dark:text-white tracking-wide uppercase"
          >
            QUALITY ASSURANCE PROTOCOL
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300">
            All results verified under protocol RUO-SEC-9
          </p>
        </div>

        {/* 2. Law & Regulatory Compliance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Scale className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Law & Regulatory Compliance</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-yellow-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(234,179,8,0.3)] hover:border-yellow-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-yellow-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-yellow-500/30">
              <div className="h-full w-1/3 bg-yellow-500/50 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            </div>
            <div className="relative z-10 p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <ShieldCheck className="absolute -right-4 -bottom-4 h-48 w-48 text-neutral-100 dark:text-white/5 opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <p className="mb-4 relative z-10">
                All peptide synthesis and distribution infrastructure is permitted exclusively for Laboratory Research and Analytical use. No consumer-grade or human usage applications are authorized or implied.
              </p>
              <p className="mb-4 relative z-10">
                The individual or entity importing the compounds is exclusively responsible for compliance with local, state, and national laws regarding the possession and utilization of research materials.
              </p>
              <p className="relative z-10">
                The company assumes zero liability for regulatory variations across international borders or misuse of research compounds outside of approved laboratory settings.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Analytical Integrity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <FlaskConical className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Analytical Integrity</h2>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            Purity is the operating standard. Every batch undergoes a rigorous multi-stage testing protocol to ensure scientific consistency and reproducibility in research data. We maintain strict adherence to established chemical synthesis benchmarks.
          </p>
        </motion.div>

        {/* 4. HPLC / MS Verification Standard */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Activity className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">HPLC / MS Verification Standard</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "High-Performance Liquid Chromatography (HPLC)",
              "Mass Spectrometry Identity Verification",
              "Net Content Verification",
              "Lyophilization Density Validation"
            ].map((item, i) => (
              <div key={i} className="group flex h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
                <div className="w-1 h-full bg-neutral-200 dark:bg-cyan-900/50 flex flex-col transition-colors duration-300 group-hover:bg-cyan-500/30">
                  <div className="w-full h-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                </div>
                <div className="p-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. ISO & Audit Standard */}
        <div className="mb-16 flex flex-col gap-4 border-y border-neutral-200 dark:border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between group hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-3 transition-transform duration-300 sm:group-hover:translate-x-2">
            <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold uppercase tracking-widest text-neutral-900 dark:text-white">ISO-9001 Certified</span>
          </div>
          <div className="hidden h-4 w-px bg-neutral-300 dark:bg-white/20 sm:block"></div>
          <div className="flex items-center gap-3 transition-transform duration-300 sm:group-hover:-translate-x-2">
            <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold uppercase tracking-widest text-neutral-900 dark:text-white">Janoshik Audited</span>
          </div>
        </div>

        {/* 6. Purity Floor & Critical Integrity */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          <div className="group flex flex-col border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 p-12 text-center text-neutral-900 dark:text-white backdrop-blur-sm relative overflow-hidden">
            <ShieldCheck className="absolute -right-10 -bottom-10 h-64 w-64 text-neutral-100 dark:text-white/5 opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Purity Floor</h2>
              <div className="text-6xl font-bold tracking-tighter text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors duration-300">99.0%+</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
               <div className="h-full w-2/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300 mx-auto"></div>
            </div>
          </div>
          
          <div className="group flex flex-col border border-neutral-300 dark:border-red-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(239,68,68,0.3)] hover:border-red-500/80 p-8 flex flex-col justify-center backdrop-blur-sm relative overflow-hidden">
            <div className="h-1 w-full absolute top-0 left-0 bg-neutral-200 dark:bg-red-900/50 flex transition-colors duration-300 group-hover:bg-red-500/30">
              <div className="h-full w-1/2 bg-red-500/50 group-hover:bg-red-400 transition-colors duration-300"></div>
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500 mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  HEAVY METAL INTEGRITY
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">Strictly monitored and verified &lt;10ppm for all synthesized compounds.</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500 mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  ZERO CONTAMINATION
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">Endotoxin levels tested and confirmed below detection thresholds.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Third-Party Verification */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Janoshik Analytics</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
              <p>
                Industry gold standard for third-party peptide verification. Every synthesized reagent undergoes analytical testing to confirm identity and purity.
              </p>
              <p>
                Verification includes High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS) confirmation to ensure compound integrity.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Report Transparency */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Report Transparency</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8">
              <p className="mb-4 font-bold uppercase tracking-wide text-neutral-900 dark:text-white">"Trust but Verify"</p>
              <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-300">
                Technical repository accessible to researchers. Batch chromatograms available upon request for verification purposes.
              </p>
              <button 
                onClick={onCopyEmail}
                className="bg-neutral-900 dark:bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-white dark:text-black transition-all hover:bg-neutral-700 dark:hover:bg-neutral-200 hover:shadow-lg active:scale-95"
              >
                Request Access
              </button>
            </div>
          </div>
        </div>

        {/* 9. Researcher Bounty Program */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Lock className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Researcher Bounty Program</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-300">Independent Validation Reward</h3>
              <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
                We encourage independent blind testing via Janoshik Analytics. Compensation is offered for valid independent reports to maintain community trust and transparency.
              </p>
              
              <div className="mb-8 border-l-2 border-cyan-600 dark:border-cyan-500 pl-4 group-hover:border-cyan-400 transition-colors duration-300">
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Protocol Bonus</div>
                <div className="text-xl font-bold text-neutral-900 dark:text-white">$100.00 USD Store Credit per valid report</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "1. Submit sample vial to Janoshik Analytics independently.",
                  "2. Share official lab report key.",
                  "3. Receive store credit upon confirmation."
                ].map((step, i) => (
                  <div key={i} className="text-xs font-medium text-neutral-500 dark:text-neutral-300">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
