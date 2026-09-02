import { useState } from "react";
import { licenceParcours } from "../data/content";

export default function Licence() {
  return (
    <div className="bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-neutral-500">FORMATION — LICENCE</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Licence</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3). Contenu repris fidèlement depuis les pages Licence du site original — aucune UE inventée.</p>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 pb-12 space-y-8">
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
    <div className="border border-[var(--color-misa-line)]">
      <div className="flex flex-wrap items-baseline justify-between gap-4 p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div>
          <div className="text-xs tracking-widest text-[var(--color-misa-red)]">PARCOURS</div>
          <h2 className="text-lg font-bold tracking-tight">{p.title}</h2>
        </div>
        <div className="flex gap-2">
          {p.levels.map(l => (
            <button key={l} onClick={() => setActive(l)} className={`text-xs font-semibold px-3 py-1.5 border ${active===l ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)]" : "bg-white border-[var(--color-misa-line)] text-neutral-600"}`}>{l}</button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
        <div className="p-5">
          <div className="text-xs tracking-widest text-neutral-500">UE — {active}</div>
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
            <div className="text-xs tracking-widest text-neutral-500">OBJECTIF</div>
            <p className="mt-1 text-sm leading-relaxed">{p.objectif}</p>
          </div>
          <div className="border-t border-[var(--color-misa-line)] pt-4">
            <div className="text-xs tracking-widest text-neutral-500">RESPONSABLE</div>
            <div className="mt-1 text-sm font-semibold">{p.responsable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
