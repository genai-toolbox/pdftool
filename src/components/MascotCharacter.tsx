import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import mascotImage from '@/assets/mascot.png';

export const MascotCharacter: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = 'mailto:thevividai@gmail.com?subject=聯繫大師姐';
  };

  return (
    <div 
      className="fixed bottom-0 right-4 z-50 pointer-events-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Speech bubble */}
      <div 
        className={`absolute bottom-full right-4 mb-2 transition-all duration-300 ${
          isHovered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-card rounded-2xl px-4 py-2 shadow-elevated border border-border/50 whitespace-nowrap flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium text-foreground">聯繫大師姐</p>
        </div>
        {/* Bubble tail */}
        <div className="absolute bottom-0 right-10 translate-y-full">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card" 
               style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))' }} 
          />
        </div>
      </div>

      {/* Mascot image */}
      <div 
        className={`animate-float cursor-pointer transition-transform duration-200 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      >
        <img 
          src={mascotImage} 
          alt="小助手"
          className="w-40 h-auto drop-shadow-xl"
          draggable={false}
        />
      </div>
    </div>
  );
};
