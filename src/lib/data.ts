
import type { Project, Experience, Certification, Education } from "./types";
import { Github, Instagram, Linkedin, User, Twitter, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Wrench } from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Tanmay Anil Deorukhakar",
  title: "Aspiring Software Engineer | AI & ML Enthusiast",
  email: "tanmayflicks@gmail.com",
  phone: "+91 8657843090",
  location: "Mumbai, India",
  bio: "Computer Science student passionate about building real-world software applications. Seeking an internship to apply strong problem-solving and full-stack development skills.",
  currentStatus: "B.E Computer Science Engineering (AIML) student at Mumbai University",
  graduationYear: 2026,
  aiHints: [
    "computer science student", "software engineer", "ai ml enthusiast", "full stack developer", 
    "problem solver", "internship seeker", "mumbai student", "engineering student"
  ]
};

// Projects with detailed information
export const projects: Project[] = [
  {
    id: "1",
    title: "DSAdojo - Gamified DSA Learning Platform",
    description: "A Duolingo-style interface for mastering Data Structures and Algorithms with daily streaks, XP system, and leaderboards. Features categorized question bank with MCQs, fill-in-the-blanks, code-completion, and drag & drop exercises.",
    longDescription: "DSAdojo revolutionizes how students learn Data Structures and Algorithms by gamifying the entire experience. Built with a modern tech stack including React and TailwindCSS, it provides an engaging learning environment that encourages consistent practice through streaks and competitive elements.",
    imageUrl: "https://placehold.co/600x400.png",
    techStack: ["React", "TailwindCSS", "Supabase", "Python", "ElevenLabs", "Tavus"],
    role: "Full Stack Developer",
    type: "Personal Project",
    features: [
      "Duolingo-style gamified interface",
      "Daily streaks and XP system",
      "Leaderboards for competition",
      "Multiple question formats (MCQs, fill-in-blanks, code-completion, drag & drop)",
      "User authentication and progress tracking",
      "Admin dashboard for content management",
      "Structured problem categorization"
    ],
    aiHint: "dsa learning platform",
    githubUrl: "https://github.com/syskey8/DSAdojo",
    demoUrl: "#",
    status: "completed"
  },
  {
    id: "2", 
    title: "StockSim - Stock Market Simulator",
    description: "Risk-free stock trading simulator for beginners using real-time market data. Winner of Hackonomics 2025 Global Hackathon. Features gamified portfolio tracking, badges, and peer performance comparison.",
    longDescription: "StockSim addresses financial literacy by providing a hands-on, risk-free environment for learning stock trading. The platform uses real-time market data to simulate trading experiences while incorporating gamification elements to maintain user engagement.",
    imageUrl: "https://placehold.co/600x400.png",
    techStack: ["React", "Node.js", "Express", "Firebase", "Alpha Vantage API"],
    role: "Backend + Product Lead",
    type: "Hackathon Project",
    achievement: "Hackonomics 2025 Global Hackathon Winner",
    features: [
      "Risk-free stock trading simulation",
      "Real-time market data integration", 
      "Gamified portfolio tracking",
      "Badge system for achievements",
      "Peer performance comparison",
      "Educational storytelling approach",
      "Financial literacy focus"
    ],
    aiHint: "stock market simulator",
    githubUrl: "https://github.com/syskey8/StockSim",
    demoUrl: "#",
    status: "completed"
  },
  {
    id: "3",
    title: "NutriScan - AI-Powered Nutrition Analyzer",
    description: "OCR-powered tool that scans food labels, extracts nutritional values, and evaluates food healthiness using AI. Provides health risk summaries and personalized dietary recommendations.",
    longDescription: "NutriScan empowers users to make informed food choices by leveraging OCR technology and AI analysis. The app scans nutrition labels, processes the data, and provides comprehensive health assessments along with personalized recommendations.",
    imageUrl: "https://placehold.co/600x400.png",
    techStack: ["React", "Tesseract.js", "OpenAI API"],
    role: "Frontend Developer",
    type: "Hackathon Project",
    features: [
      "OCR food label scanning",
      "Nutritional value extraction",
      "AI-powered health risk assessment",
      "Personalized dietary advice",
      "Product search by brand/category",
      "Healthier alternative recommendations",
      "Health awareness promotion"
    ],
    aiHint: "nutrition health scanner",
    githubUrl: "https://github.com/syskey8/NutriScan",
    demoUrl: "#",
    status: "completed"
  },
  {
    id: "4",
    title: "Swassth Mumbai - Smart Health & Safety Companion",
    description: "Comprehensive web app empowering vulnerable communities in Mumbai with real-time health and safety information. Features AQI monitoring, disease outbreak mapping, mental health chatbot, and auto-generated health reports.",
    longDescription: "Swassth Mumbai tackles urban health resilience by providing comprehensive health and safety information to Mumbai's vulnerable communities. The platform integrates multiple data sources and AI to deliver personalized health guidance and emergency resources.",
    imageUrl: "https://placehold.co/600x400.png",
    techStack: ["React", "TailwindCSS", "Python (Flask)", "OpenWeatherMap API", "AQI APIs", "Mapbox", "GPT API"],
    role: "Full Stack Developer & Report Generator",
    type: "Hackathon Project",
    theme: "Urban Health Resilience",
    features: [
      "Real-time AQI and weather dashboards",
      "Disease outbreak mapping with zone alerts",
      "AI-powered mental health chatbot",
      "Location-based health advisories", 
      "Emergency resource information",
      "Auto-generated PDF health reports",
      "Mobile-first responsive design",
      "Low-resource environment accessibility"
    ],
    aiHint: "mumbai health safety",
    githubUrl: "https://github.com/syskey8/Swassth-Mumbai", 
    demoUrl: "#",
    status: "completed"
  },
  {
    id: "5",
    title: "Vehicle Number Plate Recognition System",
    description: "Python-based VNPR system using OpenCV and deep learning models to detect and recognize license plates from images and videos. Achieved 92% recognition accuracy with published research paper.",
    longDescription: "A comprehensive Vehicle Number Plate Recognition system that demonstrates advanced computer vision and deep learning techniques. The project involved extensive research, implementation, and documentation, resulting in a published 25-page research paper.",
    imageUrl: "https://placehold.co/600x400.png", 
    techStack: ["Python", "OpenCV", "Deep Learning Models", "Computer Vision"],
    role: "Team Lead & Documentation Lead",
    type: "Group Project with Research Paper",
    achievement: "Published Research Paper",
    features: [
      "Image and video license plate detection",
      "92% recognition accuracy",
      "Varying lighting condition adaptation",
      "Multiple angle recognition",
      "Deep learning model integration",
      "Comprehensive research documentation"
    ],
    aiHint: "license plate recognition",
    githubUrl: "#",
    demoUrl: "#", 
    researchPaper: "https://www.irjmets.com/uploadedfiles/paper/issue_3_march_2025/70232/final/fin_irjmets1743073964.pdf",
    status: "completed"
  }
];

