import { motion } from 'motion/react';
import { FlaskConical, ShieldCheck, Truck, Atom, Share2 } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping') => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-transparent py-16 text-neutral-900 dark:text-white !overflow-visible transition-colors duration-300 font-display">
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center !overflow-visible">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-light leading-tight tracking-widest sm:text-5xl md:text-7xl lg:text-8xl text-neutral-900 dark:text-white font-stiff uppercase"
        >
          RESEARCH GRADE <br className="hidden sm:block" />
          <span className="relative inline-flex items-center text-cyan-600 dark:text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
            PEPTIDES
            {/* Molecule 1 */}
            <motion.span
              animate={{ y: [-5, 5, -5], rotate: 360 }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
              className="absolute -right-6 -top-4 md:-right-16 md:-top-10 text-cyan-500/60"
            >
              <Share2 className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1} />
            </motion.span>
            {/* Molecule 2 */}
            <motion.span
              animate={{ y: [5, -5, 5], rotate: -360 }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
              className="absolute -left-6 -bottom-4 md:-left-12 md:-bottom-8 text-cyan-400/40"
            >
              <Atom className="h-6 w-6 md:h-10 md:w-10" strokeWidth={1.5} />
            </motion.span>
            {/* Molecule 3 */}
            <motion.span
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-1/4 -bottom-6 md:-bottom-10 text-cyan-300/50"
            >
              <Share2 className="h-5 w-5 md:h-8 md:w-8" strokeWidth={1.5} />
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-10 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light tracking-wide"
        >
          Eliminating the middleman to provide direct access to <span className="font-medium text-neutral-900 dark:text-white">99%+ pure research compounds</span> for your analytical needs.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('catalog')}
            className="w-full sm:w-auto bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white dark:text-black transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
          >
            Shop Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('shipping')}
            className="w-full sm:w-auto border border-neutral-900 dark:border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-900 dark:text-white transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Order Protocol
          </motion.button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 border-t border-neutral-200 dark:border-white/10 pt-8 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center gap-3">
            <FlaskConical className="h-8 w-8 text-neutral-900 dark:text-white stroke-[1]" />
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Lab Tested</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-neutral-900 dark:text-white stroke-[1]" />
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-300">99% Purity</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Truck className="h-8 w-8 text-neutral-900 dark:text-white stroke-[1]" />
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Fast Shipping</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
