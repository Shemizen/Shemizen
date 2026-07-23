import { motion } from 'motion/react';
import { ShieldCheck, Truck, Scale, HeadphonesIcon, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'referral' | 'privacy' | 'terms') => void;
  onCopyEmail?: () => void;
}

export default function About({ onNavigate, onCopyEmail }: AboutProps) {
  const values = [
    {
      icon: ShieldCheck,
      title: "Rigorous Purity Standards",
      desc: "Every compound within the ShenzenLabs catalog is synthesized to meet exacting laboratory benchmarks. Our commitment to molecular integrity ensures that researchers receive consistent, high-fidelity materials for specialized in-vitro applications.",
    },
    {
      icon: Truck,
      title: "Secure Logistics & Chain of Custody",
      desc: "We implement advanced global logistics to ensure safe transit from our facility to your laboratory. By utilizing encrypted communication and Bitcoin-based transactions, we safeguard the financial and operational privacy of our institutional partners.",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance & Ethics",
      desc: "ShenzenLabs operates with a strict 'Research-Use Only' mandate. We provide the legal and technical framework necessary to ensure all materials are handled according to international laboratory standards and age-restricted protocols.",
      action: "Legal Compliance",
      onClick: () => onNavigate?.('terms')
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Technical Support",
      desc: "Access our dedicated compliance and support desk securely via ProtonMail. Our team provides the documentation and logistical transparency required for high-level research initiatives.",
      action: "Inquiry",
      onClick: onCopyEmail
    }
  ];

  return (
    <section id="about" className="bg-transparent py-16 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500 mb-4">
            ARCHITECTING PRECISION
          </h2>
          <p className="text-4xl md:text-5xl font-bold tracking-wide font-stiff text-neutral-900 dark:text-white uppercase">
            ShenzenLabs Institutional Research Framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 p-8 rounded-2xl transition-all hover:border-cyan-500/30 hover:shadow-lg dark:hover:bg-white/10 dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)] !overflow-visible"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-black/80 text-cyan-600 dark:text-cyan-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {item.desc}
                </p>
              </div>

              {item.action && (
                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/10">
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 transition-colors hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    {item.action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
