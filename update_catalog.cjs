const fs = require('fs');

const newProducts = `const products: Product[] = [
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
      { dosage: "20mg", price: 250.00, isKit: true },
      { dosage: "30mg", price: 325.00, isKit: true },
      { dosage: "50mg", price: 475.00, isKit: true },
    ]
  },
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
    name: "GHK-Cu",
    category: "COSMETIC SERIES",
    cas: "49557-75-7",
    desc: "Copper peptide complex.",
    variants: [
      { dosage: "50mg", price: 82.50, isKit: true },
      { dosage: "100mg", price: 140.00, isKit: true },
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
    name: "MOTS-C",
    category: "MITOCHONDRIAL SERIES",
    cas: "1627580-64-6",
    desc: "Mitochondrial-derived peptide.",
    variants: [
      { dosage: "10mg", price: 160.00, isKit: true },
      { dosage: "40mg", price: 500.00, isKit: true },
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
    name: "Epithalon",
    category: "LONGEVITY SERIES",
    cas: "307297-39-8",
    desc: "Telomerase activator.",
    variants: [
      { dosage: "10mg", price: 150.00, isKit: true },
      { dosage: "50mg", price: 417.50, isKit: true },
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
    name: "Survodutide",
    category: "METABOLIC SERIES",
    cas: "2805997-46-8",
    desc: "Glucagon/GLP-1 receptor dual agonist.",
    variants: [
      { dosage: "10mg", price: 650.00, isKit: true },
    ]
  },
  {
    name: "Selank",
    category: "COGNITIVE SERIES",
    cas: "129954-34-3",
    desc: "Heptapeptide, Tuftsin analogue.",
    variants: [
      { dosage: "10mg", price: 207.50, isKit: true },
    ]
  },
  {
    name: "Semax",
    category: "COGNITIVE SERIES",
    cas: "80714-61-0",
    desc: "Heptapeptide, ACTH analogue.",
    variants: [
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
    name: "SS-31",
    category: "MITOCHONDRIAL SERIES",
    cas: "736992-21-5",
    desc: "Mitochondrial targeted peptide.",
    variants: [
      { dosage: "10mg", price: 242.50, isKit: true },
    ]
  }
];`;

let content = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const startIndex = content.indexOf('const products: Product[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;

content = content.substring(0, startIndex) + newProducts + content.substring(endIndex);
fs.writeFileSync('src/components/CatalogSection.tsx', content, 'utf8');
console.log('Updated CatalogSection.tsx');
