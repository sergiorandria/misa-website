import { FileCheck, Clock, Mail, CreditCard, ClipboardList, ArrowRight } from "lucide-react";
import { admission } from "../data/content";
import { Link } from "react-router-dom";

export default function Admission() {
  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
            <ClipboardList size={14} /> ADMISSION
          </div>
          <h1 className="mt-4 text-3xl lg:text-4xl font-black tracking-tight">Mention Informatique et Technologie</h1>
          <p className="mt-3 text-slate-300 max-w-[720px]">Rejoignez l’excellence MIT/MISA. Sélection sur dossier, selon l’ordre de mérite — transparence et équité.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-6">
        {/* Left 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-[24px] border border-slate-200 p-6 lg:p-8">
            <h2 className="font-black text-slate-900 flex items-center gap-2"><FileCheck className="text-emerald-600" size={20} /> Classement de dossier & sélection</h2>
            <div className="mt-4 space-y-3">
              {admission.classement.map((t) => (
                <div key={t} className="flex gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">✓</span>
                  <p className="text-sm text-emerald-900 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[24px] border border-slate-200 p-6 lg:p-8">
            <h2 className="font-black text-slate-900 flex items-center gap-2"><ClipboardList className="text-violet-600" size={20} /> Dossier à fournir</h2>
            <div className="mt-5 grid gap-3">
              {admission.dossier.map((d, i) => (
                <div key={d} className="flex gap-3 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                  <p className="text-sm text-slate-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700">📄 Télécharger le modèle de pré-inscription (PDF) <ArrowRight size={14} /></a>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-[24px] p-6 flex gap-4">
            <Clock className="text-amber-600 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-900">Date limite de dépôt</h3>
              <p className="text-sm text-amber-800 mt-2 leading-relaxed">{admission.depot} — <b>vendredi 30 septembre 2022</b> (exemple — année à confirmer auprès de la scolarité).</p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[24px] border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">Besoin d’aide ?</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex gap-3"><CreditCard size={16} className="text-slate-500 mt-0.5" /> <span><b>40 000 Ar</b> — frais de dossier<br /><span className="text-slate-500">BNI CA 00005 00002 214103 602 00 43</span></span></div>
              <div className="flex gap-3"><Mail size={16} className="text-slate-500 mt-0.5" /> mit-univ-tana@gmail.com<br />administration@mit-ua.mg</div>
            </div>
            <Link to="/inscription" className="mt-6 flex items-center justify-center gap-2 bg-rose-600 text-white font-semibold py-3 rounded-full hover:bg-rose-700">Commencer l’inscription <ArrowRight size={16} /></Link>
            <p className="mt-3 text-xs text-slate-500 text-center">Dépôt sous pli recommandé à “Monsieur le Doyen, Faculté des Sciences — BP 906”</p>
          </div>

          <div className="rounded-[24px] bg-slate-900 text-white p-6">
            <div className="text-xs font-bold tracking-widest text-cyan-300">ÉTAPES</div>
            <ol className="mt-4 space-y-4">
              {["Pré-inscription en ligne", "Dépôt du dossier complet", "Classement & sélection", "Publication des résultats"].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center text-xs font-black shrink-0">{i + 1}</span>
                  <span className="text-sm font-medium pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
