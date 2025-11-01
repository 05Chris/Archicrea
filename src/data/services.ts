export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: "bg-[url('/compas.svg')]",
    title: "Conception <br /> Architecturale",
    description: "Nous vous accompagnons depuis l'idée <br />jusqu'à la formalisation technique et <br />réglementaire de votre projet."
  },
  {
    icon: "bg-[url('/worker.svg')]",
    title: "Pilotage et Suivi <br />de Chantier",
    description: "Nous assurons la bonne réalisation de votre <br />projet en veillant au respect des délais, du <br />budget et de la qualité."
  },
  {
    icon: "bg-[url('/building.svg')]",
    title: "Gestion de Projet <br /> Immobilier", 
    description: "Nous représentons vos intérêts en tant que <br />client, en vous déchargeant des contraintes <br />techniques et administratives."
  }
];