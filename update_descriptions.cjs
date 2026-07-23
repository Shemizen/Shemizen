const fs = require('fs');

const detailedDescriptions = {
  "Semaglutide": "A GLP-1 receptor agonist that mimics the incretin hormone to increase insulin secretion, slow gastric emptying, and promote weight loss.",
  "Tirzepatide": "A dual GIP and GLP-1 receptor agonist that significantly improves glycemic control and facilitates substantial weight reduction.",
  "Retatrutide": "A novel triple agonist peptide targeting GLP-1, GIP, and glucagon receptors, showing unprecedented efficacy in obesity and metabolic research.",
  "HGH (Human Growth Hormone)": "Recombinant Human Growth Hormone used in research for cellular regeneration, muscle growth, and metabolic regulation.",
  "BPC-157": "A synthetic pentadecapeptide derived from gastric juice, extensively studied for its powerful regenerative and healing properties in tendons, muscles, and the nervous system.",
  "TB-500": "A synthetic fraction of Thymosin Beta-4, known for upregulating actin, promoting cell migration, and accelerating tissue repair and recovery.",
  "BPC-157 + TB-500 Blend": "A synergistic blend combining the systemic healing properties of BPC-157 with the tissue repair acceleration of TB-500.",
  "SS-31": "A mitochondria-targeted peptide that protects against oxidative stress, restores mitochondrial function, and improves cellular energy production.",
  "CJC-1295 (No DAC)": "A modified GRF 1-29 peptide that stimulates the pituitary gland to release growth hormone in physiological pulsatile waves.",
  "CJC-1295 (No DAC) + Ipamorelin": "A powerful synergistic blend that maximizes natural growth hormone release without significantly elevating cortisol or prolactin levels.",
  "CJC-1295 (With DAC)": "A long-acting GHRH analog with Drug Affinity Complex (DAC) that extends its half-life, providing a sustained increase in growth hormone levels.",
  "AOD9604": "A modified fragment of Human Growth Hormone (amino acids 177-191) specifically designed to stimulate lipolysis and inhibit lipogenesis without affecting blood sugar.",
  "IGF-1LR3": "A modified version of Insulin-like Growth Factor 1 with an extended half-life, highly effective at promoting muscle hyperplasia and cellular repair.",
  "MT-1": "Melanotan 1 is a synthetic analog of alpha-MSH that stimulates melanogenesis, offering photoprotection and tanning effects with fewer side effects than MT-2.",
  "MT-2 (Melanotan 2 Acetate)": "A synthetic analog of alpha-MSH that strongly stimulates melanogenesis and increases libido, widely researched for its tanning and aphrodisiac properties.",
  "Epithalon": "A synthetic tetrapeptide that activates the telomerase enzyme, studied for its potential to extend cellular lifespan and regulate circadian rhythms.",
  "Pe-22-28": "A synthetic peptide derived from the TREK-1 channel protein, researched for its rapid-acting antidepressant and neuroprotective effects.",
  "Cartalax": "A synthetic bioregulator peptide that targets cartilage and bone tissue, studied for its potential in treating osteoarthritis and joint degeneration.",
  "GHRP-2 Acetate": "A potent, synthetic hexapeptide Growth Hormone Secretagogue that strongly stimulates the release of endogenous growth hormone.",
  "GHRP-6 Acetate": "A Growth Hormone Releasing Peptide that stimulates GH release and significantly increases appetite by mimicking ghrelin.",
  "PT-141": "Bremelanotide (PT-141) is a melanocortin receptor agonist researched for its effectiveness in treating sexual dysfunction in both men and women.",
  "Selank": "A synthetic heptapeptide analog of the endogenous peptide tuftsin, known for its profound anxiolytic, nootropic, and neuroprotective properties.",
  "Semax": "A synthetic heptapeptide analog of ACTH, extensively researched for its cognitive-enhancing, neuroprotective, and neurorestorative effects.",
  "KPV": "A naturally occurring tripeptide (Lys-Pro-Val) with potent anti-inflammatory and antimicrobial properties, particularly effective for gut and skin conditions.",
  "Tesamorelin": "A synthetic GHRH analogue approved for reducing excess abdominal fat in HIV-lipodystrophy, known for its strong lipolytic effects.",
  "Sermorelin Acetate": "A synthetic GHRH analogue consisting of the first 29 amino acids of endogenous GHRH, used to stimulate natural growth hormone production.",
  "Thymosin Alpha-1": "A naturally occurring peptide that modulates the immune system, enhancing T-cell function and fighting viral infections and immune deficiencies.",
  "Ipamorelin": "A highly selective Growth Hormone Secretagogue that stimulates GH release without significantly increasing cortisol, prolactin, or appetite.",
  "Mazdutide": "A dual GLP-1 and glucagon receptor agonist currently in development for the treatment of obesity and type 2 diabetes.",
  "Cagrilintide": "A long-acting amylin analog that promotes satiety and slows gastric emptying, often studied in combination with GLP-1 agonists for weight loss.",
  "Survodutide": "A dual agonist of the glucagon and GLP-1 receptors, showing significant promise in clinical trials for obesity and liver disease (MASH).",
  "NAD+": "Nicotinamide adenine dinucleotide, a critical coenzyme found in every cell, essential for cellular energy production, DNA repair, and longevity.",
  "GHK-Cu": "A naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine, renowned for its powerful skin remodeling, wound healing, and anti-aging properties.",
  "GLOW Blend": "A premium cosmetic and recovery blend combining BPC-157, GHK-Cu, and TB-500 for optimal tissue repair and skin rejuvenation.",
  "KLOW Blend": "An advanced blend combining BPC-157, GHK-Cu, TB-500, and KPV, offering comprehensive anti-inflammatory, healing, and cosmetic benefits.",
  "DSIP": "Delta Sleep-Inducing Peptide, a neuropeptide known to promote deep, restorative slow-wave sleep and regulate the endocrine system.",
  "Oxytocin Acetate": "A neuropeptide hormone that plays a crucial role in social bonding, sexual reproduction, and stress reduction.",
  "Hexarelin Acetate": "One of the most potent synthetic Growth Hormone Secretagogues, known to cause a massive pulse of GH release and promote cardiovascular health.",
  "Adipotide": "An experimental proapoptotic peptidomimetic that targets and destroys the blood vessels supplying white adipose tissue, leading to rapid weight loss.",
  "PEG-MGF": "Pegylated Mechano Growth Factor, a splice variant of IGF-1 that promotes muscle stem cell proliferation and localized muscle growth.",
  "HCG": "Human Chorionic Gonadotropin, a hormone used in research to stimulate testosterone production and prevent testicular atrophy.",
  "B12": "Vitamin B12 (Cyanocobalamin/Methylcobalamin), essential for nerve tissue health, brain function, and the production of red blood cells.",
  "SLU-PP-332": "An estrogen-related receptor (ERR) agonist that mimics the metabolic benefits of exercise, increasing endurance and fat oxidation.",
  "VIP": "Vasoactive Intestinal Peptide, a neuropeptide that functions as a neuromodulator and vasodilator, with potent systemic anti-inflammatory effects.",
  "MOTS-C": "A mitochondrial-derived peptide that regulates metabolic homeostasis, improves insulin sensitivity, and promotes exercise capacity."
};

let content = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const startIndex = content.indexOf('const products: Product[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;
const productsStr = content.substring(startIndex + 'const products: Product[] = '.length, endIndex - 1);
const products = eval(productsStr);

products.forEach(p => {
  if (detailedDescriptions[p.name]) {
    p.desc = detailedDescriptions[p.name];
  }
});

content = content.substring(0, startIndex) + 'const products: Product[] = ' + JSON.stringify(products, null, 2) + ';' + content.substring(endIndex);
fs.writeFileSync('src/components/CatalogSection.tsx', content, 'utf8');
console.log('Updated CatalogSection.tsx with detailed descriptions');
