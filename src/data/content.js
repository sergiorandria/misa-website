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
  { value: "1996", label: "Année de création", sub: "30 ans d’excellence" },
  { value: "LMD", label: "Système depuis 2014", sub: "Licence → Master → Doctorat" },
  { value: "2", label: "Parcours Master", sub: "MISA & Innovation Tech." },
  { value: "100%", label: "Employabilité", sub: "Profils très recherchés" },
];

export const introductionParcours =
  "Notre établissement propose un cursus complet en informatique, structuré en cinq années : deux années de tronc commun en Licence (L1 et L2), une année de spécialisation (L3), puis deux années de Master (M1 et M2) entre deux parcours complémentaires.";

export const licenceParcours = [
  {
    tag: "Parcours",
    title: "Informatique et Technologie",
    levels: ["L1 (S1-S2)", "L2 (S3-S4)"],
    responsable: "BERNARDIN Hagamalala Santatra",
    objectif: "Renforcer les bases en informatique et mathématiques pour des études avancées. Tronc commun L1-L2 en Informatique et Technologie (IT).",
    ues: {
      "L1 (S1-S2)": [
        ["Mathématiques générales", "Techniques de communication", "Base de la programmation", "Prise en main Unix/Linux", "Physique"],
        ["Mathématiques appliquées à l'informatique", "Combinatoire et probabilités", "Communication audiovisuelle", "Langage C", "Linux et logiciels libres", "Électromécanique"],
      ],
      "L2 (S3-S4)": [
        ["Fabrication numérique", "Architecture des réseaux et systèmes", "Langue et entreprenariat", "Architecture des ordinateurs"],
        ["Réseaux, systèmes et bases de données", "Programmation orientée objet", "Probabilité et statistiques", "Web et multimédia"],
      ],
    },
  },
  {
    tag: "Parcours",
    title: "MISA - Mathématiques Informatique et Statistique Appliquées",
    levels: ["L3 (S5-S6)"],
    responsable: "RAMANANA Hasinarivo",
    objectif: "En troisième année (S5-S6), parcours MISA préparant au Master - socle fondamental + professionnalisation (réseaux, BDD, web/mobile, projet). À l'issue, insertion pro ou poursuite M1 MISA/INT.",
    ues: {
      "L3 (S5-S6)": [
        ["Prototypage numérique", "Mathématiques du numérique", "Conduite de projet informatique", "Probabilités et statistiques", "Programmation avancée", "Informatique décisionnelle"],
        ["Analyse numérique", "Projet informatique", "Administration réseau avancée", "Développement web et mobile", "Système d'information"],
      ],
    },
  },
];

export const masterParcours = {
  INT: {
    title: "Innovation et Technologie",
    responsable: "RASOANAIVO Andry",
    objectif: "Parcours orienté systèmes embarqués - conception et développement de systèmes informatiques intégrés à des dispositifs matériels. Socle commun informatique avec débouchés adaptés au marché.",
    m1: [
      ["Algorithmique avancée", "Introduction à l’apprentissage automatique", "Optimisation combinatoire avancée", "Base de données réparties", "Introduction à la vision par ordinateur", "Entreprenariat"],
      ["Modélisation et conception d'objet", "Modélisation et calcul scientifique", "JAVA EE", "Management de projet informatique", "Web services, XML", "Développement collaboratif"],
    ],
    m2: [
      ["Stage et mémoire"],
      ["Transformation de modèle de données", "Préparation à l'environnement professionnel", "Développement mobile et embarqués", "Intégration, vérification, validation, qualification", "Ingénierie de modèle", "Développement orienté plateforme"],
    ],
  },
  MISA: {
    title: "MISA",
    responsable: "ROBINSON Olivier",
    objectif: "Parcours orienté data et intelligence artificielle - analyse de données, machine learning et IA. Formation recherche avec mobilité internationale et passerelles écoles d'ingénieurs / actuariat.",
    m1: [
      ["Management d'entreprise", "Calcul et simulation", "Fabrication numérique", "Data Sciences", "Programmation par contraintes", "Étude d'algorithme"],
      ["Conception et fabrication", "Langues et entreprenariat", "Apprentissage statistique", "Informatique de la vie courante", "Outils mathématiques", "Système d'information"],
    ],
    m2: [
      ["Stage et mémoire"],
      ["Simulation numérique", "Sécurité numérique", "Traitement d'information", "Imagerie", "Intelligence artificielle", "Algorithmique"],
    ],
  },
};

export const partenaires = [
  "MESUPRES", "AUF", "Université Toulouse III", "Université Paris Diderot", "Université Paris 13",
  "Universität Passau", "Telma Madagascar", "Orange", "Renault",
  "Institut Pasteur", "VV", "Etech", "Ingenosia", "BMOI", "BNI Madagascar", "BOA", "Amen"
];

