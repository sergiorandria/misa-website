import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { introductionParcours } from "../data/content";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

const formationPaths = [
  {
    to: "/formation/licence",
    title: "Licence",
    description: "Trois années de formation, du tronc commun (L1-L2) jusqu’à la spécialisation MISA en L3, pour poser les bases solides de l’informatique.",
    icon: BookOpen,
  },
  {
    to: "/formation/master",
    title: "Master",
    description: "Deux années de spécialisation au choix entre le parcours MISA (Data & IA) et le parcours INT (Systèmes Embarqués).",
    icon: GraduationCap,
  },
];

export default function Formation() {
  return (
    <div className="bg-white">
      <AnimatedSection direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">FORMATION</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">Introduction générale</h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">{introductionParcours}</p>
          <p className="mt-3 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-600">À l’issue de la L3, les étudiants peuvent intégrer le monde professionnel ou poursuivre en Master (MISA ou INT).</p>
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
          {formationPaths.map((path) => (
            <motion.div key={path.to} variants={childFadeUpVariants} className="h-full">
              <FormationCard {...path} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

function FormationCard({ to, title, description, icon: Icon }) {
  return (
    <Link to={to} className="group academic-card h-full min-h-[220px] border border-[var(--color-misa-line)] bg-white p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[var(--color-misa-red)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
        Voir la formation
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </span>
    </Link>
  );
}
