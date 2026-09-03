import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Users, Globe, BookMarked, Sparkles, Award, Quote } from "lucide-react";
import { motion } from "motion/react";
import { asset } from "../lib/assets";
import { temoignages } from "../data/content";
import Stack from "../components/Stack";
import ParticleButton from "../components/ui/ParticleButton";
import PartnersSection from "../components/PartnersSection";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-hidden">

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
                className="mt-6 text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.08] sm:leading-[1.05] tracking-tight font-light text-[var(--color-misa-ink)]"
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

              {/* CTAs — Particle Buttons */}
              <motion.div variants={childFadeUpVariants} className="mt-8 flex flex-col sm:flex-row gap-3">
                <ParticleButton
                  variant="primary"
                  successDuration={900}
                  onSuccess={() => setTimeout(() => navigate("/admission"), 250)}
                  className="flex-1 sm:flex-none min-w-[200px]"
                >
                  Conditions d&apos;admission
                </ParticleButton>
                <ParticleButton
                  variant="outline"
                  successDuration={900}
                  onSuccess={() => setTimeout(() => navigate("/formation/licence"), 250)}
                  className="flex-1 sm:flex-none min-w-[180px]"
                >
                  Voir la formation
                </ParticleButton>
              </motion.div>

              {/* Key metrics */}
              <motion.div
                variants={childFadeUpVariants}
                className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-[480px] border-t border-[var(--color-misa-line)] pt-6 sm:pt-8"
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-misa-line)] border border-[var(--color-misa-line)]"
          >
            {[
              {
                title: "Data Science",
                desc: "Analyser et exploiter les données massives pour l'aide à la décision.",
                icon: Cpu,
                stack: ["Python", "SQL", "PyTorch", "Big Data"],
              },
              {
                title: "Expert en cybersécurité",
                desc: "Protéger les systèmes et infrastructures critiques.",
                icon: ShieldCheck,
                stack: ["Pentesting", "OWASP", "Cryptographie", "Linux"],
              },
              {
                title: "Expert en IA",
                desc: "Concevoir et déployer des systèmes intelligents.",
                icon: Sparkles,
                stack: ["Machine Learning", "Deep Learning", "Scikit-learn", "NLP"],
              },
              {
                title: "Designer",
                desc: "Concevoir des interfaces intuitives et esthétiques.",
                icon: Globe,
                stack: ["UI/UX", "Figma", "HTML/CSS", "Accessibilité"],
              },
              {
                title: "Lead developer",
                desc: "Diriger les équipes techniques et produire du logiciel robuste.",
                icon: Code2,
                stack: ["Architecture Cloud", "CI/CD", "Design Patterns", "Git"],
              },
              {
                title: "Administrateur Système & Réseaux",
                desc: "Gérer les infrastructures et l'environnement cloud.",
                icon: Users,
                stack: ["Linux", "Docker", "TCP/IP", "Virtualisation"],
              },
            ].map(item => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={childFadeUpVariants}
                  className="academic-card bg-white p-5 sm:p-8 hover:border-[var(--color-misa-ink)] transition-all duration-200 flex flex-col"
                >
                  <div className="p-2 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] text-[var(--color-misa-red)] w-fit">
                    <Icon size={18} />
                  </div>
                  <div className="mt-4 text-sm font-bold text-[var(--color-misa-ink)]">{item.title}</div>
                  <div className="mt-2 text-xs sm:text-sm text-neutral-600 leading-[1.6] flex-1">{item.desc}</div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map(tech => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono tracking-widest uppercase border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] text-neutral-500 px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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

      {/* - ALUMNI TÉMOIGNAGES - paper band ---------------─ */}
      <AnimatedSection direction="up" distance={40} className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ALUMNI & SORTANTS</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)] max-w-[540px]">
                Avis et parcours de nos diplômés
              </h2>
              <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
              <p className="mt-6 text-sm leading-[1.7] text-neutral-700">
                Paroles d&apos;anciens — valeurs de la MISA : intégrité, initiative, audace, rigueur, persévérance et travail d&apos;équipe.
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-neutral-600 italic">« MISA un jour, MISA toujours ! »</p>
              <p className="mt-6 text-xs leading-relaxed text-neutral-500">
                Découvrez les expériences de nos diplômés et leur parcours après la formation.
              </p>
            </div>

            {/* Right — Stack */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="w-[300px] xs:w-[340px] sm:w-[420px] md:w-[460px] h-[380px] sm:h-[360px]">
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
          </div>
        </div>
      </AnimatedSection>

      {/* - PARTENAIRES - Ivy League Wall of Trust ------------ */}
      <PartnersSection />

    </div>
  );
}
