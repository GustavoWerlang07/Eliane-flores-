/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { siteConfig } from './config/siteConfig';

function MainContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between px-4 py-3 sm:py-6 relative overflow-hidden select-none transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-[#070b0e] via-[#090e12] to-[#05080b] text-slate-100'
          : 'bg-gradient-to-b from-[#F6FBFC] via-[#FAFCFD] to-[#F1F8FA] text-slate-800'
      }`}
    >
      {/* Subtle background ambient decorations (adapted for light & dark) */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full blur-3xl transition-opacity duration-500 ${
          isDark ? 'bg-cyan-500/10 opacity-70' : 'bg-cyan-200/20 opacity-100'
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full blur-3xl transition-opacity duration-500 ${
          isDark ? 'bg-teal-500/10 opacity-50' : 'bg-teal-200/15 opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Main Container - max-w-[480px] prioritized for mobile */}
      <div className="w-full max-w-[480px] flex-1 flex flex-col justify-between z-10 mx-auto relative">
        {/* Top Bar with Discreet Theme Toggle */}
        <div className="w-full flex justify-end items-center pt-1 pr-0.5">
          <ThemeToggle />
        </div>

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

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
