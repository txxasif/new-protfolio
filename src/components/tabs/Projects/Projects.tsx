"use client";

import ProjectCard from "./ProjectCard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallBack";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  NextJsIcon,
  ExpressJs,
  ThreeJSIcon,
} from "@/icons";

const iconStyle = "h-6 w-6";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Pioo AI",
      details:
        "Pioo AI is an advanced AI-powered chatbot platform similar to ChatGPT, designed to provide intelligent and natural language interactions. Whether for answering questions, assisting with tasks, or engaging in meaningful conversations, Pioo AI delivers fast and accurate responses, making it a versatile tool for various applications.",
      liveLink: "https://pioo.ai/",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
        { name: "TyepScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Ecopass",
      details:
        "Ecopass is an innovative project leveraging the Ecobalyse API to provide accurate and actionable sustainability insights. It is designed to analyze environmental footprints, offering businesses and individuals a comprehensive understanding of their impact on the planet.",
      liveLink: "https://dev.ecopass.huipsov.fi/en",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
        { name: "TyepScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Floodscape Memories",
      details:
        "Floodscape Memories, a special place where we, as a close-knit group of friends who feel like family, come together to preserve our shared experiences. This website holds the photos and memories from the flood that impacted Feni, a time when we banded together to help those in need. As we continue to build our story, we'll keep adding to this collection, ensuring that these moments stay with us for years to come.",
      liveLink: "https://floodscape-memories.vercel.app/",
      githubLink: "https://github.com/txxasif/FloodscapeMemories",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
        { name: "TyepScript", icon: <TypeScriptIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Renter",
      details: `Renter" is an innovative Web-based rental housing platform designed to simplify the
rental process for landlords, tenants, and property seekers alike. It serves as a
comprehensive solution for posting, searching, and managing rental properties, catering to
the needs of both property owners and renters. With its user-friendly interface and
intuitive features, "Renter" aims to streamline the rental experience by providing a
centralized hub for all rental-related activities.`,
      liveLink: "https://renter-one.vercel.app/",
      githubLink: "https://github.com/txxasif/renter-client",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
        { name: "TyepScript", icon: <TypeScriptIcon className={iconStyle} /> },
        { name: "ExpressJs", icon: <ExpressJs className={iconStyle} /> },
      ],
    },
    {
      name: "Tic Tac Toe",
      details:
        "For Practice purpose i've created a Tic Tac Toe game using ThreeJS and R3Fiber",
      liveLink: "https://tic-tac-toe-assignment-two.vercel.app/",
      githubLink: "https://github.com/txxasif/tic-tac-toe-assignment",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
        { name: "ThreeJS", icon: <ThreeJSIcon className={iconStyle} /> },
      ],
    },
    {
      name: "Algorithm Visualization",
      details:
        "Algorithm Visualization is an interactive web tool designed to help users understand and visualize sorting algorithms in action. With a simple and intuitive interface, users can generate random data bars, adjust their size, and watch as different sorting techniques—such as Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and Selection Sort—organize the data step by step. This tool is perfect for students, developers, and anyone looking to grasp the inner workings of sorting algorithms through real-time animations.",
      liveLink:
        "https://algoritham-visualization-cl49zhwnl-txxasif.vercel.app/",
      githubLink:
        "https://github.com/txxasif/algoritham-visualization/tree/main",

      techStack: [
        { name: "NextJs", icon: <NextJsIcon className={iconStyle} /> },
        { name: "JavaScript", icon: <JavaScriptIcon className={iconStyle} /> },
      ],
    },
  ];
  return (
    <div className="px-8 pt-4 pb-4 sm:pt-28 space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ErrorBoundary
            key={index}
            FallbackComponent={ErrorFallback}
            onReset={() => {}}
          >
            <ProjectCard {...project} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
}
