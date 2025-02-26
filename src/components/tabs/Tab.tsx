"use client";
import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./Home/Home"), { ssr: false });
const About = dynamic(() => import("./About/About"), { ssr: false });
const Projects = dynamic(() => import("./Projects/Projects"), { ssr: false });

export const TABS: Record<string, React.ComponentType> = {
  home: Home,
  about: About,
  projects: Projects,
};
