const fs = require('fs');

const coaDataMap = {
  "Semaglutide": { "cas": "910463-68-2", "purity": ">99.0%", "batch": "SZ-SEM-08" },
  "Tirzepatide": { "cas": "2023788-19-2", "purity": ">99.0%", "batch": "SZ-TIR-02" },
  "Retatrutide": { "cas": "2381089-83-2", "purity": ">99.0%", "batch": "SZ-RET-05" },
  "HGH (Human Growth Hormone)": { "cas": "12629-01-5", "purity": ">99.0%", "batch": "SZ-HGH-03" },
  "BPC-157": { "cas": "137525-51-0", "purity": ">99.0%", "batch": "SZ-BPC-02" },
  "TB-500": { "cas": "77591-33-4", "purity": ">99.0%", "batch": "SZ-TB5-06" },
  "BPC-157 + TB-500 Blend": { "cas": "Blend", "purity": ">99.0%", "batch": "SZ-BPC-06" },
  "SS-31": { "cas": "736992-21-5", "purity": ">99.0%", "batch": "SZ-SS3-01" },
  "CJC-1295 (No DAC)": { "cas": "863288-34-0", "purity": ">99.0%", "batch": "SZ-CJC-10" },
  "CJC-1295 (No DAC) + Ipamorelin": { "cas": "Blend", "purity": ">99.0%", "batch": "SZ-CJC-08" },
  "CJC-1295 (With DAC)": { "cas": "863288-34-0", "purity": ">99.0%", "batch": "SZ-CJC-08" },
  "AOD9604": { "cas": "221231-10-3", "purity": ">99.0%", "batch": "SZ-AOD-01" },
  "IGF-1LR3": { "cas": "946870-92-4", "purity": ">99.0%", "batch": "SZ-IGF-10" },
  "MT-1": { "cas": "75921-69-6", "purity": ">99.0%", "batch": "SZ-MT1-10" },
  "MT-2 (Melanotan 2 Acetate)": { "cas": "121062-08-6", "purity": ">99.0%", "batch": "SZ-MT2-08" },
  "Epithalon": { "cas": "307297-39-8", "purity": ">99.0%", "batch": "SZ-EPI-05" },
  "Pe-22-28": { "cas": "N/A", "purity": ">99.0%", "batch": "SZ-PE2-04" },
  "Cartalax": { "cas": "N/A", "purity": ">99.0%", "batch": "SZ-CAR-03" },
  "GHRP-2 Acetate": { "cas": "158861-67-7", "purity": ">99.0%", "batch": "SZ-GHR-03" },
  "GHRP-6 Acetate": { "cas": "87616-84-0", "purity": ">99.0%", "batch": "SZ-GHR-10" },
  "PT-141": { "cas": "189691-06-3", "purity": ">99.0%", "batch": "SZ-PT1-03" },
  "Selank": { "cas": "129954-34-3", "purity": ">99.0%", "batch": "SZ-SEL-02" },
  "Semax": { "cas": "80714-61-0", "purity": ">99.0%", "batch": "SZ-SEM-06" },
  "KPV": { "cas": "17750-73-1", "purity": ">99.0%", "batch": "SZ-KPV-06" },
  "Tesamorelin": { "cas": "218949-48-5", "purity": ">99.0%", "batch": "SZ-TES-03" },
  "Sermorelin Acetate": { "cas": "86168-78-7", "purity": ">99.0%", "batch": "SZ-SER-07" },
  "Thymosin Alpha-1": { "cas": "62304-98-7", "purity": ">99.0%", "batch": "SZ-THY-09" },
  "Ipamorelin": { "cas": "170851-70-4", "purity": ">99.0%", "batch": "SZ-IPA-08" },
  "Mazdutide": { "cas": "2089263-65-2", "purity": ">99.0%", "batch": "SZ-MAZ-07" },
  "Cagrilintide": { "cas": "1415456-99-3", "purity": ">99.0%", "batch": "SZ-CAG-09" },
  "Survodutide": { "cas": "2805997-46-8", "purity": ">99.0%", "batch": "SZ-SUR-06" },
  "NAD+": { "cas": "53-84-9", "purity": ">99.0%", "batch": "SZ-NAD-09" },
  "GHK-Cu": { "cas": "49557-75-7", "purity": ">99.0%", "batch": "SZ-GHK-07" },
  "GLOW Blend": { "cas": "Blend", "purity": ">99.0%", "batch": "SZ-GLO-04" },
  "KLOW Blend": { "cas": "Blend", "purity": ">99.0%", "batch": "SZ-KLO-03" },
  "DSIP": { "cas": "62568-57-4", "purity": ">99.0%", "batch": "SZ-DSI-04" },
  "Oxytocin Acetate": { "cas": "50-56-6", "purity": ">99.0%", "batch": "SZ-OXY-07" },
  "Hexarelin Acetate": { "cas": "140703-51-1", "purity": ">99.0%", "batch": "SZ-HEX-07" },
  "Adipotide": { "cas": "1315378-74-5", "purity": ">99.0%", "batch": "SZ-ADI-09" },
  "PEG-MGF": { "cas": "N/A", "purity": ">99.0%", "batch": "SZ-PEG-05" },
  "HCG": { "cas": "9002-61-3", "purity": ">99.0%", "batch": "SZ-HCG-06" },
  "B12": { "cas": "68-19-9", "purity": ">99.0%", "batch": "SZ-B12-05" },
  "SLU-PP-332": { "cas": "N/A", "purity": ">99.0%", "batch": "SZ-SLU-01" },
  "VIP": { "cas": "40077-57-4", "purity": ">99.0%", "batch": "SZ-VIP-02" },
  "MOTS-C": { "cas": "1627580-64-6", "purity": ">99.0%", "batch": "SZ-MOT-07" }
};

let content = fs.readFileSync('src/components/COAModal.tsx', 'utf8');
const startIndex = content.indexOf('const coaDataMap: Record<string, COAData> = {');
const endIndex = content.indexOf('};', startIndex) + 2;

content = content.substring(0, startIndex) + 'const coaDataMap: Record<string, COAData> = ' + JSON.stringify(coaDataMap, null, 2) + ';' + content.substring(endIndex);
fs.writeFileSync('src/components/COAModal.tsx', content, 'utf8');
console.log('Updated COAModal.tsx');