export const admission = {
  // L1 - classement sur dossier selon série Bac
  classement: [
    "Baccalauréat série C, S, ou Baccalauréat français série S (spécialité mathématiques) - classement sur dossier selon l'ordre de mérite",
    "Bacheliers d'une session antérieure : admission possible sous engagement de non-perception de bourse d'étude",
  ],
  dossier: [
    "Une photo d'identité",
    "Une demande de préinscription remplie et signée par le candidat",
    "Une copie certifiée conforme du relevé de notes du Baccalauréat",
    "Une photocopie de la convocation du Baccalauréat",
    "Acte de naissance récent (moins de 3 mois) - pour l'inscription",
    "Reçu de versement des frais de dossier en agence bancaire - pour l'inscription (BNI n° 00005 00002 214103 602 00 43, M. le Doyen de la Faculté des Sciences BP 906)",
  ],
  depot: "Dépôt du dossier complet avant la date limite, en ligne ou par envoi recommandé à « Monsieur le Doyen de la Faculté des Sciences - Université d'Antananarivo BP 906 ». Classement sur dossier puis publication des résultats.",
  etapes: [
    "Remplissage du formulaire de préinscription en ligne ou téléchargement du modèle papier",
    "Dépôt du dossier complet avant la date limite (en ligne ou pli recommandé)",
    "Classement des dossiers selon l'ordre de mérite",
    "Publication des résultats d'admission",
  ],
  inscription: {
    etapes: [
      "Inscription administrative en ligne ou sur place",
      "Inscription pédagogique et remise de l'emploi du temps",
    ],
    enLigne: "L'inscription peut se faire en ligne via le site web ou par dépôt physique sur place.",
  },
  m1: {
    intro: "L'accès au Master diffère selon le parcours :",
    misa: "Parcours MISA valorise la continuité - s'adresse aux étudiants ayant construit leur formation depuis la L1 au sein de l'établissement.",
    int: "Parcours INT s'ouvre également à de nouveaux talents venant d'autres facultés, sous réserve d'être titulaire d'une Licence scientifique ou d'une Licence en informatique obtenue dans un établissement public.",
    etapesExternes: [
      "Dépôt du dossier de candidature en ligne (CV + lettre de motivation précisant le parcours souhaité)",
      "Étude du dossier, pouvant être suivie d'un entretien",
      "Publication des résultats d'admission",
    ],
    inscriptionEtapes: [
      "Inscription administrative en ligne et paiement des frais de scolarité",
      "Inscription pédagogique selon le parcours retenu",
    ],
  },
};

export const temoignages = [
  {
    quote: "Rejoindre le MISA, c'est intégrer une famille. La proximité avec les anciens élèves et le partage d'expérience font toute la différence pour réussir son entrée sur le marché du travail.",
    author: "RAKOTONIRINA Mathieu",
    promo: "Promo 2024, MISA",
  },
  {
    quote: "Par rapport à d'autres établissements, la MISA se distingue particulièrement par l'importance accordée aux mathématiques, tout en offrant des bases solides et polyvalentes dans les différents domaines de l'informatique. Au-delà des connaissances, la MISA forge intégrité, initiative, audace face aux défis, rigueur, persévérance et travail d'équipe - et pousse à rester curieux, à chercher par soi-même et à apprendre continuellement. Cette culture se prolonge grâce à la force et à la solidarité de la communauté Alumni. MISA un jour, MISA toujours !",
    author: "RAZAKAHASINA Fanomezana Sarobidy",
    promo: "Promo 2024, MISA",
  },
  {
    quote: "Mes études à la MISA ont été l’une des meilleures expériences de ma vie. J’y ai énormément appris, tant sur le plan technique que sur le plan humain. Au-delà des connaissances et des compétences acquises, cette formation m’a surtout permis de développer des valeurs qui me servent encore aujourd’hui : la persévérance, l’esprit d’initiative, le travail d’équipe et la rigueur. Mais ce qui m’a le plus marqué durant mon parcours à la MISA, c’est sans aucun doute la cohésion qui existe entre les différentes promotions. L’entraide, le partage d’expériences et la bienveillance entre étudiants créent un environnement particulièrement enrichissant. J’ai également eu la chance de bénéficier du soutien et des opportunités que certains de mes aînés m’ont offerts. Ces rencontres et ces encouragements ont joué un rôle important dans mon parcours et m’ont permis de mieux envisager la suite de mon aventure professionnelle. Au-delà d’une formation académique, la MISA a donc été pour moi une véritable école de la vie, qui m’a permis de grandir, d’évoluer et de construire des bases solides pour la suite.",
    author: "RAMANANJANAHARY Andy Astier",
    promo: "Promo 2023, MISA",
  },
  {
    quote: "La MISA, pour moi, c'est ce qui m'a formé à être résilient. Elle façonne la manière de penser, de raisonner, et force à toujours se surpasser. Maintenant, j'occupe le poste de Product Owner (PO) dans une entreprise éditrice de logiciels. Les compétences et surtout les valeurs engrangées à la MISA, telles que l'initiative, la rigueur, la persévérance et le travail d'équipe, m'ont permis d'être là où je suis actuellement. Bien plus qu'un parcours, la MISA est pour moi une famille, là où j'ai rencontré les meilleurs des meilleurs dans le domaine de l'IT moderne.",
    author: "Rajosiarisaona Iantsa Sarobidy",
    promo: "Promo 2022, MISA",
  },
  { 
    quote: "J'ai choisi la MISA car c'était une école de renom où il y avait déjà des geeks à l'époque. Pour moi la différence entre MISA et les autres, c'est que à la MISA on nous enseigne les bases et c'est nous même qui allons developper et approfondir nos connaissances, contrairement aux autres écoles où on nous donne tout et on applique juste, et surtout le réseau des alumnis est puissant. À l'époque, on avait l'intégration donc ceci nous forgeait à avoir la mentalité de la persévérance, et le travail d'equipe ce-qui nous poussait à reussir tous ensemble . Sans cette intégration, je pense qu'on n'aurait pas pu avoir cette ambiance dans le groupe",
    author: "Lucka Harena - MISA", 
    promo: "Promo 2022, MISA"
  }
];

export const contact = {
  tel: "(+261) 34 53 140 38",
  tel2: "(+261) 38 18 515 28",
  email: "mit-univ-tana@gmail.com",
  email2: "administration@mit-ua.mg",
  adresse: "Université d’Antananarivo - BP 906 Ankatso - Faculté des Sciences - Domaine Sciences et Technologies - Département MIT",
};
