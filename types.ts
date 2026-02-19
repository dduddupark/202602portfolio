
export interface Technology {
  name: string;
  colorClass: string;
}

export interface MainProject {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  responsibilities: string[];
  screenshots: string[];
  icon: string;
  iconBg: string;
  technologies: Technology[];
  heroImage?: string;
}

export interface Skill {
  id: string;
  title: string;
  icon: string;
}

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  heroImage?: string;
  externalUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
  fullDescription?: string;
  keyFeatures?: string[];
}
