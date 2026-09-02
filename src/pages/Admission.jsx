import { admission } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Admission() {
  const pageRef = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="bg-white page-fade-in">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">ADMISSION</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-misa-ink)]">Conditions d'admission</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Mention Informatique et Technologie — informations générales. Contactez la scolarité pour les conditions de l'année en cours.</p>
      </div>

      <div ref={pageRef} className="reveal max-w-[1160px] mx-auto px-6 pb-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">
        <div className="space-y-6">
          <section className="border border-[var(--color-misa-line)] rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight text-[var(--color-misa-ink)]">Classement de dossier et sélection</h2>
            </div>
            <div className="p-5 space-y-3">
              {admission.classement.map(t => (
                <div key={t} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0 rounded-full" /> {t}
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)] rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight text-[var(--color-misa-ink)]">Dossier à fournir</h2>
            </div>
            <div className="p-5 space-y-2">
              {admission.dossier.map((d, i) => (
                <div key={d} className="flex gap-3 text-sm leading-relaxed text-neutral-700 border-b last:border-0 border-[var(--color-misa-line)] py-2 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-xs font-mono text-[var(--color-misa-red)] font-semibold mt-0.5">{String(i+1).padStart(2,"0")}</span> {d}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="border border-[var(--color-misa-line)] p-5 rounded-sm shadow-sm hover:shadow-md hover:border-[var(--color-misa-red)]/40 transition-all duration-300">
            <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">CONTACT SCOLARITÉ</div>
            <ul className="mt-3 text-sm leading-relaxed space-y-1 text-neutral-700">
              <li>BP 906 Ankatso — Faculté des Sciences</li>
              <li>(+261) 34 53 140 38</li>
              <li>mit-univ-tana@gmail.com</li>
            </ul>
          </div>

          <div className="border border-[var(--color-misa-ink)] p-5 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 bg-[var(--color-misa-paper)]">
            <div className="text-xs tracking-widest text-[var(--color-misa-ink)] font-semibold">ÉTAPES</div>
            <ol className="mt-3 space-y-2 text-sm text-neutral-700 font-medium">
              <li className="hover:text-[var(--color-misa-red)] transition-colors">1 — Pré-inscription</li>
              <li className="hover:text-[var(--color-misa-red)] transition-colors">2 — Dépôt du dossier complet</li>
              <li className="hover:text-[var(--color-misa-red)] transition-colors">3 — Classement & sélection</li>
              <li className="hover:text-[var(--color-misa-red)] transition-colors">4 — Publication des résultats</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
