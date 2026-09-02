import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const accessPaths = [
  {
    to: "/admission/licence",
    title: "Admission en Licence (L1 — IT)",
    description: (
      <>
        Sur sélection de dossier, réservée exclusivement aux titulaires d’un <strong>Bac scientifique (Série C, Série S)</strong>
      </>
    ),
    icon: BookOpen,
    accent: "ink",
  },
  {
    to: "/admission/master-int",
    title: "Admission en Master (M1 — MISA ou INT)",
    description: "Le parcours MISA valorise la continuité depuis la L1 ; le parcours INT est ouvert aux titulaires d’une Licence d’un autre établissement public.",
    icon: GraduationCap,
    accent: "red",
  },
];

export default function Admission() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ADMISSION & PROCÉDURE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">Deux voies d’accès à la formation</h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">
            L’admission se fait soit en première année de Licence après le Baccalauréat, soit directement en Master pour les candidats déjà titulaires d’une Licence.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {accessPaths.map((path) => (
            <AdmissionCard key={path.to} {...path} />
          ))}
        </div>
      </section>
    </div>
  );
}

function AdmissionCard({ to, title, description, icon: Icon, accent }) {
  const accentClass = accent === "red" ? "border-l-[var(--color-misa-red)]" : "border-l-[var(--color-misa-ink)]";
  const titleClass = accent === "red" ? "text-[var(--color-misa-red)]" : "text-[var(--color-misa-ink)]";

  return (
    <Link
      to={to}
      className={`group academic-card min-h-[220px] border border-[var(--color-misa-line)] border-l-4 ${accentClass} bg-white p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h2 className={`text-base sm:text-lg font-bold tracking-tight ${titleClass}`}>{title}</h2>
          <Icon size={20} className={`${titleClass} shrink-0`} aria-hidden="true" />
        </div>
        <p className="mt-3 text-sm leading-[1.7] text-neutral-700">{description}</p>
      </div>
      <span className={`mt-8 inline-flex items-center gap-2 text-xs font-bold ${titleClass}`}>
        Voir les conditions et étapes
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </span>
    </Link>
  );
}
