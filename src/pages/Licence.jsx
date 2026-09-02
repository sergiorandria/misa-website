import { useState } from "react";
import { licenceParcours } from "../data/content";
import { BookOpen, User, Target } from "lucide-react";

export default function Licence() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">FORMATION — LICENCE</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-misa-ink)]">Licence</h1>
        <p className="mt-2 sm:mt-3 max-w-[720px] text-xs sm:text-sm leading-relaxed text-neutral-600">
          Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3). Contenu repris fidèlement depuis les pages Licence du site original — aucune UE inventée.
        </p>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 pb-12 space-y-6 sm:space-y-8">
        {licenceParcours.map(p => (
          <Parcours key={p.title} p={p} />
        ))}
      </div>
    </div>
  );
}

function Parcours({ p }) {
  const [active, setActive] = useState(p.levels[0]);
  const groups = p.ues[active];

  return (
    <div className="border border-[var(--color-misa-line)] bg-white shadow-xs">
      {/* Header bar with level selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div>
          <div className="text-[11px] tracking-widest font-semibold text-[var(--color-misa-red)] uppercase">PARCOURS</div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-misa-ink)]">{p.title}</h2>
        </div>
        
        {/* Horizontal scrollable segmented control for mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 shrink-0 -mx-1 px-1">
          {p.levels.map(l => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`min-h-[38px] min-w-[44px] text-xs font-semibold px-3.5 py-1.5 border transition cursor-pointer shrink-0 ${
                active === l
                  ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)] shadow-xs"
                  : "bg-white border-[var(--color-misa-line)] text-neutral-700 hover:border-neutral-400"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: UEs + Details */}
      <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
        {/* Left: UEs */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-500 font-semibold uppercase">
            <BookOpen size={14} className="text-[var(--color-misa-red)]" />
            <span>UE — {active}</span>
          </div>
          
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {groups.map((g, idx) => (
              <ul key={idx} className="border border-[var(--color-misa-line)] p-3 sm:p-4 space-y-2 bg-white">
                {g.map(item => (
                  <li key={item} className="text-xs sm:text-sm flex items-start gap-2 text-neutral-700 leading-snug">
                    <span className="text-[var(--color-misa-red)] font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Objectif & Responsable */}
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4 sm:p-5 space-y-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">
              <Target size={14} className="text-[var(--color-misa-ink)]" />
              <span>OBJECTIF</span>
            </div>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-700">{p.objectif}</p>
          </div>
          
          <div className="border-t border-[var(--color-misa-line)] pt-4">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">
              <User size={14} className="text-[var(--color-misa-ink)]" />
              <span>RESPONSABLE</span>
            </div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[var(--color-misa-ink)]">{p.responsable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
