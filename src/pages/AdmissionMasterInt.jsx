import { Link } from "react-router-dom";

const candidatExterne = [
  "Le parcours INT est ouvert aux candidats titulaires d’une Licence obtenue dans un établissement public",
  "Le dossier doit préciser le parcours souhaité",
];

const etapes = [
  "Dépôt du dossier de candidature en ligne, comprenant un CV et une lettre de motivation",
  "Étude du dossier, pouvant être suivie d’un entretien",
  "Publication des résultats d’admission",
];

export default function AdmissionMasterInt() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">ADMISSION — MASTER</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Admission en M1 — Innovation et Technologie</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Le parcours INT accueille les étudiants issus de la Licence, y compris les candidats externes titulaires d’une Licence obtenue dans un établissement public.</p>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 pb-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">
        <div className="space-y-6">
          <section className="border border-[var(--color-misa-line)]">
            <SectionTitle>Conditions d’accès</SectionTitle>
            <List items={candidatExterne} />
          </section>
          <section className="border border-[var(--color-misa-line)]">
            <SectionTitle>Étapes de l’admission</SectionTitle>
            <List items={etapes} numbered />
          </section>
          <section className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5">
            <div className="text-xs tracking-widest text-neutral-500">APRÈS ADMISSION — INSCRIPTION EN M1</div>
            <p className="mt-2 text-sm leading-relaxed">L’inscription comprend l’inscription administrative en ligne, le paiement des frais de scolarité, puis l’inscription pédagogique selon le parcours retenu.</p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="border border-[var(--color-misa-ink)] p-5">
            <div className="text-xs tracking-widest">PARCOURS D’ADMISSION</div>
            <div className="mt-4 space-y-2 text-sm">
              <Link to="/admission/licence" className="block border-l-2 border-transparent pl-3 hover:border-[var(--color-misa-red)]">Licence — L1 IT</Link>
              <Link to="/admission/master-int" className="block border-l-2 border-[var(--color-misa-red)] pl-3 font-semibold">Master — M1 INT</Link>
            </div>
          </div>
          <div className="border border-[var(--color-misa-line)] p-5">
            <div className="text-xs tracking-widest text-neutral-500">CONTACT SCOLARITÉ</div>
            <ul className="mt-3 text-sm leading-relaxed space-y-1">
              <li>BP 906 Ankatso — Faculté des Sciences</li>
              <li>(+261) 34 53 140 38</li>
              <li>mit-univ-tana@gmail.com</li>
            </ul>
          </div>
          <Link to="/admission/licence" className="block border border-[var(--color-misa-red)] p-5 text-sm font-semibold text-[var(--color-misa-red)] hover:bg-[var(--color-misa-red)] hover:text-white transition">Admission en Licence <span aria-hidden="true">→</span></Link>
        </aside>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return <div className="p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]"><h2 className="text-sm font-bold tracking-tight">{children}</h2></div>;
}

function List({ items, numbered = false }) {
  return <div className="p-5 space-y-2">{items.map((item, index) => <div key={item} className="flex gap-3 text-sm leading-relaxed"><span className={numbered ? "text-xs font-mono text-neutral-500 mt-0.5" : "mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0"}>{numbered ? String(index + 1).padStart(2, "0") : ""}</span>{item}</div>)}</div>;
}
