import { 
  Code2, 
  Gamepad2, 
  Glasses, 
  Server, 
  Terminal, 
  Wrench,
  Smartphone,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { Project, ExperienceItem, EducationItem, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  email: "taseerh77@gmail.com",
  phone: "+923325237292",
  linkedin: "https://linkedin.com/in/taseer-haider",
  upwork: "https://www.upwork.com/freelancers/taseerhaider",
  github: "https://github.com/taseerhaider"
};

// ATS-Optimized Skills
export const SKILLS: SkillCategory[] = [
  {
    title: "GAME DEVELOPMENT",
    icon: Code2,
    skills: ["Unity 3D/2D Engine", "C# Programming", "Object-Oriented Programming (OOP)", "Design Patterns", "Data Structures & Algorithms", "Component-Based Architecture"]
  },
  {
    title: "XR & SPATIAL COMPUTING",
    icon: Glasses,
    skills: ["Meta Quest SDK", "OpenXR", "Niantic Lightship ARDK", "AR Foundation", "VR Interaction Frameworks", "Hand Tracking & Gestures"]
  },
  {
    title: "BACKEND & MULTIPLAYER",
    icon: Server,
    skills: ["Photon PUN2 / Fusion", "Unity Netcode (NGO)", "Microsoft Azure PlayFab", "Cloud Scripting", "Real-time Networking", "REST API Integration"]
  },
  {
    title: "TOOLS & OPTIMIZATION",
    icon: Layers,
    skills: ["Performance Profiling", "Memory Management", "Addressables Asset System", "Git / Version Control", "CI/CD Pipelines", "Agile & Scrum"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Devsinc",
    role: "Unity Game Developer",
    period: "2024 – Present",
    location: "Lahore, PK",
    description: [
      "Architecting scalable multiplayer frameworks using Photon Fusion and Unity NetCode for enterprise clients.",
      "Designing server-authoritative gameplay loops to prevent cheating and ensure state synchronization across latency-variable networks.",
      "Optimizing rendering pipelines for XR interfaces, achieving stable 72/90Hz on standalone Meta Quest hardware.",
      "Implementing cloud infrastructure (Azure Functions, PlayFab) for user authentication, economy, and matchmaking systems."
    ]
  },
  {
    company: "Game District",
    role: "Junior Unity Developer",
    period: "2023 – 2024",
    location: "Remote",
    description: [
      "Contributed core mechanics to high-traffic mobile titles including 'Twisted Tangle', 'Traffic Escape', and 'Ragdoll Break'.",
      "Engineered automated level generation tools that reduced content production time by 40%.",
      "Integrated Luna technology to produce playable ads within Unity, directly increasing UA conversion rates.",
      "Optimized physics simulations (Obi Rope, Splines) for mobile hardware, maintaining 60FPS on mid-range devices."
    ]
  },
  {
    company: "Plasma IT Solutions",
    role: "Unity Developer",
    period: "2023",
    location: "Islamabad, PK",
    description: [
      "Developed cross-platform interactive applications and rapid prototypes for client acquisition."
    ]
  },
  {
    company: "Mindstorm Studios",
    role: "Game Programmer Apprentice",
    period: "2023",
    location: "Islamabad, PK",
    description: [
      "Intensive training in advanced game programming patterns, SOLID principles, and clean architecture."
    ]
  }
];

// Content Reordered: Kung Fu & MG VR moved up and featured. Mobile hits moved down.
export const PROJECTS: Project[] = [
  {
    title: "SACRED TAILS",
    subtitle: "MMO RPG | BLOCKCHAIN",
    tech: ["Unity", "Photon PUN2", "PlayFab", "Web3"],
    imageUrl: "https://www.sacredtails.com/_next/image?url=%2Fimages%2Fyumi.png&w=3840&q=75",
    featured: true,
    description: [
      "Engineered a persistent open-world multiplayer RPG integrating Web3 economy systems.",
      "Implemented a complex turn-based battle system synchronizing animations and state for competitive PvP.",
      "Developed a custom character customization pipeline supporting 65+ rigged creature assets.",
      "Optimized network traffic to handle 100+ concurrent users in a single instance zone."
    ]
  },
  {
    title: "KUNG FU FIGHTER",
    subtitle: "COMBAT ACTION",
    tech: ["Unity", "UFE Engine", "FSM AI"],
    imageUrl: "https://play-lh.googleusercontent.com/ya9hYTzWpLKGlQOTJh8bAKycD7TAGng4u7gWIOL9n7iygnnoekhhTT2Qd39wgII2zSE=w800-h600-rw", // Martial arts silhouette / action
    featured: true,
    description: [
      "Solo-developed a hit fighting game achieving 10M+ organic downloads on Google Play.",
      "Designed a robust Finite State Machine (FSM) for reactive enemy AI and difficulty scaling.",
      "Implemented frame-perfect input handling for combo systems and hitbox detection.",
      "Optimized skeletal animation blending for fluid combat transitions."
    ]
  },
  {
    title: "MG VR MEDICAL SIM",
    subtitle: "IMMERSIVE HEALTHCARE",
    tech: ["Meta Quest", "Oculus Interaction SDK", "URP"],
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=2070&auto=format&fit=crop", // VR Headset / Cyber vibe
    featured: true,
    description: [
      "Developed a VR empathy simulation for Myasthenia Gravis patients.",
      "Wrote custom URP render passes to simulate vision impairment (diplopia/blur) via shaders.",
      "Implemented hand-tracking interactions for fine-motor skill tasks.",
      "Engineered a fatigue system utilizing haptic feedback to simulate muscle weakness."
    ]
  },
  {
    title: "TWISTED TANGLE",
    subtitle: "HYPER-CASUAL PUZZLE",
    tech: ["Unity", "Obi Rope", "Luna Playable"],
    imageUrl: "https://play-lh.googleusercontent.com/wx9TLrETh2ZhClbuWSXueZo8LpDXvi60LyZqm9CVCJnFsoWxL4fzzKw5ohfMnQeLS-WN=w800-h600-rw",
    featured: false,
    description: [
      "Contributed to the core knot-untying physics mechanics using Obi Rope simulation.",
      "Optimized collision detection and rope rendering for low-end Android devices.",
      "Implemented analytic event hooks to track user churn and level difficulty spikes.",
      "Developed dynamic level loading systems using Addressables to reduce initial build size."
    ]
  },
  {
    title: "TRAFFIC ESCAPE",
    subtitle: "SIMULATION & STRATEGY",
    tech: ["Unity", "AI Navigation"],
    imageUrl: "https://play-lh.googleusercontent.com/cMqvoEQ-0M48zEIQixaH_tqfuKZNvXWDwoa2bugKrRTTFzdVikfZRz8wqpup788OCe7_=w800-h600-rw",
    featured: false,
    description: [
      "Implemented efficient traffic AI systems using lightweight navigation meshes.",
      "Programmed vehicle collision avoidance and grid-lock logic for puzzle mechanics.",
      "Created a modular level editor allowing designers to rapidly iterate on puzzle layouts.",
      "Polished UI/UX flow to maximize player retention metrics."
    ]
  },
  {
    title: "METAPLEX",
    subtitle: "ARCHVIZ EXPERIENCE",
    tech: ["XR Interaction Toolkit", "Cloud Streaming"],
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop", // High fidelity architecture
    featured: false,
    description: [
      "Built a high-fidelity architectural visualization suite for VR and AR endpoints.",
      "Implemented runtime asset streaming to load high-poly building models dynamically.",
      "Designed an intuitive 3D UI for material swapping and environment configuration."
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: "B.S. Software Engineering",
  institution: "COMSATS University",
  period: "2019 – 2023",
  location: "Islamabad, PK"
};