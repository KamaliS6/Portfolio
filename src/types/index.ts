export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  date: string;
  thumbnail: string;
  hero: {
    type: "image" | "video";
    src: string;
  };
  brief: {
    client?: string;
    role: string;
    overview: string;
  };
  process: ProcessStep[];
  tools: string[];
  links?: { label: string; url: string }[];
  icon?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
  order: number;
}

export interface SiteConfig {
  name: string;
  title: string;
  email: string;
  resumePath: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "linkedin" | "github";
  primary: boolean;
}
