import { motion } from 'motion/react';
import { ShieldCheck, Lock, Database, Cookie } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* 1. Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl sm:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase"
          >
            PRIVACY POLICY
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300 uppercase tracking-widest">
            Data Protection & Researcher Confidentiality Protocol.
          </p>
        </div>

        {/* 2. Scope of Data Collection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Database className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Scope of Data Collection</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                ShenzenLabs collects only the essential information required to facilitate high-precision research compound acquisition. This includes encrypted shipping details and communication logs necessary for order fulfillment and technical support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Operational Confidentiality */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Operational Confidentiality</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                We utilize end-to-end encrypted communication (ProtonMail) to ensure that researcher identities and institutional affiliations remain strictly confidential. We do not sell, trade, or share your data with third-party marketing entities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. Security Protocols */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Lock className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Security Protocols</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                All digital records are stored on secure, decentralized servers. Transactional data via Bitcoin ensures a layer of financial privacy consistent with high-level laboratory procurement standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. Cookies and Analytics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Cookies and Analytics</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                Our platform uses minimal functional cookies to maintain your session and shopping cart integrity. We do not use invasive tracking pixels or third-party analytics that compromise user anonymity.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
