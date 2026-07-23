import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface PriceTransparencyProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'referral' | 'privacy' | 'terms') => void;
}

export default function PriceTransparency({ onNavigate }: PriceTransparencyProps) {
  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="grid gap-12 md:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div>
            <div className="mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">
              Industry Insider Truth
            </div>
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl font-bold tracking-wide font-stiff text-neutral-900 dark:text-white uppercase">
              WHY ARE WE SO CHEAP?
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                Generally, peptides are expensive because 99% of vendors buy them from China, apply a local label, and overprice them by more than 500% on a single vial.
              </p>
              <p>
                The reality is that most peptides existing in the world today—including those sold by major "premium" brands famous in the United States and Europe—originate from the exact same synthesis hubs in China that we partner with.
              </p>
              <div className="border-l-4 border-neutral-900 dark:border-white pl-4 sm:pl-6 py-2 text-base sm:text-xl font-bold italic text-neutral-900 dark:text-white">
                "Be careful not to pay too much for a sticker."
              </div>
              <p>
                We are not resellers. We have direct equity partnerships with the laboratory in China. By eliminating the re-branding middleman, we pass the true wholesale cost directly to your laboratory.
              </p>
            </div>
          </div>

          {/* Comparison Card (Right Side) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-black/60 p-6 sm:p-8 shadow-xl border border-neutral-200 dark:border-white/10 backdrop-blur-sm"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Competitor */}
              <div className="opacity-50 grayscale">
                <h3 className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500">The "Premium" Brand Model</h3>
                <div className="flex items-center gap-1 sm:gap-2 font-mono text-xs sm:text-sm text-neutral-400">
                  <span>China Lab</span>
                  <ArrowRight className="h-3 w-3" />
                  <span>Re-Label</span>
                  <ArrowRight className="h-3 w-3" />
                  <span className="font-bold text-cyan-500">$200.00+ USD (500% Markup)</span>
                </div>
              </div>

              {/* ShenzenLabs */}
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white">The ShenzenLabs Direct Model</h3>
                <div className="flex items-center gap-1 sm:gap-2 font-mono text-base sm:text-lg font-bold">
                  <span>China Lab</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-900 dark:text-white" />
                  <span className="text-cyan-600 dark:text-cyan-500">$45.00 USD (Zero markup)</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate?.('catalog')}
                className="w-full bg-neutral-900 dark:bg-white py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white dark:text-black transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-200"
              >
                Pay for the Molecule, Not the Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
