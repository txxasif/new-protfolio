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
}
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  name: string;
  details: string;
  liveLink?: string;
  githubLink?: string;
  color?: string;
  techStack: TechItem[];
}
