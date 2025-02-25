"use client";

import ProjectCard from "./ProjectCard";
import { ErrorBoundary } from "react-error-boundary";
import { FaReact, FaJs } from "react-icons/fa";

const iconStyle = "h-6 w-6";

const projects: Project[] = [
  {
    name: "Floodscape Memories",
    details:
      "Floodscape Memories, a special place where we, as a close-knit group of friends who feel like family, come together to preserve our shared experiences. This website holds the photos and memories from the flood that impacted Feni, a time when we banded together to help those in need. As we continue to build our story, we'll keep adding to this collection, ensuring that these moments stay with us for years to come.",
    liveLink: "https://floodscape-memories.vercel.app/",
    githubLink: "https://github.com/txxasif/FloodscapeMemories",
    color: "#3b82f6",
    techStack: [
      { name: "React", icon: <FaReact className={iconStyle} /> },
      { name: "JavaScript", icon: <FaJs className={iconStyle} /> },
    ],
  },
  {
    name: "Ecopass",
    details:
      "Ecopass is an innovative project leveraging the Ecobalyse API to provide accurate and actionable sustainability insights. It is designed to analyze environmental footprints, offering businesses and individuals a comprehensive understanding of their impact on the planet.",
    liveLink: "https://dev.ecopass.huipsov.fi/en",

    color: "#3b82f6",
    techStack: [
      { name: "React", icon: <FaReact className={iconStyle} /> },
      { name: "JavaScript", icon: <FaJs className={iconStyle} /> },
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
    <div className="px-8 pt-4 pb-4 sm:pt-28 space-y-8">
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
