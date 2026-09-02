import { admission, contact } from "../data/content";
import { Phone, Mail, MapPin, Download, CheckCircle, FileText, Calendar } from "lucide-react";

export default function Admission() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">ADMISSION — PROCÉDURE D'INSCRIPTION</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-misa-ink)]">
          Conditions d’admission
        </h1>
        <p className="mt-2 sm:mt-3 max-w-[720px] text-xs sm:text-sm leading-relaxed text-neutral-600">
          Cursus complet L1 → M2 : tronc commun IT (L1-L2), spécialisation MISA (L3), puis Master MISA (data/IA) ou INT (embarqué). Admission sur dossier et entretien selon parcours — contenu actualisé d'après « contenu_parcours_inscription_MISA ».
        </p>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 pb-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-6 sm:gap-8">
        <div className="space-y-6">
          {/* Section 1: Selection */}
          <section className="border border-[var(--color-misa-line)] bg-white shadow-xs">
            <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--color-misa-red)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">
                Classement de dossier et sélection
              </h2>
            </div>
            <div className="p-4 sm:p-5 space-y-3">
              {admission.classement.map(t => (
                <div key={t} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-neutral-700">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0 rounded-full" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Dossier items */}
          <section className="border border-[var(--color-misa-line)] bg-white shadow-xs">
            <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex items-center gap-2">
              <FileText size={18} className="text-[var(--color-misa-ink)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">
                Dossier à fournir
              </h2>
            </div>
            <div className="p-4 sm:p-5 space-y-2.5">
              {admission.dossier.map((d, i) => (
                <div key={d} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed border-b last:border-0 border-[var(--color-misa-line)] pb-2.5 pt-0.5 text-neutral-700">
                  <span className="text-xs font-mono font-bold text-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-1.5 py-0.5 border border-[var(--color-misa-line)] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className="px-4 sm:px-5 pb-5">
              <a
                href={`${import.meta.env.BASE_URL}assets/file/PREINSCRIPTION.pdf`}
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-medium text-[var(--color-misa-red)] hover:underline decoration-[var(--color-misa-red)] underline-offset-4 bg-[var(--color-misa-paper)] px-3 py-2 border border-[var(--color-misa-line)]"
              >
                <Download size={14} />
                <span>Télécharger le modèle de préinscription (PDF) — si disponible sur site original</span>
              </a>
            </div>
          </section>


          {/* Étapes L1 */}
          <section className="border border-[var(--color-misa-line)] bg-white shadow-xs">
            <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--color-misa-red)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">Étapes de l'admission (L1)</h2>
            </div>
            <div className="p-4 sm:p-5">
              <ol className="space-y-2">
                {admission.etapes.map((e, i) => (
                  <li key={e} className="flex gap-3 text-xs sm:text-sm leading-relaxed text-neutral-700">
                    <span className="text-xs font-mono font-bold text-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-1.5 py-0.5 border border-[var(--color-misa-line)] shrink-0">{String(i + 1).padStart(2, "0")}</span> {e}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Inscription L1 */}
          <section className="border border-[var(--color-misa-line)] bg-white shadow-xs">
            <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex items-center gap-2">
              <FileText size={18} className="text-[var(--color-misa-ink)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">Inscription en L1 — pièces & étapes</h2>
            </div>
            <div className="p-4 sm:p-5 space-y-3">
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">{admission.inscription.enLigne}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-[var(--color-misa-line)] p-3 bg-[var(--color-misa-paper)]">
                  <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">PIÈCES INSCRIPTION</div>
                  <ul className="mt-2 space-y-1 text-xs sm:text-sm">
                    <li className="flex gap-2"><span className="text-[var(--color-misa-red)]">—</span> Acte de naissance récent (&lt; 3 mois)</li>
                    <li className="flex gap-2"><span className="text-[var(--color-misa-red)]">—</span> Reçu de versement frais de dossier (agence bancaire)</li>
                  </ul>
                </div>
                <div className="border border-[var(--color-misa-line)] p-3 bg-white">
                  <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">ÉTAPES</div>
                  <ol className="mt-2 space-y-1 text-xs sm:text-sm">
                    {admission.inscription.etapes.map(e => <li key={e} className="flex gap-2"><span className="text-neutral-400">{admission.inscription.etapes.indexOf(e)+1}.</span>{e}</li>)}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* M1 Admission */}
          <section className="border border-[var(--color-misa-line)] bg-white shadow-xs">
            <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--color-misa-ink)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-misa-ink)]">Admission en M1 — MISA vs INT</h2>
            </div>
            <div className="p-4 sm:p-5 space-y-4">
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">{admission.m1.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-[var(--color-misa-line)] p-3 bg-white">
                  <div className="text-xs font-semibold tracking-widest text-[var(--color-misa-red)] uppercase">MISA</div>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-700">{admission.m1.misa}</p>
                </div>
                <div className="border border-[var(--color-misa-line)] p-3 bg-white">
                  <div className="text-xs font-semibold tracking-widest text-[var(--color-misa-red)] uppercase">INT</div>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-700">{admission.m1.int}</p>
                </div>
              </div>
              <div className="border-t border-[var(--color-misa-line)] pt-3">
                <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">CANDIDATS EXTERNES INT — ÉTAPES</div>
                <ol className="mt-2 space-y-1">
                  {admission.m1.etapesExternes.map((e,i) => (
                    <li key={e} className="flex gap-3 text-xs sm:text-sm leading-relaxed text-neutral-700">
                      <span className="text-xs font-mono font-bold text-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-1.5 py-0.5 border border-[var(--color-misa-line)] shrink-0">{String(i+1).padStart(2,"0")}</span> {e}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-3">
                <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">INSCRIPTION M1 — ÉTAPES</div>
                <ol className="mt-2 space-y-1">
                  {admission.m1.inscriptionEtapes.map((e,i) => (
                    <li key={e} className="text-xs sm:text-sm flex gap-2"><span className="text-neutral-400">{i+1}.</span>{e}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* Section 3: Deadline card */}
          <section className="border border-[var(--color-misa-line)] bg-amber-50/50 p-4 sm:p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs tracking-widest text-amber-800 font-semibold uppercase">
              <Calendar size={15} className="text-amber-700" />
              <span>DATE LIMITE DE DÉPÔT</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-amber-950 font-medium">
              {admission.depot}. Cette date est celle affichée sur le site (2022) — à confirmer auprès de la scolarité pour l’année en cours.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Scolarité contact box */}
          <div className="border border-[var(--color-misa-line)] bg-white p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">
              CONTACT SCOLARITÉ
            </div>
            
            <ul className="mt-3 text-xs sm:text-sm leading-relaxed space-y-2.5 text-neutral-700">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                <span>BP 906 Ankatso — Faculté des Sciences</span>
              </li>
              <li>
                <a
                  href={`tel:${contact.tel.replace(/\s+/g, "")}`}
                  className="min-h-[40px] flex items-center gap-2.5 text-[var(--color-misa-ink)] font-semibold hover:text-[var(--color-misa-red)] transition"
                >
                  <Phone size={15} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>{contact.tel}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="min-h-[40px] flex items-center gap-2.5 text-[var(--color-misa-ink)] font-medium hover:text-[var(--color-misa-red)] transition break-all"
                >
                  <Mail size={15} className="text-[var(--color-misa-red)] shrink-0" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-4 text-[11px] sm:text-xs leading-relaxed text-neutral-600 border-t border-[var(--color-misa-line)] pt-3 bg-[var(--color-misa-paper)] p-3 border">
              <strong className="text-[var(--color-misa-ink)]">Paiement BNI :</strong> 40 000 Ar — n° 00005 00002 214103 602 00 43 — “M. le Doyen de la Faculté des Sciences — BP 906”.
            </div>
          </div>

          {/* Admission steps */}
          <div className="border border-[var(--color-misa-ink)] bg-white p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs tracking-widest font-bold text-[var(--color-misa-ink)] uppercase">
              ÉTAPES DU PROCESSUS
            </div>
            <ol className="mt-3 space-y-3 text-xs sm:text-sm font-medium">
              {[
                "1 — Pré-inscription",
                "2 — Dépôt du dossier complet",
                "3 — Classement & sélection",
                "4 — Publication des résultats",
              ].map((step, idx) => (
                <li key={step} className="flex items-center gap-2.5 p-2 bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] text-neutral-800">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-misa-red)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step.slice(4)}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border border-[var(--color-misa-ink)] bg-white p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">ÉTAPES — RÉSUMÉ L1</div>
            <ol className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-700">
              {admission.etapes.map((e,i) => <li key={e}>{i+1} — {e.split(' — ')[0] ?? e}</li>)}
            </ol>
          </div>

          <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">ADMISSION M1 — RÉSUMÉ</div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">MISA : continuité depuis L1. INT : ouvert aux externes sur CV + lettre + entretien.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function AdmissionLink({ to, title, description }) {
  return (
    <Link to={to} className="border border-[var(--color-misa-line)] p-5 hover:border-[var(--color-misa-red)] transition">
      <div className="text-xs tracking-widest text-[var(--color-misa-red)]">CANDIDATURE</div>
      <h2 className="mt-2 text-sm font-bold">{title}</h2>
      <p className="mt-1 text-xs leading-relaxed text-neutral-500">{description}</p>
      <span className="mt-3 block text-xs font-semibold text-[var(--color-misa-red)]">Consulter la procédure →</span>
    </Link>
  );
}
