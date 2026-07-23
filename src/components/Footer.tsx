interface FooterProps {
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'reviews' | 'privacy' | 'terms' | 'dmca' | 'peptides' | 'retatrutide' | 'storage', category?: string, search?: string, section?: string) => void;
  onCopyEmail?: () => void;
}

export default function Footer({ onNavigate, onCopyEmail }: FooterProps) {
  return (
    <footer className="bg-transparent pt-12 pb-[env(safe-area-inset-bottom,100px)] md:pt-20 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center bg-neutral-900 dark:bg-white text-[10px] font-bold text-white dark:text-black">
                SL
              </div>
              <span className="text-sm font-bold tracking-widest">SHENZENLABS</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Advanced research compounds for the scientific community. Dedicated to purity, precision, and innovation.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => onNavigate?.('home')} className="hover:text-neutral-600 dark:hover:text-neutral-400">Home</button></li>
                <li><button onClick={() => onNavigate?.('catalog')} className="hover:text-neutral-600 dark:hover:text-neutral-400">Catalog</button></li>
                <li><button onClick={() => onNavigate?.('home', undefined, undefined, 'about')} className="hover:text-neutral-600 dark:hover:text-neutral-400">About</button></li>
                <li>
                  <button 
                    onClick={onCopyEmail}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Contact</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <button 
                    onClick={onCopyEmail}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 text-left break-all"
                  >
                    ShenzenLabs@protonmail.com
                  </button>
                </li>
                <li className="text-neutral-500 dark:text-neutral-300">Shenzhen, China</li>
                <li className="text-neutral-500 dark:text-neutral-300">Laboratory District B-4</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Learn</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <button 
                    onClick={() => onNavigate?.('peptides')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 text-left"
                  >
                    What are Peptides?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('retatrutide')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 text-left"
                  >
                    What is Retatrutide?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('storage')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 text-left"
                  >
                    Peptide Storage Guide
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <button 
                    onClick={() => onNavigate?.('terms')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 uppercase"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('privacy')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 uppercase"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('shipping')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 uppercase"
                  >
                    Shipping Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('dmca')}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400 uppercase"
                  >
                    DMCA & Takedown
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="flex flex-col flex-wrap justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 md:flex-row">
            <p className="max-w-[800px]">
              RESEARCH USE ONLY - NOT FOR HUMAN CONSUMPTION. All products sold by ShenzenLabs are intended strictly for in-vitro laboratory and scientific research purposes only.
            </p>
            <p>
              © {new Date().getFullYear()} ShenzenLabs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
