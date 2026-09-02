import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, GraduationCap } from "lucide-react";

export default function Inscription() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
            <GraduationCap size={14} /> INSCRIPTION
          </div>
          <h1 className="mt-4 text-3xl lg:text-4xl font-black tracking-tight text-slate-900">Pré-inscription en ligne</h1>
          <p className="mt-3 text-slate-600 max-w-[760px]">Formulaire de pré-inscription — simulation côté client (statique). Aucune donnée n’est envoyée, mais l’UX est complète pour intégration future.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="bg-white rounded-[24px] border border-slate-200 p-6 lg:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto"><CheckCircle2 /></div>
              <h3 className="mt-4 text-xl font-black text-slate-900">Pré-inscription simulée avec succès !</h3>
              <p className="mt-2 text-sm text-slate-600">Ceci est une démo statique. Dans la version production, vos données seraient envoyées à la scolarité et vous recevriez un accusé par e-mail.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold">Faire une nouvelle saisie</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nom" icon={User} placeholder="Rakoto" required />
                <Field label="Prénom" icon={User} placeholder="Jean" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-mail" icon={Mail} placeholder="jean@example.com" type="email" required />
                <Field label="Téléphone" icon={Phone} placeholder="+261 34 00 000 00" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Série du Baccalauréat</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white">
                    <option>Série C</option>
                    <option>Série S</option>
                    <option>BACC Français — Série S (Spé. Maths)</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Année du BACC</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white">
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Parcours souhaité</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50">
                    <input type="radio" name="parcours" defaultChecked className="accent-slate-900" /> <span className="text-sm font-medium">Informatique & Technologie</span>
                  </label>
                  <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50">
                    <input type="radio" name="parcours" className="accent-slate-900" /> <span className="text-sm font-medium">MISA (L3)</span>
                  </label>
                </div>
              </div>

              <label className="flex gap-3 text-sm text-slate-600">
                <input type="checkbox" required className="mt-1" /> <span>J’atteste l’exactitude des informations et m’engage à fournir les pièces justificatives demandées.</span>
              </label>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3.5 rounded-full hover:bg-black transition">
                <Send size={18} /> Envoyer la pré-inscription
              </button>
              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1"><AlertCircle size={12} /> Démo front-end uniquement — connectez à votre API / Google Form / Siansa.</p>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-violet-600 to-cyan-600 rounded-[24px] p-8 text-white">
            <h3 className="font-bold text-lg">Après votre pré-inscription</h3>
            <ol className="mt-4 space-y-3 text-sm text-violet-50">
              <li><b className="text-white">1.</b> Préparez votre dossier (photo, acte de naissance, relevé BACC, reçu BNI…)</li>
              <li><b className="text-white">2.</b> Déposez sous pli recommandé à BP 906</li>
              <li><b className="text-white">3.</b> Suivez la publication des résultats sur ce site</li>
            </ol>
          </div>

          <div className="bg-white rounded-[24px] border border-slate-200 p-6">
            <h4 className="font-bold text-slate-900">Contact scolarité</h4>
            <p className="text-sm text-slate-600 mt-2">Faculté des Sciences — BP 906 Ankatso<br />mit-univ-tana@gmail.com<br />(+261) 34 53 140 38</p>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
              💡 Astuce : le site officiel d’admission en ligne pour le Master INT est <span className="font-mono text-xs bg-white border px-2 py-1 rounded">siansa.univ-antananarivo.mg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, ...props }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5"><Icon size={14} className="text-slate-400" /> {label}</label>
      <input {...props} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900" />
    </div>
  );
}
