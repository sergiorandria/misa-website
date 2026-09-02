import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { asset } from "../lib/assets";
import { temoignages } from "../data/content";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero — improved responsive */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 lg:gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-neutral-600 border border-[var(--color-misa-line)] px-2.5 py-1 bg-[var(--color-misa-paper)]">
              <span className="w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0" />
              <span>PRÉ-INSCRIPTION — SÉLECTION SUR DOSSIER</span>
            </div>
            
            <h1 className="mt-4 sm:mt-5 text-[26px] xs:text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.08] sm:leading-[0.95] tracking-tight font-bold text-[var(--color-misa-ink)]">
              <span className="block text-[11px] sm:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] font-semibold text-[var(--color-misa-red)] uppercase">
                Mention Informatique et Technologie
              </span>
              <span className="block mt-1.5 sm:mt-2">Informatique</span>
              <span className="block">et Technologie (MIT)</span>
            </h1>
            
            <div className="mt-3 sm:mt-4 h-1 w-16 bg-[var(--color-misa-red)]" />
            
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] leading-relaxed text-neutral-600 max-w-[560px]">
              <strong className="text-[var(--color-misa-ink)] font-semibold">Le futur est entre vos mains.</strong> Immergez-vous dans la Science, la technologie, l’ingénierie et les Mathématiques en intégrant la MIT, la toute nouvelle mention du Domaine des Sciences et Technologies de l’Université d’Antananarivo.
            </p>
            
            <div className="mt-6 flex flex-col xs:flex-row gap-3">
              <Link
                to="/admission"
                className="min-h-[44px] bg-[var(--color-misa-red)] text-white text-sm font-semibold px-5 py-2.5 flex items-center justify-center gap-2 hover:bg-[var(--color-misa-red-dark)] active:scale-[0.99] transition shadow-xs flex-1 xs:flex-none"
              >
                <span>Conditions d’admission</span>
                <ArrowRight size={15} className="shrink-0" />
              </Link>
              <Link
                to="/formation/licence"
                className="min-h-[44px] border border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] text-sm font-semibold px-5 py-2.5 flex items-center justify-center hover:bg-[var(--color-misa-ink)] hover:text-white active:scale-[0.99] transition flex-1 xs:flex-none"
              >
                Voir la formation
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-[520px] border-t border-[var(--color-misa-line)] pt-5">
              <div className="text-center sm:text-left">
                <div className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">1996</div>
                <div className="text-[11px] sm:text-xs text-neutral-500">Création MISA</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">LMD 2014</div>
                <div className="text-[11px] sm:text-xs text-neutral-500">Licence → Master</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">BP 906</div>
                <div className="text-[11px] sm:text-xs text-neutral-500">Ankatso</div>
              </div>
            </div>
          </div>

          <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-6 shadow-xs flex flex-col">
            <div className="flex items-center gap-3">
              <img src={asset('logo-mit.png')} alt="MIT logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0 bg-white p-1 border border-[var(--color-misa-line)]" />
              <div className="min-w-0">
                <div className="text-xs font-bold tracking-wider text-[var(--color-misa-red)] leading-tight">MIT — UNIVERSITÉ D'ANTANANARIVO</div>
                <div className="text-[11px] text-neutral-500">Sciences & Technologies</div>
              </div>
            </div>
            
            <h2 className="mt-4 text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">
              Une pédagogie centrée sur l’étudiant
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
              Cours magistraux, travaux dirigés, ateliers, simulations et projets de groupe. Les étudiants sont encouragés à prendre en charge leur apprentissage et à développer leur autonomie. Stages en entreprise chaque année.
            </p>
            
            <ul className="mt-4 grid grid-cols-1 xs:grid-cols-2 gap-2.5 text-xs">
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                <span>Projets réels</span>
              </li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                <span>Stages annuels</span>
              </li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                <span>Encadrement chercheur</span>
              </li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[var(--color-misa-red)] shrink-0" />
                <span>Partenariats intl.</span>
              </li>
            </ul>
            
            <div className="mt-4 pt-3 border-t border-[var(--color-misa-line)] text-[11px] sm:text-xs text-neutral-500">
              Référence : excellence académique, programmes rigoureux, classements nationaux.
            </div>
          </div>
        </div>
      </section>

      {/* MIT / MISA history — more airy */}
      <section className="border-y border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 sm:py-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <div>
            <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">LA MIT / MISA</div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-misa-ink)]">
              De la MISA (1996) à la MIT (2022)
            </h2>
            <div className="mt-3 h-px bg-[var(--color-misa-line)]" />
            <div className="mt-4 space-y-3 text-xs sm:text-sm leading-relaxed text-neutral-700">
              <p>
                Fondée en <strong>1996</strong> dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l’Université d’Antananarivo, avec le soutien du projet <strong>PRESUP</strong> et de la Coopération Française.
              </p>
              <p>
                Ayant basculé dans le système <strong>LMD depuis 2014</strong>, la Maîtrise en Informatique et Statistique Appliquées est devenue <strong>Mathématiques, Informatique et Statistique Appliquées</strong>. Formation orientée recherche pour les M2 (première promotion 2016).
              </p>
              <p>
                À la fin de l’année <strong>2022</strong>, la MISA introduit la Mention Informatique et Technologie, offrant une formation complète de la première année (<strong>L1</strong>) à la troisième année (<strong>L3</strong>).
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-[var(--color-misa-line)] bg-white p-4 sm:p-5 shadow-sm">
              <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">VISION</div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
                Devenir une référence mondiale dans l’enseignement supérieur en informatique et technologies. Former les leaders de demain.
              </p>
            </div>
            
            <div className="border border-[var(--color-misa-line)] bg-white p-4 sm:p-5 shadow-sm">
              <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">MISSION</div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
                Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d’évoluer — apprentissage continu tout au long de la vie.
              </p>
            </div>
            
            <div className="border border-[var(--color-misa-line)] bg-white p-4 sm:p-5 shadow-sm">
              <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">POURQUOI LA MIT / MISA</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1.5 text-neutral-700">
                <li>Approche intégrée mathématiques & informatique</li>
                <li>Pionnière en IA — expertise de pointe</li>
                <li>Diplômés hautement recherchés — qualité & compétences pratiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs — fixed spacing, more responsive */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--color-misa-ink)]">
            Objectifs — débouchés
          </h2>
          <Link
            to="/formation/licence"
            className="text-xs tracking-widest text-neutral-500 hover:text-[var(--color-misa-ink)] border-b border-transparent hover:border-[var(--color-misa-ink)] font-medium self-start sm:self-auto"
          >
            → FORMATION
          </Link>
        </div>
        
        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["Data Science", "Analyser et exploiter les données."],
            ["Expert en cybersécurité", "Protéger les systèmes et infrastructures."],
            ["Expert en IA", "Concevoir des systèmes intelligents."],
            ["Designer", "Interfaces intuitives et esthétiques."],
            ["Lead developer", "Diriger les équipes et produire du logiciel."],
            ["Administrateur Système & Réseaux", "Gérer les infrastructures."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border border-[var(--color-misa-line)] p-4 sm:p-5 hover:border-[var(--color-misa-ink)] hover:shadow-sm transition">
              <div className="text-sm font-semibold text-[var(--color-misa-ink)]">{title}</div>
              <div className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] sm:text-xs text-neutral-500">
          Intitulés repris tels quels depuis la page d’accueil originale.
        </p>
      </section>

      {/* Témoignages — Alumni (contenu/temoignages) */}
      <section className="border-y border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">ALUMNI — TÉMOIGNAGES</div>
          <h2 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-[var(--color-misa-ink)]">Avis des sortants</h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 max-w-[720px]">Paroles d'anciens — valeurs de la MISA : intégrité, initiative, audace, rigueur, persévérance et travail d'équipe. « MISA un jour, MISA toujours ! »</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {temoignages.map(t => (
              <div key={t.author} className="bg-white border-l-4 border-[var(--color-misa-red)] border-y border-r border-[var(--color-misa-line)] p-4 sm:p-5 shadow-sm flex flex-col">
                <p className="text-xs sm:text-sm leading-relaxed italic text-neutral-700 flex-1">"{t.quote}"</p>
                <div className="mt-3 text-right text-xs border-t border-[var(--color-misa-line)] pt-3">
                  <span className="font-semibold text-[var(--color-misa-red)]">{t.author}</span>
                  <span className="text-neutral-500"> — {t.promo}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] sm:text-xs text-neutral-500">Extraits de « temoignages_anciens(1).txt » — textes intégraux conservés, mise en forme minimaliste.</p>
        </div>
      </section>

      {/* Partenaires — fixed spacing */}
      <section className="border-t border-[var(--color-misa-line)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">PARTENAIRES</div>
          <div className="mt-4 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {["MESUPRES","AUF","Toulouse III","Paris Diderot","Paris 13","Passau","Telma","Orange","Renault","Institut Pasteur","VV","Etech","Ingenosia","BMOI","BNI","BOA","Amen","Fac. Sciences"].map(p => (
              <div key={p} className="bg-white border border-[var(--color-misa-line)] min-h-[48px] sm:min-h-[56px] flex items-center justify-center text-xs font-medium text-neutral-700 px-2 py-2 text-center hover:border-[var(--color-misa-ink)] hover:shadow-sm transition">
                {p}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-neutral-500">
            Telma (connectivité), Universités Paris 7 / Paris 13 / Paul Sabatier Toulouse (missions d’enseignement), Passau, etc. — repris depuis la bande partenaires du site original.
          </p>
        </div>
      </section>
    </div>
  );
}
