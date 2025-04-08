import React from 'react';

export function AuroraBackground({ className }) {
  return (
    <div 
      className={`absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 50%, hsl(180, 70%, 80%, 0.2), transparent 25%),
          radial-gradient(circle at 0% 0%, hsl(150, 70%, 80%, 0.15), transparent 25%)
        `,
        backgroundSize: '100% 100%, 100% 100%',
        animation: 'var(--animate-aurora)'
      }}
    />
  );
}
