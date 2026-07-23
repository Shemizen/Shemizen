import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ShieldAlert, Zap, Bitcoin, Microscope, Truck, Snowflake, ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: '01',
    icon: ShieldAlert,
    label: 'SAFETY & LEGAL',
    question: 'Are your products suitable for human consumption?',
    answer: 'Absolutely not. All products listed on ShenzenLabs are strictly for in-vitro laboratory research purposes only. They are not intended for human or animal use, diagnosis, or treatment. Any inquiries regarding human use will result in the immediate and permanent refusal of service and cancellation of current orders.'
  },
  {
    id: '02',
    icon: Zap,
    label: 'PRICING & LOGISTICS',
    question: 'Wholesale Pricing & Minimum Order Quantities',
    answer: 'We partner directly with specialized laboratories worldwide to provide factory-direct compounds. By bypassing standard retail markups and selling in bulk (minimum 10 vials), we eliminate middleman costs, passing true wholesale pricing directly to the research community.'
  },
  {
    id: '03',
    icon: Bitcoin,
    label: 'PAYMENT',
    question: 'What payment methods do you accept?',
    answer: 'To ensure maximum privacy and security for our clients, we exclusively accept Bitcoin (BTC). This decentralized protocol allows for borderless, instant settlement without the need for traditional banking intermediaries. We do not accept credit cards or PayPal.'
  },
  {
    id: '04',
    icon: Microscope,
    label: 'QUALITY',
    question: 'What is the purity of your peptides?',
    answer: 'Our peptides typically achieve ≥99.0% purity as verified by third-party HPLC and Mass Spectrometry testing. We utilize Janoshik Analytics for unbiased verification, and batch-specific chromatograms are available upon request to verified researchers.'
  },
  {
    id: '05',
    icon: Truck,
    label: 'SHIPPING',
    question: 'Do you ship internationally?',
    answer: 'Yes, we provide worldwide logistics via expedited courier services. However, the importing researcher is solely responsible for understanding and complying with their local regulations regarding the acquisition of research compounds.'
  },
  {
    id: '06',
    icon: Snowflake,
    label: 'STORAGE',
    question: 'How should I store the peptides?',
    answer: 'For long-term stability, lyophilized (powder) peptides should be stored at -20°C. Once reconstituted with Bacteriostatic Water, they should be kept refrigerated at 4°C and utilized within a specific window (typically 2-4 weeks) for optimal experimental results.'
  }
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | undefined>('01');

  return (
    <section id="faq" className="scroll-mt-28 bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-6 text-4xl sm:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Common inquiries regarding research protocols, logistics, and compliance.
          </p>
        </div>

        <div className="mx-auto max-w-3xl w-full">
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-4"
          >
            {faqs.map((faq) => {
              const isOpen = openItem === faq.id;
              return (
                <Accordion.Item
                  key={faq.id}
                  value={faq.id}
                  className={`overflow-hidden border transition-colors focus-within:outline-none ${isOpen ? 'border-cyan-500/50 bg-white dark:bg-black/80' : 'border-neutral-200 dark:border-white/10 bg-white dark:bg-black/60 hover:border-neutral-300 dark:hover:border-white/20'}`}
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex w-full items-center justify-between p-4 md:p-6 text-left gap-4 focus:outline-none">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className={`flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full transition-colors shrink-0 ${isOpen ? 'bg-cyan-500 text-white dark:text-black' : 'bg-neutral-100 dark:bg-black/80 text-neutral-500 dark:text-neutral-300'}`}>
                          <faq.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                            {faq.label}
                          </div>
                          <h3 className={`text-lg font-bold transition-colors break-words ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-500'}`} />
                      </motion.div>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Accordion.Content asChild forceMount>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="border-t border-neutral-200 dark:border-white/10 px-4 pb-6 pt-4 md:px-6">
                            <div className="md:ml-14">
                              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 break-words">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
