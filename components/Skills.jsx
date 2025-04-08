"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function Skills() {
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
  
  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "HTML/CSS"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Chakra UI", "Shadcn", "TailwindCSS"]
    },
    {
      category: "Backend",
      skills: ["Django", "Django REST Framework", "FastAPI", "PostgreSQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitHub", "Docker", "Google Cloud", "Vercel", "Supabase"]
    },
    {
      category: "Data Science",
      skills: ["pandas", "NumPy", "Streamlit"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-muted/30">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills && category.skills.length > 0 && category.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium inline-block"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
