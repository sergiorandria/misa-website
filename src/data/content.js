export const objectives = [
  {
    title: "Data Science",
    desc: "Analyse et exploitation de données massives pour l'aide à la décision.",
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
    desc: "Pilotage d'équipes, architecture logicielle et innovation.",
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

/* ─── Category tags for UE filtering ─── */
export const categoryTags = [
  { id: "all",    label: "Tout",               color: "#464444" },
  { id: "math",   label: "Math & Stats",       color: "#6366f1" },
  { id: "dev",    label: "Développement",       color: "#f59e0b" },
  { id: "ai",     label: "IA & Data",           color: "#8b5cf6" },
  { id: "net",    label: "Réseaux & Systèmes",  color: "#0ea5e9" },
  { id: "sec",    label: "Cybersécurité",        color: "#10b981" },
  { id: "web",    label: "Web & Mobile",         color: "#ec4899" },
  { id: "mgmt",   label: "Management",          color: "#78716c" },
  { id: "sci",    label: "Sciences",             color: "#14b8a6" },
];

/* ─── Licence Parcours (enriched with per-course tags) ─── */
export const licenceParcours = [
  {
    tag: "Parcours",
    title: "Informatique et Technologie",
    levels: ["L1 (S1-S2)", "L2 (S3-S4)"],
    responsable: "BERNARDIN Hagamalala Santatra",
    objectif: "Renforcer les bases en informatique et mathématiques pour des études avancées.",
    ues: {
      "L1 (S1-S2)": [
        [
          { name: "Mathématiques générales", tags: ["math"] },
          { name: "Technique de communication", tags: ["mgmt"] },
          { name: "Base de la programmation", tags: ["dev"] },
          { name: "Prise en main Unix/Linux", tags: ["net"] },
          { name: "Physique", tags: ["sci"] },
        ],
        [
          { name: "Mathématiques appliquées pour l'informatique", tags: ["math"] },
          { name: "Combinatoire et probabilité", tags: ["math"] },
          { name: "Communication audio-visuel", tags: ["mgmt"] },
          { name: "Langage C", tags: ["dev"] },
          { name: "Linux et logiciels libres", tags: ["net"] },
          { name: "Électromécanique", tags: ["sci"] },
        ],
      ],
      "L2 (S3-S4)": [
        [
          { name: "Fabrication numérique", tags: ["sci"] },
          { name: "Architecture des réseaux et systèmes", tags: ["net"] },
          { name: "Langue et entrepreneuriat", tags: ["mgmt"] },
          { name: "Probabilité et statistiques", tags: ["math"] },
          { name: "Architecture des ordinateurs", tags: ["net"] },
        ],
        [
          { name: "Réseaux, système et base de données", tags: ["net", "ai"] },
          { name: "Programmation orientée objet", tags: ["dev"] },
          { name: "Comptabilité et management", tags: ["mgmt"] },
          { name: "Web et multimédia", tags: ["web"] },
        ],
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
        [
          { name: "Prototypage numérique", tags: ["sci"] },
          { name: "Mathématique du numérique", tags: ["math"] },
          { name: "Conduite de projet informatique", tags: ["mgmt"] },
          { name: "Probabilité et statistiques", tags: ["math"] },
          { name: "Gestion d'entreprise", tags: ["mgmt"] },
        ],
        [
          { name: "Base de données", tags: ["ai", "dev"] },
          { name: "Réseau avancé", tags: ["net"] },
          { name: "Développement logiciel", tags: ["dev"] },
        ],
        [
          { name: "Programmation avancée", tags: ["dev"] },
          { name: "Informatique décisionnelle", tags: ["ai"] },
          { name: "Analyse numérique", tags: ["math"] },
          { name: "Contrôle et gestion d'entreprise", tags: ["mgmt"] },
          { name: "Projet Informatique", tags: ["dev"] },
        ],
        [
          { name: "Système d'information", tags: ["dev", "mgmt"] },
          { name: "Administration réseau avancée", tags: ["net", "sec"] },
          { name: "Développement web et mobile", tags: ["web"] },
        ],
      ],
    },
  },
];

/* ─── Master Parcours (enriched with per-course tags) ─── */
export const masterParcours = {
  INT: {
    title: "Innovation et Technologie",
    responsable: "RASOANAIVO Andry",
    objectif: "Former des ingénieurs innovants capables de concevoir des produits et services numériques à fort impact.",
    m1: [
      [
        { name: "Algorithmique avancée", tags: ["dev"] },
        { name: "Introduction à l'apprentissage automatique", tags: ["ai"] },
        { name: "Optimisation combinatoire avancée", tags: ["math"] },
        { name: "Base de données réparties", tags: ["ai", "dev"] },
        { name: "Introduction à la vision par ordinateur", tags: ["ai"] },
        { name: "Entrepreneuriat", tags: ["mgmt"] },
      ],
      [
        { name: "Modélisation et conception d'objet", tags: ["dev"] },
        { name: "Modélisation et calcul scientifique", tags: ["math", "sci"] },
        { name: "JAVA EE", tags: ["dev", "web"] },
        { name: "Management de projet Informatique", tags: ["mgmt"] },
        { name: "Web services, XML", tags: ["web"] },
        { name: "Développement collaboratif", tags: ["dev"] },
      ],
    ],
    m2: [
      [
        { name: "Stage et Mémoire", tags: ["mgmt"] },
      ],
      [
        { name: "Transformation de modèle de données", tags: ["ai", "dev"] },
        { name: "Préparation à l'environnement professionnel", tags: ["mgmt"] },
        { name: "Développement mobile et embarqué", tags: ["web", "dev"] },
        { name: "Intégration, vérification, validation, qualification", tags: ["dev"] },
        { name: "Ingénierie de modèle", tags: ["dev"] },
        { name: "Développement orienté plateforme", tags: ["dev", "web"] },
      ],
    ],
  },
  MISA: {
    title: "MISA",
    responsable: "ROBINSON Olivier",
    objectif: "Former enseignants-chercheurs et chercheurs en informatique. Socle fondamental solide, mobilité internationale assurée, passerelles vers écoles d'ingénieurs, statistique, actuariat, etc.",
    m1: [
      [
        { name: "Management d'entreprise", tags: ["mgmt"] },
        { name: "Calcul et simulation", tags: ["math", "sci"] },
        { name: "Fabrication numérique", tags: ["sci"] },
        { name: "Data Sciences", tags: ["ai"] },
        { name: "Programmation par contraintes", tags: ["dev", "math"] },
        { name: "Étude d'algorithme", tags: ["dev"] },
      ],
      [
        { name: "Conception et fabrication", tags: ["sci"] },
        { name: "Langues et entrepreneuriat", tags: ["mgmt"] },
        { name: "Apprentissage statistique", tags: ["ai", "math"] },
        { name: "Informatique de la vie courante", tags: ["dev"] },
        { name: "Outils mathématiques", tags: ["math"] },
        { name: "Système d'information", tags: ["dev", "mgmt"] },
      ],
    ],
    m2: [
      [
        { name: "Stage et Mémoire", tags: ["mgmt"] },
      ],
      [
        { name: "Simulation numérique", tags: ["math", "sci"] },
        { name: "Sécurité numérique", tags: ["sec"] },
        { name: "Traitement d'information", tags: ["ai"] },
        { name: "Imagerie", tags: ["ai", "sci"] },
        { name: "Intelligence artificielle", tags: ["ai"] },
        { name: "Algorithmique", tags: ["dev"] },
      ],
    ],
  },
};

/* ─── Roadmap Levels (used by the visual roadmap) ─── */
export const roadmapLevels = [
  {
    id: "l1",
    label: "L1",
    fullLabel: "Licence 1",
    semesters: "S1 · S2",
    track: "Informatique et Technologie",
    access: "Baccalauréat série C ou S — sélection sur dossier",
    color: "#0ea5e9",
    yearIndex: 1,
  },
  {
    id: "l2",
    label: "L2",
    fullLabel: "Licence 2",
    semesters: "S3 · S4",
    track: "Informatique et Technologie",
    access: "Validation du L1 en MIT ou L1 Maths (sélection + entretien)",
    color: "#6366f1",
    yearIndex: 2,
  },
  {
    id: "l3",
    label: "L3",
    fullLabel: "Licence 3",
    semesters: "S5 · S6",
    track: "MISA",
    access: "Validation du L2 IT ou L1/L2 Maths (sélection + entretien)",
    color: "#8b5cf6",
    yearIndex: 3,
  },
  {
    id: "m1",
    label: "M1",
    fullLabel: "Master 1",
    semesters: "S7 · S8",
    track: "MISA / INT",
    access: "Licence MISA ou Licence informatique publique + entretien",
    color: "#af2323",
    yearIndex: 4,
    branches: ["MISA", "INT"],
  },
  {
    id: "m2",
    label: "M2",
    fullLabel: "Master 2",
    semesters: "S9 · S10",
    track: "MISA / INT",
    access: "Validation du M1",
    color: "#8d1c1c",
    yearIndex: 5,
    branches: ["MISA", "INT"],
    note: "Stage & Mémoire",
  },
];

/* ─── Career Outcomes ─── */
export const careerOutcomes = [
  { role: "Data Scientist", tags: ["ai", "math"] },
  { role: "Expert en Cybersécurité", tags: ["sec", "net"] },
  { role: "Ingénieur IA", tags: ["ai"] },
  { role: "Designer UI/UX", tags: ["web"] },
  { role: "Lead Developer", tags: ["dev", "web"] },
  { role: "Admin. Systèmes & Réseaux", tags: ["net"] },
  { role: "Enseignant-Chercheur", tags: ["math", "sci"] },
  { role: "Consultant IT", tags: ["mgmt", "dev"] },
];

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
  adresse: "Université d'Antananarivo — BP 906 Ankatso — Faculté des Sciences — Domaine Sciences et Technologies — Département MIT",
};
