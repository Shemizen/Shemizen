import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, CheckSquare, Square, CheckCircle2 } from 'lucide-react';

interface DisclaimerModalProps {
  onConfirm: () => void;
  onNavigate?: (page: 'home' | 'catalog' | 'quality' | 'shipping' | 'referral' | 'privacy' | 'terms') => void;
}

const checkboxes = [
  "I am at least 21 years of age.",
  "I am a qualified researcher or represent a licensed laboratory/institution.",
  "I understand these products are for In-Vitro Research Use Only.",
  "I confirm these products will NOT be used for human or animal consumption, therapeutic, or diagnostic purposes.",
  "I agree to the Terms of Service and Privacy Policy."
];

export default function DisclaimerModal({ onConfirm, onNavigate }: DisclaimerModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes.length).fill(false));

  const allChecked = checkedState.every(Boolean);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleCheckAll = () => {
    setCheckedState(new Array(checkboxes.length).fill(true));
  };

  const handleConfirm = () => {
    if (allChecked) {
      setIsOpen(false);
      onConfirm();
    }
  };

  const handleExit = () => {
    window.location.href = 'https://google.com'; // Redirect away
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0C090A] p-6 text-white shadow-2xl md:p-8 relative"
          >
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  <AlertTriangle className="h-5 w-5" />
                </div>
              </div>
              <h1 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-white">
                Research Use Only
              </h1>
              <p className="text-xs md:text-sm font-medium leading-relaxed text-neutral-400">
                Products are strictly for laboratory research and development. Not for human consumption.
              </p>
            </div>

            {/* Check All Button */}
            {!allChecked && (
              <button
                onClick={handleCheckAll}
                className="mb-6 w-full flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 border border-white/10"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                Acknowledge All
              </button>
            )}

            {/* Checkbox List */}
            <div className="mb-8 space-y-3">
              {checkboxes.map((text, index) => (
                <div key={index} className="flex w-full items-start gap-3 text-left group cursor-pointer" onClick={() => handleOnChange(index)}>
                  <div className="mt-0.5 flex-shrink-0">
                    {checkedState[index] ? (
                      <CheckSquare className="h-5 w-5 text-cyan-500" />
                    ) : (
                      <Square className="h-5 w-5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
                    )}
                  </div>
                  <span className={`text-xs leading-relaxed transition-colors ${checkedState[index] ? "text-neutral-200" : "text-neutral-500 group-hover:text-neutral-300"}`}>
                    {index === 4 ? (
                      <>
                        I agree to the{' '}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (onNavigate) {
                              onConfirm(); // Close modal and verify
                              onNavigate('terms'); // Navigate to terms page
                            }
                          }}
                          className="text-cyan-500 hover:text-cyan-400 underline decoration-1 underline-offset-2"
                        >
                          Terms of Service
                        </button>
                        {' '}and{' '}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (onNavigate) {
                              onConfirm(); // Close modal and verify
                              onNavigate('privacy'); // Navigate to privacy page
                            }
                          }}
                          className="text-cyan-500 hover:text-cyan-400 underline decoration-1 underline-offset-2"
                        >
                          Privacy Policy
                        </button>.
                      </>
                    ) : (
                      text
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={handleExit}
                className="flex items-center justify-center rounded-lg border border-white/10 py-3 text-xs font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Exit
              </button>
              <button
                onClick={handleConfirm}
                disabled={!allChecked}
                className={`flex items-center justify-center rounded-lg py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                  allChecked
                    ? "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]"
                    : "bg-white/5 text-neutral-600 cursor-not-allowed"
                }`}
              >
                Enter Site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
