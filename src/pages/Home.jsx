import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Users, Globe, BookMarked, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero — MIT / Stanford Prestige Academic Banner */}
      <section className="relative overflow-hidden border-b border-[var(--color-misa-line)] bg-gradient-to-b from-white via-[var(--color-misa-paper)] to-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
            
            {/* Main Hero Column */}
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.16em] text-[var(--color-misa-red)] font-bold uppercase border-l-3 border-[var(--color-misa-red)] bg-white px-3 py-1.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-misa-red)] animate-pulse" />
                <span>PRÉ-INSCRIPTION — SÉLECTION SUR DOSSIER</span>
              </div>
              
              <h1 className="mt-5 text-[28px] xs:text-[34px] sm:text-[44px] leading-[1.08] sm:leading-[0.98] tracking-tight font-extrabold text-[var(--color-misa-ink)]">
                <span className="block text-[11px] sm:text-[13px] tracking-[0.2em] font-bold text-[var(--color-misa-red)] uppercase mb-1">
                  Mention Informatique et Technologie
                </span>
                <span className="block text-[var(--color-misa-ink)]">Informatique</span>
                <span className="block text-[var(--color-misa-ink)]">et Technologie (MIT)</span>
              </h1>
              
              <div className="mt-4 sm:mt-5 h-1 w-20 bg-gradient-to-r from-[var(--color-misa-red)] to-[var(--color-misa-red-dark)]" />
              
              <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-neutral-700 max-w-[580px]">
                <strong className="text-[var(--color-misa-ink)] font-semibold">Le futur est entre vos mains.</strong> Immergez-vous dans la Science, la technologie, l’ingénierie et les Mathématiques en intégrant la MIT, la toute nouvelle mention du Domaine des Sciences et Technologies de l’Université d’Antananarivo.
              </p>
              
              {/* Dual Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/admission"
                  className="min-h-[46px] bg-[var(--color-misa-red)] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-6 py-3 flex items-center justify-center gap-2 hover:bg-[var(--color-misa-red-dark)] active:scale-[0.99] transition duration-200 shadow-md group"
                >
                  <span>Conditions d’admission</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition duration-200" />
                </Link>
                <Link
                  to="/formation/licence"
                  className="min-h-[46px] border-2 border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] text-xs sm:text-sm font-bold tracking-wider uppercase px-6 py-3 flex items-center justify-center hover:bg-[var(--color-misa-ink)] hover:text-white active:scale-[0.99] transition duration-200"
                >
                  Voir la formation
                </Link>
              </div>
              
              {/* Harvard-style Metrics Row */}
              <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-6 max-w-[540px] border-t-2 border-[var(--color-misa-line)] pt-6">
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-base sm:text-lg font-extrabold text-[var(--color-misa-ink)]">1996</div>
                  <div className="text-[10px] sm:text-xs text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Création MISA</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-ink)] pl-3">
                  <div className="text-base sm:text-lg font-extrabold text-[var(--color-misa-ink)]">LMD 2014</div>
                  <div className="text-[10px] sm:text-xs text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Licence → Master</div>
                </div>
                <div className="border-l-2 border-[var(--color-misa-red)] pl-3">
                  <div className="text-base sm:text-lg font-extrabold text-[var(--color-misa-ink)]">BP 906</div>
                  <div className="text-[10px] sm:text-xs text-neutral-500 font-medium tracking-wide uppercase mt-0.5">Ankatso</div>
                </div>
              </div>
            </div>

            {/* Sidebar Highlight Box */}
            <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-7 shadow-sm relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-academic-grid opacity-20 pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-[var(--color-misa-line)] pb-4">
                <div className="p-1.5 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)]">
                  <img src={`${import.meta.env.BASE_URL}logo-mit.png`} alt="MIT logo" className="h-10 sm:h-11 w-auto object-contain" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-[var(--color-misa-red)] uppercase">MIT — UNIVERSITÉ D'ANTANANARIVO</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Sciences & Technologies</div>
                </div>
              </div>
              
              <h2 className="mt-5 text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)] flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--color-misa-red)]" />
                Une pédagogie centrée sur l’étudiant
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                Cours magistraux, travaux dirigés, ateliers, simulations et projets de groupe. Les étudiants sont encouragés à prendre en charge leur apprentissage et à développer leur autonomie. Stages en entreprise chaque année.
              </p>
              
              <ul className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-medium">
                <li className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-3 py-2 flex items-center gap-2 text-neutral-800">
                  <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>Projets réels</span>
                </li>
                <li className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-3 py-2 flex items-center gap-2 text-neutral-800">
                  <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>Stages annuels</span>
                </li>
                <li className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-3 py-2 flex items-center gap-2 text-neutral-800">
                  <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>Encadrement chercheur</span>
                </li>
                <li className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-3 py-2 flex items-center gap-2 text-neutral-800">
                  <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>Partenariats intl.</span>
                </li>
              </ul>
              
              <div className="mt-5 pt-4 border-t border-[var(--color-misa-line)] text-[11px] text-neutral-500 leading-tight">
                Référence : excellence académique, programmes rigoureux, classements nationaux.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MIT / MISA history & Vision Section */}
      <section className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] py-10 sm:py-14">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">HISTORIQUE INSTITUTIONNEL</div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-misa-ink)]">
                De la MISA (1996) à la MIT (2022)
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-[var(--color-misa-red)]" />
              
              <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed text-neutral-700">
                <div className="p-4 bg-white border-l-3 border-[var(--color-misa-red)] shadow-2xs">
                  <span className="font-bold text-[var(--color-misa-ink)]">1996 — Fondée</span> dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l’Université d’Antananarivo, avec le soutien du projet <strong>PRESUP</strong> et de la Coopération Française.
                </div>
                
                <div className="p-4 bg-white border-l-3 border-[var(--color-misa-ink)] shadow-2xs">
                  <span className="font-bold text-[var(--color-misa-ink)]">2014 — Bascule LMD</span> : La Maîtrise en Informatique et Statistique Appliquées est devenue <strong>Mathématiques, Informatique et Statistique Appliquées</strong>. Formation orientée recherche pour les M2 (première promotion 2016).
                </div>
                
                <div className="p-4 bg-white border-l-3 border-[var(--color-misa-red)] shadow-2xs">
                  <span className="font-bold text-[var(--color-misa-ink)]">2022 — Mention IT</span> : À la fin de l’année 2022, la MISA introduit la Mention Informatique et Technologie, offrant une formation complète de la première année (<strong>L1</strong>) à la troisième année (<strong>L3</strong>).
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Globe size={15} />
                  <span>VISION</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
                  Devenir une référence mondiale dans l’enseignement supérieur en informatique et technologies. Former les leaders de demain.
                </p>
              </div>
              
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[var(--color-misa-ink)] font-bold uppercase">
                  <BookMarked size={15} />
                  <span>MISSION</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
                  Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d’évoluer — apprentissage continu tout au long de la vie.
                </p>
              </div>
              
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                  <Award size={15} />
                  <span>POURQUOI LA MIT / MISA</span>
                </div>
                <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1.5 text-neutral-700">
                  <li>Approche intégrée mathématiques & informatique</li>
                  <li>Pionnière en IA — expertise de pointe</li>
                  <li>Diplômés hautement recherchés — qualité & compétences pratiques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs — Careers Grid */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 border-b border-[var(--color-misa-line)] pb-4">
          <div>
            <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">DÉBOUCHÉS PROFESSIONNELS</div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-misa-ink)] mt-1">
              Objectifs — débouchés
            </h2>
          </div>
          <Link
            to="/formation/licence"
            className="text-xs font-bold tracking-widest text-[var(--color-misa-red)] hover:text-[var(--color-misa-red-dark)] border-b-2 border-[var(--color-misa-red)] pb-0.5 uppercase transition"
          >
            → FORMATION
          </Link>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Data Science", desc: "Analyser et exploiter les données.", icon: Cpu },
            { title: "Expert en cybersécurité", desc: "Protéger les systèmes et infrastructures.", icon: ShieldCheck },
            { title: "Expert en IA", desc: "Concevoir des systèmes intelligents.", icon: Sparkles },
            { title: "Designer", desc: "Interfaces intuitives et esthétiques.", icon: Globe },
            { title: "Lead developer", desc: "Diriger les équipes et produire du logiciel.", icon: Code2 },
            { title: "Administrateur Système & Réseaux", desc: "Gérer les infrastructures.", icon: Users },
          ].map(item => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="academic-card border border-[var(--color-misa-line)] bg-white p-5 hover:border-[var(--color-misa-ink)] transition-all duration-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] text-[var(--color-misa-red)]">
                    <IconComponent size={18} />
                  </div>
                  <div className="text-sm font-bold text-[var(--color-misa-ink)]">{item.title}</div>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">{item.desc}</div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[11px] sm:text-xs text-neutral-500 italic">
          Intitulés repris tels quels depuis la page d’accueil originale.
        </p>
      </section>

      {/* Institutional Partners Showcase */}
      <section className="border-t border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] py-8 sm:py-10">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase text-center sm:text-left">PARTENAIRES ACADÉMIQUES & INDUSTRIELS</div>
          <div className="mt-4 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-[var(--color-misa-line)] border border-[var(--color-misa-line)] shadow-2xs">
            {["MESUPRES","AUF","Toulouse III","Paris Diderot","Paris 13","Passau","Telma","Orange","Renault","Institut Pasteur","VV","Etech","Ingenosia","BMOI","BNI","BOA","Amen","Fac. Sciences"].map(p => (
              <div key={p} className="bg-white min-h-[48px] sm:min-h-[56px] flex items-center justify-center text-xs font-semibold text-neutral-700 px-2 py-1 text-center hover:bg-[var(--color-misa-paper)] hover:text-[var(--color-misa-red)] transition">
                {p}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] sm:text-xs leading-relaxed text-neutral-500">
            Telma (connectivité), Universités Paris 7 / Paris 13 / Paul Sabatier Toulouse (missions d’enseignement), Passau, etc. — repris depuis la bande partenaires du site original.
          </p>
        </div>
      </section>
    </div>
  );
}
