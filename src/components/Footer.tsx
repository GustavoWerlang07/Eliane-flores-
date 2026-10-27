import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center mt-8 pt-6 pb-8">
      {/* Discrete Divider Line with turquoise hint */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent mx-auto mb-5" />

      {/* Store Brand Name */}
      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-slate-700">
        {siteConfig.storeName}
      </p>

      {/* Slogan */}
      <p className="text-xs text-slate-400 mt-1 font-medium italic">
        {siteConfig.footerSlogan}
      </p>

      {/* Copyright */}
      <p className="text-[11px] text-slate-400/80 mt-2">
        © {siteConfig.copyrightYear} {siteConfig.storeLegalName}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
