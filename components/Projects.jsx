"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Projects() {
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

  const projects = [
    {
      title: "ClarityAI",
      description: "An AI-powered task organization website that helps users efficiently organize and prioritize their tasks and projects.",
      image: "/clarityai-logo.svg",
      tags: ["Next.js", "Vercel", "OpenAI", "TailwindCSS", "React"],
      achievements: [
        "Developed an intuitive user interface for task management with AI-assisted organization",
        "Implemented OpenAI integration to analyze and categorize tasks based on priority and context",
        "Created a responsive design that works seamlessly across desktop and mobile devices",
        "Deployed on Vercel with continuous integration for reliable performance and updates"
      ],
      liveUrl: "https://sm-clarity-ai.vercel.app",
      githubUrl: "https://github.com/michniks2001/clarityai"
    },
    {
      title: "MoodBot",
      description: "Second Place – AI Agents Hackathon: Building for Social and Marketing Use Cases. An AI-driven Discord bot using Python, monitoring user interactions and identifying distress signals across 30+ messages per hour to promote mental wellness.",
      image: "/discord-logo.svg",
      tags: ["Python", "Discord.py", "DeepSee", "NLP", "AI"],
      achievements: [
        "Implemented sentiment analysis and toxicity detection pipelines with NLP models, achieving 92% accuracy in real-time moderation and user support",
        "Created a mental wellness challenge system, delivering over 5 unique activities, encouraging positive habits and boosting user engagement",
        "Optimized bot interactions using Discord.py, handling 100+ daily messages for seamless user communication",
        "Deployed the bot for live testing during the hackathon, successfully moderating a 20+ member community server and enhancing user engagement"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/michniks2001/social-hackathon"
    },
    {
      title: "ChronoNote Reminder Extraction Service",
      description: "A back-end reminder extraction service using OpenAI's API to scan user notes and detect dates, achieving 95% in event detection for automated reminders.",
      image: "/chrononote-logo.svg",
      tags: ["Python", "Django REST Framework", "PostgreSQL", "OpenAI"],
      achievements: [
        "Architected a text-processing pipeline with Django REST Framework and OpenAI to extract date events and generate structured reminders in PostgreSQL",
        "Processed over 200 text inputs daily and reduced manual scheduling time by 40%",
        "Optimized back-end latency, achieving a 30% reduction in response time for date extraction and event creation",
        "Designed architecture for seamless frontend integration and supporting scalable, real-time processing as user traffic grows"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/michniks2001/alignly-io"
    },
    {
      title: "Ingredibud",
      description: "An AI-powered cooking assistant, generating 50+ personalized recipes and ingredient lists based on user preferences.",
      image: "/ingredibud-logo.svg",
      tags: ["Next.js", "Chakra-UI", "Groq", "Git", "GitHub", "Vercel"],
      achievements: [
        "Developed a responsive UI using Next.js, Chakra-UI, and the Groq AI API",
        "Ensured 100% up-time and sub-2 second response times for user queries",
        "Leveraged Git and GitHub for version control providing updates every 3 days for 2 weeks",
        "Deployed the website on Vercel, ensuring reliable performance and continuous availability with 100% up-time"
      ],
      liveUrl: "https://ingredibud.vercel.app",
      githubUrl: "https://github.com/michniks2001/ingredientbud-io"
    },
    {
      title: "Best Billing Co",
      description: "Corporate website for a medical billing company, featuring professional design and functionality.",
      image: "/bestbillingco_logo.jfif",
      tags: ["Next.js", "Vercel", "Google reCAPTCHA", "Squarespace"],
      achievements: [
        "Designed and developed a professional corporate website with modern UI/UX principles",
        "Implemented secure contact forms with Google reCAPTCHA integration",
        "Optimized for performance and SEO to improve client acquisition",
        "Deployed on Vercel for reliable hosting and performance"
      ],
      liveUrl: "https://bestbillingnyc.com",
      githubUrl: null // "https://github.com/michniks2001/bestbillingnyc"
    }
  ];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full bg-muted/20 flex items-center justify-center">
                  {project.image.endsWith(".svg") ? (
                    <div className="w-48 h-48 relative">
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
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex gap-4 w-full">
                    {project.githubUrl ? (
                      <>
                        <Button variant="outline" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
                        </Button>
                        {project.liveUrl && (
                          <Button className="flex-1" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
                          </Button>
                        )}
                      </>
                    ) : project.liveUrl ? (
                      <Button className="w-full" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
                      </Button>
                    ) : null}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
