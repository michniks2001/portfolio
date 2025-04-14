"use client"

import React from 'react';
import Link from 'next/link';

export function SocialButton({ href, label, icon: Icon }) {
  return (
    <div className="group relative">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <button className="inline-flex items-center justify-center cursor-pointer">
          <Icon className="w-8 hover:scale-125 duration-200 hover:stroke-primary" />
        </button>
        <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
          z-20 origin-left scale-0 px-3 rounded-md
          border border-border bg-background/80 backdrop-blur-sm
          py-2 text-sm font-medium text-muted-foreground
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100"
        >
          {label}
        </span>
      </Link>
    </div>
  );
}

// Social Icons
export const GitHubIcon = (props) => (
  <svg 
    strokeLinejoin="round" 
    strokeLinecap="round" 
    strokeWidth="2" 
    stroke="currentColor" 
    fill="none" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinkedInIcon = (props) => (
  <svg
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const EmailIcon = (props) => (
  <svg
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
