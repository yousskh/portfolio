export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  location?: string;
  subtitle?: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
  icon?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    type: 'education',
    date: '2025 – Présent',
    title: 'Université de Technologie de Compiègne (UTC) - Branche',
    location: 'Compiègne',
    description: 'Cycle ingénieur UTC en Génie Informatique. Je m’oriente dans le développement logiciel, les systèmes d’information ainsi que les réseaux et la cybersécurité.',
  },
  {
    id: "2",
    type: 'education',
    date: '2023 – 2025',
    title: 'Université de Technologie de Compiègne (UTC) - Tronc commun',
    location: 'Compiègne',
    description: 'Cycle préparatoire intégré. Formation pluridisciplinaire en mathématiques, physique, informatique, sciences de l’ingénieur et humanités. Découverte de différents domaines de l’informatique et de l’ingénierie avant de choisir ma spécialisation.',
  },
  {
    id: "3",
    type: 'education',
    date: '2022 – 2023',
    title: 'CPGE - MP2I',
    location: 'Lycée Louis Thuillier, Amiens',
    description: 'Classe préparatoire Mathématiques, Physique, Informatique et Ingénierie. Formation intensive en sciences pour préparer les concours d’entrée aux grandes écoles d’ingénieurs. Cette période m’a permis de renforcer ma discipline de travail, ma rigueur scientifique et ma capacité à résoudre des problèmes complexes.',
  },
  {
    id: "4",
    type: 'education',
    date: '2019 – 2022',
    title: 'Baccalauréat général',
    location: 'Lycée Marie Curie, Nogent-sur-Oise',
    description: 'Spécialités Mathématiques, Physique-Chimie, Sciences de l’Ingénieur ; option Mathématiques expertes. Obtenu avec mention Bien.',
  },
  {
    id: "5",
    type: 'work',
    date: '08/2024 – Présent',
    title: 'Auto-entrepreneuriat',
    description: 'Réalisation de sites et applications sur-mesure pour diverses entreprises et associations : détermination des besoins et établissement du cahier des charges, création, hébergement, maintenance et optimisation.',
  },
  {
    id: "8",
    type: 'work',
    date: '03/2024 – 07/2024',
    title: 'Animateur nouvelles technologies',
    location: 'UTC, Compiègne (60)',
    description: 'Documentation de projets à visée internationale. Initiation de projets afin d’accompagner le lancement d’une nouvelle plateforme collaborative et partenariale au sein de l’UTC.',
  },
  {
    id: "6",
    type: 'work',
    date: '07/2024',
    title: 'Opérateur machine – Stage ouvrier',
    location: 'Cartonnages Bazin, Villers-Saint-Paul (60)',
    description: 'Découverte du milieu industriel dans une entreprise locale de cartonnages. Différents postes ont été occupés : découpage, décorticage, impression, collage, conditionnement et montage.',
  },
  {
    id: "7",
    type: 'work',
    date: '07/2023 – 08/2023',
    title: 'Coordinateur événementiel',
    location: 'UTC, Compiègne (60)',
    description: 'Organisation et préparation d’événements locaux et nationaux (Fête de la Science et Prix Roberval) avec le Pôle des Cultures Scientifique, Technique et Industrielle de l’UTC.'
  },
];

export function getTimelineEvents(): TimelineEvent[] {
  return timelineEvents;
}
