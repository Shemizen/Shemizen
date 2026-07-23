import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FileText } from 'lucide-react';
import COAModal from './COAModal';
import { products, ProductCard } from './CatalogSection';

interface FeaturedCompoundsProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping') => void;
  onAddToCart?: (product: { name: string; price: number; category?: string; cas?: string; dosage?: string; isKit?: boolean }) => void;
}

const featuredNames = ["Retatrutide", "Tirzepatide", "Semaglutide", "BPC 157", "GHK-CU", "Cagrilintide"];
const featuredProducts = products.filter(p => featuredNames.includes(p.name));

export default function FeaturedCompounds({ onNavigate, onAddToCart }: FeaturedCompoundsProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="catalog-force-visible bg-transparent py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <COAModal productName={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">FEATURED RESEARCH COMPOUNDS</h2>
            <div className="mt-4 h-px w-24 bg-cyan-600 dark:bg-cyan-500"></div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <button 
              onClick={() => onNavigate?.('catalog')}
              className="hidden text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white underline decoration-1 underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-400 sm:block"
            >
              View Full Catalog
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] !overflow-visible">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard 
                product={product} 
                onAddToCart={onAddToCart}
                onSelectCOA={(name) => setSelectedProduct(name)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <button 
            onClick={() => onNavigate?.('catalog')}
            className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white underline decoration-1 underline-offset-4"
          >
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
