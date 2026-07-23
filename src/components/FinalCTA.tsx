import { ArrowRight, Lock } from 'lucide-react';

interface FinalCTAProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'referral' | 'privacy' | 'terms') => void;
  onCopyEmail?: () => void;
}

export default function FinalCTA({ onNavigate, onCopyEmail }: FinalCTAProps) {
  return (
    <section className="bg-transparent py-16 md:py-32 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 text-center flex flex-col !overflow-visible">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white">
          READY TO INITIATE YOUR RESEARCH?
        </h2>
        <p className="mx-auto mb-8 md:mb-12 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          Join leading laboratories worldwide utilizing ShenzenLabs for precision synthesis and reliable data.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button 
            onClick={() => onNavigate?.('catalog')}
            className="group flex min-w-[200px] items-center justify-center gap-2 bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white dark:text-black transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-200"
          >
            View Full Catalog
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={onCopyEmail}
            className="flex min-w-[200px] items-center justify-center gap-2 border border-neutral-900 dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-colors hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Lock className="h-4 w-4" />
            Contact Securely
          </button>
        </div>
      </div>
    </section>
  );
}
