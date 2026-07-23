import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, CheckCircle, Activity, Globe, User, X } from 'lucide-react';

interface TrustAndReviewsProps {
  compact?: boolean;
}

const reviews = [
  {
    id: "REV-001",
    image: "https://i.imgur.com/pGS6ijA.jpeg",
    text: "Arrived quickly. Discrete packaging, everything intact.",
    timestamp: "2 DAYS AGO",
  },
  {
    id: "REV-002",
    image: "https://i.imgur.com/LI9HQj9.png",
    text: "Best find this year fr. The sealing on these stealth bags is pro.",
    timestamp: "5 DAYS AGO",
  },
  {
    id: "REV-003",
    image: "https://i.imgur.com/QdjtVBn.png",
    text: "Vials look clean. Shipping took about 10 days.",
    timestamp: "1 WEEK AGO",
  },
  {
    id: "REV-004",
    image: "https://i.imgur.com/bEeRw5Q.png",
    text: "Legit vendor. Reconstitution went smoothly.",
    timestamp: "1 WEEK AGO",
  },
  {
    id: "REV-005",
    image: "https://i.imgur.com/xRO0bUK.png",
    text: "Shipping was fast. Label design is minimalist, love it.",
    timestamp: "2 WEEKS AGO",
  },
  {
    id: "REV-006",
    image: "https://i.imgur.com/fDN0cG3.png",
    text: "Grabbed a kit. Securely packed, all 10 accounted for.",
    timestamp: "2 WEEKS AGO",
  },
  {
    id: "REV-007",
    image: "https://i.imgur.com/SGVpHdF.png",
    text: "Good communication. Blue caps look exactly like the pics.",
    timestamp: "3 WEEKS AGO",
  },
  {
    id: "REV-008",
    image: "https://i.imgur.com/08SU1it.png",
    text: "Solid source. The protective sleeve is a nice touch.",
    timestamp: "1 MONTH AGO",
  },
  {
    id: "REV-009",
    image: "https://i.imgur.com/ecYyn7g.png",
    text: "Professional job. Modular labels are very clear.",
    timestamp: "1 MONTH AGO",
  }
];

const metrics = [
  { label: "ORDERS SENT", value: "624", sub: "(+12%)", icon: CheckCircle },
  { label: "AVG. PURITY", value: "99.2%", sub: "(TARGET ACHIEVED)", icon: Activity },
  { label: "TRANSIT SUCCESS", value: "98.8%", sub: "(GLOBAL)", icon: Globe },
  { label: "COMPLIANCE RATE", value: "100%", sub: "(RUO-99)", icon: ShieldCheck },
];

export default function TrustAndReviews({ compact = false }: TrustAndReviewsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayReviews = compact ? reviews.slice(0, 6) : reviews;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        
        {/* SECTION: TRUST VALIDATED */}
        <div className="mb-12 md:mb-24">
          <div className="mb-12 grid gap-8 grid-cols-1 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">
                <ShieldCheck className="h-4 w-4" />
                Identity Verified Data
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white">
                TRUST VALIDATED.
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                Trusted by clients worldwide. View verified reviews and feedback from customers who have purchased with us.
              </p>
            </div>
            
            {/* Upper Mini-Cards */}
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <div className="flex items-center gap-3 border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 px-6 py-4 backdrop-blur-sm shadow-sm dark:shadow-none">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Purity Floor</div>
                  <div className="font-mono text-lg font-bold text-neutral-900 dark:text-white">99.0%</div>
                </div>
              </div>
              <div className="flex items-center gap-3 border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 px-6 py-4 backdrop-blur-sm shadow-sm dark:shadow-none">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Ledger Status</div>
                  <div className="font-mono text-lg font-bold text-neutral-900 dark:text-white">ACTIVE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Data Cards */}
          <div className="grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-3 sm:p-6 shadow-sm hover:border-cyan-500/30 hover:bg-neutral-50 dark:hover:bg-white/10 hover:shadow-lg dark:hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] hover:z-10"
              >
                <div className="mb-2 sm:mb-4 text-neutral-500 dark:text-neutral-300">
                  <metric.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{metric.value}</div>
                  <div className="mt-1 text-[8px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {metric.label} <span className="text-cyan-600 dark:text-cyan-500 block sm:inline">{metric.sub}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION: CUSTOMER REVIEWS */}
        <div>
          <div className={`grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 ${compact ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {displayReviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col justify-between border border-cyan-500/20 bg-black/40 ${compact ? 'p-3' : 'p-3 sm:p-6'} shadow-sm hover:border-cyan-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] hover:z-10 backdrop-blur-sm`}
              >
                {/* Header */}
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex gap-0.5 text-cyan-500 dark:text-cyan-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`${compact ? 'h-3 w-3' : 'h-3 w-3 sm:h-4 sm:w-4'} fill-current`} />
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">{review.id}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-cyan-500">Verified</div>
                  </div>
                </div>

                {/* Image Container */}
                <div 
                  className={`relative mb-4 w-full overflow-hidden rounded-sm bg-[#0C090A] cursor-pointer group ${compact ? 'aspect-video' : 'aspect-square'}`}
                  onClick={() => setSelectedImage(review.image)}
                  onContextMenu={handleContextMenu}
                >
                  {/* Invisible overlay to block right click and drag */}
                  <div className="absolute inset-0 z-10" />
                  <img 
                    src={review.image} 
                    alt="Customer review photo" 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    draggable="false"
                    title="" // Prevents tooltip with filename
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </div>

                {/* Body */}
                <div className="mb-4 flex-grow">
                  <blockquote className={`${compact ? 'text-xs' : 'text-sm'} leading-relaxed text-neutral-300 font-sans font-normal tracking-wide`}>
                    "{review.text}"
                  </blockquote>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className={`flex items-center justify-center rounded-full bg-white/10 text-neutral-400 ${compact ? 'h-6 w-6' : 'h-8 w-8'}`}>
                    <User className={`${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white">Anon</div>
                    <div className="text-[10px] text-neutral-400">{review.timestamp}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            onContextMenu={handleContextMenu}
          >
            <button 
              className="absolute right-6 top-6 z-[110] text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Invisible overlay to block right click and drag */}
              <div className="absolute inset-0 z-10" />
              <img 
                src={selectedImage} 
                alt="Expanded customer review" 
                referrerPolicy="no-referrer"
                className="max-h-[90vh] max-w-[90vw] object-contain pointer-events-none"
                draggable="false"
                title=""
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
