import React from 'react';
import { ExpressionType } from '../types';

interface ShitabAiAvatarProps {
  expression: ExpressionType;
  className?: string;
}

export const ShitabAiAvatar: React.FC<ShitabAiAvatarProps> = ({
  expression,
  className = '',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src={`/sprites/sprite_${expression}.png`}
        alt={`S.H.I.T.A.B. Avatar - ${expression}`}
        className="w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-[400px] object-contain transition-all duration-300 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
};
