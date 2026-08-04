import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  ariaLabel?: string;
  download?: boolean;
};

const variants: Record<string, string> = {
  primary:
  'bg-[#2C80EC] text-white hover:bg-[#4291F5] shadow-[0_18px_40px_-18px_rgba(44,128,236,0.9)]',
  secondary:
  'bg-[#A5CC25] text-[#09090B] hover:bg-[#B6DD36] shadow-[0_18px_40px_-18px_rgba(165,204,37,0.75)]',
  ghost:
  'glass text-white hover:border-white/25 hover:bg-white/[0.08]'
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
  download
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.25, y: y * 0.35 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const inner =
  <motion.span
    ref={ref}
    animate={{ x: offset.x, y: offset.y }}
    transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.4 }}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 ${variants[variant]} ${className}`}>
    
      {children}
    </motion.span>;


  const shared = {
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className: 'inline-flex rounded-full',
    'aria-label': ariaLabel
  };

  if (href) {
    return (
      <a
        href={href}
        {...shared}
        {...download ? { download: true } : {}}
        {...href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}}>
        
        {inner}
      </a>);

  }

  return (
    <button type="button" onClick={onClick} {...shared}>
      {inner}
    </button>);

}