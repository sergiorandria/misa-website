import { Link } from "react-router-dom";
import { ClipboardList, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/ui/AnimatedSection";

const candidatExterne = [
  "Le parcours INT est réservé aux étudiants titulaires d’une Licence scientifique ou d’une Licence en informatique obtenue dans un établissement public",
  "Le candidat doit être titulaire d’un Baccalauréat série C ou S",
];

const etapes = [
  "Dépôt du dossier de candidature en ligne, comprenant un CV et une lettre de motivation",
  "Étude du dossier, pouvant être suivie d’un entretien",
  "Publication des résultats d’admission",
];

export default function AdmissionMasterInt() {
  return (
    <div className="bg-white">
      <AnimatedSection direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ADMISSION - MASTER</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">Admission en M1 - Innovation et Technologie</h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">Le parcours INT est réservé aux étudiants titulaires d’une Licence scientifique ou d’une Licence en informatique obtenue dans un établissement public.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" distance={30} className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
        <div className="space-y-8 sm:space-y-10">
          <section className="academic-card border border-[var(--color-misa-line)] bg-white">
            <SectionTitle>Conditions d’accès</SectionTitle>
            <List items={candidatExterne} />
          </section>
          <section className="academic-card border border-[var(--color-misa-line)] bg-white">
            <SectionTitle>Pièces à fournir pour la candidature</SectionTitle>
            {/* <List items={etapes} numbered /> */}
            <p className="m-5 text-sm leading-relaxed">Veuillez rester connecté. Les dossiers à fournir seront prochainement communiqués.</p>
          </section>
          <section className="academic-card border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-8">
            <div className="text-xs tracking-widest text-neutral-500">APRÈS ADMISSION - INSCRIPTION EN M1</div>
            <p className="mt-2 text-sm leading-relaxed">L’inscription comprend l’inscription administrative en ligne, le paiement des frais de scolarité, puis l’inscription pédagogique selon le parcours retenu.</p>
          </section>
        </div>
        <aside className="space-y-6">
          <div className="academic-card border border-[var(--color-misa-line)] p-5 sm:p-6">
            <div className="text-[11px] tracking-[0.18em] font-bold text-[var(--color-misa-ink)] uppercase">PARCOURS D’ADMISSION</div>
            <div className="mt-4 space-y-2 text-sm">
              <Link to="/admission/licence" className="block border-l-2 border-transparent pl-3 hover:border-[var(--color-misa-red)]">Licence - L1 IT</Link>
              <Link to="/admission/master-int" className="block border-l-2 border-[var(--color-misa-red)] pl-3 font-semibold">Master - M1 INT</Link>
            </div>
          </div>
          <Link to="/formation/master" className="group block border border-[var(--color-misa-red)] p-5 text-sm font-bold text-[var(--color-misa-red)] hover:bg-[var(--color-misa-red)] hover:text-white transition">Formation en Master <ArrowRight size={15} className="inline ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Link>
        </aside>
      </AnimatedSection>
    </div>
  );
}

function SectionTitle({ children }) {
  return <div className="flex items-center gap-2 px-5 sm:px-8 py-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]"><ClipboardList size={16} className="text-[var(--color-misa-red)]" /><h2 className="text-[11px] tracking-[0.16em] font-bold uppercase text-[var(--color-misa-ink)]">{children}</h2></div>;
}

function List({ items, numbered = false }) {
  return <div className="p-5 space-y-2">{items.map((item, index) => <div key={item} className="flex gap-3 text-sm leading-relaxed"><span className={numbered ? "text-xs font-mono text-neutral-500 mt-0.5" : "mt-1.5 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0"}>{numbered ? String(index + 1).padStart(2, "0") : ""}</span>{item}</div>)}</div>;
}
