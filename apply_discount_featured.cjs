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

let content = fs.readFileSync('src/components/FeaturedCompounds.tsx', 'utf8');
const startIndex = content.indexOf('const featuredProducts = [');
const endIndex = content.indexOf('];', startIndex) + 2;
const productsStr = content.substring(startIndex + 'const featuredProducts = '.length, endIndex - 1);
const products = eval(productsStr);

products.forEach(p => {
  if (highDemandProducts.includes(p.name)) {
    if (!p.originalPrice) {
      p.originalPrice = p.price;
      p.price = Number((p.price * 0.95).toFixed(2));
    }
  }
});

content = content.substring(0, startIndex) + 'const featuredProducts = ' + JSON.stringify(products, null, 2) + ';' + content.substring(endIndex);
fs.writeFileSync('src/components/FeaturedCompounds.tsx', content, 'utf8');
console.log('Updated FeaturedCompounds.tsx with discounts');
