import { useState } from "react";
import { masterParcours } from "../data/content";
import { BookOpen, User, Info } from "lucide-react";

export default function Master() {
  const [parcours, setParcours] = useState("INT");
  const [level, setLevel] = useState("M1");
  const data = masterParcours[parcours];
  const groups = level === "M1" ? data.m1 : data.m2;

  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">FORMATION — MASTER</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-misa-ink)]">Master</h1>
        <p className="mt-2 sm:mt-3 max-w-[720px] text-xs sm:text-sm leading-relaxed text-neutral-600">
          Deux parcours : Innovation et Technologie (INT) et MISA. Contenu repris fidèlement depuis la page Master originale.
        </p>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 pb-12">
        {/* Track selection tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {[
            ["INT", "Innovation et Technologie"],
            ["MISA", "MISA"],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => {
                setParcours(k);
                setLevel("M1");
              }}
              className={`min-h-[44px] text-xs sm:text-sm font-semibold px-4 py-2 border transition cursor-pointer shrink-0 ${
                parcours === k
                  ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)] shadow-xs"
                  : "bg-white border-[var(--color-misa-line)] text-neutral-700 hover:border-neutral-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Course Card Container */}
        <div className="mt-4 border border-[var(--color-misa-line)] bg-white shadow-xs">
          {/* Header & Level Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">{data.title}</h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-[640px] leading-relaxed">{data.objectif}</p>
            </div>
            
            <div className="flex gap-2 shrink-0">
              {["M1", "M2"].map(l => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`min-h-[38px] text-xs font-semibold px-3 py-1.5 border transition cursor-pointer ${
                    level === l
                      ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)] shadow-xs"
                      : "bg-white border-[var(--color-misa-line)] text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  Master {l.slice(1)} <span className="opacity-70 text-[10px]">{l === "M1" ? "S7·S8" : "S9·S10"}</span>
                </button>
              ))}
            </div>
          </div>

          {/* UEs and Details */}
          <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-500 font-semibold uppercase">
                <BookOpen size={14} className="text-[var(--color-misa-red)]" />
                <span>UE — MASTER {level.slice(1)}</span>
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

            <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4 sm:p-5 space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-widest text-neutral-500 font-semibold uppercase">
                  <User size={14} className="text-[var(--color-misa-ink)]" />
                  <span>RESPONSABLE</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-[var(--color-misa-ink)]">{data.responsable}</div>
              </div>
              
              <div className="border-t border-[var(--color-misa-line)] pt-4 text-xs sm:text-sm leading-relaxed text-neutral-600 flex items-start gap-2">
                <Info size={16} className="text-neutral-400 shrink-0 mt-0.5" />
                <span>M2 : stage & mémoire. Seule année indiquée comme telle sur le site original.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
