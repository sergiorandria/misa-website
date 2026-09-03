import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

const accessPaths = [
  {
    to: "/admission/licence",
    title: "Admission en Licence (L1 - IT)",
    description: (
      <>
        Sur sélection de dossier, réservée exclusivement aux titulaires d’un <strong>Bac scientifique (Série C, Série S)</strong>
      </>
    ),
    icon: BookOpen,
  },
  {
    to: "/admission/master-int",
    title: "Admission en Master (M1 - INT)",
    description: "Le parcours INT est réservé aux titulaires d’une Licence scientifique ou d’une Licence en informatique obtenue dans un établissement public.",
    icon: GraduationCap,
  },
];

export default function Admission() {
  return (
    <div className="bg-white">
      <AnimatedSection direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ADMISSION & PROCÉDURE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">Deux voies d’accès à la formation</h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">
            L’admission se fait soit en première année de Licence après le Baccalauréat, soit directement en Master pour les candidats déjà titulaires d’une Licence.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" distance={30} className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch"
        >
          {accessPaths.map((path) => (
            <motion.div key={path.to} variants={childFadeUpVariants} className="h-full">
              <AdmissionCard {...path} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

function AdmissionCard({ to, title, description, icon: Icon }) {
  return (
    <Link
      to={to}
      className="group academic-card h-full min-h-[220px] border border-[var(--color-misa-line)] bg-white p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[var(--color-misa-red)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-misa-ink)]">{title}</h2>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] text-[var(--color-misa-red)] group-hover:border-[var(--color-misa-red)] transition-colors">
            <Icon size={18} aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-sm leading-[1.7] text-neutral-700">{description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-[var(--color-misa-red)]">
        Voir les conditions et étapes
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </span>
    </Link>
  );
}
