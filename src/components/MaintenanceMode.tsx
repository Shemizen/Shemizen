import React from 'react';
import { motion } from 'motion/react';
import { Settings, Activity } from 'lucide-react';

export default function MaintenanceMode() {
  return (
    <div className="min-h-[100dvh] bg-slate-200 dark:bg-[#0C090A] flex flex-col items-center justify-center p-6 text-neutral-900 dark:text-white transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full bg-white dark:bg-[#0C090A] border border-neutral-200 dark:border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Settings className="h-16 w-16 text-cyan-600 dark:text-cyan-400 animate-[spin_6s_linear_infinite]" />
            <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400 absolute -bottom-2 -right-2 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-neutral-900 dark:text-white">
          SYSTEM UPGRADE
        </h1>
        
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
          Shenzen Labs is currently undergoing scheduled maintenance to upgrade our secure infrastructure and catalog systems. We will be back online shortly.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
          <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
          Maintenance in Progress
        </div>
      </motion.div>
    </div>
  );
}
