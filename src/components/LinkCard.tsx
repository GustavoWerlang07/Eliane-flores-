import React from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  ShoppingBag,
  Instagram,
  MapPin,
  Star,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { ContactButton } from '../config/siteConfig';

const iconMap: Record<ContactButton['iconName'], LucideIcon> = {
  CreditCard,
  Wallet: CreditCard,
  ShoppingBag,
  Instagram,
  MapPin,
  Star,
};

interface LinkCardProps {
  button: ContactButton;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ button }) => {
  const IconComponent = iconMap[button.iconName] || ChevronRight;

  return (
    <motion.a
      href={button.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${button.title} - ${button.description}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
      className="group relative flex items-center justify-between w-full p-3.5 sm:p-4 rounded-[16px] bg-white dark:bg-[#0e161d] border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/90 dark:hover:border-cyan-400/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_20px_rgba(8,145,178,0.12)] dark:hover:shadow-[0_8px_24px_rgba(8,145,178,0.2)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
    >
      {/* Delicate left turquoise accent indicator on hover */}
      <div 
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true" 
      />

      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
        {/* Modern Icon Container in Turquoise */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[13px] bg-cyan-50/80 dark:bg-cyan-950/40 border border-cyan-100/90 dark:border-cyan-900/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-white group-hover:border-cyan-500 group-hover:shadow-md group-hover:shadow-cyan-500/25 transition-all duration-300">
          <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:scale-105 stroke-[1.85]" />
        </div>

        {/* Text Area */}
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[15px] sm:text-[16px] text-slate-800 dark:text-slate-100 group-hover:text-cyan-950 dark:group-hover:text-cyan-300 tracking-tight leading-snug transition-colors duration-200">
              {button.title}
            </span>
            {button.phone && (
              <span className="hidden sm:inline-block text-[11px] font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50/90 dark:bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-200/70 dark:border-cyan-800/70 transition-colors duration-200">
                {button.phone}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 line-clamp-1 leading-relaxed mt-0.5 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200">
            {button.description}
          </p>
        </div>
      </div>

      {/* Trailing Chevron */}
      <div className="flex-shrink-0 flex items-center pl-1 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all duration-200">
        <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
      </div>
    </motion.a>
  );
};
