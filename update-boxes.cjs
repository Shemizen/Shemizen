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
  
  // Make transparent boxes more solid dark
  content = content.replace(/dark:bg-neutral-900\/40/g, 'dark:bg-neutral-800/80');
  content = content.replace(/dark:bg-neutral-900\/20/g, 'dark:bg-neutral-800/60');
  content = content.replace(/dark:bg-neutral-900\/50/g, 'dark:bg-neutral-800/90');
  content = content.replace(/dark:bg-neutral-900\/95/g, 'dark:bg-neutral-800/95');
  
  content = content.replace(/dark:bg-white\/5/g, 'dark:bg-neutral-800/60');
  content = content.replace(/dark:bg-white\/10/g, 'dark:bg-neutral-800/80');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Box transparency updated successfully.');
