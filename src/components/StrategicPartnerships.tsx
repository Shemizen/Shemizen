import { motion } from 'motion/react';
import { FlaskConical, Zap } from 'lucide-react';

export default function StrategicPartnerships() {
  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          {/* Graphic Card (Left Side) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative !overflow-visible bg-white dark:bg-black/60 p-6 sm:p-8 text-neutral-900 dark:text-white shadow-2xl border border-neutral-200 dark:border-white/10"
          >
            <div className="mb-6 sm:mb-8 font-mono text-[10px] sm:text-xs text-cyan-600 dark:text-cyan-500">ID: LAB-NODE: CN-SZH-04</div>
            <ul className="space-y-4 sm:space-y-6">
              <li className="border-l-2 border-cyan-500/30 pl-4">
                <strong className="block text-xs sm:text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Direct Synthesis Hub</strong>
                <span className="text-xs sm:text-sm">Located at the source of global peptide synthesis.</span>
              </li>
              <li className="border-l-2 border-cyan-500/30 pl-4">
                <strong className="block text-xs sm:text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Laboratory Integration</strong>
                <span className="text-xs sm:text-sm">Deep partnerships with ISO-certified facilities in China.</span>
              </li>
              <li className="border-l-2 border-cyan-500/30 pl-4">
                <strong className="block text-xs sm:text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-300">On-Site Verification</strong>
                <span className="text-xs sm:text-sm">Immediate physical inspection of synthesis protocols.</span>
              </li>
            </ul>
            <div className="mt-6 sm:mt-8 inline-block border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Supply Chain / Global Fulfillment
            </div>
          </motion.div>

          {/* Text Content */}
          <div>
            <div className="mb-4 sm:mb-6 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">
              <FlaskConical className="h-3 w-3 sm:h-4 sm:w-4" />
              Infrastructure Protocol
            </div>
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
              STRATEGIC PARTNERSHIPS
            </h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Strategically based in the chemical synthesis heartland of CHINA CN, ShenzenLabs operates through direct-to-lab infrastructure. We bridge the gap between manufacturer and researcher, ensuring unmatched quality control.
            </p>

            <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center bg-neutral-200 dark:bg-black/80 text-neutral-900 dark:text-white">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-neutral-900 dark:text-white">Zero Intermediaries</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">By removing standard retail brokers, we provide factory-direct wholesale value to every research project.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center bg-neutral-200 dark:bg-black/80 text-neutral-900 dark:text-white">
                  <FlaskConical className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-neutral-900 dark:text-white">Synthesized Locally</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">Our materials are synthesized in partners' labs in China, then expedited via discreet international logistics.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">
              <span className="border border-neutral-300 dark:border-white/10 px-2 py-1">CN-Direct / Sourcing Protocol</span>
              <span className="border border-neutral-300 dark:border-white/10 px-2 py-1">ISO-9001 / Lab Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
