const fs = require('fs');

const catalogContent = fs.readFileSync('src/components/CatalogSection.tsx', 'utf8');
const catalogStartIndex = catalogContent.indexOf('const products: Product[] = [');
const catalogEndIndex = catalogContent.indexOf('];', catalogStartIndex) + 2;
const catalogProductsStr = catalogContent.substring(catalogStartIndex + 'const products: Product[] = '.length, catalogEndIndex - 1);
const catalogProducts = eval(catalogProductsStr);

const featuredContent = fs.readFileSync('src/components/FeaturedCompounds.tsx', 'utf8');
const featuredStartIndex = featuredContent.indexOf('const featuredProducts = [');
const featuredEndIndex = featuredContent.indexOf('];', featuredStartIndex) + 2;
const featuredProductsStr = featuredContent.substring(featuredStartIndex + 'const featuredProducts = '.length, featuredEndIndex - 1);
const featuredProducts = eval(featuredProductsStr);

let discrepancies = [];

featuredProducts.forEach(fp => {
  const cp = catalogProducts.find(p => p.name === fp.name);
  if (cp) {
    const variant = cp.variants.find(v => v.dosage === fp.dosage);
    if (variant && variant.price !== fp.price) {
      discrepancies.push({
        name: fp.name,
        dosage: fp.dosage,
        featuredPrice: fp.price,
        catalogPrice: variant.price
      });
    }
  }
});

console.log('Discrepancies:', discrepancies);
