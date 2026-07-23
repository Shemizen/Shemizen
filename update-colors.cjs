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
  
  // First, shift the existing grays lighter to make room for the new background
  content = content.replace(/dark:bg-neutral-800/g, 'dark:bg-neutral-700');
  content = content.replace(/dark:bg-neutral-900/g, 'dark:bg-neutral-800');
  
  // Then, replace black with neutral-900
  content = content.replace(/dark:bg-black/g, 'dark:bg-neutral-900');
  
  // For CartSidebar and DisclaimerModal which are always dark, replace bg-black with bg-neutral-900
  if (file.includes('CartSidebar.tsx') || file.includes('DisclaimerModal.tsx') || file.includes('TrustAndReviews.tsx')) {
    content = content.replace(/bg-black/g, 'bg-neutral-900');
  }

  // Also replace text-neutral-500 with text-neutral-400 in dark mode for better contrast
  content = content.replace(/dark:text-neutral-500/g, 'dark:text-neutral-400');
  // And text-neutral-400 to text-neutral-300
  content = content.replace(/dark:text-neutral-400/g, 'dark:text-neutral-300');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Colors updated successfully.');
