"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="max-w-3xl mx-auto text-center mb-12" variants={itemVariants}>
          <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>About Me</motion.h2>
          <motion.div className="h-1 w-20 bg-primary mx-auto mb-6" variants={itemVariants}></motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <motion.div 
                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20"
                    variants={itemVariants}
                  >
                    <Image 
                      src="/profile-pic.jpg" 
                      alt="Samuel Michnik" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <CardHeader className="p-0">
                    <motion.div variants={itemVariants}>
                      <CardTitle className="text-2xl font-bold mb-2">Samuel Michnik</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">Software Engineer</CardDescription>
                    </motion.div>
                  </CardHeader>
                  
                  <motion.div className="space-y-4 text-muted-foreground" variants={itemVariants}>
                    <p>
                      I'm a Software Engineer currently pursuing a Bachelor of Arts in Computer Science with a minor in Statistics at Hunter College. My passion lies in developing modern web applications and exploring the intersection of technology and user experience.
                    </p>
                    <p>
                      With experience in both front-end and back-end development, I enjoy creating responsive, user-friendly applications that solve real-world problems. I'm particularly interested in AI applications and data-driven solutions.
                    </p>
                    <p>
                      When I'm not coding, I'm mentoring aspiring developers, partaking in martial arts and athletics (mainly wrestling and weightlifting), and solving different types of twisty puzzles like Rubik's cubes. I believe in continuous learning and maintaining a balanced approach to both mental and physical challenges.
                    </p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
