import { Link } from "react-router-dom";
import { ClipboardList, ArrowRight } from "lucide-react";

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
      eyebrow="ADMISSION - LICENCE"
      title="Admission en L1 - Informatique et Technologie"
      intro="L’admission en première année se fait sur classement de dossier, selon la série du Baccalauréat."
      next="Admission en Master INT"
      nextTo="/admission/master-int"
    >
      <section className="academic-card border border-[var(--color-misa-line)] bg-white">
        <SectionTitle>Conditions d’accès</SectionTitle>
        <List items={candidature} />
      </section>
      <section className="academic-card border border-[var(--color-misa-line)] bg-white">
        <SectionTitle>Pièces à fournir pour la candidature</SectionTitle>
        <List items={dossier} numbered />
      </section>
      <section className="academic-card border border-[var(--color-misa-line)] bg-white">
        <SectionTitle>Étapes de l’admission</SectionTitle>
        <List items={[
          "Remplissage du formulaire de préinscription en ligne ou téléchargement du modèle papier",
          "Dépôt du dossier complet avant la date limite, en ligne ou par envoi recommandé",
          "Classement des dossiers selon l’ordre de mérite",
          "Publication des résultats d’admission",
        ]} numbered />
      </section>
      <section className="academic-card border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-8">
        <div className="text-xs tracking-widest text-neutral-500">APRÈS ADMISSION - INSCRIPTION EN L1</div>
        <p className="mt-2 text-sm leading-relaxed">L’inscription administrative peut se faire en ligne ou sur place. Elle comprend ensuite l’inscription pédagogique et la remise de l’emploi du temps.</p>
        <p className="mt-3 text-sm leading-relaxed">Pièces complémentaires : acte de naissance récent (moins de 3 mois) et reçu de versement des frais de dossier.</p>
      </section>
    </AdmissionPage>
  );
}

function AdmissionPage({ eyebrow, title, intro, next, nextTo, children }) {
  return (
    <div className="bg-white">
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">{title}</h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">{intro}</p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
        <div className="space-y-8 sm:space-y-10">{children}</div>
        <aside className="space-y-6">
          <div className="academic-card border border-[var(--color-misa-line)] p-5 sm:p-6">
            <div className="text-[11px] tracking-[0.18em] font-bold text-[var(--color-misa-ink)] uppercase">PARCOURS D’ADMISSION</div>
            <div className="mt-4 space-y-2 text-sm">
              <Link to="/admission/licence" className="block border-l-2 border-[var(--color-misa-red)] pl-3 font-semibold">Licence - L1 IT</Link>
              <Link to="/admission/master-int" className="block border-l-2 border-transparent pl-3 hover:border-[var(--color-misa-red)]">Master - M1 INT</Link>
            </div>
          </div>
          <div className="academic-card border border-[var(--color-misa-line)] p-5 sm:p-6 bg-[var(--color-misa-paper)]">
            <div className="text-[11px] tracking-[0.18em] font-bold text-neutral-500 uppercase">CONTACT SCOLARITÉ</div>
            <ul className="mt-3 text-sm leading-relaxed space-y-1">
              <li>BP 906 Ankatso - Faculté des Sciences</li>
              <li>(+261) 34 53 140 38</li>
              <li>mit-univ-tana@gmail.com</li>
            </ul>
          </div>
          <Link to={nextTo} className="group block border border-[var(--color-misa-red)] p-5 text-sm font-bold text-[var(--color-misa-red)] hover:bg-[var(--color-misa-red)] hover:text-white transition">{next} <ArrowRight size={15} className="inline ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Link>
        </aside>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return <div className="flex items-center gap-2 px-5 sm:px-8 py-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]"><ClipboardList size={16} className="text-[var(--color-misa-red)]" /><h2 className="text-[11px] tracking-[0.16em] font-bold uppercase text-[var(--color-misa-ink)]">{children}</h2></div>;
}

function List({ items, numbered = false }) {
  return <div className="p-5 space-y-2">{items.map((item, index) => <div key={item} className="flex gap-3 text-sm leading-relaxed"><span className={numbered ? "text-xs font-mono text-neutral-500 mt-0.5" : "mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0"}>{numbered ? String(index + 1).padStart(2, "0") : ""}</span>{item}</div>)}</div>;
}
