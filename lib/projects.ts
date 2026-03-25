export type ProjectType = "personal" | "academic";
export type ProjectTag = "Web" | "Mobile" | "AI/ML" | "Backend" | "Frontend" | "Full-Stack" | "Report" | "Research" | "Algorithm" | "Database" | "DevOps" | "Game";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  type: ProjectType;
  technologies: string[];
  tags: ProjectTag[];
  featured: boolean;
  image?: string;
  links: {
    github?: string;
    live?: string;
    report?: string;
  };
  date: string;
  status: "completed" | "in-progress" | "archived";
}

export const projects: Project[] = [
  {
    id: "webmds",
    slug: "webmds",
    title: "WebMDS",
    shortDescription: "Un projet web innovant qui combine technologies modernes et expérience utilisateur optimale.",
    fullDescription: "WebMDS est un projet ambitieux qui vise à repousser les limites du développement web moderne. Ce projet intègre les dernières technologies et bonnes pratiques pour offrir une expérience utilisateur exceptionnelle. Il représente l'aboutissement de nombreuses heures de travail et d'apprentissage.",
    type: "personal",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    tags: ["Full-Stack", "Web", "Frontend"],
    featured: true,
    links: {
      github: "https://github.com/youssefkhemira",
      live: "#",
    },
    date: "2024",
    status: "in-progress",
  },
  {
    id: "projet-perso-2",
    slug: "projet-perso-2",
    title: "API REST Manager",
    shortDescription: "Outil de gestion et de test d'APIs REST avec interface intuitive.",
    fullDescription: "Une application permettant de gérer, tester et documenter des APIs REST. Inclut des fonctionnalités de collection, d'environnements variables et de génération automatique de documentation.",
    type: "personal",
    technologies: ["TypeScript", "Express.js", "React", "PostgreSQL"],
    tags: ["Backend", "Full-Stack", "Web"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
    },
    date: "2024",
    status: "completed",
  },
  {
    id: "projet-perso-3",
    slug: "projet-perso-3",
    title: "CLI DevTools",
    shortDescription: "Suite d'outils en ligne de commande pour développeurs.",
    fullDescription: "Une collection d'outils CLI pour automatiser les tâches répétitives du développement: génération de boilerplate, gestion de configurations, et scripts de déploiement.",
    type: "personal",
    technologies: ["Python", "Click", "Rich", "SQLite"],
    tags: ["Backend", "DevOps"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
    },
    date: "2023",
    status: "completed",
  },
  {
    id: "projet-academique-1",
    slug: "projet-academique-1",
    title: "Analyse de Données Climatiques",
    shortDescription: "Projet de recherche sur l'analyse prédictive des données météorologiques.",
    fullDescription: "Projet académique utilisant le machine learning pour analyser et prédire les tendances climatiques. Inclut un rapport détaillé sur les méthodologies utilisées et les résultats obtenus.",
    type: "academic",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    tags: ["AI/ML", "Research", "Report"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
      report: "#",
    },
    date: "2024",
    status: "completed",
  },
  {
    id: "projet-academique-2",
    slug: "projet-academique-2",
    title: "Système de Gestion de Base de Données",
    shortDescription: "Implémentation d'un mini SGBD avec indexation B-tree.",
    fullDescription: "Projet de cours sur les systèmes de bases de données. Implémentation complète d'un système de gestion incluant parsing SQL, optimisation de requêtes et structures d'indexation.",
    type: "academic",
    technologies: ["C++", "SQL", "CMake"],
    tags: ["Database", "Algorithm", "Backend"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
      report: "#",
    },
    date: "2023",
    status: "completed",
  },
  {
    id: "projet-academique-3",
    slug: "projet-academique-3",
    title: "Compilateur SimpleLang",
    shortDescription: "Compilateur pour un langage de programmation simplifié.",
    fullDescription: "Projet de compilation incluant analyse lexicale, syntaxique et sémantique. Génération de code intermédiaire et optimisations basiques. Documentation complète du processus.",
    type: "academic",
    technologies: ["Java", "ANTLR", "JUnit"],
    tags: ["Algorithm", "Backend", "Report"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
      report: "#",
    },
    date: "2023",
    status: "completed",
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getPersonalProjects(): Project[] {
  return projects.filter((p) => p.type === "personal" && !p.featured);
}

export function getAcademicProjects(): Project[] {
  return projects.filter((p) => p.type === "academic");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
