import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Mail, Send, Trash2, ArrowLeft, Copy, Check } from 'lucide-react';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  category?: string;
  cas?: string;
  dosage?: string;
  isKit?: boolean;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (name: string, dosage: string | undefined, delta: number) => void;
  onRemoveItem: (name: string, dosage: string | undefined) => void;
  onAddToCart?: (product: Omit<CartItem, 'quantity'>) => void;
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'reviews' | 'privacy' | 'terms') => void;
  onCopyEmail?: () => void;
}

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onAddToCart, onNavigate, onCopyEmail }: CartSidebarProps) {
  const [view, setView] = useState<'cart' | 'checkout'>('cart');
  const [isComplianceChecked, setIsComplianceChecked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBacWaterDismissed, setIsBacWaterDismissed] = useState(false);

  // Reset view when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setView('cart');
        setIsComplianceChecked(false);
        setCopied(false);
        setIsBacWaterDismissed(false);
      }, 300);
    }
  }, [isOpen]);

  const hasPeptides = items.some(item => item.name !== 'BAC Water');
  const hasBacWater = items.some(item => item.name === 'BAC Water');
  const showBacBanner = hasPeptides && !hasBacWater && !isBacWaterDismissed;

  const handleAddBacWater = () => {
    onAddToCart?.({
      name: "BAC Water",
      price: 25,
      category: "ACCESSORIES",
      cas: "7732-18-5, 100-51-6",
      dosage: "30ml",
      isKit: false
    });
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingThreshold = 500;
  const shippingFee = subtotal >= shippingThreshold ? 0 : 60;
  const shippingFeeAus = subtotal >= shippingThreshold ? 0 : 50;
  const grandTotal = subtotal + shippingFee;
  const grandTotalAus = subtotal + shippingFeeAus;
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);

  const generateOrderText = () => {
    const itemList = items.map(item =>
      `${item.name} [${item.dosage || 'N/A'}] (${item.isKit ? '10 Vials Kit' : 'Single Unit'}) (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)} USD`
    ).join('\n');

    return `Hello ShenzenLabs,

I would like to place an order for the following research items:

${itemList}

Subtotal: $${subtotal.toFixed(2)} USD
Shipping: ${shippingFee === 0 ? 'FREE' : '$50.00 USD (AUS) / $60.00 USD (Worldwide)'}
Total Estimated: $${shippingFee === 0 ? subtotal.toFixed(2) + ' USD' : `${grandTotalAus.toFixed(2)} USD (AUS) / $${grandTotal.toFixed(2)} USD (Worldwide)`}

Shipping Information:
[Name]
[Street Address]
[City, State, Zip]
[Country]
[Phone Number]

Please provide the bitcoin payment address.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateOrderText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAction = () => {
    if (onCopyEmail) onCopyEmail();
    const subject = "New Research Order Request";
    const body = encodeURIComponent(generateOrderText());
    window.location.href = `mailto:shenzenlabs@protonmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="dark fixed top-0 right-0 z-50 flex h-[100dvh] w-full max-w-md flex-col bg-[#0C090A] border-l border-white/10 shadow-2xl text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                {view === 'checkout' && (
                  <button onClick={() => setView('cart')} className="text-neutral-400 hover:text-white">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  {view === 'cart' ? 'Cart' : 'Checkout'}
                </h2>
              </div>
              <button onClick={onClose} className="text-neutral-400 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              {view === 'cart' ? (
                <>
                  {/* Promo Bar */}
                  <div className="mb-6">
                    <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      <span>Free Shipping Progress</span>
                      <span>{subtotal >= shippingThreshold ? 'Unlocked' : `$${(shippingThreshold - subtotal).toFixed(2)} USD away`}</span>
                    </div>
                    <div className="h-1.5 w-full !overflow-visible rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className={`h-full ${subtotal >= shippingThreshold ? 'bg-cyan-500' : 'bg-white'}`}
                      />
                    </div>
                  </div>

                  {/* Item List */}
                  {items.length === 0 ? (
                    <div className="flex flex-col h-40 items-center justify-center text-center text-neutral-400 gap-4">
                      <p>Your research list is empty.</p>
                      <button 
                        onClick={() => {
                          onClose();
                          onNavigate?.('catalog');
                        }}
                        className="text-xs font-bold uppercase tracking-widest text-cyan-500 hover:text-cyan-400 underline decoration-1 underline-offset-4"
                      >
                        Browse Catalog
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={`${item.name}-${item.dosage}`} className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <h3 className="font-bold text-white text-sm">{item.name}</h3>
                              <button onClick={() => onRemoveItem(item.name, item.dosage)} className="text-neutral-400 hover:text-cyan-500">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="mb-3 flex flex-col gap-0.5 text-[10px] text-neutral-400">
                              <span>CAS: {item.cas || 'N/A'}</span>
                              <span>Dosage: {item.dosage || 'N/A'}</span>
                              {item.isKit && <span className="text-cyan-400 font-medium">10 Vials Kit</span>}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-white/20 rounded-md">
                                <button onClick={() => onUpdateQuantity(item.name, item.dosage, -1)} className="p-2 hover:bg-white/10 text-white" disabled={item.quantity <= 1}>
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="min-w-[2rem] text-center text-sm font-bold text-white">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.name, item.dosage, 1)} className="p-2 hover:bg-white/10 text-white">
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <div className="font-mono text-sm font-bold text-white">${(item.price * item.quantity).toFixed(2)} <span className="text-[10px] text-neutral-400 font-normal">USD</span></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Checkout View */}
                  
                  {/* Notification */}
                  <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                    <p className="text-xs font-medium leading-relaxed text-amber-400">
                      Due to a surge in recent orders, our response times are slightly longer than usual. We appreciate your patience while we give your request the attention it deserves.
                    </p>
                  </div>

                  {/* Order Summary */}
                  <div className="mb-8 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Order Summary</h3>
                    <div className="space-y-2 rounded-lg bg-white/5 border border-white/10 p-4 text-xs text-neutral-300">
                      {items.map(item => (
                        <div key={`${item.name}-${item.dosage}`} className="flex justify-between">
                          <span>{item.name} ({item.dosage}) x{item.quantity}</span>
                          <span className="font-mono text-white">${(item.price * item.quantity).toFixed(2)} <span className="text-[10px] text-neutral-400 font-normal">USD</span></span>
                        </div>
                      ))}
                      <div className="my-2 border-t border-white/10"></div>
                      <div className="flex justify-between text-neutral-400">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)} <span className="text-[10px] text-neutral-400 font-normal">USD</span></span>
                      </div>
                      <div className="flex justify-between text-neutral-400">
                        <span>Shipping</span>
                        <span>{shippingFee === 0 ? 'FREE' : `$50.00 USD (AUS) / $60.00 USD (WW)`}</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-sm font-bold text-white">
                        <span>Grand Total</span>
                        <span>${shippingFee === 0 ? subtotal.toFixed(2) + ' USD' : `${grandTotalAus.toFixed(2)} USD (AUS) / $${grandTotal.toFixed(2)} USD (WW)`}</span>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Lock */}
                  <div className="mb-8 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isComplianceChecked}
                        onChange={(e) => setIsComplianceChecked(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-cyan-500/50 bg-[#0C090A] text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-xs font-medium leading-relaxed text-cyan-400">
                        I agree to the{' '}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            onClose();
                            onNavigate?.('terms');
                          }}
                          className="text-cyan-300 hover:text-cyan-200 underline decoration-1 underline-offset-2"
                        >
                          Terms of Service
                        </button>
                        {' '}and certify that these products are strictly for laboratory research purposes only and are NOT for human consumption. I also agree to the{' '}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            onClose();
                            onNavigate?.('privacy');
                          }}
                          className="text-cyan-300 hover:text-cyan-200 underline decoration-1 underline-offset-2"
                        >
                          Privacy Policy
                        </button>.
                      </span>
                    </label>
                  </div>

                  {/* Transmission Methods */}
                  <div className="mb-8 space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAction}
                      disabled={!isComplianceChecked}
                      className={`flex w-full items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                        isComplianceChecked 
                          ? 'bg-white text-black hover:bg-neutral-200' 
                          : 'bg-white/10 text-neutral-400 cursor-not-allowed'
                      }`}
                    >
                      <Mail className="h-4 w-4" />
                      Initiate Email Order
                    </motion.button>
                  </div>

                  {/* Manual Entry */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Manual Entry</h3>
                      <button 
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-500 hover:text-cyan-400"
                      >
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {copied ? 'Copied' : 'Copy Text'}
                      </button>
                    </div>
                    <textarea
                      readOnly
                      value={generateOrderText()}
                      className="h-64 w-full resize-none rounded-lg border border-white/10 bg-white/5 p-4 font-mono text-[10px] leading-relaxed text-neutral-400 focus:border-white/30 focus:outline-none"
                    />
                    <p className="mt-4 text-[10px] leading-relaxed text-neutral-400">
                      If the buttons above don't work, copy this text and send it to <button onClick={onCopyEmail} className="font-bold text-white hover:text-cyan-400 transition-colors break-all">shenzenlabs@protonmail.com</button>.
                    </p>
                    <p className="mt-2 text-[10px] font-bold text-cyan-500 uppercase tracking-widest">
                      * All prices are in USD. USD is the only accepted currency.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Footer (Cart View Only) */}
            {view === 'cart' && (
              <div className="border-t border-white/10 bg-white/5 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                <AnimatePresence>
                  {showBacBanner && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-l border-[#00FFFF] bg-black/50 p-3 pl-4 relative">
                        <button 
                          onClick={() => setIsBacWaterDismissed(true)}
                          className="absolute top-2 right-2 text-neutral-400 hover:text-white transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">
                          INCOMPLETE RESEARCH PROTOCOL
                        </h4>
                        <p className="text-[10px] text-neutral-400 leading-relaxed mb-2 pr-4">
                          Bacteriostatic Water is required for reconstitution. Add a 30ml vial to your order?
                        </p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handleAddBacWater}
                            className="text-[10px] font-bold text-[#00FFFF] hover:text-cyan-300 transition-colors"
                          >
                            [ + ADD BAC WATER - $25 ]
                          </button>
                          <button
                            onClick={() => setIsBacWaterDismissed(true)}
                            className="text-[10px] font-medium text-neutral-400 hover:text-neutral-400 transition-colors"
                          >
                            Ignore
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-4 flex items-center justify-between text-sm font-bold uppercase tracking-widest text-white">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)} <span className="text-[10px] text-neutral-400 font-normal">USD</span></span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setView('checkout')}
                  disabled={items.length === 0}
                  className="flex w-full items-center justify-center gap-2 bg-white py-4 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-neutral-200 disabled:bg-white/10 disabled:text-neutral-400 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
