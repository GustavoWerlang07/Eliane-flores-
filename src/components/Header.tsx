import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-5 px-4">
      {/* Badge / Brand Logo */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mb-5"
      >
        {/* Subtle ambient luxury glow behind logo badge */}
        <div 
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-teal-400/25 to-sky-500/20 blur-md opacity-70 group-hover:opacity-100 transition duration-700" 
          aria-hidden="true"
        />

        {/* Logo Card - Preserving 100% of the original logo */}
        <div className="relative overflow-hidden rounded-2xl bg-[#090E12] border border-cyan-500/30 shadow-xl shadow-cyan-950/15 p-2 sm:p-2.5 max-w-[280px] sm:max-w-[310px]">
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={310}
            height={182}
            className="w-full h-auto object-contain select-none"
            loading="eager"
            onError={(e) => {
              // Fallback to the raw original upload if needed
              const target = e.currentTarget;
              if (target.src !== siteConfig.logo.originalSrc) {
                target.src = siteConfig.logo.originalSrc;
              }
            }}
          />
        </div>
      </motion.div>

      {/* Main Phrase */}
      <h1 className="text-[20px] sm:text-[22px] font-bold tracking-tight text-slate-900 dark:text-white leading-snug max-w-[360px] transition-colors duration-300">
        {siteConfig.mainPhrase}
      </h1>
    </header>
  );
};
