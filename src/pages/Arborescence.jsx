import { ArrowDown, Layers, GraduationCap, Binary, Sparkles } from "lucide-react";

export default function Arborescence() {
  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-full">
            <Layers size={14} /> ARBORESCENCE LMD
          </div>
          <h1 className="mt-4 text-3xl lg:text-4xl font-black tracking-tight text-slate-900">Parcours LMD — de la Licence au Master</h1>
          <p className="mt-3 text-slate-600 max-w-[760px]">Organisation claire et progressive, pensée pour la mobilité et l’employabilité. Chaque année construit les compétences de la suivante.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        {/* Interactive diagram */}
        <div className="bg-white rounded-[24px] border border-slate-200 p-6 lg:p-10 shadow-sm overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Bac */}
            <div className="flex justify-center">
              <div className="bg-slate-900 text-white rounded-2xl px-8 py-4 text-center">
                <div className="text-xs tracking-widest font-bold text-cyan-300">ADMISSION</div>
                <div className="font-black">BACC Série C / S</div>
                <div className="text-xs text-slate-400">Sélection sur dossier & mérite</div>
              </div>
            </div>
            <div className="flex justify-center py-4"><ArrowDown className="text-slate-300" /></div>

            {/* L1 L2 */}
            <div className="grid grid-cols-2 gap-6">
              <DiagramCard
                title="L1 (S1-S2)"
                subtitle="Informatique et Technologie"
                color="from-cyan-500 to-blue-600"
                items={["Maths générales", "Base de la programmation", "Unix/Linux", "Langage C", "Physique & Électromécanique"]}
              />
              <DiagramCard
                title="L2 (S3-S4)"
                subtitle="Informatique et Technologie"
                color="from-blue-600 to-violet-600"
                items={["Architecture réseaux & systèmes", "POO", "Web & multimédia", "BDD", "Compta & Management"]}
              />
            </div>

            <div className="flex justify-center py-4"><ArrowDown className="text-slate-300" /></div>

            {/* L3 */}
            <div className="flex justify-center">
              <div className="w-[560px]">
                <DiagramCard
                  title="L3 (S5-S6) — MISA"
                  subtitle="Mathématiques Informatique et Statistique Appliquées"
                  color="from-violet-600 to-purple-600"
                  featured
                  items={["Mathématique du numérique", "Prototypage numérique", "Conduite de projet", "Dev logiciel / web & mobile", "Projet Informatique"]}
                />
              </div>
            </div>

            <div className="flex justify-center py-4"><ArrowDown className="text-slate-300" /></div>

            {/* Master bifurcation */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border-2 border-slate-900 p-6 bg-slate-900 text-white">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold tracking-widest"><Sparkles size={14} /> MASTER</div>
                <div className="font-black text-lg mt-1">Innovation et Technologie</div>
                <div className="text-sm text-slate-300 mt-2">M1 (S7-S8) • M2 (S9-S10)</div>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>• IA, Vision, Optimisation, BDD réparties</li>
                  <li>• Ingénierie de modèle, Dev mobile & embarqué</li>
                  <li>• Stage & Mémoire</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-violet-600 p-6 bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                <div className="flex items-center gap-2 text-violet-200 text-xs font-bold tracking-widest"><Binary size={14} /> MASTER</div>
                <div className="font-black text-lg mt-1">MISA — Recherche</div>
                <div className="text-sm text-violet-100 mt-2">M1 (S7-S8) • M2 (S9-S10)</div>
                <ul className="mt-4 space-y-1.5 text-sm text-violet-100">
                  <li>• Data Sciences, Apprentissage statistique</li>
                  <li>• Simulation, Sécurité, Imagerie, IA</li>
                  <li>• Stage & Mémoire</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center py-4"><ArrowDown className="text-slate-300" /></div>
            <div className="flex justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-bold">Doctorat</span>
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold">École d’ingénieur</span>
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold">Emploi • Entrepreneuriat</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { icon: GraduationCap, title: "LMD depuis 2014", desc: "Mobilité internationale assurée, passerelles facilitées." },
            { icon: Layers, title: "Progressif & cohérent", desc: "Chaque semestre consolide les acquis du précédent." },
            { icon: Sparkles, title: "Orientation choisie", desc: "2 masters pour 2 profils : innovation produit ou recherche." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-3">
              <f.icon className="text-violet-600 shrink-0" size={20} />
              <div>
                <div className="font-semibold text-slate-900 text-sm">{f.title}</div>
                <div className="text-sm text-slate-600 mt-1">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiagramCard({ title, subtitle, items, color, featured }) {
  return (
    <div className={`rounded-2xl border p-6 ${featured ? "border-violet-300 bg-violet-50" : "border-slate-200 bg-white"}`}>
      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${color}`}>{title}</div>
      <div className="text-sm font-semibold text-slate-700 mt-2">{subtitle}</div>
      <ul className="mt-3 space-y-1">
        {items.map((i) => (
          <li key={i} className="text-sm text-slate-600 flex gap-2"><span className="text-slate-300">•</span> {i}</li>
        ))}
      </ul>
    </div>
  );
}
