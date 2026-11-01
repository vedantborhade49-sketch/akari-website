import React, { useRef, useState } from 'react';
import { sound } from '../utils/audio';

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' (vermilion), 'dark' (ink), 'outline' (brutalist border)
  className = '',
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  disabled = false,
  type = 'button',
  icon = null,
  cursorText = '',
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Max magnetic displacement
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;
    
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    sound.hover();
  };

  const handleClick = (e) => {
    sound.click();
    if (onClick) onClick(e);
  };

  // Size variations
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider font-space',
    md: 'px-6 py-3.5 text-xs md:text-sm tracking-widest font-space font-semibold',
    lg: 'px-8 py-4 text-sm md:text-base tracking-widest font-space font-bold',
    xl: 'px-10 py-5 text-base md:text-lg tracking-widest font-anton',
  };

  // Brutalist styling variants
  const variantStyles = {
    primary:
      'bg-vermilion text-cream border-2 border-vermilion hover:bg-ink hover:text-cream hover:border-ink',
    dark:
      'bg-ink text-cream border-2 border-ink hover:bg-vermilion hover:text-cream hover:border-vermilion',
    outline:
      'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream',
    'outline-cream':
      'bg-transparent text-cream border-2 border-cream/50 hover:bg-vermilion hover:text-cream hover:border-vermilion',
    gold:
      'bg-gold text-ink border-2 border-gold hover:bg-ink hover:text-cream hover:border-ink',
  };

  const commonProps = {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    onClick: handleClick,
    'data-cursor': 'pointer',
    'data-cursor-text': cursorText,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s linear',
    },
    className: `inline-flex items-center justify-center gap-3 uppercase select-none rounded-none transition-colors duration-300 relative group overflow-hidden ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Visual brutalist corner notches */}
      <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-current opacity-40 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-current opacity-40 pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} {...commonProps}>
      {content}
    </button>
  );
}
