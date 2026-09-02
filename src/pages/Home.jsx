import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Users, Globe, BookMarked, Sparkles, Award, Quote } from "lucide-react";
import { asset } from "../lib/assets";
import { temoignages } from "../data/content";
import PartnersSection from "../components/PartnersSection";

export default function Home() {
  return (
    <div className="bg-white">

      {/* ── HERO — full-width split: text left | campus photo right ──────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-misa-line)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] gap-0 items-stretch min-h-[600px] lg:min-h-[680px]">

            {/* Left column — text */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase border-l-3 border-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-misa-red)] animate-pulse" />
                <span>PRÉ-INSCRIPTION — SÉLECTION SUR DOSSIER</span>
              </div>

              <h1 className="mt-6 text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-tight font-light text-[var(--color-misa-ink)]">
                <span className="block text-[11px] sm:text-[12px] tracking-[0.22em] font-sans font-bold text-[var(--color-misa-red)] uppercase mb-2">
                  Mention Informatique et Technologie
                </span>
                <span className="block">Informatique</span>
                <span className="block">et Technologie</span>
                <span className="block text-[var(--color-misa-red)]">(MIT)</span>
              </h1>

              <div className="mt-6 h-px w-16 bg-[var(--color-misa-red)]" />

              <p className="mt-6 text-sm sm:text-base leading-[1.7] text-neutral-600 max-w-[520px]">
                <strong className="text-[var(--color-misa-ink)] font-semibold">Le futur est entre vos mains.</strong>{" "}
                Immergez-vous dans la Science, la technologie, l'ingénierie et les Mathématiques en intégrant la MIT — mention du Domaine des Sciences et Technologies de l'Université d'Antananarivo.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/admission"
                  className="min-h-[48px] bg-[var(--color-misa-red)] text-white text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 flex items-center justify-center gap-2 hover:bg-[var(--color-misa-red-dark)] transition duration-200 group"
                >
                  <span>Conditions d'admission</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition duration-200" />
                </Link>
                <Link
                  to="/formation/licence"
                  className="min-h-[48px] border-2 border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 flex items-center justify-center hover:bg-[var(--color-misa-ink)] hover:text-white transition duration-200"
                >
                  Voir la formation
                </Link>
              </div>

              {/* Key metrics */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-[480px] border-t border-[var(--color-misa-line)] pt-8">
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-lg font-bold text-[var(--color-misa-ink)]">1996</div>
                  <div className="text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Fondation</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-ink)] pl-3">
                  <div className="text-lg font-bold text-[var(--color-misa-ink)]">LMD</div>
                  <div className="text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Depuis 2014</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-lg font-bold text-[var(--color-misa-ink)]">Ankatso</div>
                  <div className="text-[11px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">BP 906</div>
                </div>
              </div>
            </div>

            {/* Right column — campus photo (full bleed, hidden on mobile) */}
            <div className="hidden lg:block relative">
              {/* sharp vertical separator */}
              <div className="absolute inset-y-0 left-0 w-px bg-[var(--color-misa-line)] z-10" />
              <img
                src={asset('campus-main.jpg')}
                alt="Campus Faculté des Sciences — Université d'Antananarivo"
                className="campus-img absolute inset-0 w-full h-full"
                style={{ objectPosition: "center 20%" }}
              />
              {/* subtle bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-misa-ink)]/30 to-transparent pointer-events-none" />
              {/* caption */}
              <div className="absolute bottom-6 left-8 right-6 z-10">
                <div className="text-[10px] text-white/80 tracking-[0.14em] uppercase font-medium">
                  Faculté des Sciences — Université d'Antananarivo
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INFO STRIP — logo + tagline — white band ─────────────────────── */}
      <div className="border-b border-[var(--color-misa-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-1.5 border border-[var(--color-misa-line)]">
              <img src={asset('logo-mit.png')} alt="MIT logo" className="h-9 w-auto object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.14em] text-[var(--color-misa-red)] uppercase">MIT — UNIVERSITÉ D'ANTANANARIVO</div>
              <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Sciences & Technologies · Faculté des Sciences</div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-4 text-xs font-medium text-neutral-600">
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)]" /> Projets réels</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)]" /> Stages annuels</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)]" /> Encadrement chercheur</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[var(--color-misa-red)]" /> Partenariats internationaux</li>
          </ul>
        </div>
      </div>

      {/* ── PÉDAGOGIE — paper band ───────────────────────────────────────── */}
      <section className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">PÉDAGOGIE</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)] max-w-[520px]">
            Une formation centrée sur l'étudiant
          </h2>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-6 text-sm sm:text-base leading-[1.7] text-neutral-700 max-w-[640px]">
            Cours magistraux, travaux dirigés, ateliers, simulations et projets de groupe. Les étudiants sont encouragés à prendre en charge leur apprentissage et à développer leur autonomie. Stages en entreprise chaque année pour ancrer la théorie dans la pratique.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-misa-line)] border border-[var(--color-misa-line)]">
            {[
              { title: "Data Science", desc: "Analyser et exploiter les données massives pour l'aide à la décision.", icon: Cpu },
              { title: "Expert en cybersécurité", desc: "Protéger les systèmes et infrastructures critiques.", icon: ShieldCheck },
              { title: "Expert en IA", desc: "Concevoir et déployer des systèmes intelligents.", icon: Sparkles },
              { title: "Designer", desc: "Concevoir des interfaces intuitives et esthétiques.", icon: Globe },
              { title: "Lead developer", desc: "Diriger les équipes techniques et produire du logiciel robuste.", icon: Code2 },
              { title: "Administrateur Système & Réseaux", desc: "Gérer les infrastructures et l'environnement cloud.", icon: Users },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="academic-card bg-white p-6 sm:p-8 hover:border-[var(--color-misa-ink)] transition-all duration-200">
                  <div className="p-2 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] text-[var(--color-misa-red)] w-fit">
                    <Icon size={18} />
                  </div>
                  <div className="mt-4 text-sm font-bold text-[var(--color-misa-ink)]">{item.title}</div>
                  <div className="mt-2 text-sm text-neutral-600 leading-[1.6]">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HISTOIRE — white band ────────────────────────────────────────── */}
      <section className="bg-white border-b border-[var(--color-misa-line)] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">HISTORIQUE INSTITUTIONNEL</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
                De la MISA (1996)<br />à la MIT (2022)
              </h2>
              <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />

              <div className="mt-8 space-y-4 text-sm leading-[1.7] text-neutral-700">
                <div className="p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-red)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">1996 — Fondée</span> dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l'Université d'Antananarivo, avec le soutien du projet <strong>PRESUP</strong> et de la Coopération Française.
                </div>
                <div className="p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-ink)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">2014 — Bascule LMD</span> : La Maîtrise en Informatique et Statistique Appliquées est devenue <strong>Mathématiques, Informatique et Statistique Appliquées</strong>. Formation orientée recherche pour les M2 (première promotion 2016).
                </div>
                <div className="p-5 bg-[var(--color-misa-paper)] border-l-3 border-[var(--color-misa-red)]">
                  <span className="font-bold text-[var(--color-misa-ink)]">2022 — Mention IT</span> : La MISA introduit la Mention Informatique et Technologie, offrant une formation complète de la première année (<strong>L1</strong>) à la troisième année (<strong>L3</strong>).
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Globe size={15} />
                  <span>VISION</span>
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-neutral-700">
                  Devenir une référence mondiale dans l'enseignement supérieur en informatique et technologies. Former les leaders de demain.
                </p>
              </div>

              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-ink)] font-bold uppercase">
                  <BookMarked size={15} />
                  <span>MISSION</span>
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-neutral-700">
                  Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d'évoluer — apprentissage continu tout au long de la vie.
                </p>
              </div>

              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Award size={15} />
                  <span>POURQUOI LA MIT / MISA</span>
                </div>
                <ul className="mt-3 text-sm leading-[1.7] list-disc pl-5 space-y-1.5 text-neutral-700">
                  <li>Approche intégrée mathématiques & informatique</li>
                  <li>Pionnière en IA — expertise de pointe</li>
                  <li>Diplômés hautement recherchés — qualité & compétences pratiques</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ALUMNI TÉMOIGNAGES — paper band ─────────────────────────────── */}
      <section className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ALUMNI & SORTANTS</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)] max-w-[540px]">
                Avis et parcours de nos diplômés
              </h2>
              <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
            </div>
            <p className="text-xs text-neutral-500 font-mono tracking-wider">
              « MISA un jour, MISA toujours ! »
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {temoignages.map((t) => (
              <div key={t.author} className="academic-card bg-white border border-[var(--color-misa-line)] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <Quote size={20} className="text-[var(--color-misa-red)] mb-4 opacity-80" />
                  <p className="text-sm leading-[1.7] text-neutral-700 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--color-misa-line)] pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--color-misa-red)] uppercase tracking-wider">{t.author}</span>
                  <span className="text-xs font-mono text-neutral-500">{t.promo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES — Ivy League Wall of Trust ──────────────────────── */}
      <PartnersSection />

    </div>
  );
}
