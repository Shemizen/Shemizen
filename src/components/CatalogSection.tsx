import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, Truck, Package, Plus, Zap, Activity, Lock, ChevronDown, FileText, X } from 'lucide-react';
import COAModal from './COAModal';

const mainTabs = [
  { label: "All", value: "ALL" },
  { label: "Metabolic", value: "METABOLIC SERIES" },
  { label: "Mitochondrial", value: "MITOCHONDRIAL SERIES" },
  { label: "Growth Hormone", value: "GROWTH HORMONE SERIES" },
  { label: "Recovery", value: "RECOVERY SERIES" },
  { label: "Cognitive", value: "COGNITIVE SERIES" },
  { label: "Longevity", value: "LONGEVITY SERIES" },
];

const moreTabs = [
  { label: "Cosmetic", value: "COSMETIC SERIES" },
  { label: "Inflammation", value: "INFLAMMATION SERIES" },
  { label: "Accessories", value: "ACCESSORIES" },
];

export const highDemandProducts = [
  "Retatrutide",
  "Semaglutide",
  "Tirzepatide",
  "Selank",
  "MOTS-c",
  "BPC 157",
  "TB500",
  "SS-31",
  "Tesamorelin",
  "Ipamorelin",
  "GHK-CU"
];

export type ProductVariant = {
  dosage: string;
  price: number;
  originalPrice?: number;
  isKit: boolean;
};

export type Product = {
  name: string;
  category: string;
  cas: string;
  variants: ProductVariant[];
};

