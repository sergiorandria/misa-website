import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-[var(--color-misa-red)] text-white">
      <div className="max-w-[1160px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <div className="flex items-center gap-4">
            <img src={`${base}logo-mit.png`} alt="MIT" className="h-10 w-auto bg-white p-1 rounded-sm shadow-sm" />
            <img src={`${base}logo-misa.png`} alt="MISA" className="h-10 w-auto bg-white p-1 rounded-sm shadow-sm" />
          </div>
          <p className="mt-4 leading-relaxed text-white/80">
            Université d'Antananarivo<br />
            Faculté des Sciences — Domaine Sciences et Technologies<br />
            Département MIT · BP 906 Ankatso — Antananarivo 101
          </p>
          <p className="mt-3 text-xs text-white/60">Fondée en 1996 — PRESUP & Coopération Française</p>
        </div>

        <div>
          <div className="text-xs tracking-widest text-white/60 font-semibold">CONTACTS</div>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>Tél : (+261) 34 53 140 38</li>
            <li>mit-univ-tana@gmail.com</li>
            <li>administration@mit-ua.mg</li>
            <li>Facebook : MIT-Mention Informatique et Technologie</li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-widest text-white/60 font-semibold">NAVIGATION</div>
          <ul className="mt-3 space-y-1">
            <li><Link to="/" className="hover:underline hover:text-white transition-colors">Accueil</Link></li>
            <li><Link to="/formation/arborescence" className="hover:underline hover:text-white transition-colors">Arborescence</Link></li>
            <li><Link to="/formation/licence" className="hover:underline hover:text-white transition-colors">Licence</Link></li>
            <li><Link to="/formation/master" className="hover:underline hover:text-white transition-colors">Master</Link></li>
            <li><Link to="/admission" className="hover:underline hover:text-white transition-colors">Conditions d'admission</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-[1160px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/60">
          <span>© {new Date().getFullYear()} MIT — MISA. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
