export type Language = 'en' | 'es';

export interface NavItem {
  id: string;
  labelEn: string;
  labelEs: string;
}

export interface Skill {
  subject: string;
  A: number; // Proficiency (0-100)
  fullMark: number;
}

export interface Project {
  id: number;
  title: string;
  category: 'NLP' | 'Computer Vision' | 'Data Viz' | 'LLM';
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  techStack: string[];
}

export interface ExperienceItem {
  id: number;
  year: string;
  titleEn: string;
  titleEs: string;
  company: string;
  descEn: string;
  descEs: string;
  type: 'education' | 'work';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}