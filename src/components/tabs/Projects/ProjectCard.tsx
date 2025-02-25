"use client";

import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

// Update the interface to accept an array of tech objects
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string; // Made optional
  color?: string;
  techStack: TechItem[];
}

const ProjectCard = React.memo(
  ({
    name,
    details,
    liveLink,
    githubLink,
    color = "#3b82f6",
    techStack,
  }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpand = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);

    // Animation variants for tech icons
    const iconVariants = {
      hover: {
        scale: 1.2,
        rotate: 10,
        transition: { duration: 0.2 },
      },
    };

    // Button wrapper that conditionally renders Link or disabled button
    const ButtonWrapper = ({
      href,
      children,
    }: {
      href?: string;
      children: React.ReactNode;
    }) => {
      if (href) {
        return (
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </Link>
          </Button>
        );
      }

      return (
        <Button
          variant="outline"
          className="flex items-center gap-2 opacity-50 cursor-not-allowed"
          disabled
        >
          {children}
        </Button>
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md overflow-hidden border-gray-700">
          <CardHeader className="pb-4">
            <div className="flex gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  className="flex flex-col items-center"
                >
                  <motion.div
                    variants={iconVariants}
                    className="text-gray-700 mb-1"
                    style={{ color }}
                  >
                    {tech.icon}
                  </motion.div>
                  <span className="text-xs">{tech.name}</span>
                </motion.div>
              ))}
            </div>
            <CardTitle className="text-2xl font-bold mt-3">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : "3em" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground">{details}</p>
            </motion.div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpand}
              className="mt-2 w-full flex items-center justify-center"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
              <span className="sr-only">
                {isExpanded ? "Show less" : "Show more"}
              </span>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ButtonWrapper href={liveLink}>
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </ButtonWrapper>
              </motion.div>
            </AnimatePresence>

            <ButtonWrapper href={githubLink}>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonWrapper>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
