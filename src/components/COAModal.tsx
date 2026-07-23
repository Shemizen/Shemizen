import { motion, AnimatePresence } from 'motion/react';
import { X, Activity, CheckCircle, FileText } from 'lucide-react';

interface COAData {
  cas: string;
  purity: string;
  batch: string;
  summary: string;
}

const coaDataMap: Record<string, COAData> = {
  "BAC Water": {
    "cas": "7732-18-5, 100-51-6",
    "purity": "99.9%",
    "batch": "SZ-BAC-01",
    "summary": "Bacteriostatic Water for Injection. Sterile water containing 0.9% benzyl alcohol as a bacteriostatic preservative. Used for diluting or dissolving medications for injection."
  },
  "Semaglutide": {
    "cas": "910463-68-2",
    "purity": ">99.0%",
    "batch": "SZ-SEM-08",
    "summary": "A selective GLP-1 receptor agonist. Primarily studied for its role in enhancing glucose-dependent insulin secretion, suppressing glucagon release, and regulating appetite centers in the hypothalamus."
  },
  "Tirzepatide": {
    "cas": "2023788-19-2",
    "purity": ">99.0%",
    "batch": "SZ-TIR-02",
    "summary": "A dual GIP and GLP-1 receptor agonist. Demonstrates potent efficacy in glycemic control and weight management by modulating insulin secretion and delaying gastric emptying in metabolic research."
  },
  "Retatrutide": {
    "cas": "2381089-83-2",
    "purity": ">99.0%",
    "batch": "SZ-RET-05",
    "summary": "A triple hormone receptor agonist targeting GLP-1, GIP, and GCGR. Investigated for its synergistic effects on metabolic regulation, energy expenditure, and significant adiposity reduction in clinical models."
  },
  "HGH": {
    "cas": "12629-01-5",
    "purity": ">99.0%",
    "batch": "SZ-HGH-03",
    "summary": "Recombinant human growth hormone. Essential for stimulating cellular growth, reproduction, and regeneration. Investigated for its systemic effects on protein synthesis, lipolysis, and bone mineral density."
  },
  "BPC 157": {
    "cas": "137525-51-0",
    "purity": ">99.0%",
    "batch": "SZ-BPC-02",
    "summary": "A synthetic pentadecapeptide derived from human gastric juice. Exhibits significant cytoprotective and pleiotropic angiogenic properties, accelerating tissue repair in musculoskeletal and gastrointestinal injury models."
  },
  "TB500": {
    "cas": "77591-33-4",
    "purity": ">99.0%",
    "batch": "SZ-TB5-06",
    "summary": "A synthetic fraction of Thymosin Beta-4. Functions as an actin-sequestering peptide, promoting cellular migration, angiogenesis, and tissue regeneration in experimental models of injury and ischemia."
  },
  "BPC-157 + TB-500 Blend": {
    "cas": "Blend",
    "purity": ">99.0%",
    "batch": "SZ-BPC-06",
    "summary": "Synergistic peptide formulation combining cytoprotective angiogenesis (BPC 157) with actin-sequestering cellular migration (TB500). Investigated for accelerated, comprehensive tissue repair and systemic regenerative efficacy."
  },
  "SS-31": {
    "cas": "736992-21-5",
    "purity": ">99.0%",
    "batch": "SZ-SS3-01",
    "summary": "A mitochondria-targeted tetrapeptide (Elamipretide). Selectively binds to cardiolipin, stabilizing inner mitochondrial membranes, optimizing electron transport, and mitigating reactive oxygen species production in ischemic models."
  },
  "CJC-1295 (No DAC)": {
    "cas": "863288-34-0",
    "purity": ">99.0%",
    "batch": "SZ-CJC-10",
    "summary": "A synthetic growth hormone-releasing hormone (GHRH) analog. Stimulates pituitary release of growth hormone and IGF-1 without altering natural pulsatile secretion patterns in neuroendocrine research."
  },
  "CJC-1295 (No DAC) + Ipamorelin": {
    "cas": "Blend",
    "purity": ">99.0%",
    "batch": "SZ-CJC-08",
    "summary": "Synergistic combination of a GHRH analog and a selective GHSR agonist. Investigated for amplified, pulsatile growth hormone secretion while minimizing cortisol and prolactin elevation."
  },
  "CJC-1295 (With DAC)": {
    "cas": "863288-34-0",
    "purity": ">99.0%",
    "batch": "SZ-CJC-08",
    "summary": "A long-acting GHRH analog conjugated with a Drug Affinity Complex. Binds to endogenous albumin, significantly extending half-life and providing sustained growth hormone elevation in experimental models."
  },
  "AOD9604": {
    "cas": "221231-10-3",
    "purity": ">99.0%",
    "batch": "SZ-AOD-01",
    "summary": "A modified C-terminal fragment of human growth hormone (hGH 177-191). Demonstrates potent lipolytic and anti-lipogenic activity without inducing hyperglycemia or altering systemic IGF-1 levels."
  },
  "IGF-1LR3": {
    "cas": "946870-92-4",
    "purity": ">99.0%",
    "batch": "SZ-IGF-10",
    "summary": "An extended analog of Insulin-like Growth Factor-1 with an arginine substitution. Exhibits significantly reduced affinity for IGF-binding proteins, resulting in amplified and prolonged cellular hypertrophy and hyperplasia."
  },
  "MT-1": {
    "cas": "75921-69-6",
    "purity": ">99.0%",
    "batch": "SZ-MT1-10",
    "summary": "A synthetic alpha-melanocyte-stimulating hormone (α-MSH) analog. Acts as a non-selective melanocortin receptor agonist, primarily investigated for its role in melanogenesis and photoprotection."
  },
  "MT-2": {
    "cas": "121062-08-6",
    "purity": ">99.0%",
    "batch": "SZ-MT2-08",
    "summary": "A potent, synthetic α-MSH analog. Exhibits broad melanocortin receptor agonism, studied for its robust effects on melanogenesis, libido enhancement, and metabolic regulation in clinical models."
  },
  "Epithalon": {
    "cas": "307297-39-8",
    "purity": ">99.0%",
    "batch": "SZ-EPI-05",
    "summary": "A synthetic tetrapeptide telomerase activator. Investigated for its capacity to elongate telomeres, regulate pineal gland function, and modulate circadian rhythms in longevity and anti-aging research."
  },
  "PE-22-28": {
    "cas": "N/A",
    "purity": ">99.0%",
    "batch": "SZ-PE2-04",
    "summary": "A synthetic derivative of the naturally occurring peptide Spadin. Functions as a TREK-1 potassium channel antagonist, demonstrating significant neurogenic and rapid-acting antidepressant-like properties in preclinical models."
  },
  "Cartalax": {
    "cas": "N/A",
    "purity": ">99.0%",
    "batch": "SZ-CAR-03",
    "summary": "A synthetic bioregulator peptide. Investigated for its targeted effects on chondrocyte proliferation and extracellular matrix synthesis, promoting cartilage regeneration and joint homeostasis in osteoarticular research."
  },
  "GHRP-2 Acetate": {
    "cas": "158861-67-7",
    "purity": ">99.0%",
    "batch": "SZ-GHR-03",
    "summary": "A potent, synthetic hexapeptide growth hormone secretagogue. Acts via the ghrelin receptor to stimulate robust, dose-dependent growth hormone release, with mild effects on prolactin and cortisol."
  },
  "GHRP-6 Acetate": {
    "cas": "87616-84-0",
    "purity": ">99.0%",
    "batch": "SZ-GHR-10",
    "summary": "A first-generation growth hormone-releasing hexapeptide. Stimulates pituitary GH secretion and exhibits strong orexigenic (appetite-stimulating) effects via ghrelin receptor agonism in neuroendocrine studies."
  },
  "PT-141": {
    "cas": "189691-06-3",
    "purity": ">99.0%",
    "batch": "SZ-PT1-03",
    "summary": "Bremelanotide, a synthetic cyclic heptapeptide α-MSH analog. Acts centrally as a melanocortin receptor agonist (MC3R/MC4R), investigated for its efficacy in modulating sexual arousal and dysfunction."
  },
  "Selank": {
    "cas": "129954-34-3",
    "purity": ">99.0%",
    "batch": "SZ-SEL-02",
    "summary": "A synthetic heptapeptide analog of the endogenous immunomodulatory peptide tuftsin. Exhibits pronounced anxiolytic, nootropic, and neuroprotective properties by modulating monoamine neurotransmission and BDNF expression."
  },
  "Semax": {
    "cas": "80714-61-0",
    "purity": ">99.0%",
    "batch": "SZ-SEM-06",
    "summary": "A synthetic peptide derived from ACTH (4-10). Investigated for its robust neuroprotective and cognitive-enhancing effects, modulating BDNF/NGF expression and improving resilience to hypoxic stress."
  },
  "KPV": {
    "cas": "17750-73-1",
    "purity": ">99.0%",
    "batch": "SZ-KPV-06",
    "summary": "A naturally occurring tripeptide (Lys-Pro-Val) derived from α-MSH. Demonstrates potent systemic and localized anti-inflammatory, antimicrobial, and cytoprotective properties in gastrointestinal and dermatological research."
  },
  "Tesamorelin": {
    "cas": "218949-48-5",
    "purity": ">99.0%",
    "batch": "SZ-TES-03",
    "summary": "A synthetic, N-terminally modified GHRH analog. Clinically investigated for its efficacy in reducing visceral adipose tissue and improving lipid profiles by stimulating endogenous growth hormone secretion."
  },
  "Sermorelin Acetate": {
    "cas": "86168-78-7",
    "purity": ">99.0%",
    "batch": "SZ-SER-07",
    "summary": "A synthetic 29-amino acid peptide representing the functional fragment of endogenous GHRH. Stimulates physiological, pulsatile growth hormone release from the pituitary in neuroendocrine evaluations."
  },
  "Thymosin Alpha-1": {
    "cas": "62304-98-7",
    "purity": ">99.0%",
    "batch": "SZ-THY-09",
    "summary": "A highly conserved endogenous peptide. Functions as a potent pleiotropic immunomodulator, enhancing T-cell maturation, dendritic cell function, and optimizing innate and adaptive immune responses."
  },
  "Ipamorelin": {
    "cas": "170851-70-4",
    "purity": ">99.0%",
    "batch": "SZ-IPA-08",
    "summary": "A highly selective, synthetic pentapeptide growth hormone secretagogue. Stimulates robust GH release via the ghrelin receptor without significantly elevating cortisol, prolactin, or appetite."
  },
  "Mazdutide": {
    "cas": "2089263-65-2",
    "purity": ">99.0%",
    "batch": "SZ-MAZ-07",
    "summary": "A dual GLP-1 and glucagon receptor agonist. Investigated for its potent effects on weight management and glycemic control, leveraging synergistic metabolic pathways in clinical research."
  },
  "Cagrilintide": {
    "cas": "1415456-99-3",
    "purity": ">99.0%",
    "batch": "SZ-CAG-09",
    "summary": "A long-acting amylin analog. Investigated for its role in regulating satiety, delaying gastric emptying, and promoting significant weight loss, often in combination with GLP-1 receptor agonists."
  },
  "Survodutide": {
    "cas": "2805997-46-8",
    "purity": ">99.0%",
    "batch": "SZ-SUR-06",
    "summary": "A dual glucagon and GLP-1 receptor agonist. Investigated for its synergistic efficacy in maximizing energy expenditure, reducing hepatic steatosis, and driving significant weight loss in metabolic models."
  },
  "NAD+": {
    "cas": "53-84-9",
    "purity": ">99.0%",
    "batch": "SZ-NAD-09",
    "summary": "Nicotinamide adenine dinucleotide. A critical coenzyme mediating cellular redox reactions and serving as a substrate for sirtuins and PARPs. Essential for mitochondrial bioenergetics and genomic stability."
  },
  "GHK-CU": {
    "cas": "49557-75-7",
    "purity": ">99.0%",
    "batch": "SZ-GHK-07",
    "summary": "A naturally occurring copper-complexed tripeptide. Exhibits broad-spectrum regenerative properties, stimulating collagen synthesis, modulating inflammation, and promoting angiogenesis in dermal and systemic tissue repair models."
  },
  "GLOW Blend": {
    "cas": "Blend",
    "purity": ">99.0%",
    "batch": "SZ-GLO-04",
    "summary": "A proprietary peptide formulation designed for dermatological and systemic rejuvenation. Investigated for synergistic effects on extracellular matrix synthesis, cellular turnover, and oxidative stress mitigation."
  },
  "KLOW Blend": {
    "cas": "Blend",
    "purity": ">99.0%",
    "batch": "SZ-KLO-03",
    "summary": "A proprietary peptide formulation designed for dermatological and systemic rejuvenation. Investigated for synergistic effects on extracellular matrix synthesis, cellular turnover, and oxidative stress mitigation."
  },
  "DSIP": {
    "cas": "62568-57-4",
    "purity": ">99.0%",
    "batch": "SZ-DSI-04",
    "summary": "Delta Sleep-Inducing Peptide. A naturally occurring neuromodulator investigated for its capacity to promote slow-wave sleep, modulate stress responses, and exhibit neuroprotective properties in physiological models."
  },
  "Oxytocin Acetate": {
    "cas": "50-56-6",
    "purity": ">99.0%",
    "batch": "SZ-OXY-07",
    "summary": "A synthetic analog of the endogenous mammalian neuropeptide. Investigated for its central role in social bonding, anxiolysis, and modulation of neuroendocrine stress responses."
  },
  "Hexarelin Acetate": {
    "cas": "140703-51-1",
    "purity": ">99.0%",
    "batch": "SZ-HEX-07",
    "summary": "A synthetic hexapeptide growth hormone secretagogue. Exhibits potent GH-releasing activity and cardioprotective properties, investigated for its role in mitigating ischemic injury and preserving cardiac function."
  },
  "Adipotide": {
    "cas": "1315378-74-5",
    "purity": ">99.0%",
    "batch": "SZ-ADI-09",
    "summary": "A synthetic peptidomimetic targeted to specific vascular markers in white adipose tissue. Investigated for its capacity to induce targeted apoptosis in adipocyte vasculature, promoting rapid weight loss."
  },
  "PEG-MGF": {
    "cas": "N/A",
    "purity": ">99.0%",
    "batch": "SZ-PEG-05",
    "summary": "Pegylated Mechano Growth Factor. An IGF-1 splice variant modified with polyethylene glycol to extend half-life. Investigated for its potent localized effects on muscle hypertrophy and satellite cell activation."
  },
  "HCG": {
    "cas": "9002-61-3",
    "purity": ">99.0%",
    "batch": "SZ-HCG-06",
    "summary": "Human Chorionic Gonadotropin. A glycoprotein hormone investigated for its role in stimulating Leydig cell testosterone production and supporting gonadal function in neuroendocrine and reproductive research."
  },
  "B12": {
    "cas": "68-19-9",
    "purity": ">99.0%",
    "batch": "SZ-B12-05",
    "summary": "Cyanocobalamin. A synthetic form of Vitamin B12. Essential for DNA synthesis, cellular energy metabolism, and neurological function. Investigated for its role in mitigating neurodegenerative processes."
  },
  "SLU-PP-332": {
    "cas": "N/A",
    "purity": ">99.0%",
    "batch": "SZ-SLU-01",
    "summary": "An estrogen-related receptor (ERR) agonist. Investigated as an exercise mimetic, demonstrating capacity to enhance skeletal muscle oxidative capacity and endurance without physical exertion in preclinical models."
  },
  "VIP": {
    "cas": "40077-57-4",
    "purity": ">99.0%",
    "batch": "SZ-VIP-02",
    "summary": "Vasoactive Intestinal Peptide. A widespread endogenous neuropeptide. Investigated for its potent systemic vasodilatory, bronchodilatory, and immunomodulatory properties, particularly in regulating innate immune responses."
  },
  "MOTS-C": {
    "cas": "1627580-64-6",
    "purity": ">99.0%",
    "batch": "SZ-MOT-07",
    "summary": "A mitochondrial-derived peptide. Investigated for its role in regulating metabolic homeostasis, enhancing insulin sensitivity, and promoting exercise-like adaptations in skeletal muscle via AMPK activation."
  }
};

