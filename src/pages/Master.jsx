import { useState } from "react";
import { masterParcours } from "../data/content";
import { GraduationCap, Award, Bookmark, BookOpen, Target, User } from "lucide-react";

export default function Master() {
  const [parcoursKey, setParcoursKey] = useState("INT");
  const [level, setLevel] = useState("M1");

  const parcoursData = masterParcours[parcoursKey];
  const uesGroups = level === "M1" ? parcoursData.m1 : parcoursData.m2;

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">FORMATION — MASTER</div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-misa-ink)]">
            Master Informatique et Technologie (MIT)
          </h1>
          <p className="mt-2 sm:mt-3 max-w-[760px] text-xs sm:text-sm leading-relaxed text-neutral-600">
            Deux parcours : Innovation et Technologie (INT) et MISA. Contenu repris fidèlement depuis la page Master originale — aucune UE inventée.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8">
        <div className="academic-card border border-[var(--color-misa-line)] bg-white shadow-xs">
          
          {/* Track selection & Level selector */}
          <div className="p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-[var(--color-misa-red)] uppercase">PARCOURS MASTER</div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-misa-ink)]">
                {parcoursData.title} ({parcoursKey}) — {level}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Track selector */}
              {["INT", "MISA"].map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    setParcoursKey(k);
                    setLevel("M1");
                  }}
                  className={`min-h-[38px] px-4 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                    parcoursKey === k
                      ? "bg-[var(--color-misa-ink)] text-white shadow-2xs"
                      : "bg-white border border-[var(--color-misa-line)] text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  Parcours {k}
                </button>
              ))}

              <div className="h-6 w-px bg-neutral-300 mx-1 hidden sm:block" />

              {/* Level selector */}
              {["M1", "M2"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`min-h-[38px] px-4 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                    level === lvl
                      ? "bg-[var(--color-misa-red)] text-white shadow-2xs"
                      : "bg-white border border-[var(--color-misa-line)] text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: UEs + Details */}
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] items-start">
            {/* Left: UEs */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-[var(--color-misa-line)] pb-2 mb-4">
                <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-500 font-bold uppercase">
                  <BookOpen size={15} className="text-[var(--color-misa-red)]" />
                  <span>UNITÉS D'ENSEIGNEMENT — {parcoursKey} ({level})</span>
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
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">{parcoursData.objectif}</p>
              </div>

              <div className="border-t border-[var(--color-misa-line)] pt-4">
                <div className="flex items-center gap-1.5 text-[11px] tracking-widest text-neutral-500 font-bold uppercase">
                  <User size={15} className="text-[var(--color-misa-ink)]" />
                  <span>RESPONSABLE DU PARCOURS</span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-bold text-[var(--color-misa-ink)]">{parcoursData.responsable}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
