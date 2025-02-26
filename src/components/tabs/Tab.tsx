"use client";
import React from "react";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";

export const TABS: Record<string, React.FC> = {
  home: Home,
  about: About,
  projects: Projects,
};
