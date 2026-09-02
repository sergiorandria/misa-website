import { useState } from "react";
import { masterParcours } from "../data/content";

export default function Master() {
  const [parcours, setParcours] = useState("INT");
  const [level, setLevel] = useState("M1");
  const data = masterParcours[parcours];
  const groups = level === "M1" ? data.m1 : data.m2;

  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">FORMATION — MASTER</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Master</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Deux parcours : Innovation et Technologie (INT) et MISA.</p>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 pb-12">
        <div className="flex gap-2">
          {[
            ["INT", "Innovation et Technologie"],
            ["MISA", "MISA"],
          ].map(([k, label]) => (
            <button key={k} onClick={() => { setParcours(k); setLevel("M1"); }} className={`text-sm font-semibold px-4 py-2 border ${parcours===k ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)]" : "bg-white border-[var(--color-misa-line)]"}`}>{label}</button>
          ))}
        </div>

        <div className="mt-4 border border-[var(--color-misa-line)]">
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
            <div>
              <h2 className="text-lg font-bold">{data.title}</h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-[640px] leading-relaxed">{data.objectif}</p>
            </div>
            <div className="flex gap-2">
              {["M1","M2"].map(l => (
                <button key={l} onClick={() => setLevel(l)} className={`text-xs font-semibold px-3 py-1.5 border ${level===l ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)]" : "bg-white border-[var(--color-misa-line)]"}`}>Master {l.slice(1)} <span className="opacity-60">{l==="M1"?"S7·S8":"S9·S10"}</span></button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
            <div className="p-5">
              <div className="text-xs tracking-widest text-neutral-500">UE — MASTER {level.slice(1)}</div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {groups.map((g, idx) => (
                  <ul key={idx} className="border border-[var(--color-misa-line)] p-3 space-y-1">
                    {g.map(item => <li key={item} className="text-sm flex gap-2"><span className="text-[var(--color-misa-red)]">—</span>{item}</li>)}
                  </ul>
                ))}
              </div>
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 space-y-4">
              <div>
                <div className="text-xs tracking-widest text-neutral-500">RESPONSABLE</div>
                <div className="mt-1 text-sm font-semibold">{data.responsable}</div>
              </div>
              <div className="border-t border-[var(--color-misa-line)] pt-4 text-sm leading-relaxed text-neutral-600">
                M2 : stage & mémoire.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
