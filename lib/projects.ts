export type ProjectType = "personal" | "academic";
export type ProjectTag = "Web" | "Mobile" | "AI/ML" | "Backend" | "Frontend" | "Full-Stack" | "Report" | "Research" | "Algorithm" | "Database" | "DevOps" | "Game" | "Full-stack" | "Application" | "Gestion" | "Mathématiques" | "Recherche" | "Rapport" | "Environnement" | "Transport";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coauthors?: string;
  resp?: string;
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
    shortDescription: "Un projet web mis à disposition d'établissements et associations pour la gestion d'élèves.",
    fullDescription: "WebMDS est un projet ambitieux qui vise à offrir une solution de gestion d'élèves complète et personnalisable pour les établissements scolaires et les associations. Conçu pour être intuitif et facile à utiliser, WebMDS permet aux utilisateurs de gérer efficacement les informations des élèves, les emplois du temps, les notes et bien plus encore. Avec une interface moderne et réactive, WebMDS est accessible depuis n'importe quel appareil, offrant ainsi une flexibilité maximale pour les utilisateurs.",
    type: "personal",
    technologies: ["Laravel", "PHP", "LAMP", "MySQL", "Bootstrap"],
    tags: ["Web", "Full-stack", "Application", "Gestion"],
    featured: true,
    links: {
      live: "#",
    },
    date: "2024",
    status: "in-progress",
  },



  {
    id: "tz-1",
    slug: "tz-1",
    title: "Stockage probabiliste et reconstruction stochastique d’images par modélisation gaussienne",
    shortDescription: "Projet de recherche sur l'analyse prédictive des données météorologiques.",
    fullDescription: "Ce projet vise à concevoir, implémenter et évaluer plusieurs méthodes non conventionnelles de stockage de données, \
    fondées non sur la conservation exacte de l’information, mais sur des représentations génératives ou prédictives permettant de reconstituer \
    approximativement les données à partir d’une forme plus compacte. Ce travail a une visée expérimentale et exploratoire : il s’agit de tester la faisabilité de l'approche, de mesurer les performances obtenues, et d’évaluer le compromis entre compression et fidélité. Les objectifs sont d'appliquer des concepts de modélisation, approximation et théorie de l’information ; développer des prototypes de stockage/récupération efficaces ; évaluer expérimentalement des approches hybrides entre compression, prédiction et stockage génératif ; explorer les limites de la restitution avec perte contrôlée.",
    type: "academic",
    technologies: ["Mathématiques", "Statistiques", "Probabilités", "Python"],
    tags: ["Mathématiques", "Recherche", "Rapport"],
    featured: false,
    links: {
      github: "https://github.com/youssefkhemira",
      report: "TZ_KHEMIRA.pdf",
    },
    date: "2025",
    status: "completed",
    resp: "Salim BOUZEBDA",
  },



  {
    id: "np90",
    slug: "np90",
    title: "Comment voyager à travers le monde sans impacter fortement l’environnement ?",
    shortDescription: "Projet d'analyse des émissions de CO₂ des transports pour identifier \
les modes et fréquences de voyage les plus écologiques.",
    fullDescription: "Ce projet explore les émissions de CO₂ générées par différents modes \
de transport (tels que la voiture, bus, train, avion et bateau) dans l'optique d'identifier les pratiques \
de voyage les plus respectueuses de l'environnement. À partir d'équations de combustion et de \
données propres au contexte français, le groupe calcule des facteurs d'émission pour chaque \
carburant en tenant compte des incertitudes associées, puis applique ces résultats à des trajets \
réels (Paris–Marseille, Paris–Athènes, Paris–Tokyo). Une analyse de la fréquence de voyage \
soutenable au regard du budget carbone individuel recommandé par l'ADEME complète l'étude, \
ainsi qu'une mise en perspective via les émissions générées par les jets privés d'Elon Musk \
et Taylor Swift.",
    type: "academic",
    technologies: ["Mathématiques", "Chimie", "Physique"],
    tags: ["Environnement", "Transport", "Recherche", "Rapport"],
    featured: false,
    links: {
      report: "NP90.pdf",
    },
    date: "2024",
    status: "completed",
    resp: "Elias FARAH",
    coauthors: "Adèle DOARÉ, Salomé FOURNEL",
  },
  //webhook push test
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