export const products: Product[] = [
  {
    name: "Retatrutide",
    category: "METABOLIC SERIES",
    cas: "2381089-83-2",
    variants: [
      { dosage: "5mg", price: 140, isKit: true },
      { dosage: "10mg", price: 210, isKit: true },
      { dosage: "15mg", price: 263, isKit: true },
      { dosage: "20mg", price: 385, isKit: true },
      { dosage: "50mg", price: 525, isKit: true },
      { dosage: "60mg", price: 595, isKit: true }
    ]
  },
  {
    name: "Tirzepatide",
    category: "METABOLIC SERIES",
    cas: "2023788-19-2",
    variants: [
      { dosage: "5mg", price: 70, isKit: true },
      { dosage: "10mg", price: 105, isKit: true },
      { dosage: "15mg", price: 140, isKit: true },
      { dosage: "20mg", price: 175, isKit: true },
      { dosage: "30mg", price: 228, isKit: true },
      { dosage: "40mg", price: 280, isKit: true },
      { dosage: "50mg", price: 333, isKit: true },
      { dosage: "60mg", price: 385, isKit: true }
    ]
  },
  {
    name: "Semaglutide",
    category: "METABOLIC SERIES",
    cas: "910463-68-2",
    variants: [
      { dosage: "5mg", price: 81, isKit: true },
      { dosage: "10mg", price: 93, isKit: true },
      { dosage: "15mg", price: 119, isKit: true },
      { dosage: "20mg", price: 153, isKit: true },
      { dosage: "30mg", price: 203, isKit: true }
    ]
  },
  {
    name: "HGH",
    category: "GROWTH HORMONE SERIES",
    cas: "12629-01-5",
    variants: [
      { dosage: "10iu", price: 105, isKit: true },
      { dosage: "12iu", price: 123, isKit: true },
      { dosage: "15iu", price: 140, isKit: true },
      { dosage: "24iu", price: 210, isKit: true }
    ]
  },
  {
    name: "BPC 157",
    category: "RECOVERY SERIES",
    cas: "137525-51-0",
    variants: [
      { dosage: "5mg", price: 88, isKit: true },
      { dosage: "10mg", price: 123, isKit: true },
      { dosage: "20mg", price: 193, isKit: true }
    ]
  },
  {
    name: "TB500",
    category: "RECOVERY SERIES",
    cas: "77591-33-4",
    variants: [
      { dosage: "5mg", price: 123, isKit: true },
      { dosage: "10mg", price: 210, isKit: true }
    ]
  },
  {
    name: "SS-31",
    category: "MITOCHONDRIAL SERIES",
    cas: "736992-21-5",
    variants: [
      { dosage: "10mg", price: 170, isKit: true },
      { dosage: "50mg", price: 730, isKit: true }
    ]
  },
  {
    name: "MOTS-c",
    category: "MITOCHONDRIAL SERIES",
    cas: "1627580-64-6",
    variants: [
      { dosage: "10mg", price: 112, isKit: true },
      { dosage: "40mg", price: 350, isKit: true }
    ]
  },
  {
    name: "Epithalon",
    category: "LONGEVITY SERIES",
    cas: "307297-39-8",
    variants: [
      { dosage: "5mg", price: 70, isKit: true },
      { dosage: "10mg", price: 105, isKit: true },
      { dosage: "50mg", price: 293, isKit: true }
    ]
  },
  {
    name: "Cartalax",
    category: "LONGEVITY SERIES",
    cas: "313301-26-1",
    variants: [
      { dosage: "20mg", price: 193, isKit: true }
    ]
  },
  {
    name: "PE-22-28",
    category: "COGNITIVE SERIES",
    cas: "1450833-55-2",
    variants: [
      { dosage: "8mg", price: 123, isKit: true }
    ]
  },
  {
    name: "Selank",
    category: "COGNITIVE SERIES",
    cas: "129954-34-3",
    variants: [
      { dosage: "5mg", price: 88, isKit: true },
      { dosage: "10mg", price: 146, isKit: true }
    ]
  },
  {
    name: "Semax",
    category: "COGNITIVE SERIES",
    cas: "80714-61-0",
    variants: [
      { dosage: "5mg", price: 88, isKit: true },
      { dosage: "10mg", price: 146, isKit: true }
    ]
  },
  {
    name: "Tesamorelin",
    category: "GROWTH HORMONE SERIES",
    cas: "216974-75-3",
    variants: [
      { dosage: "5mg", price: 167, isKit: true },
      { dosage: "10mg", price: 280, isKit: true }
    ]
  },
  {
    name: "Ipamorelin",
    category: "GROWTH HORMONE SERIES",
    cas: "170851-70-4",
    variants: [
      { dosage: "5mg", price: 74, isKit: true },
      { dosage: "10mg", price: 137, isKit: true }
    ]
  },
  {
    name: "Cagrilintide",
    category: "METABOLIC SERIES",
    cas: "1415456-99-3",
    variants: [
      { dosage: "5mg", price: 175, isKit: true },
      { dosage: "10mg", price: 315, isKit: true }
    ]
  },
  {
    name: "Mazdutide",
    category: "METABOLIC SERIES",
    cas: "2089261-14-9",
    variants: [
      { dosage: "5mg", price: 237, isKit: true },
      { dosage: "10mg", price: 417, isKit: true }
    ]
  },
  {
    name: "Survodutide",
    category: "METABOLIC SERIES",
    cas: "2805997-46-8",
    variants: [
      { dosage: "5mg", price: 263, isKit: true },
      { dosage: "10mg", price: 455, isKit: true }
    ]
  },
  {
    name: "GHK-CU",
    category: "COSMETIC SERIES",
    cas: "89030-95-5",
    variants: [
      { dosage: "50mg", price: 58, isKit: true },
      { dosage: "100mg", price: 98, isKit: true }
    ]
  },
  {
    name: "Sermorelin Acetate",
    category: "GROWTH HORMONE SERIES",
    cas: "86168-78-7",
    variants: [
      { dosage: "5mg", price: 137, isKit: true },
      { dosage: "10mg", price: 293, isKit: true }
    ]
  },
  {
    name: "Thymosin Alpha-1",
    category: "INFLAMMATION SERIES",
    cas: "62304-98-7",
    variants: [
      { dosage: "5mg", price: 140, isKit: true },
      { dosage: "10mg", price: 263, isKit: true }
    ]
  },
  {
    name: "KPV",
    category: "INFLAMMATION SERIES",
    cas: "67330-25-0",
    variants: [
      { dosage: "10mg", price: 132, isKit: true }
    ]
  },
  {
    name: "MT-1",
    category: "COSMETIC SERIES",
    cas: "75921-69-6",
    variants: [
      { dosage: "10mg", price: 84, isKit: true }
    ]
  },
  {
    name: "MT-2",
    category: "COSMETIC SERIES",
    cas: "121062-08-6",
    variants: [
      { dosage: "10mg", price: 84, isKit: true }
    ]
  },
  {
    name: "AOD9604",
    category: "METABOLIC SERIES",
    cas: "221231-10-3",
    variants: [
      { dosage: "5mg", price: 158, isKit: true },
      { dosage: "10mg", price: 282, isKit: true }
    ]
  },
  {
    name: "IGF-1LR3",
    category: "GROWTH HORMONE SERIES",
    cas: "143045-27-6",
    variants: [
      { dosage: "0.1mg", price: 74, isKit: true },
      { dosage: "1mg", price: 389, isKit: true }
    ]
  },
  {
    name: "BAC Water",
    category: "ACCESSORIES",
    cas: "7732-18-5, 100-51-6",
    variants: [
      { dosage: "3ml", price: 27, isKit: true },
      { dosage: "10ml", price: 27, isKit: true }
    ]
  }
];

