import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Truck, Info, ArrowRight, PackageSearch } from 'lucide-react';

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = (e: FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      window.open(`https://www.fedex.com/fedextrack/?trknbr=${trackingNumber.trim()}`, '_blank');
    }
  };

  return (
    <section className="border-t border-neutral-200 dark:border-white/10 bg-transparent py-24 text-neutral-900 dark:text-white !overflow-visible transition-colors duration-300 flex flex-col">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col !overflow-visible">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-cyan-600 dark:text-cyan-500">
            <PackageSearch className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest">Logistics Data</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
            ORDER TRACKING
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Track your shipment status in real-time. All orders are shipped via FedEx International Priority for the fastest and most reliable delivery.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-8 backdrop-blur-sm shadow-xl dark:shadow-none"
        >
          <form onSubmit={handleTrack} className="flex flex-col gap-6">
            <div className="space-y-2">
              <label htmlFor="tracking" className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">
                FedEx Tracking Number
              </label>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  id="tracking"
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your 12-digit tracking code"
                  className="flex-1 rounded-none border border-neutral-200 dark:border-white/20 bg-neutral-50 dark:bg-[#0C090A] px-6 py-4 text-sm font-medium text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition-colors focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 bg-[#0047AB] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#003380]"
                >
                  Track Shipment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Column 1: Shipping Times */}
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">Estimated Delivery</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex justify-between gap-4">
                  <span>USA/Canada:</span>
                  <span className="font-mono text-neutral-900 dark:text-white">3-5 Business Days</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Europe:</span>
                  <span className="font-mono text-neutral-900 dark:text-white">4-6 Business Days</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Asia/Pacific:</span>
                  <span className="font-mono text-neutral-900 dark:text-white">2-4 Business Days</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Need Help */}
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">Status Updates</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                If your tracking hasn't updated in 48 hours, please contact our support team via Email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
