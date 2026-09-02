import { useState } from "react";
import { licenceParcours } from "../data/content";
import { GraduationCap, User, Target } from "lucide-react";

export default function Licence() {
  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-full">
            <GraduationCap size={14} /> FORMATION • LICENCE
          </div>
          <h1 className="mt-4 text-3xl lg:text-4xl font-black tracking-tight text-slate-900">Licence • Deux parcours complémentaires</h1>
          <p className="mt-3 text-slate-600 max-w-[760px]">Un cursus progressif L1 → L3, socle solide en maths et informatique, professionnalisation dès la L2, spécialisation MISA en L3.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 space-y-8">
        {licenceParcours.map((parcours) => (
          <ParcoursCard key={parcours.title} parcours={parcours} />
        ))}
      </div>
    </div>
  );
}

function ParcoursCard({ parcours }) {
  const [active, setActive] = useState(parcours.levels[0]);
  const ues = parcours.ues[active];

  return (
    <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100">
        <div>
          <div className="text-[11px] font-bold tracking-[0.16em] text-slate-500">PARCOURS</div>
          <h2 className="text-xl lg:text-2xl font-black tracking-tight text-slate-900">{parcours.title}</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {parcours.levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActive(lvl)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${active === lvl ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-0">
        <div className="p-6 lg:p-8">
          <h3 className="font-bold text-slate-900 flex items-center gap-2"><span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">UE</span> Unités d’enseignement — {active}</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {ues.map((group, idx) => (
              <ul key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                {group.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">UE optionnelles au choix selon orientation — voir maquette détaillée.</p>
        </div>

        <div className="bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 lg:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500"><Target size={14} /> OBJECTIF DU PARCOURS</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{parcours.objectif}</p>
            {parcours.title.includes("MISA") && (
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                <li>Mathématiques Informatique et Statistique Appliquées</li>
                <li>Innovation et Technologie</li>
              </ul>
            )}
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white"><User size={18} /></div>
            <div>
              <div className="text-xs font-bold tracking-widest text-slate-500">RESPONSABLE</div>
              <div className="text-sm font-semibold text-slate-900">{parcours.responsable}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
