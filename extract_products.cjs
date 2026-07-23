const fs = require('fs');

const content = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const startIndex = content.indexOf('const products: Product[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;
const productsStr = content.substring(startIndex + 'const products: Product[] = '.length, endIndex - 1);
const products = eval(productsStr);

const coaDataMap = {};
products.forEach(p => {
  coaDataMap[p.name] = {
    cas: p.cas,
    purity: ">99.0%",
    batch: "SZ-" + p.name.substring(0, 3).toUpperCase() + "-" + Math.floor(Math.random() * 10 + 1).toString().padStart(2, '0')
  };
});

console.log(JSON.stringify(coaDataMap, null, 2));
