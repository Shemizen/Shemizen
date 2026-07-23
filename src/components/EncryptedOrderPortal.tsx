import { motion } from 'motion/react';
import { Lock, Copy, Mail, ShieldCheck } from 'lucide-react';

interface EncryptedOrderPortalProps {
  onCopyEmail?: () => void;
}

export default function EncryptedOrderPortal({ onCopyEmail }: EncryptedOrderPortalProps) {


  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* I. Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 backdrop-blur-sm">
              <Lock className="h-3 w-3" />
              Encrypted Order Portal
            </div>
          </div>
          
          <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
            READY TO INITIATE YOUR<br />SHENZENLABS ORDER?
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Please provide your selected items and logistics details to our support team via Email. All prices are in USD and USD is the only accepted currency.
          </p>
        </div>

        {/* II. Communication Channels */}
        <div className="flex justify-center">
          
          {/* Channel 1: Email Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-8 transition-colors hover:border-cyan-500/30 hover:bg-neutral-50 dark:hover:bg-white/10 hover:shadow-lg dark:hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
          >
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Secure Email</div>
            <div className="mb-8 font-mono text-xl font-bold text-neutral-900 dark:text-white break-all">shenzenlabs@protonmail.com</div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <button 
                onClick={onCopyEmail}
                className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-300 dark:border-white/20 bg-transparent py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-white dark:hover:text-black"
              >
                <Copy className="h-3 w-3" />
                Copy Email
              </button>
              <button 
                onClick={() => {
                  if (onCopyEmail) onCopyEmail();
                  window.location.href = "mailto:shenzenlabs@protonmail.com";
                }}
                className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 dark:bg-white py-3 text-xs font-bold uppercase tracking-widest text-white dark:text-black transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-200"
              >
                <Mail className="h-3 w-3" />
                Transmit
              </button>
            </div>
          </motion.div>

        </div>

        {/* III. System Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 dark:border-white/10 pt-8 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-500" />
            <span className="text-cyan-600 dark:text-cyan-500">Encrypted Communications</span>
          </div>
          <div className="font-mono">SYSTEM: US-SEC-01</div>
        </div>

      </div>
    </section>
  );
}