// Professional Experience
export const experiences: Experience[] = [
  {
    id: "1",
    company: "NextLeap AI",
    position: "Software Engineering Intern", 
    duration: "June 2025 - July 2025",
    location: "Remote",
    type: "Internship",
    description: "Contributed to building a comprehensive academic Q&A platform covering questions from various Indian textbooks and competitive exams.",
    responsibilities: [
      "Data curation by capturing and uploading screenshots of textbook questions and answers",
      "Used internal AI-powered portal for question text extraction and validation",
      "Reviewed and regenerated AI-generated answers for accuracy",
      "Identified and corrected HTML formatting errors and content mismatches", 
      "Collaborated in fast-paced, detail-oriented workflow with quality assurance of thousands of entries"
    ],
    skills: ["Data Curation", "Quality Assurance", "AI Tools", "Content Validation", "Team Collaboration"],
    aiHint: "software intern",
    achievements: [
      "Successfully processed thousands of academic Q&A entries",
      "Maintained high accuracy standards in content validation",
      "Collaborated effectively in remote team environment"
    ]
  }
];

// Competitive Programming & Events
export const achievements = [
  {
    id: "1",
    title: "Ethical Hacking CTF Participant",
    event: "Cybersecurity Competition",
    description: "Participated in Capture The Flag cybersecurity event, solving encryption, steganography, and binary challenges.",
    results: [
      "Placed 138th out of 447 teams in Round 1 with score of 1418",
      "Advanced to finals: 26th out of 50 finalist teams in Round 2"
    ],
    skills: ["Burp Suite", "StegSolve", "Python Scripting", "Encryption", "Steganography", "Binary Analysis"],
    aiHint: "ethical hacking cybersecurity",
    category: "Cybersecurity"
  },
  {
    id: "2", 
    title: "Hackonomics 2025 Global Hackathon Winner",
    event: "Global Hackathon",
    project: "StockSim",
    description: "Won global hackathon with StockSim - a stock market simulator for beginners.",
    achievement: "Winner",
    aiHint: "hackathon winner",
    category: "Hackathon"
  }
];

