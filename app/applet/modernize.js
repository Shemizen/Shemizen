import fs from 'fs';
import path from 'path';

function modernize(filename) {
  const filepath = path.join(process.cwd(), filename);
  let content = fs.readFileSync(filepath, 'utf-8');
  
  // Replace section card
  content = content.replace(/<div className="bg-white dark:bg-black\/60 border border-neutral-200 dark:border-white\/10 p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 backdrop-blur-sm shadow-sm dark:shadow-none font-mono">/g, 
    '<div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">\n                <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">\n                  <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>\n                </div>\n                <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono relative z-10">');

  // Fix button container
  content = content.replace(/className="flex items-center justify-center gap-2 border border-neutral-900 dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-colors hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black font-sans"/g, 
    'className="flex items-center justify-center gap-2 border border-neutral-900 dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black font-sans hover:shadow-lg active:scale-95 z-20 relative"');

  // Also replace TermsOfServicePage / PrivacyPolicyPage specific text-blue-.. things inside those wrappers to match cyan-.. style?
  // Let's just leave the icons their original color.
  
  fs.writeFileSync(filepath, content);
  console.log(`Modernized ${filename}`);
}

modernize('src/components/TermsOfServicePage.tsx');
modernize('src/components/PrivacyPolicyPage.tsx');
