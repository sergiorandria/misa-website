export const objectives = [
  {
    title: "Data Science",
    desc: "Analyse et exploitation de données massives pour l’aide à la décision.",
    icon: "Database",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Cybersécurité",
    desc: "Protection des systèmes et des données contre les menaces modernes.",
    icon: "ShieldCheck",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Intelligence Artificielle",
    desc: "Conception de systèmes intelligents, ML & vision par ordinateur.",
    icon: "Brain",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Design Produit",
    desc: "UI/UX pour applications web & mobile, intuitif et élégant.",
    icon: "Palette",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Lead Developer",
    desc: "Pilotage d’équipes, architecture logicielle et innovation.",
    icon: "Code2",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Systèmes & Réseaux",
    desc: "Administration, cloud, DevOps et infrastructures critiques.",
    icon: "Server",
    color: "from-slate-600 to-slate-800",
  },
];

export const stats = [
  { value: "1996", label: "Année de création", sub: "MISA" },
  { value: "LMD", label: "Système LMD", sub: "Licence → Master" },
  { value: "2", label: "Parcours Master", sub: "MISA & Innovation Tech." },
];

export const licenceParcours = [
  {
    tag: "Parcours",
    title: "Informatique et Technologie",
    levels: ["L1 (S1-S2)", "L2 (S3-S4)"],
    responsable: "BERNARDIN Hagamalala Santatra",
    objectif: "Renforcer les bases en informatique et mathématiques pour des études avancées.",
    ues: {
      "L1 (S1-S2)": [
        ["Mathématiques générales", "Technique de communication", "Base de la programmation", "Prise en main Unix/Linux", "Physique"],
        ["Mathématiques appliquées pour l’informatique", "Combinatoire et probabilité", "Communication audio-visuel", "Langage C", "Linux et logiciels libres", "Électromécanique"],
      ],
      "L2 (S3-S4)": [
        ["Fabrication numérique", "Architecture des réseaux et systèmes", "Langue et entrepreneuriat", "Probabilité et statistiques", "Architecture des ordinateurs"],
        ["Réseaux, système et base de données", "Programmation orientée objet", "Comptabilité et management", "Web et multimédia"],
      ],
    },
  },
  {
    tag: "Parcours",
    title: "MISA — Mathématiques Informatique et Statistique Appliquées",
    levels: ["L3 (S5-S6)"],
    responsable: "RAMANANA Hasinarivo",
    objectif: "Préparer à la poursuite en Master. Informatique en interaction avec maths, électronique, physique, biologie. Socle fondamental + professionnalisation (web, BDD, POO, réseaux).",
    ues: {
      "L3 (S5-S6)": [
        ["Prototypage numérique", "Mathématique du numérique", "Conduite de projet informatique", "Probabilité et statistiques", "Gestion d’entreprise"],
        ["Base de données", "Réseau avancé", "Développement logiciel"],
        ["Programmation avancée", "Informatique décisionnelle", "Analyse numérique", "Contrôle et gestion d’entreprise", "Projet Informatique"],
        ["Système d’information", "Administration réseau avancée", "Développement web et mobile"],
      ],
    },
  },
];

export const masterParcours = {
  INT: {
    title: "Innovation et Technologie",
    responsable: "RASOANAIVO Andry",
    objectif: "Former des ingénieurs innovants capables de concevoir des produits et services numériques à fort impact.",
    m1: [
      ["Algorithmique avancée", "Introduction à l’apprentissage automatique", "Optimisation combinatoire avancée", "Base de données réparties", "Introduction à la vision par ordinateur", "Entrepreneuriat"],
      ["Modélisation et conception d’objet", "Modélisation et calcul scientifique", "JAVA EE", "Management de projet Informatique", "Web services, XML", "Développement collaboratif"],
    ],
    m2: [
      ["Stage et Mémoire"],
      ["Transformation de modèle de données", "Préparation à l’environnement professionnel", "Développement mobile et embarqué", "Intégration, vérification, validation, qualification", "Ingénierie de modèle", "Développement orienté plateforme"],
    ],
  },
  MISA: {
    title: "MISA",
    responsable: "ROBINSON Olivier",
    objectif: "Former enseignants-chercheurs et chercheurs en informatique. Socle fondamental solide, mobilité internationale assurée, passerelles vers écoles d’ingénieurs, statistique, actuariat, etc.",
    m1: [
      ["Management d’entreprise", "Calcul et simulation", "Fabrication numérique", "Data Sciences", "Programmation par contraintes", "Étude d’algorithme"],
      ["Conception et fabrication", "Langues et entrepreneuriat", "Apprentissage statistique", "Informatique de la vie courante", "Outils mathématiques", "Système d’information"],
    ],
    m2: [
      ["Stage et Mémoire"],
      ["Simulation numérique", "Sécurité numérique", "Traitement d’information", "Imagerie", "Intelligence artificielle", "Algorithmique"],
    ],
  },
};

const base = import.meta.env.BASE_URL;

export const partenaires = [
  { name: "MESUPRES", logo: `${base}partners/mesupres.png` },
  { name: "AUF", logo: `${base}partners/auf.png` },
  { name: "Université Toulouse III", logo: `${base}partners/toulouse3.png` },
  { name: "Université Paris Diderot", logo: `${base}partners/paris7.jpg` },
  { name: "Université Paris 13", logo: `${base}partners/paris13.png` },
  { name: "Universität Passau", logo: `${base}partners/passau.png` },
  { name: "Telma Madagascar", logo: `${base}partners/telma.jpg` },
  { name: "Orange", logo: `${base}partners/orange.png` },
  { name: "Renault", logo: `${base}partners/renault.png` },
  { name: "Institut Pasteur", logo: `${base}partners/institut-pasteur.png` },
  { name: "VV", logo: `${base}partners/vv.png` },
  { name: "Etech", logo: `${base}partners/etech.png` },
  { name: "Ingenosia", logo: `${base}partners/ingenosia.png` },
  { name: "BMOI", logo: `${base}partners/bmoi.png` },
  { name: "BNI Madagascar", logo: `${base}partners/bni.jpg` },
  { name: "BOA", logo: `${base}partners/boa.jpg` },
  { name: "Amen", logo: `${base}partners/amen.jpeg` },
  { name: "Fac. Sciences", logo: `${base}partners/fac-sciences.svg` },
];

export const admission = {
  classement: [
    "Sélection sur dossier selon l'ordre de mérite",
  ],
  dossier: [
    "Photo d'identité",
    "Demande de préinscription dûment remplie et signée",
    "Copie certifiée conforme du relevé de notes du Baccalauréat",
    "Acte de naissance récent avec état civil complet",
  ],
};

export const contact = {
  tel: "(+261) 34 53 140 38",
  tel2: "(+261) 38 18 515 28",
  email: "mit-univ-tana@gmail.com",
  email2: "administration@mit-ua.mg",
  adresse: "Université d’Antananarivo — BP 906 Ankatso — Faculté des Sciences — Domaine Sciences et Technologies — Département MIT",
};
