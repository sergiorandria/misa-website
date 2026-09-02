import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap, Sparkles } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium tracking-wide transition-colors px-3 py-2 rounded-full ${
    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [formationOpen, setFormationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
              <GraduationCap size={22} />
            </div>
            <div className="leading-tight">
              <div className="font-black tracking-tight text-slate-900 text-[17px]">MIT • MISA</div>
              <div className="text-[11px] tracking-[0.14em] font-semibold text-slate-500 -mt-1">UNIVERSITÉ D'ANTANANARIVO</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>ACCUEIL</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setFormationOpen(true)}
              onMouseLeave={() => setFormationOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-full hover:bg-slate-100">
                FORMATION <ChevronDown size={16} className={`transition ${formationOpen ? "rotate-180" : ""}`} />
              </button>
              {formationOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid grid-cols-3 gap-3">
                  {[
                    { to: "/formation/arborescence", title: "Arborescence", desc: "Vue d’ensemble LMD" },
                    { to: "/formation/licence", title: "Licence", desc: "L1 • L2 • L3 MISA" },
                    { to: "/formation/master", title: "Master", desc: "M1 • M2 INT & MISA" },
                  ].map((i) => (
                    <Link key={i.to} to={i.to} className="p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition">
                      <div className="font-semibold text-slate-900 text-sm">{i.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/admission" className={navLinkClass}>ADMISSION</NavLink>
            <NavLink to="/inscription" className={navLinkClass}>INSCRIPTION</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/admission" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-rose-600/20 transition">
              <Sparkles size={16} /> Rejoignez-nous
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/" className="block px-3 py-2.5 rounded-xl font-medium hover:bg-slate-50">Accueil</NavLink>
            <div className="px-3 py-2 font-semibold text-slate-900 text-sm">Formation</div>
            <Link onClick={() => setOpen(false)} to="/formation/arborescence" className="block ml-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Arborescence</Link>
            <Link onClick={() => setOpen(false)} to="/formation/licence" className="block ml-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Licence</Link>
            <Link onClick={() => setOpen(false)} to="/formation/master" className="block ml-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Master</Link>
            <NavLink onClick={() => setOpen(false)} to="/admission" className="block px-3 py-2.5 rounded-xl font-medium hover:bg-slate-50">Conditions d’admission</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/inscription" className="block px-3 py-2.5 rounded-xl font-medium hover:bg-slate-50">Inscription</NavLink>
            <Link onClick={() => setOpen(false)} to="/admission" className="mt-3 block text-center bg-rose-600 text-white font-semibold px-5 py-3 rounded-full">Rejoignez-nous</Link>
          </div>
        </div>
      )}
    </header>
  );
}
