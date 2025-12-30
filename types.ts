import { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  subtitle?: string;
  tech: string[];
  description: string[];
  imageUrl: string;
  links?: {
    demo?: string;
    code?: string;
  };
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}