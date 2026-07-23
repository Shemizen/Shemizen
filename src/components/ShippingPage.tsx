import { motion } from 'motion/react';
import { AlertTriangle, Globe, Truck, Package, ShieldCheck, RefreshCw, CheckCircle, Clock, Mail, PackageSearch, ArrowRight } from 'lucide-react';

export default function ShippingPage() {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* 1. Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl sm:text-6xl font-bold font-stiff text-neutral-900 dark:text-white tracking-wide uppercase"
          >
            GLOBAL LOGISTICS PROTOCOL
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300">
            Logistics managed by Protocol DIST-CN-9
          </p>
        </div>

        {/* 2. Risk Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-500">Risk Disclaimer</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-yellow-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(234,179,8,0.3)] hover:border-yellow-500/80">
            <div className="h-1 w-full bg-neutral-200 dark:bg-yellow-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-yellow-500/30">
              <div className="h-full w-1/3 bg-yellow-500/50 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p className="mb-4 font-medium text-neutral-900 dark:text-white">
                The importing researcher is exclusively responsible for local regulatory compliance.
              </p>
              <p>
                Verify jurisdictional laws before procurement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Global Logistics Overview */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Globe className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Global Logistics</h2>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            Precision supply chain management from synthesis center to laboratory worldwide.
          </p>
        </div>

        {/* 4. Distribution Infrastructure */}
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Truck, text: "Expedited Distribution Nodes" },
            { icon: Package, text: "Discrete Packaging" },
            { icon: ShieldCheck, text: "Express Tracking" }
          ].map((item, i) => (
            <div key={i} className="group flex h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
              <div className="w-1 h-full bg-neutral-200 dark:bg-cyan-900/50 flex flex-col transition-colors duration-300 group-hover:bg-cyan-500/30">
                <div className="w-full h-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-bold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5 & 6. Rates & Thresholds */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">Standard Flat Rates</h2>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="mb-1 text-3xl font-bold tracking-tighter text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors duration-300">$50.00 USD</div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">Australia (AUS)</p>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold tracking-tighter text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors duration-300">$60.00 USD</div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">Worldwide Expedited Courier</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 h-full flex flex-col justify-center">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-500">System Override</h2>
              <div className="mb-2 text-xl font-bold text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-400">Free shipping on orders over $500.00 USD.</div>
            </div>
          </div>
        </div>

        {/* 7. Regional Nodes & Metrics */}
        <div className="mb-16">
          <h2 className="mb-8 text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-white">Regional Nodes & Metrics</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: "United States", flag: "🇺🇸", node: "USA-RUO", rate: "95%", time: "~15 Days" },
              { region: "Australia", flag: "🇦🇺", node: "AU-TGA", rate: "95%", time: "~15 Days" },
              { region: "United Kingdom", flag: "🇬🇧", node: "UK-EXP", rate: "99%", time: "~15 Days" },
              { region: "European Union", flag: "🇪🇺", node: "EU-REACH", rate: "98%", time: "8–20 Days" }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80">
                <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex rounded-t-sm overflow-hidden transition-colors duration-300 group-hover:bg-cyan-500/30">
                  <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xl">{item.flag}</span>
                    <span className="font-bold uppercase tracking-wide text-neutral-900 dark:text-white">{item.region}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Node:</span>
                      <span className="font-mono font-medium text-cyan-600 dark:text-cyan-400">{item.node}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Success Rate:</span>
                      <span className="font-mono font-medium text-green-600 dark:text-green-400">{item.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Delivery Time:</span>
                      <span className="font-mono font-medium text-neutral-600 dark:text-neutral-300">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Fulfillment Flow */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Fulfillment Flow</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                step: "01",
                title: "Confirmation", 
                desc: "Payment verified on the Bitcoin blockchain within 1–2 hours." 
              },
              { 
                step: "02",
                title: "24–48h Dispatch", 
                desc: "Materials vacuum-sealed and handed to international courier." 
              },
              { 
                step: "03",
                title: "Live Tracking", 
                desc: "Official tracking code transmitted via secure email channel." 
              }
            ].map((step, i) => (
              <div key={i} className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-neutral-100 dark:text-white/5 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="mb-4 h-1 w-12 bg-cyan-600 dark:bg-cyan-500 rounded-full transition-all duration-300 group-hover:w-16"></div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Order Tracking */}
        <div className="mb-16 border-t border-neutral-200 dark:border-white/10 pt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-cyan-600 dark:text-cyan-500">
                <PackageSearch className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Logistics Data</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-neutral-900 dark:text-white font-stiff uppercase">
                ORDER TRACKING
              </h2>
            </div>
          </div>

          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-6 md:p-8">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem('tracking') as HTMLInputElement;
                  if (input.value.trim()) {
                    window.open(`https://www.fedex.com/fedextrack/?trknbr=${input.value.trim()}`, '_blank');
                  }
                }} 
                className="flex flex-col gap-4"
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                  Track your shipment status in real-time. All orders are shipped via FedEx International Priority.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    name="tracking"
                    type="text"
                    placeholder="Enter your 12-digit tracking code"
                    className="flex-1 rounded-sm border border-neutral-300 dark:border-white/20 bg-neutral-50 dark:bg-[#0a0a0a] px-4 py-3 text-sm font-medium text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 outline-none transition-colors focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="group/btn flex items-center justify-center gap-2 bg-cyan-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-cyan-500 rounded-sm"
                  >
                    Track Shipment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
