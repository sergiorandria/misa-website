import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { introductionParcours, licenceParcours } from "../data/content";
import { BookOpen, ChevronDown, Target } from "lucide-react";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "../components/ui/AnimatedSection";

export default function Licence() {
  return (
    <div className="bg-white">

      {/* - BANNER - paper band ---------------------- */}
      <AnimatedSection direction="fade" duration={0.5} className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">FORMATION - LICENCE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
            Licence Mention Informatique et Technologie
          </h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">
            {introductionParcours}
          </p>
          <p className="mt-3 max-w-[680px] text-xs sm:text-sm leading-[1.7] text-neutral-500">
            Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3).
          </p>
        </div>
      </AnimatedSection>

      {/* - CONTENT - white band ---------------------─ */}
      <AnimatedSection direction="up" distance={30} className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12">
        {licenceParcours.map((p) => (
          <ParcoursCard key={p.title} p={p} />
        ))}
      </AnimatedSection>

    </div>
  );
}

function ParcoursCard({ p }) {
  const [activeLevel, setActiveLevel] = useState(p.levels[0]);
  const specializationNames = p.specializations ? Object.keys(p.specializations) : [];
  const [activeSpecialization, setActiveSpecialization] = useState(specializationNames[0]);
  const ues = (p.ues[activeLevel] || []).flat();
  const specializationSubjects = p.specializations?.[activeSpecialization] || [];

  return (
    <div className="academic-card flex h-full flex-col border border-[var(--color-misa-line)] bg-white">

      {/* Card header with level selector */}
      <div className="flex min-h-[128px] flex-col justify-between gap-4 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] px-5 py-5 sm:min-h-[112px] sm:flex-row sm:items-start sm:px-8 sm:py-6">
        <div className="min-h-[40px] min-w-0">
          <p className="text-[11px] tracking-[0.18em] font-bold text-[var(--color-misa-red)] uppercase">PARCOURS</p>
          <h2 className="mt-1 text-base sm:text-lg font-light tracking-tight text-[var(--color-misa-ink)]">{p.title}</h2>
        </div>

        {/* Level selector: only render as clickable tabs if there's more than one level */}
        {p.levels.length > 1 ? (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 pb-1 sm:pb-0">
            {p.levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`min-h-[40px] px-4 sm:px-5 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer shrink-0 ${
                  activeLevel === lvl
                    ? "bg-[var(--color-misa-red)] text-white shadow-xs"
                    : "bg-white border border-[var(--color-misa-line)] text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        ) : (
          <span className="inline-flex min-h-[40px] items-center px-4 sm:px-5 text-xs font-bold uppercase tracking-wider bg-[var(--color-misa-red)] text-white shrink-0">
            {p.levels[0]}
          </span>
        )}
      </div>

      {/* Main content: units first, then the key information */}
      <div className="flex flex-1 flex-col">

        <div className={p.specializations ? "grid flex-1 lg:grid-cols-[minmax(0,1fr)_17rem]" : "flex-1"}>
          {/* Left: UEs */}
          <div className="p-5 sm:p-8">
          <div className="flex items-center justify-between border-b border-[var(--color-misa-line)] pb-3 mb-5 sm:mb-6">
            <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-neutral-500 font-bold uppercase">
              <BookOpen size={14} className="text-[var(--color-misa-red)] shrink-0" />
              <span>UNITÉS D'ENSEIGNEMENT - {activeLevel}</span>
            </div>
            {/* <span className="text-[10px] font-mono tracking-widest text-neutral-500 bg-[var(--color-misa-paper)] px-2 py-0.5 border border-[var(--color-misa-line)] uppercase">
              {uesSemesters.length} semestres
            </span> */}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              {ues.map((item) => (
                <div key={item} className="flex items-start gap-2 py-2.5 text-xs sm:text-sm text-neutral-700 leading-snug">
                  <span className="text-[var(--color-misa-red)] font-bold shrink-0">-</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          </div>

          {p.specializations && (
            <div className="border-t border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                SPÉCIALISATIONS
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {specializationNames.map((specialization) => {
                  const subjects = p.specializations[specialization] || [];

                  return (
                    <div key={specialization}>
                      <button
                        type="button"
                        onClick={() => setActiveSpecialization(specialization)}
                        className={`flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-xs font-bold leading-snug transition-colors ${
                          activeSpecialization === specialization
                            ? "bg-[var(--color-misa-red)] text-white"
                            : "bg-white/70 text-neutral-600 hover:bg-white hover:text-[var(--color-misa-ink)]"
                        }`}
                      >
                        <span>{specialization}</span>
                        <ChevronDown
                          size={15}
                          className={`shrink-0 transition-transform ${
                            activeSpecialization === specialization ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeSpecialization === specialization && (
                        <ul className="ml-3 space-y-1">
                          {subjects.length > 0 ? subjects.map((subject) => (
                            <li key={subject} className="flex items-start gap-2 py-2.5 text-xs leading-snug text-neutral-700">
                              <span className="font-bold text-[var(--color-misa-red)]">-</span>
                              <span>{subject}</span>
                            </li>
                          )) : (
                            <li className="py-2.5 text-xs italic leading-snug text-neutral-500">
                              Matières à renseigner.
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Objectif */}
        <div className="mt-auto min-h-[180px] border-t border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-8">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] text-neutral-500 font-bold uppercase">
              <Target size={14} className="text-[var(--color-misa-red)] shrink-0" />
              <span>OBJECTIF</span>
            </div>
            <p className="mt-2.5 text-xs sm:text-sm leading-[1.7] text-neutral-700">{p.objectif}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
