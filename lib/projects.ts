export type ProjectType = "personal" | "academic";

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
  tags: string[];
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
    shortDescription:
      "Un projet web mis à disposition d'établissements et associations pour la gestion d'élèves.",
    fullDescription:
      "WebMDS est un projet ambitieux qui vise à offrir une solution de gestion d'élèves \
complète et personnalisable pour les établissements scolaires et les associations. \
Conçu pour être intuitif et facile à utiliser, WebMDS permet aux utilisateurs de gérer \
efficacement les informations des élèves, les emplois du temps, les notes et bien plus encore. \
Avec une interface moderne et réactive, WebMDS est accessible depuis n'importe quel appareil, \
offrant ainsi une flexibilité maximale pour les utilisateurs.",
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
    title: "Stockage probabiliste et reconstruction stochastique d'images par modélisation gaussienne",
    shortDescription:
      "Projet de recherche sur l'analyse prédictive des données météorologiques.",
    fullDescription:
      "Ce projet vise à concevoir, implémenter et évaluer plusieurs méthodes non conventionnelles \
de stockage de données, fondées non sur la conservation exacte de l'information, mais sur des \
représentations génératives ou prédictives permettant de reconstituer approximativement les \
données à partir d'une forme plus compacte. Ce travail a une visée expérimentale et exploratoire : \
il s'agit de tester la faisabilité de l'approche, de mesurer les performances obtenues, et \
d'évaluer le compromis entre compression et fidélité. Les objectifs sont d'appliquer des \
concepts de modélisation, approximation et théorie de l'information ; développer des prototypes \
de stockage et récupération efficaces ; évaluer expérimentalement des approches hybrides entre \
compression, prédiction et stockage génératif ; explorer les limites de la restitution avec \
perte contrôlée.",
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
    title: "Comment voyager à travers le monde sans impacter fortement l'environnement ?",
    shortDescription:
      "Projet d'analyse des émissions de CO₂ des transports pour identifier \
les modes et fréquences de voyage les plus écologiques.",
    fullDescription:
      "Ce projet explore les émissions de CO₂ générées par différents modes de transport \
(tels que la voiture, bus, train, avion et bateau) dans l'optique d'identifier les pratiques \
de voyage les plus respectueuses de l'environnement. À partir d'équations de combustion et de \
données propres au contexte français, le groupe calcule des facteurs d'émission pour chaque \
carburant en tenant compte des incertitudes associées, puis applique ces résultats à des trajets \
réels (Paris-Marseille, Paris-Athènes, Paris-Tokyo). Une analyse de la fréquence de voyage \
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

  {
    id: "sr04",
    slug: "sr04",
    title: "Objets connectés pour l'environnement : application expérimentale d'une architecture IoT distribuée",
    shortDescription:
      "Étude et déploiement expérimental d'une architecture IoT distribuée \
pour la surveillance environnementale en temps réel.",
    fullDescription:
      "Ce rapport présente une étude complète des systèmes IoT appliqués à la surveillance \
environnementale. Il décrit l'architecture en couches de ces dispositifs, des capteurs physiques \
jusqu'aux interfaces de visualisation, en détaillant les composants matériels (microcontrôleurs \
Arduino, ESP32, Raspberry Pi, réseaux LoRaWAN, Sigfox, Wi-Fi), les composants logiciels \
(protocoles MQTT et CoAP, plateformes cloud comme AWS IoT ou ThingsBoard) et les enjeux de \
sécurité associés. Le rapport examine également l'impact écologique de l'IoT lui-même : \
empreinte carbone de la fabrication, consommation des centres de données, et pistes vers un \
IoT plus sobre. Une application expérimentale concrète vient valider les concepts : une \
architecture distribuée a été déployée avec des capteurs de température et de qualité de l'air, \
une transmission MQTT via Python, et une visualisation en temps réel sur serveur central.",
    type: "academic",
    technologies: ["IoT", "Arduino", "Python", "MQTT", "Raspberry Pi", "LoRaWAN", "AWS IoT"],
    tags: ["Environnement", "Réseaux", "Embarqué", "Recherche", "Rapport"],
    featured: false,
    links: {
      report: "SR04.pdf",
    },
    date: "2024",
    status: "completed",
    resp: "Abdelmadjid BOUABDALLAH",
    coauthors: "Nourane CHENGUEL, Clément CHAZELAS, Remy THÉOLIER",
  },

  {
    id: "pr00",
    slug: "pr00",
    title: "Développement de circuits électroniques souples",
    shortDescription:
      "Exploration de la faisabilité de circuits électroniques souples via le détournement \
créatif d'une brodeuse numérique et d'une découpeuse vinyle en FabLab.",
    fullDescription:
      "Ce rapport présente un projet exploratoire mené à l'UTC visant à évaluer la possibilité \
de réaliser des circuits électroniques souples à l'aide de machines de FabLab accessibles. \
Deux axes expérimentaux sont développés : d'abord, l'utilisation d'une brodeuse numérique \
Brother VR pour intégrer un fil conducteur dans un textile, avec deux applications testées : \
un vêtement chauffant par effet Joule et un circuit d'alimentation de LEDs. Ensuite, la \
réalisation d'un circuit imprimé souple (FPC) à partir d'une découpeuse vinyle Roland BN-20, \
en découpant des pistes conductrices dans des feuilles de cuivre autocollantes. Cette seconde \
application aboutit à un hub de capteurs environnementaux I²C fonctionnel (température, \
humidité, qualité de l'air, distance ultrasonique) piloté par un ESP32 et affichant les données \
en temps réel sur un écran OLED. Le rapport couvre la veille technologique sur les FPC, la \
conception sous KiCad, le prototypage sur breadboard, le tracé vectoriel sous Adobe Illustrator, \
la découpe via VersaWorks, et l'assemblage multicouche sur support transparent.",
    type: "academic",
    technologies: [
      "ESP32",
      "I²C",
      "KiCad",
      "Arduino",
      "C++",
      "Adobe Illustrator",
      "VersaWorks",
    ],
    tags: ["Électronique", "Prototypage", "FabLab", "Embarqué"],
    featured: false,
    links: {
      report: "PR00.pdf",
    },
    date: "2026",
    status: "completed",
    resp: "Nicolas PITON",
    coauthors: "Anas OUZAZIZ",
  },

  {
    id: "tn05-stage-ouvrier-cartonnages-bazin",
    slug: "tn05-stage-ouvrier-cartonnages-bazin",
    title: "Stage ouvrier - Cartonnages Bazin",
    shortDescription:
      "Immersion professionnelle dans une unité de production \
d'emballages en carton et étude des flux logistiques.",
    fullDescription:
      "Ce rapport présente le fonctionnement d'un atelier \
spécialisé dans la transformation du carton ondulé. \
L'analyse porte sur l'organisation de la production, \
la gestion des matières premières et les contraintes \
du poste d'opérateur en milieu industriel. \
Une réflexion approfondie est menée sur l'inclusion \
du handicap en entreprise et sur le rôle pivot \
de l'ingénieur dans l'amélioration des conditions de travail.",
    type: "academic",
    technologies: ["CAO", "Platine de découpe", "Impression", "Cartonnage"],
    tags: ["Stage ouvrier", "Industrie", "Rapport"],
    featured: false,
    links: {
      report: "TN05.pdf",
    },
    date: "2024",
    status: "completed",
    resp: "Alexandre GAILLARD",
  },


  {
    id: "ia01-tp3",
    slug: "ia01-tp3",
    title: "Implémentation d'un Système Expert d'ordre 0+",
    shortDescription:
      "Réalisation d'un système expert de diagnostic de pannes informatiques \
avec moteur d'inférence en Common Lisp et interface web.",
    fullDescription:
      "Ce rapport de TP présente l'implémentation complète d'un système expert d'ordre 0+ \
appliqué au diagnostic de pannes informatiques. Le moteur d'inférence écrit en Common Lisp \
supporte le chaînage avant (des symptômes vers les causes) et le chaînage arrière (d'une \
action vers les problèmes résolus). Les faits et règles sont stockés dans une base SQLite \
et chargés dynamiquement. L'interface est une application web servie par Hunchentoot, \
exposant une API REST consommée par un client JavaScript. Le projet est conteneurisé via \
Docker (SBCL) et déployé sur Render.",
    type: "academic",
    technologies: ["Common Lisp", "SQLite", "JavaScript", "Docker", "Hunchentoot", "REST API"],
    tags: ["IA", "Système Expert", "Web", "Rapport"],
    featured: false,
    links: {
      report: "TP3_IA01.pdf",
      live: "https://ia01-se.onrender.com/",
    },
    date: "2026",
    status: "completed",
  },


  {
  "id": "projet-nf18",
  "slug": "projet-nf18",
  "title": "Modélisation et gestion de vulnérabilités de sécurité (CWE/CVE/CAPEC) pour l’IoT",
  "shortDescription": "Conception et manipulation de bases de données SQL et NoSQL pour représenter les vulnérabilités, attaques et mesures de mitigation sur des plateformes IoT.",
  "fullDescription": "Ce projet met en œuvre des modèles relationnels (PostgreSQL) et NoSQL (JSON, requêtes Python) pour stocker et analyser les CWE, CVE et CAPEC, ainsi que les plateformes et scénarios d’attaque sur l’IoT. Il inclut des scripts de création, d’insertion et de modification, ainsi que des programmes Python pour l’analyse automatique des vulnérabilités, le classement par plateforme ou par type, et la gestion des relations complexes entre objets de sécurité.",
  "type": "academic",
  "technologies": ["PostgreSQL", "SQL", "JSON", "Python"],
  "tags": ["Sécurité", "Vulnérabilités", "CWE", "CVE", "CAPEC", "IoT", "Modélisation", "Base de données"],
  "featured": false,
  "links": {
    "github": "https://github.com/yousskh/projet-nf18"
  },
  "date": "2024-2026",
  "status": "completed",
  "coauthors": "Harry BROUDEHOUX, Charlie GROSDEMANGE, Jean VAN GYSEL CHOPIN"
},

  {
    id: "si24-ecriture-numerique-interactions",
    slug: "si24-ecriture-numerique-interactions",
    title: "Impact des pratiques d'écriture numérique sur les interactions sociales",
    shortDescription:
      "Étude et débat sur l'influence des outils de messagerie instantanée \
sur la qualité et la nature des relations sociales contemporaines.",
    fullDescription:
      "Ce rapport analyse comment les pratiques d'écriture numérique, \
notamment via Messenger, modifient nos échanges quotidiens. \
Il s'appuie sur un débat étudiant explorant des thématiques \
telles que l'asynchronisme, la construction d'identités \
numériques et la perception de la personnalité en ligne. \
L'étude examine si ces outils renforcent ou dégradent \
nos compétences sociales dans la vie réelle en comparant \
le confort du virtuel à la spontanéité du face-à-face.",
    type: "academic",
    technologies: ["Messenger", "Analyse sémiotique"],
    tags: ["Écriture numérique", "Réseaux sociaux", "Interactions sociales", "Rapport"],
    featured: false,
    links: {
      report: "SI24.pdf",
    },
    date: "2024",
    status: "completed",
    coauthors: "Ali FAKIR, Yacine BEN MAKHLOUF",
  },
  {
    id: "tf11-production-sucre-poudre",
    slug: "tf11-production-sucre-poudre",
    title: "Procédé de production du sucre en poudre",
    shortDescription:
      "Étude technique du processus de transformation de la betterave \
sucrière en sucre cristallisé avec analyse énergétique.",
    fullDescription:
      "Ce projet détaille les étapes industrielles de fabrication \
du sucre, de la récolte au conditionnement final. \
L'analyse se concentre sur les opérations de diffusion, \
de filtration et de cristallisation sous vide. \
Une part importante du rapport est dédiée au calcul \
du bilan énergétique d'un système d'évaporation à multiple effet. \
L'objectif est de démontrer comment l'optimisation \
des transferts thermiques permet de réduire les coûts \
de production tout en garantissant la pureté du produit.",
    type: "academic",
    technologies: ["Bilan énergétique", "Évaporation multiple effet"],
    tags: ["Industrie agroalimentaire", "Thermodynamique", "Sucre", "Rapport"],
    featured: false,
    links: {
      report: "TF11.pdf",
    },
    date: "2024",
    status: "completed",
    coauthors: "Matheo DURAND, Théophile GAY, Anatole PIERRON",
  },
  {
    id: "tn04-reparation-tracteur-massey-ferguson",
    slug: "tn04-reparation-tracteur-massey-ferguson",
    title: "Rénovation et adaptation low-tech d'un tracteur Massey-Ferguson",
    shortDescription:
      "Projet de maintenance mécanique incluant le remplacement \
d'une dynamo par un alternateur et la réfection du câblage.",
    fullDescription:
      "Ce rapport documente la remise en état technique \
d'un tracteur ancien en suivant une approche durable. \
Les travaux portent sur la résolution d'une fuite hydraulique \
et la modernisation du système de charge électrique. \
La conception d'un support sur mesure pour l'alternateur \
et la réalisation d'un nouveau circuit de démarrage \
constituent le cœur de la réalisation technique. \
L'ensemble du projet privilégie la récupération \
de composants et la simplicité de maintenance \
pour prolonger la durée de vie opérationnelle du véhicule.",
    type: "academic",
    technologies: ["Mécanique", "Électrotechnique", "Conception 3D"],
    tags: ["Low-tech", "Maintenance", "Agriculture", "Rapport"],
    featured: false,
    links: {
      report: "TN04.pdf",
    },
    date: "2023",
    status: "completed",
    resp: "Kévin Girardot",
    coauthors: "Yanis MANCAUX",
  },

  {
    id: "cm11-batteries-lithium",
    slug: "cm11-batteries-lithium",
    title: "Étude de batteries rechargeables au Lithium",
    shortDescription:
      "Rapport sur le fonctionnement, l'historique et les applications \
des batteries lithium-ion.",
    fullDescription:
      "Ce rapport présente les batteries lithium-ion depuis leur invention \
jusqu'à leur adoption massive dans l'électronique portable et les véhicules électriques. \
Il retrace l'historique des piles depuis Volta en 1800 jusqu'aux travaux de Goodenough \
et Yoshino qui ont rendu la technologie commercialisable en 1991. \
Le principe chimique est détaillé : composition des cellules, réactions d'intercalation \
du lithium lors des cycles de charge et décharge, avec l'exemple de l'oxyde de cobalt. \
Les principales applications sont passées en revue : électronique portable, véhicules \
électriques, stockage d'énergie renouvelable et outillage électrique. \
Le rapport conclut sur les enjeux de sécurité, de recyclage et les perspectives \
d'amélioration en capacité et vitesse de recharge.",
    type: "academic",
    technologies: [],
    tags: ["Chimie", "Énergie", "Batteries", "Lithium-ion", "Électrochimie"],
    featured: false,
    links: {
      report: "CM11.pdf",
    },
    date: "2024",
    status: "completed",
    resp: "Karim EL-KIRAT",
    coauthors: "Nourane CHENGUEL, Myriam KHALQI",
  },

  {
    id: "nf22-access-covoiturage",
    slug: "nf22-access-covoiturage",
    title: "Gestion de covoiturage sur Access",
    shortDescription:
      "Application de gestion de covoiturage développée sous Microsoft Access \
dans le cadre du cours NF22.",
    fullDescription:
      "Ce projet est une application de covoiturage développée avec Microsoft Access, \
permettant à des conducteurs et des passagers de se mettre en relation via une \
interface avec authentification par mail et mot de passe. \
Chaque utilisateur peut naviguer entre un menu conducteur et un menu passager, \
proposer ou rechercher des trajets, et gérer ses réservations. \
La base de données repose sur quatre tables principales : utilisateurs, voitures, \
trajets et réservations, reliées par un modèle conceptuel élaboré en groupe. \
Les requêtes gèrent l'ajout, la sélection et la modification de données, notamment \
l'acceptation ou le refus de demandes de réservation par les conducteurs. \
Suite au bêta-test, la gestion des utilisateurs a été unifiée en une seule table \
et un historique des réservations a été ajouté pour les passagers.",
    type: "academic",
    technologies: ["Microsoft Access", "VBA", "SQL"],
    tags: ["Base de données", "Covoiturage", "Database", "Gestion"],
    featured: false,
    links: {
      report: "NF22_AC.pdf",
    },
    date: "2025",
    status: "completed",
    resp: "Bérangère BIHAN-AVALLE",
    coauthors: "Raphaël HENNOCQ, Simon TRICHARD",
  },

  {
    id: "nf22-excel-mastermind",
    slug: "nf22-excel-mastermind",
    title: "Réalisation d'un Mastermind en VBA sous Excel",
    shortDescription:
      "Implémentation du jeu Mastermind en VBA sous Excel, \
avec suivi des scores et statistiques par joueur.",
    fullDescription:
      "Ce projet implémente le jeu Mastermind dans Excel via des formulaires VBA, \
la logique du jeu reposant sur des formules de cellules et des macros. \
Le joueur dispose de 10 essais pour trouver une combinaison de 4 couleurs \
choisie aléatoirement parmi 6, avec retour visuel via pions noirs et blancs. \
Les scores sont enregistrés avec le nom, le prénom et la date, et un double-clic \
sur une ligne du tableau génère un graphique d'évolution du score dans le temps. \
Le bêta-test a conduit à l'ajout de la coloration des ComboBox pour mieux \
visualiser la combinaison en cours, et à la correction de bugs d'affichage. \
Chaque membre a contribué à une partie distincte : génération aléatoire, \
validation des combinaisons, gestion victoire/défaite et statistiques personnelles.",
    type: "academic",
    technologies: ["Excel", "VBA"],
    tags: ["Jeu", "Algorithme", "Rapport"],
    featured: false,
    links: {
      report: "NF22_EX.pdf",
    },
    date: "2025",
    status: "completed",
    resp: "Bérangère BIHAN-AVALLE",
    coauthors: "Raphaël HENNOCQ, Simon TRICHARD",
  },

  {
    id: "nf22-vb-empreinte-carbone",
    slug: "nf22-vb-empreinte-carbone",
    title: "Application de calcul de l'empreinte carbone en VBA",
    shortDescription:
      "Application Visual Basic pour estimer son empreinte carbone mensuelle \
selon trois catégories : logement, transport et alimentation.",
    fullDescription:
      "Ce projet est une application de calcul d'empreinte carbone développée \
sous Visual Studio en Visual Basic, avec un suivi mensuel des émissions CO2e. \
La partie logement demande les consommations de gaz, d'électricité et d'eau, \
avec un calcul basé sur des facteurs d'émission par kWh. \
Le transport propose deux parcours : un mode rapide avec des questions générales, \
et un mode détaillé où l'utilisateur liste ses trajets avec mode de transport \
et distance, chaque option étant associée à un facteur d'émission en kg CO2e/km. \
L'alimentation couvre les protéines, les boissons chaudes et la provenance \
des aliments, avec des fréquences de consommation liées à des facteurs d'émission. \
Le résultat final est présenté sous forme de diagramme circulaire par catégorie.",
    type: "academic",
    technologies: ["Visual Basic", "Visual Studio"],
    tags: ["Empreinte carbone", "Environnement", "Transport", "Rapport"],
    featured: false,
    links: {
      report: "NF22_VS.pdf",
    },
    date: "2025",
    status: "completed",
    resp: "Bérangère BIHAN-AVALLE",
    coauthors: "Raphaël HENNOCQ, Simon TRICHARD",
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