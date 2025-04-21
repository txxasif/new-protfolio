import { Heading } from "./Heading";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  JavaScriptIcon,
  MongoDbIcon,
  NodeJsIcon,
  PostGresIcon,
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  GoLang,
} from "@/icons";

export const TechnologiesGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const technologies = [
    {
      Icon: JavaScriptIcon,
      name: "JavaScript",
      color: "#F7DF1E",
      category: "Languages",
      level: 90,
    },
    {
      Icon: TypeScriptIcon,
      name: "TypeScript",
      color: "#3178C6",
      category: "Languages",
      level: 85,
    },
    {
      Icon: GoLang,
      name: "GoLang",
      color: "#00ADD8",
      category: "Languages",
      level: 75,
    },
    {
      Icon: ReactIcon,
      name: "React",
      color: "#61DAFB",
      category: "Frontend",
      level: 92,
    },
    {
      Icon: NextJsIcon,
      name: "Next.js",
      color: "#000000",
      category: "Frontend",
      level: 88,
    },
    {
      Icon: NodeJsIcon,
      name: "Node.js",
      color: "#339933",
      category: "Backend",
      level: 87,
    },
    {
      Icon: MongoDbIcon,
      name: "MongoDB",
      color: "#47A248",
      category: "Databases",
      level: 80,
    },
    {
      Icon: PostGresIcon,
      name: "PostgreSQL",
      color: "#4169E1",
      category: "Databases",
      level: 83,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-10 flex-1 p-6" ref={containerRef}>
      <Heading title="Technologies" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 auto-rows-[100px]"
      >
        {technologies.map((tech, index) => {
          // Vary the size of some items for visual interest
          const isLarge = index === 0 || index === 3 || index === 5;
          const gridClass = isLarge ? "col-span-2 row-span-2" : "";

          return (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 10px 30px rgba(${
                  tech.color
                    .replace("#", "")
                    .match(/.{2}/g)
                    ?.map((hex) => parseInt(hex, 16))
                    .join(", ") || "0,0,0"
                }, 0.1)`,
              }}
              className={`${gridClass} backdrop-blur-sm bg-opacity-5 bg-white dark:bg-opacity-5 dark:bg-[#111] rounded-xl p-4 flex flex-col border border-gray-200 dark:border-[#222] relative overflow-hidden`}
            >
              <div className="flex items-center mb-2">
                <tech.Icon
                  className={`${isLarge ? "size-8" : "size-6"} text-[#767676]`}
                />
                <h3
                  className={`${
                    isLarge ? "text-xl" : "text-base"
                  } font-medium ml-2`}
                >
                  {tech.name}
                </h3>
              </div>

              <span className="text-xs text-gray-500 px-2 py-1 rounded-full border border-gray-200 dark:border-[#333] w-fit">
                {tech.category}
              </span>

              <div className="mt-auto">
                <div className="flex justify-between items-center mt-2 mb-1">
                  <span className="text-xs">Skill Level</span>
                  <span
                    className={`text-xs ${
                      isLarge ? "text-sm" : ""
                    } font-semibold`}
                    style={{ color: tech.color }}
                  >
                    {tech.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-[#222] h-1 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.03, scale: 4 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                className="absolute -right-5 -bottom-5 rounded-full w-12 h-12 z-0"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
