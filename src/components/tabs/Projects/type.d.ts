interface TechItem {
  name: string;
  icon: ReactNode;
}

interface Project {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string;
  techStack: TechItem[];
  image?: string;
  category?: string;
  gradient?: string;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

interface ProjectCardProps {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string;
  techStack: TechItem[];
  image?: string;
  category?: string;
  gradient?: string;
  index?: number;
}
