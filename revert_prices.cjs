const fs = require('fs');

function updatePrices(filePath, multiplier) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match price: <number>
  content = content.replace(/price:\s*([\d.]+)/g, (match, p1) => {
    const price = parseFloat(p1);
    const newPrice = price * multiplier;
    return `price: ${newPrice.toFixed(2)}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated prices in ${filePath}`);
}

updatePrices('src/components/CatalogSection.tsx', 0.4);
updatePrices('src/components/FeaturedCompounds.tsx', 0.4);
