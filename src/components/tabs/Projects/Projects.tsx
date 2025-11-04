"use client";

import ProjectCard from "./ProjectCard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallBack";
import { motion } from "framer-motion";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  NextJsIcon,
  ExpressJs,
  ThreeJSIcon,
  GatsbyIcon,
} from "@/icons";

const iconStyle = "h-4 w-4";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Huipsov",
      details:
        "A comprehensive software development company platform providing senior EU-based tech teams, custom software solutions, and AI integration services. Trusted by 20+ companies including IBM, ShelterBox, and Ecopass. Features team augmentation, MVP development, SaaS solutions, and proven results across healthcare, fintech, and enterprise sectors.",
      category: "Corporate Website",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      image: "/images/projects/huipsov.png",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
      liveLink: "https://huipsov.fi/",
    },
    {
      name: "Pioo AI",
      details:
        "An advanced AI-powered chatbot platform similar to ChatGPT, designed to provide intelligent and natural language interactions with cutting-edge machine learning capabilities.",
      category: "Web App",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      image: "/images/projects/pioo.png",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
      liveLink: "https://pioo.ai/",
    },
    {
      name: "Peace Of Mind Technologies",
      details:
        "A comprehensive digital legacy and security platform empowering families to document, preserve, and protect their stories across generations. Features include Peace Of Mind app for legacy creation and Centurion—an AI-powered security tool that detects tampering, watermarks, and AI-generated content using pixel-level analysis.",
      category: "Mobile App",
      gradient: "from-orange-400 via-amber-400 to-blue-400",
      image: "/images/projects/pom-tech.png",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
      liveLink: "https://www.pomtech.us/",
    },
    {
      name: "Miragic AI",
      details:
        "An advanced virtual try-on platform powered by AI that provides realistic clothing fitting simulation with accurate fabric and body mapping. Features include instant results, realistic simulation, body mapping technology, and enterprise-grade security. Trusted by Fortune 500 companies with 150M+ asset creations.",
      category: "AI Platform",
      gradient: "from-purple-500 via-pink-500 to-blue-500",
      image: "/images/projects/miragic-ai.png",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
      liveLink: "https://miragic.ai/",
    },
    {
      name: "Parkolay Parking System",
      details:
        "A comprehensive parking management platform that streamlines operations with real-time dashboard analytics, vehicle tracking, and space management. Features include daily/monthly earning reports, revenue growth analytics, customer management, parking statistics, and an intuitive admin interface for managing parking lots, roles, and operational metrics.",
      category: "Parking System",
      gradient: "from-green-400 to-blue-500",
      image: "/images/projects/parokolay.png",
      liveLink: "https://main.d3u1eqtyinh739.amplifyapp.com/",
      techStack: [
        { name: "Gatsby", icon: <GatsbyIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Ecopass",
      details:
        "An innovative sustainability platform leveraging the Ecobalyse API to provide accurate environmental footprint analysis and actionable insights for businesses and individuals.",
      category: "Sustainability",
      gradient: "from-emerald-400 to-teal-500",
      image: "/images/projects/ecopass.png",
      liveLink: "https://dev.ecopass.huipsov.fi/en",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Floodscape Memories",
      details:
        "A heartfelt digital collection preserving memories from the Feni flood relief efforts. A collaborative platform where friends came together to help those in need and document their journey.",
      category: "Social Impact",
      gradient: "from-cyan-400 to-blue-600",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://floodscape-memories.vercel.app/",
      githubLink: "https://github.com/txxasif/FloodscapeMemories",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Renter",
      details:
        "A comprehensive rental housing platform streamlining the rental process for landlords, tenants, and property seekers with intuitive search, posting, and management features.",
      category: "Real Estate",
      gradient: "from-orange-400 to-red-500",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://renter-one.vercel.app/",
      githubLink: "https://github.com/txxasif/renter-client",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "TypeScript", icon: <TypeScriptIcon className={iconStyle} /> },
        { name: "Express", icon: <ExpressJs className={iconStyle} /> },
      ],
    },
    {
      name: "Tic Tac Toe 3D",
      details:
        "An immersive 3D Tic Tac Toe game built with Three.js and React Three Fiber, showcasing advanced 3D graphics and interactive gameplay in the browser.",
      category: "Game",
      gradient: "from-violet-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://tic-tac-toe-assignment-two.vercel.app/",
      githubLink: "https://github.com/txxasif/tic-tac-toe-assignment",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "Three.js", icon: <ThreeJSIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Algorithm Visualizer",
      details:
        "An interactive educational tool for visualizing sorting algorithms in real-time. Features include Bubble Sort, Merge Sort, Quick Sort, and more with customizable data sets and speed controls.",
      category: "Education",
      gradient: "from-pink-400 to-rose-600",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      liveLink:
        "https://algoritham-visualization-cl49zhwnl-txxasif.vercel.app/",
      githubLink:
        "https://github.com/txxasif/algoritham-visualization/tree/main",
      techStack: [
        { name: "Next.js", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Works
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            A collection of projects showcasing modern web development, creative
            solutions, and innovative technologies.
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <ErrorBoundary
              key={index}
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <ProjectCard {...project} index={index} />
            </ErrorBoundary>
          ))}
        </div>
      </div>
    </div>
  );
}
