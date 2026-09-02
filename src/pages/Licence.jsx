import { useState } from "react";
import { licenceParcours } from "../data/content";
import { BookOpen, Award, Target, User, Bookmark } from "lucide-react";

export default function Licence() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">FORMATION — LICENCE</div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-misa-ink)]">
            Licence Mention Informatique et Technologie (MIT)
          </h1>
          <p className="mt-2 sm:mt-3 max-w-[760px] text-xs sm:text-sm leading-relaxed text-neutral-600">
            Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3). Contenu repris fidèlement depuis les pages Licence du site original — aucune UE inventée.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 space-y-8">
        {licenceParcours.map((p) => (
          <ParcoursCard key={p.title} p={p} />
        ))}
      </div>
    </div>
  );
}

function ParcoursCard({ p }) {
  const [activeLevel, setActiveLevel] = useState(p.levels[0]);
  const uesGroups = p.ues[activeLevel] || [];

  return (
    <div className="academic-card border border-[var(--color-misa-line)] bg-white shadow-xs">
      {/* Header bar with level selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div>
          <div className="text-[11px] tracking-[0.16em] font-bold text-[var(--color-misa-red)] uppercase">PARCOURS LICENCE</div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-misa-ink)]">{p.title}</h2>
        </div>

        {/* Level selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 shrink-0">
          {p.levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`min-h-[38px] px-4 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer shrink-0 ${
                activeLevel === lvl
                  ? "bg-[var(--color-misa-red)] text-white shadow-2xs"
                  : "bg-white border border-[var(--color-misa-line)] text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid: UEs + Objectif & Responsable */}
      <div className="grid lg:grid-cols-[1.4fr_0.6fr] items-start">
        {/* Left: UEs */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-[var(--color-misa-line)] pb-2 mb-4">
            <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-500 font-bold uppercase">
              <BookOpen size={15} className="text-[var(--color-misa-red)]" />
              <span>UNITÉS D'ENSEIGNEMENT — {activeLevel}</span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 bg-[var(--color-misa-paper)] px-2 py-0.5 border border-[var(--color-misa-line)] uppercase">
              {uesGroups.length} Groupes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {uesGroups.map((group, idx) => (
              <div key={idx} className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-3.5 space-y-2">
                <div className="text-[11px] font-bold tracking-wider text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-1 mb-2">
                  GROUPE {idx + 1}
                </div>
                <ul className="space-y-1.5">
                  {group.map((item) => (
                    <li key={item} className="text-xs text-neutral-700 flex items-start gap-2 leading-snug">
                      <span className="text-[var(--color-misa-red)] font-bold shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Objectif & Responsable */}
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4 sm:p-5 space-y-5 h-full">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] tracking-widest text-neutral-500 font-bold uppercase">
              <Target size={15} className="text-[var(--color-misa-red)]" />
              <span>OBJECTIF DU PARCOURS</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">{p.objectif}</p>
          </div>

          <div className="border-t border-[var(--color-misa-line)] pt-4">
            <div className="flex items-center gap-1.5 text-[11px] tracking-widest text-neutral-500 font-bold uppercase">
              <User size={15} className="text-[var(--color-misa-ink)]" />
              <span>RESPONSABLE DU PARCOURS</span>
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-bold text-[var(--color-misa-ink)]">{p.responsable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
