export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Langages de Programmation",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 60 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    id: "tools",
    name: "Outils & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 75 },
      { name: "Figma", level: 60 },
    ],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skillCategories;
}
