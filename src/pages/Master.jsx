import { useState } from "react";
import { masterParcours } from "../data/content";
import { GraduationCap, Award, Bookmark, CheckCircle2 } from "lucide-react";

export default function Master() {
  const [parcours, setParcours] = useState("INT");
  const [level, setLevel] = useState("M1");
  const data = masterParcours[parcours];
  const groups = level === "M1" ? data.m1 : data.m2;

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
            Deux parcours : Innovation et Technologie (INT) et MISA. Contenu repris fidèlement depuis la page Master originale.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          
          {/* Main Content Column */}
          <div>
            {/* Track selection tabs */}
            <div className="flex flex-wrap gap-2 border-b border-[var(--color-misa-line)] pb-4">
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
                  className={`min-h-[42px] px-5 text-xs sm:text-sm font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                    parcours === k
                      ? "bg-[var(--color-misa-ink)] text-white shadow-xs"
                      : "bg-[var(--color-misa-paper)] text-neutral-700 hover:bg-neutral-200 border border-[var(--color-misa-line)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Sub-level selection tabs (M1 / M2) */}
            <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
              {["M1", "M2"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`min-h-[38px] px-4 text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                    level === lvl
                      ? "bg-[var(--color-misa-red)] text-white shadow-2xs"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-[var(--color-misa-line)]"
                  }`}
                >
                  Niveau {lvl}
                </button>
              ))}
            </div>

            {/* Track Header Header */}
            <div className="mt-6 p-4 border-l-3 border-[var(--color-misa-red)] bg-[var(--color-misa-paper)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">
                  {data.label} — {level}
                </h2>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Parcours de haute spécialisation académique et professionnelle
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-misa-red)] bg-white px-3 py-1.5 border border-[var(--color-misa-line)] self-start sm:self-auto">
                <Bookmark size={14} />
                <span>{parcours} · {level}</span>
              </div>
            </div>

            {/* UE Groups */}
            <div className="mt-6 space-y-6">
              {groups.map((group, idx) => (
                <div key={idx} className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[var(--color-misa-line)] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-misa-red)]" />
                      <h3 className="text-sm font-bold text-[var(--color-misa-ink)] uppercase tracking-wide">
                        {group.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase bg-[var(--color-misa-paper)] px-2 py-0.5 border border-[var(--color-misa-line)]">
                      {group.ues.length} UEs
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {group.ues.map((ue, uIdx) => (
                      <div key={uIdx} className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-3.5 hover:border-[var(--color-misa-ink)] hover:bg-white transition duration-200 flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-[var(--color-misa-ink)] leading-snug">{ue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar Fast Facts */}
          <div className="space-y-4">
            <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-xs">
              <div className="text-[11px] font-bold tracking-widest text-[var(--color-misa-red)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-4 flex items-center gap-2">
                <GraduationCap size={16} />
                <span>INFORMATIONS MASTER</span>
              </div>
              
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[var(--color-misa-line)]">
                  <dt className="text-neutral-500">Parcours</dt>
                  <dd className="font-semibold text-[var(--color-misa-ink)]">{parcours}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--color-misa-line)]">
                  <dt className="text-neutral-500">Durée</dt>
                  <dd className="font-semibold text-[var(--color-misa-ink)]">2 Ans (M1 + M2)</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--color-misa-line)]">
                  <dt className="text-neutral-500">Diplôme</dt>
                  <dd className="font-semibold text-[var(--color-misa-ink)]">Master National</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-neutral-500">Débouchés</dt>
                  <dd className="font-semibold text-[var(--color-misa-ink)]">Recherche / Industrie</dd>
                </div>
              </dl>
            </div>

            <div className="border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-4 text-xs text-neutral-600 leading-relaxed">
              <span className="font-bold text-[var(--color-misa-ink)]">Note :</span> Les UEs affichées sont la transcription exacte du programme Master officiel de la MIT.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
