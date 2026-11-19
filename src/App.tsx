import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DeveloperSection } from './components/DeveloperSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { APP_INFO } from './data/doomData';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3600);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleDownloadTrigger = useCallback(
    (_sourceLabel: string) => {
      showToast(`Starting download: ${APP_INFO.fileName}`);
    },
    [showToast]
  );

  return (
    <div className="min-h-screen bg-[#495057] text-[#F8F9FA]">
      <main className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <HeroSection onDownloadTrigger={handleDownloadTrigger} />
        <DownloadSection onDownloadTrigger={handleDownloadTrigger} />
        <DeveloperSection />
        <Footer />
      </main>

      {/* Non-intrusive bottom toast feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-50 flex max-w-sm items-center gap-3 rounded-xl border border-[#6C757D]/60 bg-[#1A1D20] px-4 py-3 text-sm font-medium text-[#F8F9FA] shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ADB5BD]" />
            <span className="leading-snug">{toastMessage}</span>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setToastMessage(null)}
              className="ml-1 rounded-md p-1 text-[#ADB5BD] transition-colors hover:bg-[#343A40] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
