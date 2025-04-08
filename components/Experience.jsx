"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function Experience() {
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

  const experiences = [
    {
      title: "Kodely Leader",
      company: "Kodely, New York, NY",
      period: "Feb. 2024 - Present",
      description: [
        "Instruct a class of 12-15 students in Python programming",
        "Lead hands-on projects using P5 to teach game development",
        "Facilitate AI lessons with interactive coding exercises",
        "Design coding exercises to enhance algorithmic thinking and debugging skills"
      ]
    }
  ];

  const education = [
    {
      institution: "Hunter College – City University of New York",
      degree: "Bachelor of Arts in Computer Science, Minor in Statistics",
      period: "Aug. 2019 - Present",
      expectedGraduation: "Jun. 2026",
      description: [
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="max-w-3xl mx-auto text-center mb-12" variants={itemVariants}>
          <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>Experience</motion.h2>
          <motion.div className="h-1 w-20 bg-primary mx-auto mb-6" variants={itemVariants}></motion.div>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-2xl font-bold mb-6" variants={itemVariants}>Work Experience</motion.h3>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="mb-6 border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                    <CardDescription className="text-sm">{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Education */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-2xl font-bold mb-6" variants={itemVariants}>Education</motion.h3>
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="mb-6 border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription className="text-base">{edu.degree}</CardDescription>
                    <CardDescription className="text-sm">{edu.period}</CardDescription>
                    <CardDescription className="text-sm font-medium">Expected Graduation: {edu.expectedGraduation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
