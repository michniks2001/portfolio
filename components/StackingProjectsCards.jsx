"use client"

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StackingCards, { StackingCardItem } from '@/fancy/components/blocks/stacking-cards';

export function StackingProjectsCards({ projects }) {
  const containerRef = useRef(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="projects" className="py-20 px-4 md:px-8">
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
          Projects
        </motion.h2>
        
        <div className="relative" ref={containerRef}>
          <StackingCards 
            className="min-h-[200vh] pt-20 pb-80" 
            scrollOptons={{ target: containerRef }}
            scaleMultiplier={0.025}
            totalCards={projects.length}
          >
            {projects.map((project, index) => (
              <StackingCardItem 
                key={index} 
                index={index} 
                className="h-[450px] px-4"
                topPosition={`${10 + index * 8}vh`}
              >
                <Card className="h-full flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                  <div className="md:w-1/3 flex flex-col">
                    <div className="relative h-48 md:h-full bg-muted/20 flex items-center justify-center p-4">
                      {project.image.endsWith(".svg") ? (
                        <div className="w-40 h-40 relative">
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ) : (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 p-4 bg-muted/5">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow pb-2">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Key Achievements:</h4>
                        <ul className="list-disc pl-5 text-sm space-y-0.5 text-muted-foreground">
                          {project.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-2">
                      <div className="flex gap-4 w-full">
                        {project.githubUrl ? (
                          <>
                            <Button variant="outline" className="flex-1 relative z-20" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
                            </Button>
                            {project.liveUrl && (
                              <Button className="flex-1 relative z-20" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
                              </Button>
                            )}
                          </>
                        ) : project.liveUrl ? (
                          <Button className="w-full relative z-20" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
                          </Button>
                        ) : null}
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>
      </motion.div>
    </section>
  );
}
