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
      className="group relative flex items-center justify-between w-full p-3.5 sm:p-4 rounded-[16px] bg-white border border-slate-200/80 hover:border-cyan-400/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(8,145,178,0.12)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
    >
      {/* Delicate left turquoise accent indicator on hover */}
      <div 
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true" 
      />

      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
        {/* Modern Icon Container in Turquoise */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[13px] bg-cyan-50/80 border border-cyan-100/90 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 group-hover:shadow-md group-hover:shadow-cyan-500/25 transition-all duration-300">
          <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:scale-105 stroke-[1.85]" />
        </div>

        {/* Text Area */}
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[15px] sm:text-[16px] text-slate-800 group-hover:text-cyan-950 tracking-tight leading-snug">
              {button.title}
            </span>
            {button.phone && (
              <span className="hidden sm:inline-block text-[11px] font-medium text-cyan-700 bg-cyan-50/90 px-1.5 py-0.5 rounded border border-cyan-200/70">
                {button.phone}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-[13px] text-slate-500 line-clamp-1 leading-relaxed mt-0.5 group-hover:text-slate-600">
            {button.description}
          </p>
        </div>
      </div>

      {/* Trailing Chevron */}
      <div className="flex-shrink-0 flex items-center pl-1 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all duration-200">
        <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
      </div>
    </motion.a>
  );
};
