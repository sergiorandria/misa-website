import { useState } from "react";
import { masterParcours } from "../data/content";
import { Award, User, BookOpen } from "lucide-react";

export default function Master() {
  const [activeParcours, setActiveParcours] = useState("INT");
  const [activeLevel, setActiveLevel] = useState("M1");
  const data = masterParcours[activeParcours];
  const ues = activeLevel === "M1" ? data.m1 : data.m2;

  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 bg-violet-50 border border-violet-200 px-3 py-1.5 rounded-full">
            <Award size={14} /> FORMATION • MASTER
          </div>
          <h1 className="mt-4 text-3xl lg:text-4xl font-black tracking-tight text-slate-900">Master — deux voies d’excellence</h1>
          <p className="mt-3 text-slate-600 max-w-[760px]">M1 (S7-S8) approfondissement • M2 (S9-S10) recherche, stage et mémoire. Choisissez entre Innovation & Technologie ou la voie académique MISA.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
        {/* parcours switch */}
        <div className="grid grid-cols-2 gap-3 max-w-[640px]">
          {[
            { key: "INT", label: "Innovation et Technologie", sub: "Parcours INT" },
            { key: "MISA", label: "MISA", sub: "Mathématiques, Info & Stats" },
          ].map((p) => (
            <button
              key={p.key}
              onClick={() => { setActiveParcours(p.key); setActiveLevel("M1"); }}
              className={`text-left rounded-2xl border p-5 transition ${activeParcours === p.key ? "bg-slate-900 text-white border-slate-900 shadow-lg" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
            >
              <div className="text-[11px] font-bold tracking-widest opacity-60">{p.sub}</div>
              <div className="font-black tracking-tight mt-1">{p.label}</div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900">{data.title}</h2>
              <p className="text-sm text-slate-600 mt-1 max-w-[620px]">{data.objectif}</p>
            </div>
            <div className="flex gap-2">
              {["M1", "M2"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActiveLevel(lvl)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border ${activeLevel === lvl ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200"}`}
                >
                  Master {lvl.slice(1)} <span className="opacity-60">{lvl === "M1" ? "(S7-S8)" : "(S9-S10)"}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="p-6 lg:p-8">
              <h3 className="font-bold flex items-center gap-2"><BookOpen size={18} className="text-violet-600" /> UE — Master {activeLevel.slice(1)}</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {ues.map((group, idx) => (
                  <ul key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                    {group.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 lg:border-l border-slate-200 p-6 lg:p-8 space-y-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-4 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center"><User size={18} /></div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-slate-500">RESPONSABLE</div>
                  <div className="text-sm font-semibold text-slate-900">{data.responsable}</div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 p-5 text-white">
                <div className="text-sm font-bold">Stage & Mémoire en M2</div>
                <p className="text-sm text-violet-100 mt-2 leading-relaxed">Immersion professionnelle, projet de recherche encadré et soutenance devant jury — tremplin vers doctorat ou industrie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
