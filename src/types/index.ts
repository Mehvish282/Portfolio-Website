export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'ml' | 'frontend' | 'backend' | 'data' | 'tools';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}