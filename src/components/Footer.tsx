import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center mt-8 pt-6 pb-8 transition-colors duration-300">
      {/* Discrete Divider Line with turquoise hint */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/60 dark:via-cyan-500/40 to-transparent mx-auto mb-5" />

      {/* Store Brand Name */}
      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-slate-700 dark:text-slate-300 transition-colors duration-300">
        {siteConfig.storeName}
      </p>

      {/* Slogan */}
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium italic transition-colors duration-300">
        {siteConfig.footerSlogan}
      </p>

      {/* Copyright */}
      <p className="text-[11px] text-slate-400/80 dark:text-slate-600 mt-2 transition-colors duration-300">
        © {siteConfig.copyrightYear} {siteConfig.storeLegalName}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
