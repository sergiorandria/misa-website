import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Users, Globe, BookMarked, Sparkles, Award, Quote } from "lucide-react";
import { motion } from "motion/react";
import { lazy, Suspense, useMemo } from "react";
import { asset } from "../lib/assets";
import { temoignages } from "../data/content";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

// Lazy heavy interactive components for code-splitting
const Stack = lazy(() => import("../components/Stack"));
const CardFlip = lazy(() => import("../components/ui/CardFlip"));
const ParticleButton = lazy(() => import("../components/ui/ParticleButton"));
const PartnersSection = lazy(() => import("../components/PartnersSection"));

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-x-hidden">

      {/* - HERO - full-width split: text left | campus photo right ---- */}
      <section className="relative overflow-hidden border-b border-[var(--color-misa-line)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] gap-0 items-stretch min-h-[540px] sm:min-h-[600px] lg:min-h-[680px]">

            {/* Left column - text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
              className="py-12 sm:py-16 lg:py-24 pr-0 lg:pr-16 flex flex-col justify-center"
            >
              <motion.div
                variants={childFadeUpVariants}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase border-l-3 border-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-3 py-1.5 self-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-misa-red)] animate-pulse" />
                <span>PRÉ-INSCRIPTION - SÉLECTION SUR DOSSIER</span>
              </motion.div>

              <motion.h1
                variants={childFadeUpVariants}
                className="mt-6 text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[52px] leading-[1.1] sm:leading-[1.05] tracking-tight font-light text-[var(--color-misa-ink)]"
              >
                <span className="block text-[11px] sm:text-[12px] tracking-[0.22em] font-sans font-bold text-[var(--color-misa-red)] uppercase mb-2">
                  Mention Informatique et Technologie
                </span>
                <span className="block">Informatique</span>
                <span className="block">et Technologie</span>
                <span className="block text-[var(--color-misa-red)]">(MIT)</span>
              </motion.h1>

              <motion.div variants={childFadeUpVariants} className="mt-6 h-px w-16 bg-[var(--color-misa-red)]" />

              <motion.p variants={childFadeUpVariants} className="mt-6 text-sm sm:text-base leading-[1.7] text-neutral-600 max-w-[520px]">
                <strong className="text-[var(--color-misa-ink)] font-semibold">Le futur est entre vos mains.</strong>{" "}
                Immergez-vous dans la Science, la technologie, l'ingénierie et les Mathématiques en intégrant la MIT - mention du Domaine des Sciences et Technologies de l'Université d'Antananarivo.
              </motion.p>

              {/* CTAs — Particle Buttons (lazy) */}
              <Suspense fallback={<div className="mt-8 flex flex-col xs:flex-row gap-3 w-full"><div className="h-[48px] flex-1 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] animate-pulse" /><div className="h-[48px] flex-1 bg-white border border-[var(--color-misa-line)] animate-pulse" /></div>}>
                <motion.div variants={childFadeUpVariants} className="mt-8 flex flex-col xs:flex-row gap-3 w-full">
                  <ParticleButton
                    variant="primary"
                    successDuration={900}
                    onSuccess={() => setTimeout(() => navigate("/admission"), 250)}
                    className="w-full xs:w-auto xs:flex-1 sm:flex-none sm:min-w-[200px] justify-center"
                  >
                    Conditions d&apos;admission
                  </ParticleButton>
                  <ParticleButton
                    variant="outline"
                    successDuration={900}
                    onSuccess={() => setTimeout(() => navigate("/formation/licence"), 250)}
                    className="w-full xs:w-auto xs:flex-1 sm:flex-none sm:min-w-[180px] justify-center"
                  >
                    Voir la formation
                  </ParticleButton>
                </motion.div>
              </Suspense>

              {/* Key metrics */}
              <motion.div
                variants={childFadeUpVariants}
                className="mt-10 sm:mt-12 grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 max-w-[480px] border-t border-[var(--color-misa-line)] pt-6 sm:pt-8"
              >
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">1996</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Fondation</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-ink)] pl-3">
                  <div className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">LMD</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Depuis 2014</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">Ankatso</div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">BP 906</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - campus photo */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-[var(--color-misa-line)] z-10" />
              <img
                src={asset('campus-main.jpg')}
                alt="Campus Faculté des Sciences - Université d'Antananarivo"
                className="campus-img absolute inset-0 w-full h-full"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-misa-ink)]/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-8 right-6 z-10">
                <div className="text-[10px] text-white/80 tracking-[0.14em] uppercase font-medium">
                  Faculté des Sciences - Université d'Antananarivo
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* - INFO STRIP - logo + tagline - white band -----------─ */}
      <AnimatedSection as="div" direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-1.5 border border-[var(--color-misa-line)] shrink-0">
              <img src={asset('logo-mit.png')} alt="MIT logo" className="h-8 sm:h-9 w-auto object-contain" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[var(--color-misa-red)] uppercase">MIT - UNIVERSITÉ D'ANTANANARIVO</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium mt-0.5">Sciences & Technologies · Faculté des Sciences</div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium text-neutral-600">
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)] shrink-0" /> Projets réels</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)] shrink-0" /> Stages annuels</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)] shrink-0" /> Encadrement chercheur</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)] shrink-0" /> Partenariats internationaux</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* - PÉDAGOGIE - paper band --------------------─ */}
      <AnimatedSection direction="up" distance={40} className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">PÉDAGOGIE</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)] max-w-[520px]">
            Une formation centrée sur l'étudiant
          </h2>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-[1.7] text-neutral-700 max-w-[640px]">
            Cours magistraux, travaux dirigés, ateliers, simulations et projets de groupe. Les étudiants sont encouragés à prendre en charge leur apprentissage et à développer leur autonomie. Stages en entreprise chaque année pour ancrer la théorie dans la pratique.
          </p>

          <Suspense fallback={<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><div className="h-[300px] bg-white border border-[var(--color-misa-line)] animate-pulse" /><div className="h-[300px] bg-white border border-[var(--color-misa-line)] animate-pulse hidden sm:block" /><div className="h-[300px] bg-white border border-[var(--color-misa-line)] animate-pulse hidden lg:block" /></div>}>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
              {[
                {
                  title: "Data Science",
                  subtitle: "Exploiter les données",
                  desc: "Analyser et exploiter les données massives pour l'aide à la décision — Python, SQL, PyTorch, Big Data.",
                  image: asset('images/pedagogy/data-science.jpg'),
                  features: ["Python", "SQL", "PyTorch", "Big Data"],
                },
                {
                  title: "Expert en cybersécurité",
                  subtitle: "Protéger les systèmes",
                  desc: "Protéger les systèmes et infrastructures critiques — Pentesting, OWASP, Cryptographie, Linux.",
                  image: asset('images/pedagogy/cybersecurity.jpg'),
                  features: ["Pentesting", "OWASP", "Cryptographie", "Linux"],
                },
                {
                  title: "Expert en IA",
                  subtitle: "Systèmes intelligents",
                  desc: "Concevoir et déployer des systèmes intelligents — Machine Learning, Deep Learning, Scikit-learn, NLP.",
                  image: asset('images/pedagogy/ai.jpg'),
                  features: ["Machine Learning", "Deep Learning", "Scikit-learn", "NLP"],
                },
                {
                  title: "Designer",
                  subtitle: "Interfaces intuitives",
                  desc: "Concevoir des interfaces intuitives et esthétiques — UI/UX, Figma, HTML/CSS, Accessibilité.",
                  image: asset('images/pedagogy/design.jpg'),
                  features: ["UI/UX", "Figma", "HTML/CSS", "Accessibilité"],
                },
                {
                  title: "Lead developer",
                  subtitle: "Piloter les équipes",
                  desc: "Diriger les équipes techniques et produire du logiciel robuste — Architecture Cloud, CI/CD, Design Patterns, Git.",
                  image: asset('images/pedagogy/lead-dev.jpg'),
                  features: ["Architecture Cloud", "CI/CD", "Design Patterns", "Git"],
                },
                {
                  title: "Administrateur Système & Réseaux",
                  subtitle: "Infrastructures cloud",
                  desc: "Gérer les infrastructures et l'environnement cloud — Linux, Docker, TCP/IP, Virtualisation.",
                  image: asset('images/pedagogy/system-reseau.jpg'),
                  features: ["Linux", "Docker", "TCP/IP", "Virtualisation"],
                },
              ].map(item => (
                <CardFlip
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.desc}
                  features={item.features}
                  image={item.image}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </AnimatedSection>

      {/* - HISTOIRE - white band --------------------- */}
      <AnimatedSection direction="up" distance={40} className="bg-white border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
            >
              <motion.p variants={childFadeUpVariants} className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">HISTORIQUE INSTITUTIONNEL</motion.p>
              <motion.h2 variants={childFadeUpVariants} className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
                De la MISA (1996)<br />à la MIT (2022)
              </motion.h2>
              <motion.div variants={childFadeUpVariants} className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />

              <div className="mt-6 sm:mt-8 space-y-4 text-xs sm:text-sm leading-[1.7] text-neutral-700">
                <motion.div variants={childFadeUpVariants} className="p-4 sm:p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-red)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">1996 - Fondée</span> dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l'Université d'Antananarivo, avec le soutien du projet <strong>PRESUP</strong> et de la Coopération Française.
                </motion.div>
                <motion.div variants={childFadeUpVariants} className="p-4 sm:p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-ink)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">2014 - Bascule LMD</span> : La Maîtrise en Informatique et Statistique Appliquées est devenue <strong>Mathématiques, Informatique et Statistique Appliquées</strong>. Formation orientée recherche pour les M2 (première promotion 2016).
                </motion.div>
                <motion.div variants={childFadeUpVariants} className="p-4 sm:p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-red)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">2022 - Mention IT</span> : La MISA introduit la Mention Informatique et Technologie, offrant une formation complète de la première année (<strong>L1</strong>) à la troisième année (<strong>L3</strong>).
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
              }}
              className="space-y-4"
            >
              <motion.div variants={childFadeUpVariants} className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Globe size={15} />
                  <span>VISION</span>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-[1.7] text-neutral-700">
                  Devenir une référence mondiale dans l'enseignement supérieur en informatique et technologies. Former les leaders de demain.
                </p>
              </motion.div>

              <motion.div variants={childFadeUpVariants} className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-ink)] font-bold uppercase">
                  <BookMarked size={15} />
                  <span>MISSION</span>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-[1.7] text-neutral-700">
                  Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d'évoluer - apprentissage continu tout au long de la vie.
                </p>
              </motion.div>

              <motion.div variants={childFadeUpVariants} className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Award size={15} />
                  <span>POURQUOI LA MIT / MISA</span>
                </div>
                <ul className="mt-3 text-xs sm:text-sm leading-[1.7] list-disc pl-5 space-y-1.5 text-neutral-700">
                  <li>Approche intégrée mathématiques & informatique</li>
                  <li>Pionnière en IA - expertise de pointe</li>
                  <li>Diplômés hautement recherchés - qualité & compétences pratiques</li>
                </ul>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </AnimatedSection>

      {/* - AVIS DES SORTANTS — Stack (React Bits) — mobile tap + hover ─ */}
      <AnimatedSection direction="up" distance={40} className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left — copy */}
            <div className="lg:w-80 xl:w-[360px] shrink-0">
              <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ALUMNI — TÉMOIGNAGES</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
                Avis des sortants
              </h2>
              <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
              <p className="mt-6 text-sm leading-[1.7] text-neutral-700">
                Paroles d&apos;anciens — valeurs de la MISA : intégrité, initiative, audace, rigueur, persévérance et travail d&apos;équipe.
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-neutral-600 italic">« MISA un jour, MISA toujours ! »</p>
              <p className="mt-6 text-xs leading-relaxed text-neutral-500 lg:hidden">
                Appuyez sur une carte pour la retourner.
              </p>
              <p className="hidden lg:block mt-2 text-xs leading-relaxed text-neutral-500">
                Survolez ou cliquez sur une carte pour découvrir le témoignage.
              </p>
              <p className="mt-3 text-[11px] text-neutral-400">Extraits de « temoignages_anciens(1).txt » — textes intégraux conservés.</p>
            </div>

            {/* Right — Stack (lazy) */}
            <Suspense fallback={<div className="w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[460px] h-[380px] sm:h-[360px] mx-auto lg:mx-0 bg-white border border-[var(--color-misa-line)] animate-pulse" />}>
              <div className="flex-1 w-full flex justify-center lg:justify-end min-w-0">
                <div className="w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[460px] h-[380px] sm:h-[360px] mx-auto lg:mx-0">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={true}
                    autoplay={true}
                    autoplayDelay={4000}
                    pauseOnHover={true}
                    cards={temoignages.map((t) => (
                      <div
                        key={t.author}
                        className="w-full h-full bg-white border border-[var(--color-misa-line)] border-l-4 border-l-[var(--color-misa-red)] p-6 sm:p-7 flex flex-col justify-between text-left shadow-sm"
                      >
                        <div className="flex-1 min-h-0 flex flex-col">
                          <div className="w-7 h-7 flex items-center justify-center bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] text-[var(--color-misa-red)] shrink-0">
                            <Quote size={14} />
                          </div>
                          <p className="mt-4 text-xs sm:text-[13px] leading-relaxed italic text-neutral-700 overflow-y-auto pr-1">
                            &ldquo;{t.quote}&rdquo;
                          </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-misa-line)] text-right shrink-0">
                          <div className="text-xs font-bold text-[var(--color-misa-red)] leading-tight">{t.author}</div>
                          <div className="text-[11px] text-neutral-500 tracking-wide uppercase font-medium mt-0.5">{t.promo}</div>
                        </div>
                      </div>
                    ))}
                  />
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </AnimatedSection>

      {/* - PARTENAIRES - Ivy League Wall of Trust (lazy) ------------ */}
      <Suspense fallback={<div className="bg-white border-b border-[var(--color-misa-line)] py-16"><div className="max-w-[1280px] mx-auto px-6 lg:px-8"><div className="h-32 bg-white border border-[var(--color-misa-line)] animate-pulse" /></div></div>}>
        <PartnersSection />
      </Suspense>

    </div>
  );
}
