import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { partenaires } from "../data/content";

const base = import.meta.env.BASE_URL;

export default function Home() {
  const scrollToHistory = () => {
    const el = document.getElementById("history");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero — Full Viewport Height Screen */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between max-w-[1160px] mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-6 bg-white">
        <div className="my-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 lg:gap-14 items-center">
          <div>
            <h1 className="mt-2 sm:mt-4 text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.05] sm:leading-[0.95] tracking-tight font-bold">
              <span className="block text-[11px] sm:text-[12px] tracking-[0.18em] font-semibold text-[var(--color-misa-red)] uppercase">
                MENTION INFORMATIQUE ET TECHNOLOGIE
              </span>
              <span className="block mt-2 sm:mt-3">Informatique</span>
              <span className="block">et Technologie (MIT)</span>
            </h1>
            <div className="mt-3 sm:mt-4 h-1 w-16 bg-[var(--color-misa-red)]" />
            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] leading-relaxed text-neutral-600 max-w-[560px]">
              <strong className="text-[var(--color-misa-ink)]">Le futur est entre vos mains.</strong> Immergez-vous dans la Science, la technologie, l'ingénierie et les Mathématiques en intégrant la MIT, la mention du Domaine des Sciences et Technologies de l'Université d'Antananarivo.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="bg-[var(--color-misa-red)] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-[var(--color-misa-red-dark)] hover:shadow-md transition-all duration-300"
              >
                Conditions d'admission
              </Link>
              <Link
                to="/formation/licence"
                className="border border-[var(--color-misa-ink)] text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-[var(--color-misa-ink)] hover:text-white transition-all duration-300"
              >
                Voir la formation
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 max-w-[360px] border-t border-[var(--color-misa-line)] pt-4 sm:pt-6">
              <div>
                <div className="text-sm font-bold text-[var(--color-misa-ink)]">1996</div>
                <div className="text-xs text-neutral-500">Création MISA</div>
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--color-misa-ink)]">BP 906</div>
                <div className="text-xs text-neutral-500">Ankatso</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end pt-2 sm:pt-4 lg:pt-0">
            <img
              src={`${base}logo-mit.png`}
              alt="MIT logo"
              className="h-36 xs:h-44 sm:h-52 md:h-60 lg:h-64 max-w-full w-auto object-contain animate-float bg-white shrink-0"
            />
          </div>
        </div>

        {/* Scroll indicator smoothly navigating to History */}
        <div className="pt-4 sm:pt-6 pb-2 flex flex-col items-center justify-center">
          <button
            onClick={scrollToHistory}
            className="flex flex-col items-center text-xs text-neutral-500 hover:text-[var(--color-misa-red)] transition-colors group cursor-pointer"
            aria-label="Défiler vers l'histoire"
          >
            <span className="tracking-widest uppercase text-[10px] sm:text-[11px] font-semibold mb-1 group-hover:text-[var(--color-misa-red)]">
              Histoire & Vision
            </span>
            <ChevronDown size={20} className="animate-bounce-slow text-[var(--color-misa-red)]" />
          </button>
        </div>
      </section>

      {/* MIT / MISA history — two-col section */}
      <section id="history" className="border-y border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] py-12 sm:py-14 scroll-mt-16">
        <div className="max-w-[1160px] mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs tracking-widest text-neutral-500 font-semibold">LA MIT / MISA</div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-misa-ink)]">La MIT / MISA</h2>
            <div className="mt-3 h-px bg-[var(--color-misa-line)]" />
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
              <p>Fondée dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l'Université d'Antananarivo, avec le soutien du projet PRESUP et de la Coopération Française.</p>
              <p>La Maîtrise en Informatique et Statistique Appliquées est devenue Mathématiques, Informatique et Statistique Appliquées (MISA) avec l'adoption du système LMD.</p>
              <p>La MISA a ensuite introduit la Mention Informatique et Technologie (MIT), offrant une formation complète de la première année (L1) à la troisième année (L3).</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-[var(--color-misa-line)] bg-white p-5 hover:border-[var(--color-misa-red)]/50 hover:shadow-sm transition-all duration-300">
              <div className="text-xs tracking-widest text-neutral-500 font-semibold">VISION</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">Devenir une référence mondiale dans l’enseignement supérieur en informatique et technologies. Former les leaders de demain.</p>
            </div>
            <div className="border border-[var(--color-misa-line)] bg-white p-5 hover:border-[var(--color-misa-red)]/50 hover:shadow-sm transition-all duration-300">
              <div className="text-xs tracking-widest text-neutral-500 font-semibold">MISSION</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d’évoluer — apprentissage continu tout au long de la vie.</p>
            </div>
            <div className="border border-[var(--color-misa-line)] bg-white p-5 hover:border-[var(--color-misa-red)]/50 hover:shadow-sm transition-all duration-300">
              <div className="text-xs tracking-widest text-neutral-500 font-semibold">POURQUOI LA MIT / MISA</div>
              <ul className="mt-2 text-sm leading-relaxed text-neutral-700 list-disc pl-5 space-y-1">
                <li>Approche intégrée mathématiques & informatique</li>
                <li>Diplômés hautement recherchés — qualité & compétences pratiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs — grid */}
      <section className="max-w-[1160px] mx-auto px-6 py-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-[var(--color-misa-ink)]">Objectifs — débouchés</h2>
          <Link
            to="/formation/licence"
            className="text-xs tracking-widest text-neutral-500 hover:text-[var(--color-misa-red)] border-b border-transparent hover:border-[var(--color-misa-red)] transition-all"
          >
            → FORMATION
          </Link>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-misa-line)] border border-[var(--color-misa-line)]">
          {[
            ["Data Science", "Analyser et exploiter les données."],
            ["Expert en cybersécurité", "Protéger les systèmes et infrastructures."],
            ["Expert en IA", "Concevoir des systèmes intelligents."],
            ["Designer", "Interfaces intuitives et esthétiques."],
            ["Lead developer", "Diriger les équipes et produire du logiciel."],
            ["Administrateur Système & Réseaux", "Gérer les infrastructures."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white p-5 hover:bg-neutral-50/80 transition-colors duration-200 group"
            >
              <div className="text-sm font-semibold text-[var(--color-misa-ink)] group-hover:text-[var(--color-misa-red)] transition-colors">{title}</div>
              <div className="text-sm text-neutral-500 mt-1 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partenaires — Borderless Clean Layout on Pure White */}
      <section className="bg-white py-12">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-xs tracking-widest text-neutral-500 font-semibold uppercase">PARTENAIRES</div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partenaires.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center justify-center bg-white p-3 h-[72px] hover:scale-105 transition-transform duration-300"
                title={name}
              >
                <img src={logo} alt={name} className="max-h-[48px] max-w-full object-contain bg-white" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