interface COAModalProps {
  productName: string | null;
  onClose: () => void;
}

export default function COAModal({ productName, onClose }: COAModalProps) {
  // Only render if we have a product name and data for it
  // However, AnimatePresence handles the unmounting animation, so we should render the structure 
  // but the content depends on data. If no data, we might not want to show it or show a fallback.
  // But the trigger should only happen for valid products.
  
  const data = productName ? coaDataMap[productName] : null;

  return (
    <AnimatePresence>
      {productName && data && (
        <motion.div 
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[95%] max-w-4xl max-h-[85dvh] overflow-y-auto bg-white dark:bg-black shadow-2xl md:w-full rounded-lg"
          >
            {/* Header: ANALYTICAL VALIDATION (Cyan Bar) */}
            <div className="sticky top-0 z-20 flex items-center justify-between bg-cyan-600 px-4 py-3 md:px-8 md:py-4 text-white">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5" />
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest">Analytical Validation</h2>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Body Left */}
              <div className="flex flex-col justify-between bg-neutral-50 dark:bg-black p-6 md:p-10 md:w-1/3 transition-colors duration-300">
                <div>
                  <h3 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{productName}</h3>
                  <div className="mb-6 md:mb-8 space-y-1">
                    <p className="font-mono text-xs text-neutral-500 dark:text-neutral-300">CAS: {data.cas}</p>
                    <p className="font-mono text-xs text-neutral-500 dark:text-neutral-300">BATCH: {data.batch}</p>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-300">Purity Index</div>
                    <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">{data.purity}</div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-300 mb-2">Clinical Research Summary</div>
                    <p className="font-mono text-[10px] leading-relaxed text-justify text-neutral-600 dark:text-neutral-300">
                      {data.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  Pass: QC-Level 3
                </div>
              </div>

              {/* Body Right: Placeholder for HPLC Chromatogram Graph */}
              <div className="relative flex min-h-[200px] flex-1 items-center justify-center bg-white dark:bg-[#0C090A] p-6 md:p-10 md:min-h-0 transition-colors duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="relative z-10 w-full">
                  {/* Simulated Graph Line */}
                  <svg viewBox="0 0 400 200" className="w-full drop-shadow-lg">
                    <path
                      d="M0,200 L50,190 L80,195 L100,100 L110,20 L120,100 L150,190 L200,195 L250,190 L300,195 L400,200"
                      fill="none"
                      stroke="#0891b2"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M0,200 L50,190 L80,195 L100,100 L110,20 L120,100 L150,190 L200,195 L250,190 L300,195 L400,200 L400,200 L0,200 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0891b2" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="mt-4 text-center font-mono text-[10px] text-neutral-400 dark:text-neutral-400">
                    HPLC CHROMATOGRAM VISUALIZATION
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black px-4 sm:px-8 py-4 transition-colors duration-300">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <FileText className="h-4 w-4 text-neutral-400 dark:text-neutral-300 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-300">
                  Verified by Janoshik Analytics Node-CN-09
                </span>
              </div>
              <div className="font-mono text-[10px] text-neutral-300 dark:text-neutral-400">
                ID: {data.batch.replace('SZ-', '')}-{Math.floor(Math.random() * 1000)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
