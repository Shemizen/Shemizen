import { AlertTriangle } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section className="bg-transparent py-8 md:py-12 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 dark:bg-black/80 text-neutral-600 dark:text-neutral-300">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div className="max-w-3xl">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300">Compliance Notice</h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              All products listed on this website are strictly for in-vitro laboratory research use only. They are not intended for human consumption, veterinary use, or any therapeutic application. Buyers must be at least 21 years of age and comply with all local regulations regarding the purchase and use of these compounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
