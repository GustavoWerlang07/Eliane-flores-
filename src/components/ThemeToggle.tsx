import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
      className={`relative p-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 shadow-sm ${
        isDark
          ? 'bg-[#121c24] text-amber-300 border border-slate-700/80 hover:border-amber-400/50 hover:bg-[#16222c]'
          : 'bg-white/90 text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 hover:bg-white'
      }`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 stroke-[2]" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 -rotate-12 stroke-[2]" />
        )}
      </div>
    </motion.button>
  );
};
