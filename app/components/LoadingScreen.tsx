'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#050510' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center mb-16"
          >
            <div className="text-6xl font-black tracking-tighter mb-3 gradient-text">SB</div>
            <div className="text-sm tracking-[0.4em] text-slate-500 uppercase">Portfolio</div>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-64"
          >
            <div className="flex justify-between text-xs text-slate-600 mb-2 font-mono">
              <span>INITIALIZING</span>
              <span>{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div className="h-[1px] bg-slate-800 w-full rounded-full overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background: 'linear-gradient(90deg, #00f5ff, #b44dff)',
                  width: `${Math.min(100, progress)}%`,
                  transition: 'width 0.1s ease',
                }}
              />
            </div>
            <div className="mt-4 text-[10px] tracking-[0.3em] text-slate-700 text-center font-mono">
              {progress < 40 ? 'LOADING ASSETS...' : progress < 70 ? 'BUILDING PIPELINE...' : progress < 90 ? 'COMPILING DATA...' : 'READY'}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
