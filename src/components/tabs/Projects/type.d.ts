interface TechItem {
  name: string;
  icon: ReactNode;
}

interface Project {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string;
  color: string;
  techStack: TechItem[];
}
