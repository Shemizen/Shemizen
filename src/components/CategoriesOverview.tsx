import { ArrowRight } from 'lucide-react';

interface CategoriesOverviewProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping', category?: string) => void;
}

const categories = [
  { title: "Metabolic Compounds", value: "METABOLIC SERIES", desc: "GLP-1 agonists and metabolic regulators." },
  { title: "Growth Hormone Series", value: "GROWTH HORMONE SERIES", desc: "Secretagogues and releasing peptides." },
  { title: "Mitochondrial Research", value: "MITOCHONDRIAL SERIES", desc: "Cellular energy and efficiency compounds." },
  { title: "Recovery Peptides", value: "RECOVERY SERIES", desc: "Tissue repair and healing acceleration." },
  { title: "Cognitive Compounds", value: "COGNITIVE SERIES", desc: "Nootropics and neural regulators." },
  { title: "Longevity Molecules", value: "LONGEVITY SERIES", desc: "Anti-aging and cellular health." },
];

export default function CategoriesOverview({ onNavigate }: CategoriesOverviewProps) {
  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">RESEARCH CATEGORIES</h2>
          <div className="mt-4 h-px w-24 bg-cyan-600 dark:bg-cyan-500"></div>
        </div>

        <div className="grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              onClick={() => onNavigate?.('catalog', cat.value)}
              className="group flex flex-col justify-between border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-4 sm:p-8 text-left transition-all hover:border-cyan-500/50 hover:shadow-lg dark:hover:bg-white/10 dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)]"
            >
              <div>
                <h3 className="mb-1 sm:mb-2 text-sm sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 line-clamp-2 sm:line-clamp-none">{cat.desc}</p>
              </div>
              <div className="mt-3 sm:mt-6 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 opacity-100 sm:opacity-0 transition-opacity sm:group-hover:opacity-100">
                View <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
