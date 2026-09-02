import { admission } from "../data/content";

export default function Admission() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">ADMISSION</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Conditions d'admission</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Mention Informatique et Technologie — informations générales. Contactez la scolarité pour les conditions de l'année en cours.</p>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 pb-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">
        <div className="space-y-6">
          <section className="border border-[var(--color-misa-line)]">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight">Classement de dossier et sélection</h2>
            </div>
            <div className="p-5 space-y-3">
              {admission.classement.map(t => (
                <div key={t} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0" /> {t}
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)]">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight">Dossier à fournir</h2>
            </div>
            <div className="p-5 space-y-2">
              {admission.dossier.map((d, i) => (
                <div key={d} className="flex gap-3 text-sm leading-relaxed border-b last:border-0 border-[var(--color-misa-line)] py-2">
                  <span className="text-xs font-mono text-neutral-500 mt-0.5">{String(i+1).padStart(2,"0")}</span> {d}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="border border-[var(--color-misa-line)] p-5">
            <div className="text-xs tracking-widest text-neutral-500">CONTACT SCOLARITÉ</div>
            <ul className="mt-3 text-sm leading-relaxed space-y-1">
              <li>BP 906 Ankatso — Faculté des Sciences</li>
              <li>(+261) 34 53 140 38</li>
              <li>mit-univ-tana@gmail.com</li>
            </ul>
          </div>

          <div className="border border-[var(--color-misa-ink)] p-5">
            <div className="text-xs tracking-widest">ÉTAPES</div>
            <ol className="mt-3 space-y-2 text-sm">
              <li>1 — Pré-inscription</li>
              <li>2 — Dépôt du dossier complet</li>
              <li>3 — Classement & sélection</li>
              <li>4 — Publication des résultats</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
