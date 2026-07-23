import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.9 }}
          className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 rounded-full bg-black px-6 py-3 text-white shadow-2xl"
        >
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span className="text-xs font-bold uppercase tracking-widest">{message}</span>
          <button onClick={onClose} className="ml-2 text-neutral-400 hover:text-white">
            <X className="h-3 w-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
