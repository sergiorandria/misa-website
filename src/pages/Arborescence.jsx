export default function Arborescence() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">FORMATION — ARBORESCENCE</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Arborescence LMD</h1>
        <p className="mt-3 max-w-[720px] text-neutral-600 leading-relaxed">
          Reproduction fidèle du schéma officiel <span className="font-mono text-xs bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] px-1.5 py-0.5">MIT(1).png</span> de mit.univ-antananarivo.mg. Les informations ci-dessous reprennent uniquement ce qui est lisible sur le site — aucun intitulé n’a été inventé.
        </p>
        <p className="mt-2 text-xs text-neutral-500">Source originale : <code> /assets/images/MIT(1).png</code> — image incluse en bas de page pour vérification.</p>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 pb-12">
        {/* Minimal tree */}
        <div className="border border-[var(--color-misa-line)]">
          {/* L1 */}
          <div className="grid md:grid-cols-[180px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)]">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">L1 — S1·S2</div>
              <div className="font-bold mt-1">Informatique et Technologie</div>
            </div>
            <div className="p-5">
              <div className="text-xs tracking-widest text-neutral-500">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                <li>Sélection sur dossier</li>
                <li>Ouvert aux titulaires d’un baccalauréat série C ou S</li>
              </ul>
            </div>
          </div>

          {/* L2 */}
          <div className="grid md:grid-cols-[180px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)]">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">L2 — S3·S4</div>
              <div className="font-bold mt-1">Informatique et Technologie</div>
            </div>
            <div className="p-5">
              <div className="text-xs tracking-widest text-neutral-500">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                <li>Ouvert aux étudiants ayant validé le L1 en MIT</li>
                <li>Ouvert aux étudiants de Mathématiques ayant validé L1, après sélection et entretien</li>
              </ul>
            </div>
          </div>

          {/* L3 */}
          <div className="grid md:grid-cols-[180px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)]">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">L3 — S5·S6</div>
              <div className="font-bold mt-1">MISA</div>
              <div className="text-xs text-neutral-500 mt-1">Mathématiques, Informatique et Statistique Appliquées</div>
            </div>
            <div className="p-5">
              <div className="text-xs tracking-widest text-neutral-500">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                <li>Ouvert aux étudiants qui ont validé le L2 du parcours Informatique de la mention IT</li>
                <li>Ouvert aux étudiants de Mathématiques ayant validé L1/L2, après sélection et entretien (selon lecture du schéma)</li>
              </ul>
              <p className="mt-3 text-xs text-neutral-500">UE détaillées : voir page Licence — aucune matière ajoutée ici.</p>
            </div>
          </div>

          {/* M1 */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-misa-line)] border-b border-[var(--color-misa-line)]">
            <div className="p-5">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">M1 MISA — S7·S8</div>
              <div className="text-xs tracking-widest text-neutral-500 mt-3">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                <li>Sélection sur dossier + entrevue avec l’équipe de formation</li>
                <li>Ouvert aux étudiants titulaires d’une Licence MISA ou licence informatique d’une institution publique</li>
              </ul>
            </div>
            <div className="p-5">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">M1 INT — S7·S8</div>
              <div className="text-xs text-neutral-500 mt-1">Innovation et Technologie</div>
              <div className="text-xs tracking-widest text-neutral-500 mt-3">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                <li>Sélection sur dossier + entrevue</li>
                <li>Ouvert aux étudiants titulaires d’une Licence MISA ou licence informatique d’une institution publique</li>
              </ul>
            </div>
          </div>

          {/* M2 */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-misa-line)]">
            <div className="p-5">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">M2 MISA — S9·S10</div>
              <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Année recherche : stage & mémoire. Les débouchés listés sur le schéma (chef de projet, data-scientist, enseignant-chercheur, etc.) sont partiellement lisibles — ils ne sont pas retranscrits ici pour éviter toute approximation.
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">M2 INT — S9·S10</div>
              <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Année professionnalisante : stage & mémoire. Débouchés du schéma non retranscrits (lisibilité insuffisante).
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-[var(--color-misa-line)] p-4 bg-[var(--color-misa-paper)]">
          <div className="text-xs tracking-widest text-neutral-500">IMAGE SOURCE — VÉRIFICATION</div>
          <p className="text-xs text-neutral-500 mt-1">L’image ci-dessous est l’original du site (785 Ko, 3508×4961). Elle fait foi en cas de divergence.</p>
          <img src={`${import.meta.env.BASE_URL}arborescence.png`} alt="Arborescence MIT originale" className="mt-4 w-full h-auto border border-[var(--color-misa-line)] bg-white" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
