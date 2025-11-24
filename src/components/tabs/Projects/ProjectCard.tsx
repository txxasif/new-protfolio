"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardPropsWithIndex extends ProjectCardProps {
  index: number;
}

const ProjectCard = React.memo(
  ({
    name,
    details,
    liveLink,
    githubLink,
    techStack,
    image,
    gradient = "from-purple-500 to-pink-500",
    index,
  }: ProjectCardPropsWithIndex) => {
    const [imageError, setImageError] = useState(false);
    const isEven = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl bg-card border border-border"
      >
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[400px] lg:min-h-[500px]`}>
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden bg-secondary/20">
            {image && !imageError ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageError(true)}
                priority={index < 2}
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${gradient}`}
              />
            )}
          </div>

          {/* Content Section */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-12">
            {/* Project Number */}
            <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
              <span className="text-6xl lg:text-8xl font-bold text-muted-foreground/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-6 relative z-10">
              {/* Title */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {details}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * techIndex }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl border border-border transition-all hover:border-primary/50"
                  >
                    <span className="text-foreground">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {liveLink && (
                <Link
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>View Live Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              )}
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl font-semibold text-sm transition-all border border-border hover:border-primary/50"
                >
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