// Skills categorized
export const skills = {
  programming: {
    languages: ["C", "C++", "Java", "Python"],
    aiHint: "programming languages c cpp java python"
  },
  database: {
    languages: ["SQL"],
    aiHint: "database sql query languages"
  },
  web: {
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    aiHint: "web technologies html css javascript react frontend"
  },
  tools: {
    development: ["Git", "Android Studio", "VS Code", "OpenCV", "Firebase", "Framer Motion", "TailwindCSS"],
    aiHint: "development tools git android studio vscode opencv firebase framer motion tailwindcss"
  },
  soft: {
    skills: ["Teamwork", "Time Management", "Problem-Solving", "Critical Thinking"],
    aiHint: "soft skills teamwork time management problem solving critical thinking"
  }
};

// All skills flattened for easy access
export const allSkills: string[] = [
  ...skills.programming.languages,
  ...skills.database.languages, 
  ...skills.web.technologies,
  ...skills.tools.development,
  ...skills.soft.skills
];

// Certifications with links
export const certifications: Certification[] = [
  {
    id: "1",
    title: "CS50x - Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2024",
    credentialUrl: "https://certificates.cs50.io/a70e97a0-0b86-4dbd-bb44-035864533558.pdf?size=letter",
    aiHint: "cs50 harvard",
    category: "Computer Science"
  },
  {
    id: "2", 
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta via Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/KUD2KHDPLZ5Y",
    aiHint: "meta frontend developer",
    category: "Web Development"
  },
  {
    id: "3",
    title: "Prompt Engineering & Programming with OpenAI", 
    issuer: "Columbia University",
    date: "2024",
    credentialUrl: "https://badges.plus.columbia.edu/194ad8aa-056b-4440-a42d-602fa96d2501#acc.SB70tPiX",
    aiHint: "prompt engineering openai",
    category: "AI/ML"
  },
  {
    id: "4",
    title: "Gen AI Academy",
    issuer: "Google Cloud",
    date: "2024", 
    credentialUrl: "https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A00039",
    aiHint: "generative ai google",
    category: "AI/ML"
  },
  {
    id: "5",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-fce2fca8-9b5d-4d96-aa3e-3ab5a8e43eb7/",
    aiHint: "python bootcamp",
    category: "Programming"
  },
  {
    id: "6",
    title: "Master C++ Programming", 
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-7f6843f1-672e-44da-b816-a33328ad0a33/",
    aiHint: "c++ programming",
    category: "Programming" 
  },
  {
    id: "7",
    title: "Java Certificate",
    issuer: "Dataflair",
    date: "2024",
    credentialUrl: "https://data-flair.training/verify/77FD858A41-77F19AFE08-735B83392C/",
    aiHint: "java certificate",
    category: "Programming"
  },
  {
    id: "8", 
    title: "Google Cloud Skills Boost Badges",
    issuer: "Google Cloud",
    date: "2024",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/1b576b00-967b-4a82-afe8-6abd562527b8",
    aiHint: "google cloud badges",
    category: "Cloud Computing"
  }
];

