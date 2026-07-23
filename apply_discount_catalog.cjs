const fs = require('fs');

const highDemandProducts = [
  "Retatrutide",
  "Semaglutide",
  "Tirzepatide",
  "Selank",
  "MOTS-C",
  "BPC-157",
  "TB-500",
  "SS-31",
  "Tesamorelin",
  "Ipamorelin",
  "GHK-Cu"
];

let content = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const startIndex = content.indexOf('const products: Product[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;
const productsStr = content.substring(startIndex + 'const products: Product[] = '.length, endIndex - 1);
const products = eval(productsStr);

products.forEach(p => {
  if (highDemandProducts.includes(p.name)) {
    p.variants.forEach(v => {
      // If it doesn't already have an originalPrice, set it
      if (!v.originalPrice) {
        v.originalPrice = v.price;
        // Calculate 5% discount, round to 2 decimal places
        v.price = Number((v.price * 0.95).toFixed(2));
      }
    });
  }
});

content = content.substring(0, startIndex) + 'const products: Product[] = ' + JSON.stringify(products, null, 2) + ';' + content.substring(endIndex);
fs.writeFileSync('src/components/CatalogSection.tsx', content, 'utf8');
console.log('Updated CatalogSection.tsx with discounts');
