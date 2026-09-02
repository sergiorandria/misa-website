import { useState } from "react";
import { licenceParcours } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Licence() {
  const pageRef = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="bg-white page-fade-in">
      <div className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">FORMATION — LICENCE</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-misa-ink)]">Licence</h1>
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-600">Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3).</p>
      </div>

      <div ref={pageRef} className="reveal max-w-[1160px] mx-auto px-6 pb-12 space-y-8">
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
    <div className="border border-[var(--color-misa-line)] rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="flex flex-wrap items-baseline justify-between gap-4 p-5 border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div>
          <div className="text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">PARCOURS</div>
          <h2 className="text-lg font-bold tracking-tight text-[var(--color-misa-ink)]">{p.title}</h2>
        </div>
        <div className="flex gap-2">
          {p.levels.map(l => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`text-xs font-semibold px-3 py-1.5 border transition-all duration-200 cursor-pointer ${
                active === l
                  ? "bg-[var(--color-misa-ink)] text-white border-[var(--color-misa-ink)] shadow-sm scale-105"
                  : "bg-white border-[var(--color-misa-line)] text-neutral-600 hover:border-[var(--color-misa-ink)]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
        <div className="p-5">
          <div className="text-xs tracking-widest text-neutral-500 font-semibold mb-3">UE — {active}</div>
          <div key={active} className="grid sm:grid-cols-2 gap-3 animate-fadeIn">
            {groups.map((g, idx) => (
              <ul key={idx} className="border border-[var(--color-misa-line)] p-4 space-y-1.5 bg-white hover:border-[var(--color-misa-red)]/40 transition-colors duration-200 rounded-sm">
                {g.map(item => (
                  <li key={item} className="text-sm flex gap-2 text-neutral-700">
                    <span className="text-[var(--color-misa-red)] font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 space-y-4">
          <div>
            <div className="text-xs tracking-widest text-neutral-500 font-semibold">OBJECTIF</div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700">{p.objectif}</p>
          </div>
          <div className="border-t border-[var(--color-misa-line)] pt-4">
            <div className="text-xs tracking-widest text-neutral-500 font-semibold">RESPONSABLE</div>
            <div className="mt-1 text-sm font-semibold text-[var(--color-misa-ink)]">{p.responsable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
