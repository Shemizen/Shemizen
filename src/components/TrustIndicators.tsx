import { ShieldCheck, Truck, Package, Activity } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Activity,
      title: "High Purity Standard",
      desc: "≥99% purity floor on all compounds."
    },
    {
      icon: ShieldCheck,
      title: "Lab Verification",
      desc: "Every batch 3rd-party HPLC tested."
    },
    {
      icon: Truck,
      title: "Secure Logistics",
      desc: "Discreet, tracked global shipping."
    },
    {
      icon: Package,
      title: "Factory-Sealed Kits",
      desc: "10-vial kits for sterile integrity."
    }
  ];

  return (
    <section className="border-b border-neutral-200 dark:border-white/10 bg-transparent py-12 md:py-16 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid gap-4 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2 sm:gap-3">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-black/80 text-cyan-600 dark:text-cyan-400">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
