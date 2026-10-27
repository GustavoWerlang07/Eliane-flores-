/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';
import { siteConfig } from './config/siteConfig';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6FBFC] via-[#FAFCFD] to-[#F1F8FA] flex flex-col items-center justify-between px-4 py-3 sm:py-6 relative overflow-hidden select-none">
      {/* Subtle background ambient decorations (delicate turquoise light touches, strictly non-intrusive) */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-cyan-200/20 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-teal-200/15 blur-3xl" 
        aria-hidden="true" 
      />

      {/* Main Container - max-w-[480px] prioritized for mobile */}
      <div className="w-full max-w-[480px] flex-1 flex flex-col justify-between z-10 mx-auto">
        {/* Header Section */}
        <Header />

        {/* 6 Main Action Cards - Strict Order */}
        <main className="w-full space-y-3 sm:space-y-3.5 my-2">
          {siteConfig.buttons.map((button, index) => (
            <LinkCard key={button.id} button={button} index={index} />
          ))}
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </div>
  );
}
