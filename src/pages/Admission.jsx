import { admission } from "../data/content";

export default function Admission() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">ADMISSION — PROCÉDURE D'INSCRIPTION</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Conditions d’admission</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Cursus complet L1 → M2 : tronc commun IT (L1-L2), spécialisation MISA (L3), puis Master MISA (data/IA) ou INT (embarqué). Admission sur dossier et entretien selon parcours — contenu actualisé d'après « contenu_parcours_inscription_MISA ».</p>
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
            <div className="px-5 pb-5">
              <a href="/assets/file/PREINSCRIPTION.pdf" className="text-xs underline decoration-[var(--color-misa-red)] underline-offset-4">Télécharger le modèle de préinscription (PDF) — si disponible sur site original</a>
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)]">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight">Étapes de l'admission (L1)</h2>
            </div>
            <div className="p-5">
              <ol className="space-y-2">
                {admission.etapes.map((e, i) => (
                  <li key={e} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-xs font-mono text-neutral-500 mt-0.5">{String(i + 1).padStart(2, "0")}</span> {e}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)]">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight">Inscription en L1 — pièces & étapes</h2>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-sm leading-relaxed text-neutral-600">{admission.inscription.enLigne}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="border border-[var(--color-misa-line)] p-3">
                  <div className="text-xs tracking-widest text-neutral-500">PIÈCES INSCRIPTION</div>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-[var(--color-misa-red)]">—</span> Acte de naissance récent (&lt; 3 mois)</li>
                    <li className="flex gap-2"><span className="text-[var(--color-misa-red)]">—</span> Reçu de versement frais de dossier (agence bancaire)</li>
                  </ul>
                </div>
                <div className="border border-[var(--color-misa-line)] p-3">
                  <div className="text-xs tracking-widest text-neutral-500">ÉTAPES</div>
                  <ol className="mt-2 space-y-1 text-sm">
                    {admission.inscription.etapes.map(e => <li key={e} className="flex gap-2"><span className="text-neutral-400">{admission.inscription.etapes.indexOf(e)+1}.</span>{e}</li>)}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)]">
            <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
              <h2 className="text-sm font-bold tracking-tight">Admission en M1 — MISA vs INT</h2>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-sm leading-relaxed text-neutral-600">{admission.m1.intro}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="border border-[var(--color-misa-line)] p-3">
                  <div className="text-xs font-semibold tracking-widest text-[var(--color-misa-red)]">MISA</div>
                  <p className="mt-1 text-sm leading-relaxed">{admission.m1.misa}</p>
                </div>
                <div className="border border-[var(--color-misa-line)] p-3">
                  <div className="text-xs font-semibold tracking-widest text-[var(--color-misa-red)]">INT</div>
                  <p className="mt-1 text-sm leading-relaxed">{admission.m1.int}</p>
                </div>
              </div>
              <div className="border-t border-[var(--color-misa-line)] pt-3">
                <div className="text-xs tracking-widest text-neutral-500">CANDIDATS EXTERNES INT — ÉTAPES</div>
                <ol className="mt-2 space-y-1">
                  {admission.m1.etapesExternes.map((e,i) => (
                    <li key={e} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-xs font-mono text-neutral-500 mt-0.5">{String(i+1).padStart(2,"0")}</span> {e}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-3">
                <div className="text-xs tracking-widest text-neutral-500">INSCRIPTION M1 — ÉTAPES</div>
                <ol className="mt-2 space-y-1">
                  {admission.m1.inscriptionEtapes.map((e,i) => (
                    <li key={e} className="text-sm flex gap-2"><span className="text-neutral-400">{i+1}.</span>{e}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="border border-[var(--color-misa-line)] bg-amber-50/40">
            <div className="p-5">
              <div className="text-xs tracking-widest text-neutral-500">DÉPÔT DU DOSSIER</div>
              <p className="mt-2 text-sm leading-relaxed">{admission.depot}</p>
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
            <div className="mt-4 text-xs leading-relaxed text-neutral-500 border-t border-[var(--color-misa-line)] pt-3">
              Paiement BNI : 40 000 Ar — n° 00005 00002 214103 602 00 43 — “M. le Doyen de la Faculté des Sciences — BP 906”.
            </div>
          </div>

          <div className="border border-[var(--color-misa-ink)] p-5">
            <div className="text-xs tracking-widest">ÉTAPES — RÉSUMÉ L1</div>
            <ol className="mt-3 space-y-2 text-sm">
              {admission.etapes.map((e,i) => <li key={e}>{i+1} — {e.split(' — ')[0] ?? e}</li>)}
            </ol>
          </div>

          <div className="border border-[var(--color-misa-line)] p-5 bg-[var(--color-misa-paper)]">
            <div className="text-xs tracking-widest text-neutral-500">ADMISSION M1 — RÉSUMÉ</div>
            <p className="mt-2 text-sm leading-relaxed">MISA : continuité depuis L1. INT : ouvert aux externes sur CV + lettre + entretien.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
