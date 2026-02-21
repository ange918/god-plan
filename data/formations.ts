export interface Formation {
  slug: string;
  title: string;
  niveau: string;
  duree: string;
  cout: string;
  image: string;
  category: string;
  contenu: string[];
  debouches: string[];
  options?: {
    label: string;
    price: string;
  }[];
}

export const formations: Formation[] = [
  {
    slug: "graphisme-serigraphie",
    title: "Graphisme – Sérigraphie",
    niveau: "CEP minimum",
    category: "Domaine Numérique & Créatif",
    duree: "09 mois de cours, 03 mois de stage",
    cout: "250 000 FCFA",
    image: "/graphisme.jpg",
    contenu: [
      "Initiation en informatique",
      "Bases et principes du design graphique",
      "Typographie et théorie des couleurs",
      "Conception d’identité visuelle",
      "Sérigraphie manuelle et digitale",
      "Personnalisation"
    ],
    debouches: [
      "Graphiste designer",
      "Infographiste",
      "Technicien d’impression",
      "Concepteur d’identité visuelle",
      "Formateur",
      "Freelance"
    ]
  },
  {
    slug: "photographie-design-graphique",
    title: "Photographie & Design Graphique",
    niveau: "CEP minimum",
    category: "Domaine Numérique & Créatif",
    duree: "09 mois de cours, 03 mois de stage",
    cout: "250 000 FCFA",
    image: "/photographie.jpg",
    contenu: [
      "Prise de vue professionnelle",
      "Gestion de la lumière",
      "Retouche photo avancée",
      "Réalisation de visuels (flyers, cartes)",
      "Bannières web et miniatures",
      "Design de mise en page"
    ],
    debouches: [
      "Photographe professionnel",
      "Retoucheur photo",
      "Designer visuel",
      "Shooteur événementiel",
      "Créateur de contenus"
    ]
  },
  {
    slug: "personnalisation-gadgets",
    title: "Personnalisation des gadgets",
    niveau: "CEP minimum",
    category: "Artisanat & Design",
    duree: "01 mois",
    cout: "50 000 FCFA",
    image: "/gadgets.jpg",
    options: [
      { label: "Résine", price: "50 000 FCFA" }
    ],
    contenu: [
      "Réalisation de tableaux décoratifs",
      "Travail sur toile, bâche, plexiglas",
      "Impression sur tasses magiques",
      "Personnalisation de stylos et gourdes",
      "Conception de porte-clés",
      "Techniques de décoration"
    ],
    debouches: [
      "Artisan décorateur",
      "Concepteur d’objets personnalisés",
      "Entrepreneur en art décoratif",
      "Spécialiste en cadeaux d'entreprise"
    ]
  },
  {
    slug: "serigraphie-flocage",
    title: "Sérigraphie – Flocage",
    niveau: "CEP minimum",
    category: "Technique & Impression",
    duree: "04 mois de cours, 02 mois de stage",
    cout: "150 000 FCFA",
    image: "/serigraphie.jpg",
    contenu: [
      "Impression sur tout support",
      "Techniques de découpe",
      "Flex et flocage sur textiles",
      "Sérigraphie manuelle",
      "Sérigraphie digitale et mécanique",
      "Marquage publicitaire"
    ],
    debouches: [
      "Sérigraphie professionnel",
      "Technicien en flocage textile",
      "Artisan sérigraphe indépendant",
      "Technicien de marquage publicitaire",
      "Entrepreneur textile"
    ]
  },
  {
    slug: "photographie-audiovisuel-graphisme",
    title: "Photographie – Audiovisuel – Graphisme",
    niveau: "CEP minimum",
    category: "Multimédia",
    duree: "01 an",
    cout: "300 000 FCFA",
    image: "/audiovisuel.jpg",
    contenu: [
      "Cadrage et techniques de prise de vue",
      "Montage vidéo professionnel",
      "Enregistrement sonore",
      "Traitement des audios",
      "Design graphique multimédia",
      "Post-production publicitaire"
    ],
    debouches: [
      "Photographe professionnel",
      "Graphiste Designer visuel",
      "Cadreur / Monteur vidéo",
      "Réalisateur audiovisuel",
      "Producteur de contenus digitaux"
    ]
  },
  {
    slug: "makeup-onglerie-foulard",
    title: "Make-up, Onglerie, Nouage de foulard",
    niveau: "CEP minimum",
    category: "Beauté",
    duree: "04 mois",
    cout: "À consulter",
    image: "/makeup.jpg",
    options: [
      { label: "Frais de pratique", price: "50 000 FCFA" }
    ],
    contenu: [
      "Maquillage professionnel",
      "Soins du visage",
      "Pose d'ongles et manucure",
      "Nouage de foulard (traditionnel et moderne)",
      "Esthétique générale",
      "Conseil en image"
    ],
    debouches: [
      "Maquilleuse professionnelle",
      "Prothésiste ongulaire",
      "Spécialiste en nouage de foulard",
      "Esthéticienne",
      "Entrepreneuse en beauté"
    ]
  },
  {
    slug: "initiation-informatique",
    title: "Initiation en informatique",
    niveau: "CEP minimum",
    category: "Bureautique",
    duree: "03 mois",
    cout: "À consulter",
    image: "/informatique.jpg",
    contenu: [
      "Environnement Windows",
      "Saisie kilométrique",
      "Microsoft Word (Traitement de texte)",
      "Microsoft Excel (Tableur)",
      "Internet et messagerie",
      "Maintenance de base"
    ],
    debouches: [
      "Opérateur de saisie",
      "Assistant administratif",
      "Secrétaire",
      "Gestionnaire de cybercafé"
    ]
  },
  {
    slug: "secretariat-bureautique",
    title: "Secrétariat bureautique",
    niveau: "CEP minimum",
    category: "Bureautique",
    duree: "06 mois",
    cout: "À consulter",
    image: "/secretariat.jpg",
    contenu: [
      "Accueil et communication",
      "Gestion de courrier",
      "Archivage numérique",
      "Maîtrise de la suite Office",
      "Rédaction administrative",
      "Organisation de réunions"
    ],
    debouches: [
      "Secrétaire de direction",
      "Assistant de gestion",
      "Réceptionniste",
      "Chargé d'accueil professionnel"
    ]
  },
  {
    slug: "design-graphique",
    title: "Design Graphique",
    niveau: "CEP minimum",
    category: "Domaine Numérique & Créatif",
    duree: "06 mois",
    cout: "À consulter",
    image: "/design.jpg",
    contenu: [
      "Logiciels Adobe (Photoshop, Illustrator)",
      "Théorie du design",
      "Composition et mise en page",
      "Branding et Logotypes",
      "Design publicitaire",
      "Préparation pour l'impression"
    ],
    debouches: [
      "Designer Graphique",
      "Directeur artistique junior",
      "Maquettiste",
      "Freelance Designer"
    ]
  }
];
