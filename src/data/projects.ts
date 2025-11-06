export interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  type: string;
  location: string;
  nature: string;
  description: string;
  objectifs: string;
  descriptionArchitecte: string;
  caracteristiques: string;
  constructeur: string;
  detailsSupplementaires?: string;
  galleryImages: string[];
  relatedProjects?: {
    imageUrl: string;
    title: string;
    id: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "maison-moderne-montreal",
    title: "Architecture",
    subtitle: "Construction",
    imageUrl: "/project1_1.svg",
    type: "Type de projet",
    location: "Lieu du projet",
    nature: "Nature d'heritage",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    objectifs: "Objectifs du projet",
    descriptionArchitecte: "Description architecte",
    caracteristiques: "Caracteristiques du projet",
    constructeur: "Constructeur du projet",
    detailsSupplementaires: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    galleryImages: ["/project1_1.svg", "/project1_2.svg"],
    relatedProjects: [
      { imageUrl: "/project2_1.svg", title: "Projet connexe", id: "projet-2" }
    ]
  },
  {
    id: "renovation-appartement",
    title: "Architecture",
    subtitle: "Construction",
    imageUrl: "/project1_2.svg",
    type: "Rénovation",
    location: "Montréal",
    nature: "Résidentiel",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    objectifs: "Modernisation complète",
    descriptionArchitecte: "Design contemporain",
    caracteristiques: "Optimisation de l'espace",
    constructeur: "Construction Pro Inc.",
    galleryImages: ["/project1_2.svg"],
    relatedProjects: []
  },
  // Ajoutez plus de projets selon vos besoins
];
