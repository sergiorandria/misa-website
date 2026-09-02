import { Link } from "react-router-dom";

const candidature = [
  "Baccalauréat série C, S, ou Baccalauréat français série S (spécialité mathématiques)",
  "Les bacheliers d’une session antérieure doivent signer un engagement de non-perception de bourse d’étude",
];

const dossier = [
  "Une photo d’identité",
  "Une demande de préinscription remplie et signée par le candidat",
  "Une copie certifiée conforme du relevé de notes du Baccalauréat",
  "Une photocopie de la convocation du Baccalauréat",
];

export default function AdmissionLicence() {
  return (
    <AdmissionPage
      eyebrow="ADMISSION — LICENCE"
      title="Admission en L1 — Informatique et Technologie"
      intro="L’admission en première année se fait sur classement de dossier, selon la série du Baccalauréat."
      next="Admission en Master INT"
      nextTo="/admission/master-int"
    >
      <section className="border border-[var(--color-misa-line)]">
        <SectionTitle>Conditions d’accès</SectionTitle>
        <List items={candidature} />
      </section>
      <section className="border border-[var(--color-misa-line)]">
        <SectionTitle>Pièces à fournir pour la candidature</SectionTitle>
        <List items={dossier} numbered />
      </section>
      <section className="border border-[var(--color-misa-line)]">
        <SectionTitle>Étapes de l’admission</SectionTitle>
        <List items={[
          "Remplissage du formulaire de préinscription en ligne ou téléchargement du modèle papier",
          "Dépôt du dossier complet avant la date limite, en ligne ou par envoi recommandé",
          "Classement des dossiers selon l’ordre de mérite",
          "Publication des résultats d’admission",
        ]} numbered />
      </section>
      <section className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5">
        <div className="text-xs tracking-widest text-neutral-500">APRÈS ADMISSION — INSCRIPTION EN L1</div>
        <p className="mt-2 text-sm leading-relaxed">L’inscription administrative peut se faire en ligne ou sur place. Elle comprend ensuite l’inscription pédagogique et la remise de l’emploi du temps.</p>
        <p className="mt-3 text-sm leading-relaxed">Pièces complémentaires : acte de naissance récent (moins de 3 mois) et reçu de versement des frais de dossier.</p>
      </section>
    </AdmissionPage>
  );
}

function AdmissionPage({ eyebrow, title, intro, next, nextTo, children }) {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">{eyebrow}</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">{intro}</p>
      </div>
      <div className="max-w-[1160px] mx-auto px-6 pb-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">
        <div className="space-y-6">{children}</div>
        <aside className="space-y-6">
          <div className="border border-[var(--color-misa-ink)] p-5">
            <div className="text-xs tracking-widest">PARCOURS D’ADMISSION</div>
            <div className="mt-4 space-y-2 text-sm">
              <Link to="/admission/licence" className="block border-l-2 border-[var(--color-misa-red)] pl-3 font-semibold">Licence — L1 IT</Link>
              <Link to="/admission/master-int" className="block border-l-2 border-transparent pl-3 hover:border-[var(--color-misa-red)]">Master — M1 INT</Link>
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
          <Link to={nextTo} className="block border border-[var(--color-misa-red)] p-5 text-sm font-semibold text-[var(--color-misa-red)] hover:bg-[var(--color-misa-red)] hover:text-white transition">{next} <span aria-hidden="true">→</span></Link>
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
