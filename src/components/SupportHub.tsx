import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

interface SupportHubProps {
  onCopyEmail?: () => void;
}

export default function SupportHub({ onCopyEmail }: SupportHubProps) {
  return (
    <section className="bg-transparent py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        {/* Status Indicator */}
        <div className="mb-8 flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">
            SYSTEMS ONLINE
          </span>
        </div>

        {/* Header Content */}
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
            24/7 SUPPORT
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            Our dedicated research support team is available around the clock. Whether you need technical specifications, order updates, or shipping assistance, we're here to help.
          </p>
        </div>

        {/* Support Card Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Secure Email Card */}
          <motion.button
            onClick={onCopyEmail}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-8 transition-all hover:border-cyan-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/80 hover:shadow-lg dark:hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] text-left"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700/50">
                <span>🕒 &lt; 24H REPLY</span>
              </div>
            </div>
            
            <h3 className="mb-2 text-xl font-bold uppercase tracking-widest text-neutral-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors">
              Secure Email
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
              For detailed inquiries, order support, and bulk requests.
            </p>
          </motion.button>
        </div>

        {/* Footer FAQ Banner */}
        <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-black/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                  Need Help with Research Protocols?
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  Our team can provide general information about compound properties and storage.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
            >
              CHECK FAQ
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
