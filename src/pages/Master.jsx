import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { introductionParcours, masterParcours } from "../data/content";
import { BookOpen, Target } from "lucide-react";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

export default function Master() {
  return (
    <div className="bg-white">

      {/* - BANNER - paper band ---------------------- */}
      <AnimatedSection direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">FORMATION - MASTER</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
            Master Informatique et Technologie
          </h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">
            {introductionParcours}
          </p>
          <p className="mt-3 max-w-[680px] text-xs sm:text-sm leading-[1.7] text-neutral-500">
            Deux parcours : Innovation et Technologie (INT) - systèmes embarqués, et MISA - data & IA.
          </p>
        </div>
      </AnimatedSection>

      {/* - CONTENT ---------------------------- */}
      <AnimatedSection direction="up" distance={30} className="max-w-[1280px] mx-auto grid gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {Object.entries(masterParcours).map(([parcoursKey, parcoursData]) => (
          <MasterCard key={parcoursKey} parcoursKey={parcoursKey} parcoursData={parcoursData} />
        ))}
      </AnimatedSection>
    </div>
  );
}

function MasterCard({ parcoursKey, parcoursData }) {
  const [level, setLevel] = useState("M1");
  const ues = (level === "M1" ? parcoursData.m1 : parcoursData.m2).flat();

  return (
    <div className="academic-card flex h-full flex-col border border-[var(--color-misa-line)] bg-white">
      <div className="flex min-h-[128px] flex-col justify-between gap-4 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-5 py-5 sm:min-h-[112px] sm:flex-row sm:items-start sm:px-8 sm:py-6">
        <div className="min-h-[40px] min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-misa-red)]">PARCOURS MASTER</p>
          <h2 className="mt-1 text-base font-light tracking-tight text-[var(--color-misa-ink)] sm:text-lg">
            {parcoursData.title}
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {["M1", "M2"].map((levelName) => (
            <button
              key={levelName}
              onClick={() => setLevel(levelName)}
              className={`min-h-[40px] shrink-0 px-4 text-xs font-bold uppercase tracking-wider transition duration-200 sm:px-5 ${
                level === levelName
                  ? "bg-[var(--color-misa-red)] text-white shadow-xs"
                  : "border border-[var(--color-misa-line)] bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {levelName}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-5 sm:p-8">
          <div className="mb-5 flex items-center justify-between border-b border-[var(--color-misa-line)] pb-3 sm:mb-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
              <BookOpen size={14} className="shrink-0 text-[var(--color-misa-red)]" />
              <span>UNITÉS D'ENSEIGNEMENT - {parcoursKey} ({level})</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={`${parcoursKey}-${level}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              {ues.map((item) => (
                <li key={item} className="flex items-start gap-2 py-2.5 text-xs leading-snug text-neutral-700 sm:text-sm">
                  <span className="shrink-0 font-bold text-[var(--color-misa-red)]">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <div className="mt-auto min-h-[180px] border-t border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-8">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
            <Target size={14} className="shrink-0 text-[var(--color-misa-red)]" />
            <span>OBJECTIF</span>
          </div>
          <p className="mt-2.5 text-xs leading-[1.7] text-neutral-700 sm:text-sm">{parcoursData.objectif}</p>
        </div>
      </div>
    </div>
  );
}
