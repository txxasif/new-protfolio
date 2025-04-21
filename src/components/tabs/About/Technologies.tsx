import { Heading } from "./Heading";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  JavaScriptIcon,
  MongoDbIcon,
  NodeJsIcon,
  PostGresIcon,
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  GoLang,
  GatsbyIcon,
} from "@/icons";

export const Technologies = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const technologies = [
    { Icon: JavaScriptIcon, name: "JavaScript", color: "#F7DF1E" },
    { Icon: TypeScriptIcon, name: "TypeScript", color: "#3178C6" },
    { Icon: GoLang, name: "GoLang", color: "#00ADD8" },
    { Icon: NextJsIcon, name: "Next.js", color: "#000000" },
    { Icon: ReactIcon, name: "React", color: "#61DAFB" },
    { Icon: GatsbyIcon, name: "Gatsby", color: "#663399" },
    { Icon: NodeJsIcon, name: "Node.js", color: "#339933" },
    { Icon: MongoDbIcon, name: "MongoDB", color: "#47A248" },
    { Icon: PostGresIcon, name: "PostgreSQL", color: "#4169E1" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -20,
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: i * 0.07 + 0.3,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07 + 0.5,
        duration: 0.5,
      },
    }),
  };

  const bgCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 0.03,
      transition: {
        delay: i * 0.07 + 0.6,
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <div className="space-y-10 flex-1 p-6" ref={containerRef}>
      <Heading title="Technologies" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 dark:border-[#222] bg-white bg-opacity-5 dark:bg-[#111] dark:bg-opacity-5 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              custom={index}
              variants={iconVariants}
              className="mb-3 p-3 rounded-full"
              style={{ backgroundColor: `${tech.color}15` }}
            >
              <tech.Icon className="size-8 text-[#767676]" />
            </motion.div>

            <motion.span
              custom={index}
              variants={textVariants}
              className="text-base font-medium"
              style={{ color: tech.color }}
            >
              {tech.name}
            </motion.span>

            <motion.div
              custom={index}
              variants={bgCircleVariants}
              className="absolute -bottom-10 -right-10 rounded-full w-40 h-40 z-0"
              style={{ backgroundColor: tech.color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
