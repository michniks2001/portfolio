import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { StackingProjectsCards } from "@/components/StackingProjectsCards";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";

// Function to get project data
function getProjects() {
  return [
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
      githubUrl: null
    }
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-4 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