// Education details
export const education: Education[] = [
  {
    id: "1",
    degree: "B.E Computer Science Engineering (AIML)",
    institution: "G.V Acharya Institute of Engineering and Technology",
    university: "Mumbai University", 
    duration: "2022 - 2026",
    status: "Pursuing",
    specialization: "Artificial Intelligence and Machine Learning",
    aiHint: "computer science degree",
    currentYear: "3rd Year (as of 2025)"
  },
  {
    id: "2",
    degree: "HSC - Bifocal Science with Electronics",
    institution: "Model College",
    duration: "2020 - 2022", 
    status: "Completed",
    stream: "Science with Electronics",
    aiHint: "high school science",
    board: "Maharashtra State Board"
  }
];

// Social Links with specific context
export const socialLinks = [
  { 
    name: "LinkedIn", 
    url: "http://www.linkedin.com/in/tanmay-deorukhakar-85963a257", 
    icon: Linkedin,
    aiHint: "linkedin profile",
    description: "Professional networking and career updates"
  },
  { 
    name: "GitHub", 
    url: "https://github.com/syskey8", 
    icon: Github,
    aiHint: "github profile",
    description: "Code repositories and open source contributions"
  },
  { 
    name: "Instagram", 
    url: "https://www.instagram.com/tanmay.init",
    icon: Instagram,
    aiHint: "instagram profile",
    description: "Photography and personal updates"
  }
];

// Photos for the gallery
export const photos = [
  { id: 1, src: "/1.png", alt: "A vibrant sunset over a cityscape", aiHint: "sunset city" },
  { id: 2, src: "/2.png", alt: "A candid street portrait of a smiling vendor", aiHint: "street portrait" },
  { id: 3, src: "/3.png", alt: "Misty morning in a forest with sunbeams", aiHint: "forest morning" },
  { id: 4, src: "/4.png", alt: "Architectural details of a modern building", aiHint: "modern architecture" },
  { id: 5, src: "/5.png", alt: "A long exposure shot of a waterfall", aiHint: "waterfall landscape" },
  { id: 6, src: "/6.png", alt: "Close-up of a flower with morning dew", aiHint: "flower macro" },
];

// Conversation patterns and fuzzy matching helpers
export const conversationPatterns = {
  greeting: [
    "hello", "hi", "hey", "good morning", "good afternoon", "good evening", 
    "what's up", "how are you", "nice to meet you"
  ],
  about: [
    "about you", "who are you", "tell me about yourself", "your background", 
    "introduce yourself", "your story", "what do you do"
  ],
  projects: [
    "projects", "work", "portfolio", "what have you built", "show me your work",
    "development projects", "coding projects", "applications", "websites", "apps"
  ],
  skills: [
    "skills", "technologies", "programming languages", "what can you do", 
    "tech stack", "expertise", "abilities", "technical skills"
  ],
  experience: [
    "experience", "work experience", "internship", "job", "professional experience",
    "where did you work", "work history", "career"
  ],
  education: [
    "education", "college", "university", "degree", "study", "academic background",
    "where did you study", "graduation", "school"
  ],
  contact: [
    "contact", "reach you", "get in touch", "email", "phone", "linkedin", 
    "github", "social media", "connect"
  ],
  achievements: [
    "achievements", "awards", "accomplishments", "certifications", "certificates",
    "recognition", "honors", "wins", "competitions"
  ]
};

// Helper function for fuzzy matching (basic implementation)
export const fuzzyMatch = (input: string, patterns: string[]): boolean => {
  const normalizedInput = input.toLowerCase().trim();
  return patterns.some(pattern => 
    normalizedInput.includes(pattern) || 
    pattern.includes(normalizedInput) ||
    // Simple Levenshtein distance check for typos
    levenshteinDistance(normalizedInput, pattern) <= 2
  );
};

const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i += 1) {
    matrix[0][i] = i;
  }
  
  for (let j = 0; j <= str2.length; j += 1) {
    matrix[j][0] = j;
  }
  
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  
  return matrix[str2.length][str1.length];
};

    