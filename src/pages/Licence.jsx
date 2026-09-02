import { useState } from "react";
import { introductionParcours, licenceParcours } from "../data/content";
import { BookOpen, Target, User } from "lucide-react";

export default function Licence() {
  return (
    <div className="bg-white">

      {/* ── BANNER — paper band ──────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">FORMATION — LICENCE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
            Licence Mention Informatique et Technologie
          </h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-5 max-w-[720px] text-sm sm:text-base leading-[1.7] text-neutral-700 font-medium">
            {introductionParcours}
          </p>
          <p className="mt-3 max-w-[680px] text-xs sm:text-sm leading-[1.7] text-neutral-500">
            Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3). Programmes mis à jour d'après contenu officiel fourni.
          </p>
        </div>
      </div>

      {/* ── CONTENT — white band ─────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24 space-y-12">
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
    <div className="academic-card border border-[var(--color-misa-line)] bg-white">

      {/* Card header with level selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-8 py-6 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div>
          <p className="text-[11px] tracking-[0.18em] font-bold text-[var(--color-misa-red)] uppercase">PARCOURS</p>
          <h2 className="mt-1 text-base sm:text-lg font-light tracking-tight text-[var(--color-misa-ink)]">{p.title}</h2>
        </div>

        {/* Level selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {p.levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`min-h-[40px] px-5 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer shrink-0 ${
                activeLevel === lvl
                  ? "bg-[var(--color-misa-red)] text-white"
                  : "bg-white border border-[var(--color-misa-line)] text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid: UEs + Objectif & Responsable */}
      <div className="grid lg:grid-cols-[1.4fr_0.6fr]">

        {/* Left: UEs */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[var(--color-misa-line)] pb-3 mb-6">
            <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-neutral-500 font-bold uppercase">
              <BookOpen size={14} className="text-[var(--color-misa-red)]" />
              <span>UNITÉS D'ENSEIGNEMENT — {activeLevel}</span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 bg-[var(--color-misa-paper)] px-2 py-0.5 border border-[var(--color-misa-line)] uppercase">
              {uesGroups.length} groupes
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {uesGroups.map((group, idx) => (
              <div key={idx} className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4">
                <div className="text-[10px] font-bold tracking-wider text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-3">
                  Groupe {idx + 1}
                </div>
                <ul className="space-y-2">
                  {group.map((item) => (
                    <li key={item} className="text-sm text-neutral-700 flex items-start gap-2 leading-snug">
                      <span className="text-[var(--color-misa-red)] font-bold shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Objectif & Responsable */}
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] text-neutral-500 font-bold uppercase">
              <Target size={14} className="text-[var(--color-misa-red)]" />
              <span>OBJECTIF</span>
            </div>
            <p className="mt-3 text-sm leading-[1.7] text-neutral-700">{p.objectif}</p>
          </div>

          <div className="border-t border-[var(--color-misa-line)] pt-6">
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] text-neutral-500 font-bold uppercase">
              <User size={14} className="text-[var(--color-misa-ink)]" />
              <span>RESPONSABLE</span>
            </div>
            <div className="mt-2 text-sm font-bold text-[var(--color-misa-ink)]">{p.responsable}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
