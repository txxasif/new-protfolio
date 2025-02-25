"use client";

import ProjectCard from "./ProjectCard";
import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJs,
  FaPython,
  FaDocker,
  FaAws,
  FaVuejs,
  FaPhp,
  FaJava,
} from "react-icons/fa";

// Define the tech stack interface
interface TechItem {
  name: string;
  icon: ReactNode;
}

// Define the project interface
interface Project {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string; // Made optional
  color: string;
  techStack: TechItem[];
}

// Common styling for all icons
const iconStyle = "h-6 w-6";

// Updated projects array with tech stack icons
const projects: Project[] = [
  {
    name: "Awesome Project",
    details:
      "A sophisticated web application built with React and Node.js. It features real-time data synchronization, advanced state management with Redux, and a responsive design using Tailwind CSS. The project demonstrates best practices in modern web development, including code splitting, lazy loading, and optimized performance.",
    liveLink: "https://awesome-project.vercel.app",
    githubLink: "https://github.com/yourusername/awesome-project",
    color: "#3b82f6",
    techStack: [
      { name: "React", icon: <FaReact className={iconStyle} /> },
      { name: "Node.js", icon: <FaNodeJs className={iconStyle} /> },
      { name: "JavaScript", icon: <FaJs className={iconStyle} /> },
    ],
  },
  {
    name: "Cool API",
    details:
      "A robust RESTful API built with Express.js and MongoDB. It implements JWT authentication, rate limiting, and comprehensive error handling. The API is fully documented with Swagger and includes automated tests using Jest.",
    // No liveLink provided, should render a disabled button
    githubLink: "https://github.com/yourusername/cool-api",
    color: "#10b981",
    techStack: [
      { name: "Node.js", icon: <FaNodeJs className={iconStyle} /> },
      { name: "MongoDB", icon: <FaDatabase className={iconStyle} /> },
      { name: "Express", icon: <FaServer className={iconStyle} /> },
    ],
  },
  {
    name: "Cloud Solution",
    details:
      "A cloud-native application leveraging AWS services. Features containerized microservices with Docker, serverless functions, and automated CI/CD pipelines. Implements infrastructure as code and follows cloud best practices.",
    liveLink: "https://cloud-solution.example.com",
    githubLink: "https://github.com/yourusername/cloud-solution",
    color: "#f59e0b",
    techStack: [
      { name: "Docker", icon: <FaDocker className={iconStyle} /> },
      { name: "AWS", icon: <FaAws className={iconStyle} /> },
      { name: "Python", icon: <FaPython className={iconStyle} /> },
    ],
  },
  {
    name: "Enterprise Portal",
    details:
      "A comprehensive enterprise portal built with Java and Spring Boot. This application provides role-based access control, document management, workflow automation, and integration with multiple enterprise systems. Deployed using a microservices architecture.",
    // No links provided, both buttons should be disabled
    color: "#8b5cf6",
    techStack: [
      { name: "Java", icon: <FaJava className={iconStyle} /> },
      { name: "Docker", icon: <FaDocker className={iconStyle} /> },
      { name: "AWS", icon: <FaAws className={iconStyle} /> },
    ],
  },
  {
    name: "Legacy System Migration",
    details:
      "A PHP-based migration tool that helped transition a legacy system to a modern architecture. Features automated data transformation, validation rules, and parallel processing capabilities. Successfully migrated over 10 million records with 99.9% accuracy.",
    liveLink: "https://migration-tool.demo.com",
    // No githubLink provided, GitHub button should be disabled
    color: "#ec4899",
    techStack: [
      { name: "PHP", icon: <FaPhp className={iconStyle} /> },
      { name: "Vue.js", icon: <FaVuejs className={iconStyle} /> },
      { name: "MySQL", icon: <FaDatabase className={iconStyle} /> },
    ],
  },
];

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert" className="p-4 border border-red-500 rounded bg-red-50">
      <p className="font-semibold">Something went wrong:</p>
      <pre className="text-sm mt-2 p-2 bg-red-100 rounded">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Try again
      </button>
    </div>
  );
}

export function Projects() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ErrorBoundary
            key={index}
            FallbackComponent={ErrorFallback}
            onReset={() => {
              // Reset the state of your app so the error doesn't happen again
            }}
          >
            <ProjectCard {...project} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
}
