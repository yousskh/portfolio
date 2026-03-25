export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
  icon?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "2024 - Présent",
    title: "Formation en Informatique",
    subtitle: "Université / École",
    description: "Poursuite des études en informatique avec spécialisation en développement logiciel et systèmes d'information.",
    type: "education",
  },
  {
    id: "2",
    date: "2024",
    title: "Projet WebMDS",
    subtitle: "Projet Personnel",
    description: "Lancement et développement de WebMDS, un projet web innovant utilisant les technologies modernes.",
    type: "project",
  },
  {
    id: "3",
    date: "2023",
    title: "Début de la spécialisation",
    subtitle: "Formation Académique",
    description: "Approfondissement des connaissances en algorithmique, bases de données et développement web.",
    type: "education",
  },
  {
    id: "4",
    date: "2022",
    title: "Premiers projets de programmation",
    subtitle: "Initiation",
    description: "Découverte de la programmation et réalisation des premiers projets personnels en Python et JavaScript.",
    type: "achievement",
  },
];

export function getTimelineEvents(): TimelineEvent[] {
  return timelineEvents;
}
