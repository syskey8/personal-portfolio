import type React from "react";
import type { LucideIcon } from "lucide-react";

export type Message = {
  id: string;
  sender: "user" | "bot";
  text?: string;
  component?: React.ReactNode;
  timestamp: string;
  status?: "Delivered" | "Read";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  techStack: string[];
  role: string;
  type: string;
  features: string[];
  aiHint: string;
  githubUrl?: string;
  demoUrl?: string;
  status: string;
  achievement?: string;
  theme?: string;
  researchPaper?: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: "Internship" | "Full-time";
  description: string;
  responsibilities: string[];
  skills: string[];
  aiHint: string;
  achievements: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  aiHint: string;
  category: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  board?: string;
  duration: string;
  status: "Pursuing" | "Completed";
  specialization?: string;
  aiHint: string;
  currentYear?: string;
  stream?: string;
};

export type Persona = {
    id: string;
    name: string;
    avatar: string;
    tagline: string;
    prompt: string;
    description: string;
    topics: { icon: LucideIcon, text: string }[];
};
