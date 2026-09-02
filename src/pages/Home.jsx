import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Database, ShieldCheck, Brain, Palette, Code2, Server, Quote, Check, Users, Award, Globe, Building2 } from "lucide-react";
import { objectives, stats } from "../data/content";

const iconMap = { Database, ShieldCheck, Brain, Palette, Code2, Server };

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/60" />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 to-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-rose-100 to-amber-100 rounded-full blur-3xl opacity-60" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full">
                <Sparkles size={14} className="text-cyan-300" /> PRÉ-INSCRIPTION 2026 • L1 OUVERTE
              </div>
              <h1 className="mt-6 font-black tracking-tight leading-[0.95] text-slate-900">
                <span className="block text-[15px] font-semibold tracking-[0.2em] text-rose-600 mb-2">MENTION INFORMATIQUE & TECHNOLOGIE</span>
                <span className="block text-4xl lg:text-[56px]">Le futur est</span>
                <span className="block text-4xl lg:text-[56px] bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">entre vos mains.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600 max-w-[560px]">
                Immergez-vous dans la <b className="text-slate-900">Science, Technologie, Ingénierie et Mathématiques</b> au sein de la toute nouvelle mention du Domaine Sciences et Technologies de l’Université d’Antananarivo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/admission" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-black transition">
                  Rejoignez-nous <ArrowRight size={18} />
                </Link>
                <Link to="/formation/licence" className="inline-flex items-center gap-2 bg-white border border-slate-200 font-semibold px-7 py-3.5 rounded-full hover:bg-slate-50">
                  Découvrir la formation
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-[520px] border-t border-slate-200 pt-6">
                {[
                  { k: "30 ans", v: "d’excellence" },
                  { k: "2 parcours", v: "MISA & INT" },
                  { k: "LMD", v: "depuis 2014" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="font-black text-slate-900">{s.k}</div>
                    <div className="text-xs text-slate-500">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:h-[520px]">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-8 lg:p-10 text-white overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 text-cyan-300 text-xs font-semibold tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> SYSTÈME LMD • RECHERCHE & INNOVATION
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight">Une pédagogie <span className="text-cyan-300">centrée sur l’étudiant</span></h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">Cours magistraux, TD, ateliers, simulations et projets de groupe. Autonomie, apprentissage par projet et stages en entreprise chaque année.</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["Projets réels", "Stages annuels", "Encadrement chercheur", "Partenariats intl."].map((t) => (
                    <div key={t} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5 text-sm">
                      <Check size={16} className="text-emerald-400" /> {t}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">{String.fromCharCode(64 + i)}</div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400">+ 1200 diplômés<br /><span className="text-white font-semibold">très recherchés</span></div>
                  <div className="ml-auto bg-white text-slate-900 rounded-full px-4 py-2 text-xs font-bold">BP 906 Ankatso</div>
                </div>
              </div>

              {/* floating card */}
              <div className="hidden lg:flex absolute -left-6 bottom-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white"><Award size={20} /></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Excellence académique</div>
                  <div className="text-xs text-slate-500">Classements nationaux</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-6 first:border-0 first:pl-0">
              <div className="text-3xl font-black text-white tracking-tight">{s.value}</div>
              <div className="text-sm font-semibold text-cyan-300 mt-1">{s.label}</div>
              <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HISTOIRE / MISA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[0.18em] text-rose-600">LA MIT / MISA</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">Pionnière de l’enseignement supérieur en informatique à Madagascar</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>Fondée en <b className="text-slate-900">1996</b> au Département de Mathématiques et Informatique de la Faculté des Sciences, avec le soutien du projet <b>PRESUP</b> et de la Coopération Française.</p>
              <p>Basculée en <b className="text-slate-900">système LMD depuis 2014</b>, la Maîtrise en Informatique et Statistique Appliquées devient <b>Mathématiques, Informatique et Statistique Appliquées</b> — formation orientée recherche dès le M2 (première promotion 2016).</p>
              <p>Fin <b className="text-slate-900">2022</b> : ouverture de la Mention Informatique et Technologie, formation complète <b>L1 → L3</b>, consolidant le statut d’institution pionnière.</p>
            </div>
            <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 flex gap-3">
              <Quote className="text-amber-600 shrink-0" size={20} />
              <p className="text-sm text-amber-900 leading-relaxed">“Former des diplômés compétents, adaptables, capables d’évoluer dans un environnement en constante mutation et d’encourager l’apprentissage tout au long de la vie.”</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center"><Building2 size={18} /></div>
                <h3 className="mt-4 font-bold text-slate-900">Vision</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Devenir une référence mondiale en enseignement supérieur en informatique et technologies.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-violet-600 p-6 text-white">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Globe size={18} /></div>
                <h3 className="mt-4 font-bold">Mission</h3>
                <p className="mt-2 text-sm text-cyan-50 leading-relaxed">Former les leaders de demain qui façonneront l’avenir numérique du monde.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Pourquoi la MIT/MISA ?</h3>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {[
                  { t: "Maths + Info intégrées", d: "Base solide pour résoudre des problèmes complexes" },
                  { t: "Pionnière en IA", d: "Expertise pointue en transformation numérique" },
                  { t: "Très recherchés", d: "Employabilité forte & postes à responsabilité" },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 text-slate-300 p-6 flex items-center gap-4">
              <Users className="text-cyan-400" />
              <div className="text-sm"><b className="text-white">Pédagogie innovante</b> — cours, TD, ateliers, simulations, projets de groupe. Les étudiants prennent en charge leur apprentissage et développent leur autonomie.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-rose-600">DÉBOUCHÉS & OBJECTIFS</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">6 expertises d’avenir</h2>
              <p className="mt-2 text-slate-600 max-w-[600px]">La MIT forme des experts prêts à diriger, sécuriser, analyser et designer le monde numérique.</p>
            </div>
            <Link to="/formation/licence" className="hidden lg:inline-flex items-center gap-2 font-semibold text-slate-900 hover:gap-3 transition">Voir les parcours <ArrowRight size={18} /></Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((o) => {
              const Icon = iconMap[o.icon];
              return (
                <div key={o.title} className="group relative rounded-[24px] bg-slate-50 border border-slate-200 p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${o.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900">{o.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{o.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 opacity-0 group-hover:opacity-100 transition">En savoir plus <ArrowRight size={14} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold tracking-[0.18em] text-slate-500">PARTENAIRES ACADÉMIQUES & INDUSTRIELS</h2>
          <span className="text-xs text-slate-400">18 institutions</span>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {["MESUPRES","AUF","Toulouse III","Paris Diderot","Paris 13","Passau","Telma","Orange","Renault","Pasteur","Etech","Ingenosia","BMOI","BNI","BOA","Amen","VV","Faculté des Sciences"].map((p) => (
            <div key={p} className="h-[64px] rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition text-center px-2">
              {p}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">La MISA collabore étroitement avec Telma (connectivité), Universités Paris 7, Paris 13, Paul Sabatier Toulouse (missions d’enseignement), et de nombreux partenaires industriels.</p>
      </section>
    </div>
  );
}
