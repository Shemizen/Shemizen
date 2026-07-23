import { motion } from 'motion/react';
import { Lock, FileText, Mail, Bitcoin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function OrderingProcess() {
  const steps = [
    {
      id: "01",
      icon: FileText,
      title: "SELECTION",
      desc: "Compile your research requirements from our catalog into the digital requisition list.",
      note: "ANALYTICAL NOTE: Kits of 10 vials are factory-sealed for maximum stability and long-term storage."
    },
    {
      id: "02",
      icon: Mail,
      title: "SUBMISSION",
      desc: "Transmit your finalized requisition list to our secure support system via Email.",
      note: "ANALYTICAL NOTE: You may use any preferred email provider to communicate your research requirements."
    },
    {
      id: "03",
      icon: Bitcoin,
      title: "PAYMENT",
      desc: "Receive a secure invoice with a unique cryptocurrency address for your order. All prices are in USD and USD is the only accepted currency.",
      note: "ANALYTICAL NOTE: Wallet addresses rotate to maintain absolute transactional security for both parties."
    },
    {
      id: "04",
      icon: ShieldCheck,
      title: "FULFILLMENT",
      desc: "Upon payment confirmation, materials are dispatched via discreet expedited logistics.",
      note: "ANALYTICAL NOTE: Tracking nodes update within 24-48 hours of dispatch from our fulfillment center."
    }
  ];

  return (
    <section id="how-to-order" className="scroll-mt-28 bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        
        {/* I. Main Header */}
        <div className="mb-12 md:mb-20 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/20 bg-white dark:bg-black/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 backdrop-blur-sm shadow-sm dark:shadow-none">
              <Lock className="h-3 w-3" />
              Secure Manual Protocol
            </div>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white font-stiff uppercase">
            HOW TO ORDER
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Follow our verified 4-step research acquisition process to ensure absolute privacy and material quality.
          </p>
        </div>

        {/* II. Step-by-Step Timeline */}
        <div className="mx-auto max-w-5xl w-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-neutral-100 dark:text-white/5 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                  {step.id}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 h-1 w-12 bg-cyan-600 dark:bg-cyan-500 rounded-full transition-all duration-300 group-hover:w-16"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-neutral-500 dark:text-cyan-400" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">{step.title}</h3>
                  </div>
                  
                  <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300 flex-grow">
                    {step.desc}
                  </p>
                  
                  <div className="mt-auto border-t border-neutral-200 dark:border-white/10 pt-4">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-400">
                      <span className="text-cyan-600 dark:text-cyan-400 mr-1">NOTE:</span>
                      {step.note.replace("ANALYTICAL NOTE: ", "")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
