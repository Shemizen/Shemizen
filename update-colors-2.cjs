const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Replace the main background (currently dark:bg-neutral-900) with dark:bg-[#0C090A]
  content = content.replace(/dark:bg-neutral-900(?!\/)/g, 'dark:bg-[#0C090A]');
  
  // 2. Replace the boxes (currently dark:bg-neutral-800/...) with dark:bg-black/... to make them darker than #0C090A
  content = content.replace(/dark:bg-neutral-800/g, 'dark:bg-black');

  // 3. For components that are always dark (currently using bg-neutral-900), change them to bg-[#0C090A] or bg-black
  // Let's change bg-neutral-900 to bg-[#0C090A] and bg-neutral-800 to bg-black
  if (file.includes('CartSidebar.tsx') || file.includes('DisclaimerModal.tsx') || file.includes('TrustAndReviews.tsx')) {
    content = content.replace(/bg-neutral-900(?!\/)/g, 'bg-[#0C090A]');
    content = content.replace(/bg-neutral-900\//g, 'bg-black/');
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Colors updated successfully.');
