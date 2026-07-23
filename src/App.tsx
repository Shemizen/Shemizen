/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DisclaimerModal from './components/DisclaimerModal';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import CategoriesOverview from './components/CategoriesOverview';
import FeaturedCompounds from './components/FeaturedCompounds';
import StrategicPartnerships from './components/StrategicPartnerships';
import PriceTransparency from './components/PriceTransparency';
import TrustAndReviews from './components/TrustAndReviews';
import QualityStandards from './components/QualityStandards';
import OrderingProcess from './components/OrderingProcess';
import OrderTracking from './components/OrderTracking';
import ComplianceSection from './components/ComplianceSection';
import EncryptedOrderPortal from './components/EncryptedOrderPortal';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import CatalogSection from './components/CatalogSection';
import QualityPage from './components/QualityPage';
import ShippingPage from './components/ShippingPage';
import ReviewsPage from './components/ReviewsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import DMCAPage from './components/DMCAPage';
import PeptidesLearnPage from './components/PeptidesLearnPage';
import RetatrutideLearnPage from './components/RetatrutideLearnPage';
import StorageLearnPage from './components/StorageLearnPage';
import SupportHub from './components/SupportHub';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CartSidebar, { CartItem } from './components/CartSidebar';
import Toast from './components/Toast';
import PromoPopup from './components/PromoPopup';
import MaintenanceMode from './components/MaintenanceMode';

