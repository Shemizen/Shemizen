import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Search, ShoppingBag, User, Menu, X, Sun, Moon, FlaskConical, ShieldCheck, Truck, Users, HelpCircle, Info, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'reviews' | 'privacy' | 'terms' | 'referral' | 'dmca' | 'peptides' | 'retatrutide' | 'storage', category?: string, search?: string, section?: string) => void;
  cartCount?: number;
  onOpenCart?: () => void;
  recentAddedItem?: string | null;
}

const SUGGESTIONS = ["Retatrutide", "BPC 157", "NAD+", "GHK-CU", "Semax"];

export default function Navbar({ onNavigate, cartCount = 0, onOpenCart, recentAddedItem }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (recentAddedItem) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [recentAddedItem, cartCount]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [searchValue, setSearchValue] = useState("");

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = SUGGESTIONS[placeholderIndex];
      
      if (isDeleting) {
        setPlaceholderText(currentWord.substring(0, placeholderText.length - 1));
        setTypingSpeed(50);
      } else {
        setPlaceholderText(currentWord.substring(0, placeholderText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && placeholderText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && placeholderText === "") {
        setIsDeleting(false);
        setPlaceholderIndex((prev) => (prev + 1) % SUGGESTIONS.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, placeholderIndex, typingSpeed]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onNavigate('catalog', undefined, searchValue);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 w-full transition-colors duration-300">
      <div className="w-full bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/10">
        <div className="mx-auto w-full max-w-[1440px] relative">
          {/* Top Bar */}
          <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Search (Desktop) */}
        <div className="flex w-1/3 items-center justify-start">
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="relative w-64 group">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-neutral-900 dark:group-focus-within:text-white" />
              <input 
                type="text" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={`Search ${placeholderText}|`} 
                className="w-full bg-transparent py-2 pl-6 text-sm font-medium placeholder-neutral-400 outline-none focus:placeholder-neutral-300 text-neutral-900 dark:text-white"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-focus-within:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Press Enter</span>
              </div>
            </form>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:flex md:w-1/3 md:justify-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 md:gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-black text-white dark:bg-white dark:text-black text-xs font-bold transition-colors">
              SL
            </div>
            <span className="text-sm font-bold tracking-tight md:text-lg whitespace-nowrap">SHENZENLABS</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex w-auto items-center justify-end gap-4 md:w-1/3 md:gap-6 ml-auto md:ml-0">
          <div className="relative">
            <button 
              onClick={onOpenCart}
              className="flex items-center gap-2 text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[9px] text-white dark:text-black font-bold md:hidden">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline">Cart {cartCount > 0 && `(${cartCount})`}</span>
            </button>
            
            <AnimatePresence>
              {showNotification && recentAddedItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-4 w-64 md:hidden rounded-sm bg-black dark:bg-white text-white dark:text-black px-4 py-3 shadow-2xl z-50 border border-neutral-800 dark:border-neutral-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex bg-cyan-500/20 text-cyan-400 p-1.5 rounded-full shrink-0">
                      <ShoppingBag className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Added to cart</span>
                      <span className="text-xs font-semibold">{recentAddedItem}</span>
                    </div>
                  </div>
                  {/* Triangle indicator */}
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-black dark:bg-white border-l border-t border-neutral-800 dark:border-neutral-200 rotate-45 transform pointer-events-none" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button 
            className="md:hidden text-neutral-900 dark:text-white p-2 -mr-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        </div>

        {/* Navigation Row */}
        <div className="hidden border-t border-neutral-200 dark:border-white/10 md:block transition-colors duration-300">
          <div className="mx-auto w-full max-w-[1440px] flex justify-center">
          <nav className="flex gap-12 py-4">
            <button 
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <FlaskConical className="h-4 w-4" />
              RESEARCH COMPOUNDS
            </button>
            <button 
              onClick={() => onNavigate('quality')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              QUALITY
            </button>
            <button 
              onClick={() => onNavigate('shipping')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <Truck className="h-4 w-4" />
              SHIPPING
            </button>
            <button 
              onClick={() => onNavigate('reviews')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <Star className="h-4 w-4" />
              REVIEWS
            </button>
            <button 
              onClick={() => onNavigate('home', undefined, undefined, 'how-to-order')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <Info className="h-4 w-4" />
              HOW TO ORDER
            </button>
            <button 
              onClick={() => onNavigate('home', undefined, undefined, 'faq')}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-neutral-500 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </button>
          </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 h-[calc(100dvh-64px)] w-full z-50 overflow-y-auto bg-white dark:bg-black border-t border-neutral-200 dark:border-white/10 md:hidden shadow-xl"
          >
            <div className="flex flex-col p-6 pb-24">
              <div className="mb-6 border-b border-neutral-200 dark:border-white/10 pb-6">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  onNavigate('catalog', undefined, searchValue);
                  setIsOpen(false);
                }} className="relative">
                  <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input 
                    type="text" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={`Search ${placeholderText}|`} 
                    className="w-full bg-transparent py-3 pl-8 text-base font-medium placeholder-neutral-400 outline-none text-neutral-900 dark:text-white"
                  />
                </form>
              </div>
              <nav className="flex flex-col gap-6">
                <button 
                  onClick={() => {
                    onNavigate('catalog');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <FlaskConical className="h-5 w-5" />
                  RESEARCH COMPOUNDS
                </button>
                <button 
                  onClick={() => {
                    onNavigate('quality');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <ShieldCheck className="h-5 w-5" />
                  QUALITY
                </button>
                <button 
                  onClick={() => {
                    onNavigate('shipping');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <Truck className="h-5 w-5" />
                  SHIPPING
                </button>
                <button 
                  onClick={() => {
                    onNavigate('reviews');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <Star className="h-5 w-5" />
                  REVIEWS
                </button>
                <button 
                  onClick={() => {
                    onNavigate('home', undefined, undefined, 'how-to-order');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <Info className="h-5 w-5" />
                  HOW TO ORDER
                </button>
                <button 
                  onClick={() => {
                    onNavigate('home', undefined, undefined, 'faq');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-left text-lg font-bold tracking-widest text-neutral-900 dark:text-white py-2"
                >
                  <HelpCircle className="h-5 w-5" />
                  FAQ
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