export const ProductCard: React.FC<{ 
  product: Product, 
  onAddToCart?: (item: any) => void,
  onSelectCOA: (name: string) => void
}> = ({ product, onAddToCart, onSelectCOA }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedVariant = product.variants[selectedVariantIndex];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="group flex flex-col h-auto pb-5 w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80">
      {/* Label Header Accent */}
      <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-cyan-500/30">
        <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
      </div>
      
      {/* Header Section */}
      <div className="p-4 sm:p-5 border-b border-neutral-100 dark:border-white/5">
        <div className="flex flex-wrap gap-2 mb-3">
          {highDemandProducts.includes(product.name) && (
            <div className="flex items-center gap-1.5 rounded bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              High Demand
            </div>
          )}
          <div className="flex items-center gap-1.5 rounded bg-cyan-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            In Stock
          </div>
        </div>
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight break-words">{product.name}</h3>
              {selectedVariant.isKit && (
                <span className="bg-neutral-100 dark:bg-black/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-300 rounded shrink-0">
                  10 Vials
                </span>
              )}
            </div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 break-words">
              {product.category}
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              ${selectedVariant.price.toFixed(2)} <span className="text-xs font-normal text-neutral-500 dark:text-neutral-300">USD</span>
            </span>
            {selectedVariant.originalPrice && (
              <span className="block text-xs text-neutral-500 dark:text-neutral-400 line-through">
                ${selectedVariant.originalPrice.toFixed(2)} USD
              </span>
            )}
            <span className="font-mono text-[10px] text-neutral-400 break-words">CAS: {product.cas}</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Dosages & Specs */}
      <div className="flex-grow flex flex-col p-4 sm:p-5 bg-neutral-50/50 dark:bg-black/60">
        {/* Dosage Selector */}
        <div className="mb-4">
          <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Select Dosage
          </label>
          <div className="relative font-sans" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full rounded border bg-[#0a0a0a] px-4 py-[10px] text-sm text-white cursor-pointer flex justify-between items-center transition-colors ${isDropdownOpen ? 'border-[#00bcd4]' : 'border-neutral-700 hover:border-[#00bcd4]'}`}
            >
              <span>{selectedVariant.dosage}</span>
              <ChevronDown className={`h-4 w-4 text-[#00bcd4] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 z-50">
                <ul className="bg-[#0a0a0a] border border-[#00bcd4] rounded overflow-hidden shadow-xl">
                  {product.variants.map((variant, idx) => (
                    <li 
                      key={idx} 
                      onClick={() => {
                        setSelectedVariantIndex(idx);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-[10px] text-sm text-white cursor-pointer transition-colors hover:bg-[#00bcd4] hover:text-white"
                    >
                      {variant.dosage}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-auto grid grid-cols-2 gap-4 bg-white dark:bg-black/60 p-3 rounded border border-neutral-100 dark:border-white/5">
          <div className="min-w-0">
            <span className="block font-bold text-neutral-400 uppercase tracking-wider text-[9px] mb-0.5 truncate">Purity Floor</span>
            <span className="font-mono text-xs font-medium text-neutral-900 dark:text-white break-words">≥99.0%</span>
          </div>
          <div className="min-w-0">
            <span className="block font-bold text-neutral-400 uppercase tracking-wider text-[9px] mb-0.5 truncate">Unit Type</span>
            <span className="font-mono text-xs font-medium text-neutral-900 dark:text-white break-words">{selectedVariant.isKit ? 'Kit (10 Vials)' : 'Single Unit'}</span>
          </div>
        </div>
      </div>

      {/* Footer Section: Actions & Badges */}
      <div className="mt-auto p-4 sm:p-5 border-t border-neutral-200 dark:border-cyan-500/20 flex flex-col gap-4">
        <div className="flex gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCOA(product.name)}
            className="flex-1 flex items-center justify-center gap-2 rounded-sm border border-neutral-300 dark:border-cyan-500/30 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-cyan-400 transition-colors hover:bg-neutral-100 dark:hover:bg-cyan-500/10"
          >
            <FileText className="h-4 w-4" />
            COA
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              onAddToCart?.({
                name: product.name, 
                price: selectedVariant.price, 
                category: product.category,
                cas: product.cas,
                dosage: selectedVariant.dosage,
                isKit: selectedVariant.isKit
              });
            }}
            className="flex-[2] flex items-center justify-center gap-2 rounded-sm bg-cyan-600 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" />
            Add
          </motion.button>
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed border-neutral-200 dark:border-cyan-500/20">
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-cyan-500/30 bg-neutral-50 dark:bg-[#0C090A] px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-neutral-500 dark:text-cyan-500/70">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            ISO 9001:2015
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-cyan-500/30 bg-neutral-50 dark:bg-[#0C090A] px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-neutral-500 dark:text-cyan-500/70">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            GMP COMPLIANT
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CatalogSection({ 
  initialCategory, 
  initialSearch,
  onAddToCart,
  onOpenCart
}: { 
  initialCategory?: string, 
  initialSearch?: string,
  onAddToCart?: (product: { name: string; price: number; category?: string; cas?: string; dosage?: string; isKit?: boolean }) => void,
  onOpenCart?: () => void
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "ALL");
  const [searchQuery, setSearchQuery] = useState(initialSearch || "");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
    if (initialSearch !== undefined) {
      setSearchQuery(initialSearch);
    }
  }, [initialCategory, initialSearch]);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "ALL" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.cas.includes(searchQuery);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    const aIndex = highDemandProducts.indexOf(a.name);
    const bIndex = highDemandProducts.indexOf(b.name);
    const aHighDemand = aIndex !== -1;
    const bHighDemand = bIndex !== -1;
    
    if (aHighDemand && !bHighDemand) return -1;
    if (!aHighDemand && bHighDemand) return 1;
    if (aHighDemand && bHighDemand) return aIndex - bIndex;
    return 0;
  });

  const isMoreActive = moreTabs.some(tab => tab.value === activeCategory);

  return (
    <section className="catalog-force-visible min-h-[100dvh] !h-auto relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 to-black py-8 md:py-12 transition-colors duration-300 flex flex-col !overflow-visible" style={{ paddingBottom: 'env(safe-area-inset-bottom, 150px)' }}>
      <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none z-0"></div>
      <COAModal productName={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <div className="container relative z-10 mx-auto px-6 flex flex-col !overflow-visible">
        
        {/* 1. Header Block */}
        <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-stiff text-white tracking-wide uppercase"
          >
            RESEARCH CATALOG
          </motion.h1>
          
          <div className="flex flex-col items-start md:items-end">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm font-light text-white/60"
            >
              Laboratory-verified compounds. Strictly for in-vitro research.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-1 text-xs font-bold text-cyan-500 uppercase tracking-widest"
            >
              All Prices are in USD
            </motion.p>
          </div>
        </div>

        {/* 10-Vial Kit Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-6 border border-cyan-500/30 bg-cyan-500/5 p-4 rounded-sm"
        >
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-2">
            <Package className="h-4 w-4" />
            Understanding Our 10-Vial Kits
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            All peptides are sold as 10-vial kits. For example, if you order Retatrutide 10mg, you will receive 10 vials containing 10mg each, for a total of 100mg of Retatrutide per kit.
          </p>
        </motion.div>

        {/* Trust Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {[
            { icon: Activity, text: "99%+ Purity Floor" },
            { icon: ShieldCheck, text: "Lab Verified" },
            { icon: Truck, text: "Global Direct Logistics" },
            { icon: Package, text: "10-Vial Factory-Sealed Kits" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-full border border-cyan-500/80 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <badge.icon className="h-3 w-3 text-cyan-400" />
              {badge.text}
            </div>
          ))}
        </motion.div>

        {/* 2. Segmented Filter Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {mainTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveCategory(tab.value);
                  setIsMoreOpen(false);
                }}
                className={`px-3 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors border ${
                  activeCategory === tab.value
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                    : "bg-white text-neutral-500 dark:text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 dark:bg-[#0C090A] dark:text-neutral-300 dark:border-white/20 dark:hover:border-white/40 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
            
            {/* More Tabs (Mobile: Inline, Desktop: Dropdown) */}
            {moreTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-3 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors border md:hidden ${
                  activeCategory === tab.value
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                    : "bg-white text-neutral-500 dark:text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 dark:bg-[#0C090A] dark:text-neutral-300 dark:border-white/20 dark:hover:border-white/40 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <div className="relative hidden md:block">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${
                  isMoreActive
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                    : "bg-white text-neutral-500 dark:text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 dark:bg-[#0C090A] dark:text-neutral-300 dark:border-white/20 dark:hover:border-white/40 dark:hover:text-white"
                }`}
              >
                More
                <ChevronDown className={`h-3 w-3 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 min-w-[160px] border border-neutral-200 dark:border-white/20 bg-white dark:bg-black shadow-xl">
                  {moreTabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => {
                        setActiveCategory(tab.value);
                        setIsMoreOpen(false);
                      }}
                      className={`block w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest transition-colors ${
                        activeCategory === tab.value
                          ? "bg-neutral-100 text-neutral-900 dark:bg-black/80 dark:text-white"
                          : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-white/5 dark:hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Product Card Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] !overflow-visible">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.name} 
              product={product} 
              onAddToCart={onAddToCart}
              onSelectCOA={(name) => setSelectedProduct(name)}
            />
          ))}
        </div>

        {/* 5. Subtle Trust Layer */}
        <div className="mt-24 border-y border-neutral-200 dark:border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <div className="text-xs font-bold uppercase tracking-widest">
                <span className="text-neutral-500 dark:text-neutral-400">Global Purity Consensus: </span>
                <span className="text-neutral-900 dark:text-white">99.2%</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                3rd-Party Audited Protocols
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                ISO-9001 Compliant Supply
              </div>
            </div>
          </div>
        </div>

        {/* 6. Bottom CTA Section */}
        <div className="mt-24 bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 p-12 text-center backdrop-blur-sm shadow-sm dark:shadow-none">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
            Ready to initiate your research order?
          </h2>
          <p className="mb-8 text-neutral-500 dark:text-neutral-300">
            Submit your selected compounds via encrypted communication channel.
          </p>
          <button 
            onClick={onOpenCart}
            className="mx-auto flex items-center gap-2 border border-neutral-900 dark:border-white bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-colors hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Zap className="h-4 w-4" />
            Initiate Secure Checkout
          </button>
        </div>

      </div>
    </section>
  );
}
