const { execSync } = require('child_process');
try {
  const diff = execSync('git diff HEAD@{1} src/components/CatalogSection.tsx src/components/FeaturedCompounds.tsx').toString();
  const priceChanges = diff.split('\n').filter(line => line.includes('price') && (line.startsWith('-') || line.startsWith('+')));
  console.log('Price changes:', priceChanges.length > 0 ? priceChanges : 'None');
} catch (e) {
  console.log('Could not check git diff:', e.message);
}
