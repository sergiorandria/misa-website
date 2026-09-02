import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero — minimal */}
      <section className="max-w-[1160px] mx-auto px-6 pt-10 pb-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-widest text-neutral-500 border border-[var(--color-misa-line)] px-2.5 py-1">
              <span className="w-1.5 h-1.5 bg-[var(--color-misa-red)]" /> PRÉ-INSCRIPTION — SÉLECTION SUR DOSSIER
            </div>
            <h1 className="mt-5 text-[42px] leading-[0.95] tracking-tight font-bold">
              <span className="block text-[12px] tracking-[0.18em] font-semibold text-[var(--color-misa-red)]">MENTION INFORMATIQUE ET TECHNOLOGIE</span>
              <span className="block mt-2">Informatique</span>
              <span className="block">et Technologie (MIT)</span>
            </h1>
            <div className="mt-3 h-1 w-16 bg-[var(--color-misa-red)]" />
            <p className="mt-5 text-[16px] leading-relaxed text-neutral-600 max-w-[560px]">
              <strong className="text-[var(--color-misa-ink)]">Le futur est entre vos mains.</strong> Immergez-vous dans la Science, la technologie, l’ingénierie et les Mathématiques en intégrant la MIT, la toute nouvelle mention du Domaine des Sciences et Technologies de l’Université d’Antananarivo.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/admission" className="bg-[var(--color-misa-red)] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[var(--color-misa-red-dark)] transition">Conditions d’admission</Link>
              <Link to="/formation/licence" className="border border-[var(--color-misa-ink)] text-sm font-semibold px-5 py-2.5 hover:bg-[var(--color-misa-ink)] hover:text-white transition">Voir la formation</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-[520px] border-t border-[var(--color-misa-line)] pt-5">
              <div><div className="text-sm font-bold">1996</div><div className="text-xs text-neutral-500">Création MISA</div></div>
              <div><div className="text-sm font-bold">LMD 2014</div><div className="text-xs text-neutral-500">Licence → Master</div></div>
              <div><div className="text-sm font-bold">BP 906</div><div className="text-xs text-neutral-500">Ankatso</div></div>
            </div>
          </div>

          <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-6">
            <img src={`${import.meta.env.BASE_URL}logo-mit.png`} alt="MIT logo" className="h-12 w-auto" />
            <h2 className="mt-4 text-sm font-bold tracking-wide">Une pédagogie centrée sur l’étudiant</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Cours magistraux, travaux dirigés, ateliers, simulations et projets de groupe. Les étudiants sont encouragés à prendre en charge leur apprentissage et à développer leur autonomie. Stages en entreprise chaque année.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-2">Projets réels</li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-2">Stages annuels</li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-2">Encadrement chercheur</li>
              <li className="border border-[var(--color-misa-line)] bg-white px-3 py-2">Partenariats intl.</li>
            </ul>
            <div className="mt-4 text-xs text-neutral-500">Référence : excellence académique, programmes rigoureux, classements nationaux.</div>
          </div>
        </div>
      </section>

      {/* MIT / MISA history — minimal two-col */}
      <section className="border-y border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs tracking-widest text-neutral-500">LA MIT / MISA</div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">De la MISA (1996) à la MIT (2022)</h2>
            <div className="mt-3 h-px bg-[var(--color-misa-line)]" />
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
              <p>Fondée en <strong>1996</strong> dans le Département de Mathématiques et Informatique de la Faculté des Sciences de l’Université d’Antananarivo, avec le soutien du projet <strong>PRESUP</strong> et de la Coopération Française.</p>
              <p>Ayant basculé dans le système <strong>LMD depuis 2014</strong>, la Maîtrise en Informatique et Statistique Appliquées est devenue <strong>Mathématiques, Informatique et Statistique Appliquées</strong>. Formation orientée recherche pour les M2 (première promotion 2016).</p>
              <p>À la fin de l’année <strong>2022</strong>, la MISA introduit la Mention Informatique et Technologie, offrant une formation complète de la première année (<strong>L1</strong>) à la troisième année (<strong>L3</strong>).</p>
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
                <li>Pionnière en IA — expertise de pointe</li>
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
        <p className="mt-3 text-xs text-neutral-500">Intitulés repris tels quels depuis la page d’accueil originale.</p>
      </section>

      {/* Partenaires */}
      <section className="border-t border-[var(--color-misa-line)]">
        <div className="max-w-[1160px] mx-auto px-6 py-8">
          <div className="text-xs tracking-widest text-neutral-500">PARTENAIRES</div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-[var(--color-misa-line)] border border-[var(--color-misa-line)]">
            {["MESUPRES","AUF","Toulouse III","Paris Diderot","Paris 13","Passau","Telma","Orange","Renault","Institut Pasteur","VV","Etech","Ingenosia","BMOI","BNI","BOA","Amen","Fac. Sciences"].map(p => (
              <div key={p} className="bg-white h-[56px] flex items-center justify-center text-xs text-neutral-600 px-2 text-center">{p}</div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-neutral-500">Telma (connectivité), Universités Paris 7 / Paris 13 / Paul Sabatier Toulouse (missions d’enseignement), Passau, etc. — repris depuis la bande partenaires du site original.</p>
        </div>
      </section>
    </div>
  );
}
