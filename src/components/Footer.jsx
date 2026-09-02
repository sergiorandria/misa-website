import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* top CTA */}
        <div className="py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10">
          <div>
            <div className="text-white font-bold text-xl tracking-tight">Prêt à façonner le futur numérique ?</div>
            <div className="text-slate-400 text-sm mt-1">Intégrez la Mention Informatique et Technologie — Université d’Antananarivo</div>
          </div>
          <Link to="/admission" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition self-start">
            Candidater maintenant <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Université d’Antananarivo<br />
              Faculté des Sciences<br />
              Domaine Sciences et Technologies<br />
              Département MIT — BP 906 Ankatso
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-xs font-bold">in</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-xs font-bold">f</a>
              <a href="mailto:mit-univ-tana@gmail.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Mail size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacts</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><Phone size={16} className="text-cyan-400 mt-0.5" /> (+261) 34 53 140 38 / 38 18 515 28</li>
              <li className="flex gap-3"><Mail size={16} className="text-cyan-400 mt-0.5" /> mit-univ-tana@gmail.com<br />administration@mit-ua.mg</li>
              <li className="flex gap-3"><MapPin size={16} className="text-cyan-400 mt-0.5" /> BP 906 Ankatso — Antananarivo 101</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/formation/licence" className="hover:text-white">Licence</Link></li>
              <li><Link to="/formation/master" className="hover:text-white">Master</Link></li>
              <li><Link to="/formation/arborescence" className="hover:text-white">Arborescence LMD</Link></li>
              <li><Link to="/admission" className="hover:text-white">Conditions d’admission</Link></li>
              <li><Link to="/inscription" className="hover:text-white">Inscription</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MIT • MISA — Université d’Antananarivo. Tous droits réservés.</span>
          <span>Fondée en 1996 avec le soutien du PRESUP & de la Coopération Française.</span>
        </div>
      </div>
    </footer>
  );
}
