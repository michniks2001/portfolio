"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { SocialButton, GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/ui/social-button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <footer className="py-8 px-4 md:px-8 bg-muted/50 border-t">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="mb-4 md:mb-0" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Samuel Michnik. All rights reserved.
          </p>
        </motion.div>
        
        <motion.div className="flex space-x-6" variants={itemVariants}>
          <SocialButton
            href="https://github.com/michniks2001"
            label="GitHub"
            icon={GitHubIcon}
          />
          <SocialButton
            href="https://linkedin.com/in/samuel-michnik"
            label="LinkedIn"
            icon={LinkedInIcon}
          />
          <SocialButton
            href="mailto:michniksamuel@gmail.com"
            label="Email"
            icon={EmailIcon}
          />
        </motion.div>
      </motion.div>
    </footer>
  );
}
