import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, X } from 'lucide-react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay to let the page load
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto close after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 9500);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-sm sm:bottom-8 sm:left-auto sm:right-8 sm:mx-0"
        >
          <div className="relative flex items-center gap-4 !overflow-visible rounded-xl border border-neutral-200 dark:border-cyan-500/30 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:bg-black/95">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none" />
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
              <Truck className="h-5 w-5" />
            </div>
            
            <div className="flex-1 pr-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">
                Special Offer
              </h3>
              <p className="mt-0.5 text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                FREE SHIPPING ON ALL ORDERS ABOVE $500.00 USD
              </p>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-3 top-3 p-1 text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