const PageTransition = ({ children }: React.PropsWithChildren) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const IS_MAINTENANCE_MODE = false;

  const [isVerified, setIsVerified] = useState(() => {
    // Check session storage on initial load
    return sessionStorage.getItem('shenzenlabs_verified_v4') === 'true';
  });
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'quality' | 'shipping' | 'reviews' | 'privacy' | 'terms' | 'referral' | 'dmca' | 'peptides' | 'retatrutide' | 'storage'>('home');
  const [catalogCategory, setCatalogCategory] = useState<string | undefined>(undefined);
  const [catalogSearch, setCatalogSearch] = useState<string | undefined>(undefined);
  
  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [recentAddedItem, setRecentAddedItem] = useState<string | null>(null);
  
  // Toast State
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({ message: '', isVisible: false });

  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const smoothScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const headerOffset = 110;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentView === 'home' && pendingSection) {
      // Wait for the exit animation of the previous page to finish (300ms) 
      // plus a tiny bit for the DOM to fully render the home view
      const timer = setTimeout(() => {
        smoothScrollTo(pendingSection);
        setPendingSection(null);
      }, 320);
      return () => clearTimeout(timer);
    }
  }, [currentView, pendingSection]);

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const handleAddToCart = (product: { name: string; price: number; category?: string; cas?: string; dosage?: string; isKit?: boolean }) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name && item.dosage === product.dosage);
      if (existing) {
        return prev.map(item => 
          item.name === product.name && item.dosage === product.dosage
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Check if we are on a mobile device
    if (window.innerWidth >= 768) {
      setIsCartOpen(true);
      showToast(`Added ${product.name} ${product.dosage ? `(${product.dosage})` : ''} to list`);
    } else {
      setRecentAddedItem(product.name);
    }
  };

  const handleUpdateQuantity = (name: string, dosage: string | undefined, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.name === name && item.dosage === dosage) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const handleRemoveItem = (name: string, dosage: string | undefined) => {
    setCartItems(prev => prev.filter(item => !(item.name === name && item.dosage === dosage)));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavigate = (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'reviews' | 'privacy' | 'terms' | 'referral' | 'dmca' | 'peptides' | 'retatrutide' | 'storage', category?: string, search?: string, section?: string) => {
    if (page === 'catalog') {
      setCatalogCategory(category);
      setCatalogSearch(search);
    } else {
      setCatalogCategory(undefined);
      setCatalogSearch(undefined);
    }
    setCurrentView(page);
    
    if (section) {
      if (currentView === page) {
        // If already on the page, wait a bit for any menus to close before scrolling
        setTimeout(() => smoothScrollTo(section), 150);
      } else {
        // If coming from another page, set pending section so it jumps instantly on mount
        setPendingSection(section);
      }
    } else {
      scrollToTop();
    }
  };

  const handleVerification = () => {
    sessionStorage.setItem('shenzenlabs_verified_v4', 'true');
    setIsVerified(true);
  };

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('shenzenlabs@protonmail.com');
      showToast('Email copied. Please send your message.');
    } catch (err) {
      window.location.href = 'mailto:shenzenlabs@protonmail.com';
    }
    // Also trigger mailto as a fallback immediately if clipboard succeeds but user wants to email
    setTimeout(() => {
      window.location.href = 'mailto:shenzenlabs@protonmail.com';
    }, 500);
  };

  if (IS_MAINTENANCE_MODE) {
    return <MaintenanceMode />;
  }

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-neutral-50 dark:bg-[#0C090A] bg-blueprint font-sans text-neutral-900 dark:text-white selection:bg-cyan-500 selection:text-black transition-colors duration-300 flex flex-col">
      {!isVerified && <DisclaimerModal onConfirm={handleVerification} onNavigate={handleNavigate} />}
      
      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
      />

      {isVerified && <PromoPopup />}

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
      />

      <div className={`mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 transition-opacity duration-700 flex flex-col min-h-[100dvh] !h-auto !overflow-visible ${isVerified ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar 
          onNavigate={handleNavigate} 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          recentAddedItem={recentAddedItem}
        />
        <main className="pt-[100px] md:pt-[140px] flex-grow flex flex-col !h-auto !overflow-visible"> {/* Added padding-top to account for fixed header */}
          <AnimatePresence mode='wait'>
            {currentView === 'home' && (
              <PageTransition key="home">
                <Hero onNavigate={(page) => handleNavigate(page)} />
                <TrustIndicators />
                <About onNavigate={(page) => handleNavigate(page)} onCopyEmail={handleCopyEmail} />
                <FeaturedCompounds onNavigate={(page) => handleNavigate(page)} onAddToCart={handleAddToCart} />
                <CategoriesOverview onNavigate={(page, category) => handleNavigate(page, category)} />
                <StrategicPartnerships />
                <PriceTransparency />
                <TrustAndReviews compact={true} />
                <QualityStandards />
                <OrderingProcess />
                <OrderTracking />
                <SupportHub onCopyEmail={handleCopyEmail} />
                <ComplianceSection />
                <EncryptedOrderPortal onCopyEmail={handleCopyEmail} />
                <FAQSection />
                <FinalCTA onNavigate={(page) => handleNavigate(page)} onCopyEmail={handleCopyEmail} />
              </PageTransition>
            )}
            {currentView === 'catalog' && (
              <PageTransition key="catalog">
                <CatalogSection 
                  initialCategory={catalogCategory} 
                  initialSearch={catalogSearch} 
                  onAddToCart={handleAddToCart}
                  onOpenCart={() => setIsCartOpen(true)}
                />
              </PageTransition>
            )}
            {currentView === 'quality' && (
              <PageTransition key="quality">
                <QualityPage onCopyEmail={handleCopyEmail} />
              </PageTransition>
            )}
            {currentView === 'shipping' && (
              <PageTransition key="shipping">
                <ShippingPage />
              </PageTransition>
            )}
            {currentView === 'reviews' && (
              <PageTransition key="reviews">
                <ReviewsPage />
              </PageTransition>
            )}
            {currentView === 'privacy' && (
              <PageTransition key="privacy">
                <PrivacyPolicyPage />
              </PageTransition>
            )}
            {currentView === 'terms' && (
              <PageTransition key="terms">
                <TermsOfServicePage onCopyEmail={handleCopyEmail} />
              </PageTransition>
            )}
            {currentView === 'dmca' && (
              <PageTransition key="dmca">
                <DMCAPage onCopyEmail={handleCopyEmail} />
              </PageTransition>
            )}
            {currentView === 'peptides' && (
              <PageTransition key="peptides">
                <PeptidesLearnPage />
              </PageTransition>
            )}
            {currentView === 'retatrutide' && (
              <PageTransition key="retatrutide">
                <RetatrutideLearnPage />
              </PageTransition>
            )}
            {currentView === 'storage' && (
              <PageTransition key="storage">
                <StorageLearnPage />
              </PageTransition>
            )}
          </AnimatePresence>
        </main>
        <Footer onNavigate={handleNavigate} onCopyEmail={handleCopyEmail} />
      </div>
    </div>
  );
}
