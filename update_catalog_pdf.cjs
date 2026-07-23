const fs = require('fs');

const products = [
  {
    name: "Semaglutide",
    category: "METABOLIC SERIES",
    cas: "910463-68-2",
    desc: "GLP-1 receptor agonist.",
    variants: [
      { dosage: "5mg", price: 115.00, isKit: true },
      { dosage: "10mg", price: 132.50, isKit: true },
      { dosage: "15mg", price: 170.00, isKit: true },
      { dosage: "20mg", price: 217.50, isKit: true },
      { dosage: "30mg", price: 290.00, isKit: true },
    ]
  },
  {
    name: "Tirzepatide",
    category: "METABOLIC SERIES",
    cas: "2023788-19-2",
    desc: "Dual GIP/GLP-1 receptor agonist.",
    variants: [
      { dosage: "5mg", price: 100.00, isKit: true },
      { dosage: "10mg", price: 150.00, isKit: true },
      { dosage: "15mg", price: 200.00, isKit: true },
      { dosage: "20mg", price: 250.00, isKit: true },
      { dosage: "30mg", price: 325.00, isKit: true },
      { dosage: "40mg", price: 400.00, isKit: true },
      { dosage: "50mg", price: 475.00, isKit: true },
      { dosage: "60mg", price: 550.00, isKit: true },
    ]
  },
  {
    name: "Retatrutide",
    category: "METABOLIC SERIES",
    cas: "2381089-83-2",
    desc: "Triple agonist peptide (GLP-1/GIP/GCGR).",
    variants: [
      { dosage: "5mg", price: 200.00, isKit: true },
      { dosage: "10mg", price: 300.00, isKit: true },
      { dosage: "15mg", price: 375.00, isKit: true },
      { dosage: "20mg", price: 450.00, isKit: true },
      { dosage: "30mg", price: 550.00, isKit: true },
      { dosage: "50mg", price: 750.00, isKit: true },
      { dosage: "60mg", price: 850.00, isKit: true },
    ]
  },
  {
    name: "HGH (Human Growth Hormone)",
    category: "GROWTH HORMONE SERIES",
    cas: "12629-01-5",
    desc: "Recombinant Human Growth Hormone.",
    variants: [
      { dosage: "10iu", price: 150.00, isKit: true },
      { dosage: "12iu", price: 175.00, isKit: true },
      { dosage: "15iu", price: 200.00, isKit: true },
      { dosage: "24iu", price: 300.00, isKit: true },
    ]
  },
  {
    name: "BPC-157",
    category: "RECOVERY SERIES",
    cas: "137525-51-0",
    desc: "Pentadecapeptide gastric juice derivative.",
    variants: [
      { dosage: "5mg", price: 125.00, isKit: true },
      { dosage: "10mg", price: 175.00, isKit: true },
      { dosage: "20mg", price: 275.00, isKit: true },
    ]
  },
  {
    name: "TB-500",
    category: "RECOVERY SERIES",
    cas: "77591-33-4",
    desc: "Synthetic fraction of Thymosin Beta-4.",
    variants: [
      { dosage: "5mg", price: 175.00, isKit: true },
      { dosage: "10mg", price: 300.00, isKit: true },
    ]
  },
  {
    name: "BPC-157 + TB-500 Blend",
    category: "RECOVERY SERIES",
    cas: "Blend",
    desc: "BPC-157 + TB-500.",
    variants: [
      { dosage: "10mg (5mg+5mg)", price: 250.00, isKit: true },
      { dosage: "20mg (10mg+10mg)", price: 475.00, isKit: true },
    ]
  },
  {
    name: "SS-31",
    category: "MITOCHONDRIAL SERIES",
    cas: "736992-21-5",
    desc: "Mitochondrial targeted peptide.",
    variants: [
      { dosage: "10mg", price: 242.50, isKit: true },
      { dosage: "50mg", price: 1042.50, isKit: true },
    ]
  },
  {
    name: "CJC-1295 (No DAC)",
    category: "GROWTH HORMONE SERIES",
    cas: "863288-34-0",
    desc: "Modified GRF 1-29.",
    variants: [
      { dosage: "2mg", price: 105.00, isKit: true },
      { dosage: "5mg", price: 207.50, isKit: true },
      { dosage: "10mg", price: 417.50, isKit: true },
    ]
  },
  {
    name: "CJC-1295 (No DAC) + Ipamorelin",
    category: "GROWTH HORMONE SERIES",
    cas: "Blend",
    desc: "CJC-1295 (No DAC) 5mg + Ipamorelin 5mg.",
    variants: [
      { dosage: "10mg Blend", price: 287.50, isKit: true },
    ]
  },
  {
    name: "CJC-1295 (With DAC)",
    category: "GROWTH HORMONE SERIES",
    cas: "863288-34-0",
    desc: "Long-acting GHRH analog.",
    variants: [
      { dosage: "2mg", price: 195.00, isKit: true },
      { dosage: "5mg", price: 417.50, isKit: true },
    ]
  },
  {
    name: "AOD9604",
    category: "METABOLIC SERIES",
    cas: "221231-10-3",
    desc: "Anti-Obesity Drug, modified GH fragment.",
    variants: [
      { dosage: "5mg", price: 225.00, isKit: true },
      { dosage: "10mg", price: 402.50, isKit: true },
    ]
  },
  {
    name: "IGF-1LR3",
    category: "GROWTH HORMONE SERIES",
    cas: "946870-92-4",
    desc: "Insulin-like Growth Factor 1 Long R3.",
    variants: [
      { dosage: "0.1mg", price: 105.00, isKit: true },
      { dosage: "1mg", price: 555.00, isKit: true },
    ]
  },
  {
    name: "MT-1",
    category: "COSMETIC SERIES",
    cas: "75921-69-6",
    desc: "Melanotan 1.",
    variants: [
      { dosage: "10mg", price: 120.00, isKit: true },
    ]
  },
  {
    name: "MT-2 (Melanotan 2 Acetate)",
    category: "COSMETIC SERIES",
    cas: "121062-08-6",
    desc: "Melanotan 2 Acetate.",
    variants: [
      { dosage: "10mg", price: 120.00, isKit: true },
    ]
  },
  {
    name: "Epithalon",
    category: "LONGEVITY SERIES",
    cas: "307297-39-8",
    desc: "Telomerase activator.",
    variants: [
      { dosage: "5mg", price: 97.50, isKit: true },
      { dosage: "10mg", price: 150.00, isKit: true },
      { dosage: "50mg", price: 417.50, isKit: true },
    ]
  },
  {
    name: "Pe-22-28",
    category: "COGNITIVE SERIES",
    cas: "N/A",
    desc: "Antidepressant peptide.",
    variants: [
      { dosage: "8mg", price: 175.00, isKit: true },
    ]
  },
  {
    name: "Cartalax",
    category: "RECOVERY SERIES",
    cas: "N/A",
    desc: "Cartilage peptide.",
    variants: [
      { dosage: "20mg", price: 275.00, isKit: true },
    ]
  },
  {
    name: "GHRP-2 Acetate",
    category: "GROWTH HORMONE SERIES",
    cas: "158861-67-7",
    desc: "Growth Hormone Releasing Peptide 2.",
    variants: [
      { dosage: "5mg", price: 72.50, isKit: true },
      { dosage: "10mg", price: 125.00, isKit: true },
    ]
  },
  {
    name: "GHRP-6 Acetate",
    category: "GROWTH HORMONE SERIES",
    cas: "87616-84-0",
    desc: "Growth Hormone Releasing Peptide 6.",
    variants: [
      { dosage: "5mg", price: 72.50, isKit: true },
      { dosage: "10mg", price: 125.00, isKit: true },
    ]
  },
  {
    name: "PT-141",
    category: "RESEARCH SUPPLIES",
    cas: "189691-06-3",
    desc: "Melanocortin receptor agonist.",
    variants: [
      { dosage: "10mg", price: 165.00, isKit: true },
    ]
  },
  {
    name: "Selank",
    category: "COGNITIVE SERIES",
    cas: "129954-34-3",
    desc: "Heptapeptide, Tuftsin analogue.",
    variants: [
      { dosage: "5mg", price: 125.00, isKit: true },
      { dosage: "10mg", price: 207.50, isKit: true },
    ]
  },
  {
    name: "Semax",
    category: "COGNITIVE SERIES",
    cas: "80714-61-0",
    desc: "Heptapeptide, ACTH analogue.",
    variants: [
      { dosage: "5mg", price: 125.00, isKit: true },
      { dosage: "10mg", price: 207.50, isKit: true },
    ]
  },
  {
    name: "KPV",
    category: "INFLAMMATION SERIES",
    cas: "17750-73-1",
    desc: "Alpha-MSH fragment.",
    variants: [
      { dosage: "10mg", price: 187.50, isKit: true },
    ]
  },
  {
    name: "Tesamorelin",
    category: "GROWTH HORMONE SERIES",
    cas: "218949-48-5",
    desc: "GHRH analogue.",
    variants: [
      { dosage: "5mg", price: 237.50, isKit: true },
      { dosage: "10mg", price: 400.00, isKit: true },
    ]
  },
  {
    name: "Sermorelin Acetate",
    category: "GROWTH HORMONE SERIES",
    cas: "86168-78-7",
    desc: "GHRH analogue.",
    variants: [
      { dosage: "5mg", price: 195.00, isKit: true },
      { dosage: "10mg", price: 417.50, isKit: true },
    ]
  },
  {
    name: "Thymosin Alpha-1",
    category: "RECOVERY SERIES",
    cas: "62304-98-7",
    desc: "Immune modulating peptide.",
    variants: [
      { dosage: "5mg", price: 200.00, isKit: true },
      { dosage: "10mg", price: 375.00, isKit: true },
    ]
  },
  {
    name: "Ipamorelin",
    category: "GROWTH HORMONE SERIES",
    cas: "170851-70-4",
    desc: "Selective GH Secretagogue.",
    variants: [
      { dosage: "5mg", price: 105.00, isKit: true },
      { dosage: "10mg", price: 195.00, isKit: true },
    ]
  },
  {
    name: "Mazdutide",
    category: "METABOLIC SERIES",
    cas: "2089263-65-2",
    desc: "GLP-1/GCGR dual agonist.",
    variants: [
      { dosage: "5mg", price: 337.50, isKit: true },
      { dosage: "10mg", price: 595.00, isKit: true },
    ]
  },
  {
    name: "Cagrilintide",
    category: "METABOLIC SERIES",
    cas: "1415456-99-3",
    desc: "Long-acting amylin analog.",
    variants: [
      { dosage: "5mg", price: 250.00, isKit: true },
      { dosage: "10mg", price: 450.00, isKit: true },
    ]
  },
  {
    name: "Survodutide",
    category: "METABOLIC SERIES",
    cas: "2805997-46-8",
    desc: "Glucagon/GLP-1 receptor dual agonist.",
    variants: [
      { dosage: "5mg", price: 375.00, isKit: true },
      { dosage: "10mg", price: 650.00, isKit: true },
    ]
  },
  {
    name: "NAD+",
    category: "LONGEVITY SERIES",
    cas: "53-84-9",
    desc: "Nicotinamide adenine dinucleotide.",
    variants: [
      { dosage: "100mg", price: 100.00, isKit: true },
      { dosage: "500mg", price: 200.00, isKit: true },
      { dosage: "1000mg", price: 275.00, isKit: true },
    ]
  },
  {
    name: "GHK-Cu",
    category: "COSMETIC SERIES",
    cas: "49557-75-7",
    desc: "Copper peptide complex.",
    variants: [
      { dosage: "50mg", price: 250.00, isKit: true },
      { dosage: "100mg", price: 350.00, isKit: true },
    ]
  },
  {
    name: "GLOW Blend",
    category: "COSMETIC SERIES",
    cas: "Blend",
    desc: "BPC-157 10mg + GHK-CU 50mg + TB-500 10mg.",
    variants: [
      { dosage: "70mg Blend", price: 475.00, isKit: true },
    ]
  },
  {
    name: "KLOW Blend",
    category: "COSMETIC SERIES",
    cas: "Blend",
    desc: "BPC-157 10mg + GHK-CU 50mg + TB-500 10mg + KPV 10mg.",
    variants: [
      { dosage: "80mg Blend", price: 550.00, isKit: true },
    ]
  },
  {
    name: "DSIP",
    category: "LONGEVITY SERIES",
    cas: "62568-57-4",
    desc: "Delta Sleep-Inducing Peptide.",
    variants: [
      { dosage: "5mg", price: 117.50, isKit: true },
      { dosage: "10mg", price: 225.00, isKit: true },
      { dosage: "15mg", price: 312.50, isKit: true },
    ]
  },
  {
    name: "Oxytocin Acetate",
    category: "LONGEVITY SERIES",
    cas: "50-56-6",
    desc: "Neuropeptide hormone.",
    variants: [
      { dosage: "2mg", price: 70.00, isKit: true },
      { dosage: "5mg", price: 150.00, isKit: true },
    ]
  },
  {
    name: "Hexarelin Acetate",
    category: "GROWTH HORMONE SERIES",
    cas: "140703-51-1",
    desc: "GH secretagogue.",
    variants: [
      { dosage: "2mg", price: 105.00, isKit: true },
      { dosage: "5mg", price: 230.00, isKit: true },
    ]
  },
  {
    name: "Adipotide",
    category: "METABOLIC SERIES",
    cas: "1315378-74-5",
    desc: "Proapoptotic peptide.",
    variants: [
      { dosage: "2mg", price: 247.50, isKit: true },
      { dosage: "5mg", price: 470.00, isKit: true },
    ]
  },
  {
    name: "PEG-MGF",
    category: "RECOVERY SERIES",
    cas: "N/A",
    desc: "Pegylated Mechano Growth Factor.",
    variants: [
      { dosage: "2mg", price: 207.50, isKit: true },
    ]
  },
  {
    name: "HCG",
    category: "RESEARCH SUPPLIES",
    cas: "9002-61-3",
    desc: "Human Chorionic Gonadotropin.",
    variants: [
      { dosage: "2000IU", price: 140.00, isKit: true },
      { dosage: "5000IU", price: 207.50, isKit: true },
      { dosage: "10000IU", price: 325.00, isKit: true },
    ]
  },
  {
    name: "B12",
    category: "RESEARCH SUPPLIES",
    cas: "68-19-9",
    desc: "Vitamin B12.",
    variants: [
      { dosage: "1ml", price: 12.50, isKit: true },
    ]
  },
  {
    name: "SLU-PP-332",
    category: "METABOLIC SERIES",
    cas: "N/A",
    desc: "ERR agonist.",
    variants: [
      { dosage: "250mcg (100 caps)", price: 62.50, isKit: false },
    ]
  },
  {
    name: "VIP",
    category: "INFLAMMATION SERIES",
    cas: "40077-57-4",
    desc: "Vasoactive Intestinal Peptide.",
    variants: [
      { dosage: "5mg", price: 225.00, isKit: true },
    ]
  },
  {
    name: "MOTS-C",
    category: "MITOCHONDRIAL SERIES",
    cas: "1627580-64-6",
    desc: "Mitochondrial-derived peptide.",
    variants: [
      { dosage: "10mg", price: 250.00, isKit: true },
    ]
  }
];

let content = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const startIndex = content.indexOf('const products: Product[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;

content = content.substring(0, startIndex) + 'const products: Product[] = ' + JSON.stringify(products, null, 2) + ';' + content.substring(endIndex);
fs.writeFileSync('src/components/CatalogSection.tsx', content, 'utf8');
console.log('Updated CatalogSection.tsx');
