import { Link } from "react-router-dom";
import { partenaires } from "../data/content";

const base = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero — minimal */}
      <section className="max-w-[1160px] mx-auto px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
          <div>
            <h1 className="mt-7 text-[42px] leading-[0.95] tracking-tight font-bold">
              <span className="block text-[12px] tracking-[0.18em] font-semibold text-[var(--color-misa-red)]">MENTION INFORMATIQUE ET TECHNOLOGIE</span>
              <span className="block mt-3">Informatique</span>
              <span className="block">et Technologie (MIT)</span>
            </h1>
            <div className="mt-4 h-1 w-16 bg-[var(--color-misa-red)]" />
            <p className="mt-6 text-[16px] leading-relaxed text-neutral-600 max-w-[560px]">
              <strong className="text-[var(--color-misa-ink)]">Le futur est entre vos mains.</strong> Immergez-vous dans la Science, la technologie, l'ingénierie et les Mathématiques en intégrant la MIT, la mention du Domaine des Sciences et Technologies de l'Université d'Antananarivo.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/admission" className="bg-[var(--color-misa-red)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--color-misa-red-dark)] transition">Conditions d'admission</Link>
              <Link to="/formation/licence" className="border border-[var(--color-misa-ink)] text-sm font-semibold px-6 py-3 hover:bg-[var(--color-misa-ink)] hover:text-white transition">Voir la formation</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 max-w-[360px] border-t border-[var(--color-misa-line)] pt-6">
              <div><div className="text-sm font-bold">1996</div><div className="text-xs text-neutral-500">Création MISA</div></div>
              <div><div className="text-sm font-bold">BP 906</div><div className="text-xs text-neutral-500">Ankatso</div></div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end pt-6">
            <div className="flex items-center gap-6">
              <img src={`${base}logo-mit.png`} alt="MIT logo" className="h-60 w-auto object-contain" />
              {/* <img src={`${base}logo-misa.png`} alt="MISA logo" className="h-28 w-auto object-contain" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* MIT / MISA history — minimal two-col */}
      <section className="border-y border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs tracking-widest text-neutral-500">LA MIT / MISA</div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">La MIT / MISA</h2>
            <div className="mt-3 h-px bg-[var(--color-misa-line)]" />
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
              <p>Fondée dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l'Université d'Antananarivo, avec le soutien du projet PRESUP et de la Coopération Française.</p>
              <p>La Maîtrise en Informatique et Statistique Appliquées est devenue Mathématiques, Informatique et Statistique Appliquées (MISA) avec l'adoption du système LMD.</p>
              <p>La MISA a ensuite introduit la Mention Informatique et Technologie (MIT), offrant une formation complète de la première année (L1) à la troisième année (L3).</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-[var(--color-misa-line)] bg-white p-5">
              <div className="text-xs tracking-widest text-neutral-500">VISION</div>
              <p className="mt-2 text-sm leading-relaxed">Devenir une référence mondiale dans l’enseignement supérieur en informatique et technologies. Former les leaders de demain.</p>
            </div>
            <div className="border border-[var(--color-misa-line)] bg-white p-5">
              <div className="text-xs tracking-widest text-neutral-500">MISSION</div>
              <p className="mt-2 text-sm leading-relaxed">Former des diplômés compétents et adaptables, maîtrisant les technologies actuelles et capables d’évoluer — apprentissage continu tout au long de la vie.</p>
            </div>
            <div className="border border-[var(--color-misa-line)] bg-white p-5">
              <div className="text-xs tracking-widest text-neutral-500">POURQUOI LA MIT / MISA</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li>Approche intégrée mathématiques & informatique</li>
                <li>Diplômés hautement recherchés — qualité & compétences pratiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs — minimal grid */}
      <section className="max-w-[1160px] mx-auto px-6 py-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Objectifs — débouchés</h2>
          <Link to="/formation/licence" className="text-xs tracking-widest text-neutral-500 hover:text-[var(--color-misa-ink)] border-b border-transparent hover:border-[var(--color-misa-ink)]">→ FORMATION</Link>
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
            <div key={title} className="bg-white p-5">
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-sm text-neutral-500 mt-1 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partenaires */}
      <section className="border-t border-[var(--color-misa-line)]">
        <div className="max-w-[1160px] mx-auto px-6 py-10">
          <div className="text-xs tracking-widest text-neutral-500">PARTENAIRES</div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partenaires.map(({ name, logo }) => (
              <div key={name} className="flex items-center justify-center border border-[var(--color-misa-line)] bg-white p-3 h-[72px] hover:shadow-sm transition">
                <img src={logo} alt={name} className="max-h-[48px] max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
