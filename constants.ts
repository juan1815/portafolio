import { NavItem, Project, ExperienceItem, Skill } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelEs: 'Inicio' },
  { id: 'about', labelEn: 'About', labelEs: 'Sobre Mí' },
  { id: 'skills', labelEn: 'Skills', labelEs: 'Habilidades' },
  { id: 'projects', labelEn: 'Projects', labelEs: 'Proyectos' },
  { id: 'experience', labelEn: 'Experience', labelEs: 'Experiencia' },
  { id: 'contact', labelEn: 'Contact', labelEs: 'Contacto' },
];

export const SKILLS_DATA: Skill[] = [
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'Machine Learning', A: 90, fullMark: 100 },
  { subject: 'Computer vision', A: 85, fullMark: 100 },
  { subject: 'SQL/NoSQL', A: 70, fullMark: 100 },
  { subject: 'Cloud (AWS/GCP)', A: 50, fullMark: 100 },
  { subject: 'Deep Learning', A: 85, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Procesamento Avanzado de documentos Gubernamentales con IA',
    category: 'LLM',
    descriptionEn: 'Project that uses DocDetection to analyze complex legislative documents and extract text and visual information, combining computer vision+NLP, even when OCR is deficient.',
    descriptionEs: 'Proyecto que usa DocDetection para analizar documentos legislativos complejos y extraer texto e información visual, combinando visión por computadora + PLN, incluso cuando el OCR es deficiente.',
    image: 'https://hackernoon.imgix.net/hn-images/1*YFO9qMzYdUtuzy3daSnpQw.jpeg?w=3840',
    techStack: ['Python', 'Doctectetion']
  },
  {
    id: 2,
    title: 'VisionGuard AI',
    category: 'Computer Vision',
    descriptionEn: 'Real-time object detection system for safety monitoring in industrial environments.',
    descriptionEs: 'Sistema de detección de objetos en tiempo real para monitoreo de seguridad en entornos industriales.',
    image: 'https://images.ctfassets.net/3viuren4us1n/1Ghw96A2tcYRfRezOwtmjx/04efa17f5d5beb042bbb7f8dc18764e2/Computer_vision.jpg?fm=webp&w=1920',
    techStack: ['YOLOv8', 'OpenCV', 'PyTorch']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    year: '2025 - Present',
    titleEn: 'Data Scientist',
    titleEs: 'Científico de Datos',
    company: 'Fotograbados LTDA',
    descEn: 'Development of chatbots and descriptive and prescriptive models.',
    descEs: 'Desarrollo de modelos chatbots y modelos descriptivos y preescriptivos, .',
    type: 'work'
  },
  {
    id: 2,
    year: '2025',
    titleEn: 'Data Science',
    titleEs: 'Científico de Datos',
    company: 'Architecg - NIT.901.340.780-3',
    descEn: 'Development of visual models, hybrid models with REGEX and systems for extracting and structuring legislative data.',
    descEs: 'Desarrollo de modelos visuales, híbridos con REGEX y sistemas de extracción y estructuracion de datos legislativos.',
    type: 'work'
  },
  {
    id: 3,
    year: '2024 - 2025',
    titleEn: 'Desarollador de sofware',
    titleEs: 'Sofware Developer',
    company: 'Grupo ASD - NIT.860.510.031-7',
    descEn: 'Development of visual models, hybrid models with REGEX and systems for extracting and structuring legislative data.',
    descEs: 'Desarrollo de sofware en extracción, estructuracion y visualizacion de datos.',
    type: 'work'
  },
  {
    id: 4,
    year: '2023 - Present',
    titleEn: 'Engineer Data Science',
    titleEs: 'Ingeniero en Ciencia de Datos',
    company: 'Universidad Iberoamericana',
    descEn: 'Multidisciplinary development that uses statistical applications, AI, and programming to manage, process, and analyze data.',
    descEs: 'Desarrollo multidiciplinario que aplica stadisticas, IA y programación para gestionar, procesar y analizar datos.',
    type: 'education'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for a portfolio website of a Data Scientist.
Your name is "Viernes".
You represent the candidate.
Answer questions about the candidate's skills, experience, and projects based on the following data:
- Skills: Python, ML, Deep Learning, SQL, Cloud.
- Projects: Neural Market Predictor, VisionGuard AI, Sentiment Engine.
- Tone: Professional, slightly futuristic, helpful, and concise.
- If asked about contact info, refer them to the contact section form.
- You can speak both English and Spanish comfortably.
`;