import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../../assets/avatar3d.png'; 

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

export const Avatar: React.FC<AvatarProps> = ({
  size = 'lg',
  className = '',
  animate = true,
}) => {
  const AvatarComponent = (
    <div
      className={`${sizeMap[size]} ${className} relative rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 p-1 shadow-glow-lg`}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center relative overflow-hidden border border-primary-500/30">
        {/* Stylized Female Avatar as SVG */}
        <img
        src={avatarImg}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full border border-primary-500/30 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      />
        {/* <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4"
          fill="currentColor" */}
        
          {/* Face */}
          {/* <circle cx="50" cy="45" r="20" className="text-primary-300" /> */}
          
          {/* Hair */}
          {/* <path
            d="M30 35 Q50 20 70 35 Q75 40 70 50 Q65 45 60 48 Q55 45 50 48 Q45 45 40 48 Q35 45 30 50 Q25 40 30 35"
            className="text-secondary-600" */}
          
          
          {/* Eyes */}
          {/* <circle cx="43" cy="42" r="2" className="text-dark-700" />
          <circle cx="57" cy="42" r="2" className="text-dark-700" /> */}
          
          {/* Lips */}
          {/* <ellipse cx="50" cy="50" rx="3" ry="1.5" className="text-primary-500" /> */}
          
          {/* Body */}
          {/* <ellipse cx="50" cy="75" rx="15" ry="20" className="text-accent-300" /> */}
          
          {/* Arms */}
          {/* <ellipse cx="35" cy="70" rx="5" ry="12" className="text-primary-300" transform="rotate(-15 35 70)" />
          <ellipse cx="65" cy="70" rx="5" ry="12" className="text-primary-300" transform="rotate(15 65 70)" />
        </svg> */}

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full animate-float"
              style={{
                left: `${20 + i * 12}%`,
                top: `${15 + (i % 2) * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {AvatarComponent}
      </motion.div>
    );
  }

  return AvatarComponent;
};
