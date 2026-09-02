import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, GraduationCap, BookOpen, Layers, Award } from "lucide-react";
import { asset } from "../lib/assets";

const linkBase = "text-[13px] tracking-wider font-semibold uppercase px-3 py-1.5 border-b-2 transition-all duration-200";
const linkActive = "border-[var(--color-misa-red)] text-[var(--color-misa-red)] font-bold";
const linkIdle = "border-transparent text-neutral-700 hover:text-[var(--color-misa-ink)] hover:border-neutral-300";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [admissionDrop, setAdmissionDrop] = useState(false);
  const [mobileFormationOpen, setMobileFormationOpen] = useState(true);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--color-misa-line)] shadow-xs">
      {/* Top Ivy League brand accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--color-misa-red)] via-[var(--color-misa-red-dark)] to-[var(--color-misa-red)]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[66px] flex items-center justify-between gap-4">
        {/* Brand logo & title */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="p-1 bg-white border border-[var(--color-misa-line)] shadow-2xs group-hover:border-[var(--color-misa-red)] transition duration-200">
            <img src={asset('logo-mit.png')} alt="MIT Logo" className="h-8 sm:h-9 w-auto object-contain" />
          </div>
          <div className="leading-none">
            <div className="text-[13px] sm:text-[14px] font-extrabold tracking-tight text-[var(--color-misa-ink)] group-hover:text-[var(--color-misa-red)] transition duration-200">
              MIT - MISA
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.16em] text-neutral-500 font-medium uppercase mt-0.5">
              UNIVERSITÉ D'ANTANANARIVO
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            ACCUEIL
          </NavLink>

          {/* Harvard/MIT style Mega-Menu Dropdown - FORMATION */}
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <div className="flex items-center">
              <NavLink
                to="/formation"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
                onFocus={() => setDrop(true)}
              >
                FORMATION
              </NavLink>
              <button
                type="button"
                className={`${linkBase} ${linkIdle} !px-1.5 cursor-pointer`}
                aria-label="Ouvrir le menu Formation"
                aria-expanded={drop}
                aria-haspopup="true"
                onClick={() => setDrop(v => !v)}
                onFocus={() => setDrop(true)}
              >
                <ChevronDown size={14} className={`${drop ? "rotate-180 text-[var(--color-misa-red)]" : "text-neutral-400"} transition-transform duration-200`} />
              </button>
            </div>
            {drop && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 animate-in fade-in duration-150">
                <div className="w-[480px] bg-white border border-[var(--color-misa-line)] p-3 shadow-xl grid grid-cols-3 gap-2">
                  {[
                    {
                      to: "/formation/arborescence",
                      title: "Arborescence",
                      sub: "Schéma LMD",
                      icon: Layers,
                      badge: "Aperçu",
                    },
                    {
                      to: "/formation/licence",
                      title: "Licence",
                      sub: "L1 · L2 · L3",
                      icon: BookOpen,
                      badge: "3 Ans",
                    },
                    {
                      to: "/formation/master",
                      title: "Master",
                      sub: "INT · MISA",
                      icon: GraduationCap,
                      badge: "2 Ans",
                    },
                  ].map(item => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setDrop(false)}
                        className="group border border-[var(--color-misa-line)] p-3 bg-[var(--color-misa-paper)] hover:bg-white hover:border-[var(--color-misa-red)] transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <IconComp size={18} className="text-[var(--color-misa-red)] group-hover:scale-110 transition duration-200" />
                            <span className="text-[9px] font-mono tracking-widest uppercase bg-white border border-[var(--color-misa-line)] px-1.5 py-0.5 text-neutral-500">
                              {item.badge}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-[var(--color-misa-ink)] group-hover:text-[var(--color-misa-red)] transition">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 mt-0.5">
                            {item.sub}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Harvard/MIT style Mega-Menu Dropdown - ADMISSION (même structure que FORMATION) */}
          <div className="relative" onMouseEnter={() => setAdmissionDrop(true)} onMouseLeave={() => setAdmissionDrop(false)}>
            <div className="flex items-center">
              <NavLink
                to="/admission"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
                onFocus={() => setAdmissionDrop(true)}
              >
                ADMISSION
              </NavLink>
              <button
                type="button"
                className={`${linkBase} ${linkIdle} !px-1.5 cursor-pointer`}
                aria-label="Ouvrir le menu Admission"
                aria-expanded={admissionDrop}
                aria-haspopup="true"
                onClick={() => setAdmissionDrop(v => !v)}
                onFocus={() => setAdmissionDrop(true)}
              >
                <ChevronDown size={14} className={`${admissionDrop ? "rotate-180 text-[var(--color-misa-red)]" : "text-neutral-400"} transition-transform duration-200`} />
              </button>
            </div>
            {admissionDrop && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 animate-in fade-in duration-150">
                <div className="w-[340px] bg-white border border-[var(--color-misa-line)] p-3 shadow-xl grid grid-cols-2 gap-2">
                  {[
                    {
                      to: "/admission/licence",
                      title: "Licence",
                      sub: "L1 - IT",
                      icon: BookOpen,
                      badge: "Concours",
                    },
                    {
                      to: "/admission/master-int",
                      title: "Master INT",
                      sub: "M1 - INT",
                      icon: Award,
                      badge: "Dossier",
                    },
                  ].map(item => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setAdmissionDrop(false)}
                        className="group border border-[var(--color-misa-line)] p-3 bg-[var(--color-misa-paper)] hover:bg-white hover:border-[var(--color-misa-red)] transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <IconComp size={18} className="text-[var(--color-misa-red)] group-hover:scale-110 transition duration-200" />
                            <span className="text-[9px] font-mono tracking-widest uppercase bg-white border border-[var(--color-misa-line)] px-1.5 py-0.5 text-neutral-500">
                              {item.badge}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-[var(--color-misa-ink)] group-hover:text-[var(--color-misa-red)] transition">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 mt-0.5">
                            {item.sub}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a href="#footer" className={`${linkBase} ${linkIdle}`}>
            CONTACTS
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/admission"
            className="text-xs font-bold tracking-wider uppercase border-2 border-[var(--color-misa-red)] text-[var(--color-misa-red)] px-4 py-2 hover:bg-[var(--color-misa-red)] hover:text-white transition duration-200 shadow-2xs"
          >
            CANDIDATER
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center border border-[var(--color-misa-line)] bg-white text-[var(--color-misa-ink)] hover:bg-[var(--color-misa-paper)] active:bg-neutral-100 transition cursor-pointer"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 top-[69px] bg-black/40 backdrop-blur-xs z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Mobile Drawer Content */}
      {open && (
        <div className="fixed top-[69px] left-0 right-0 max-h-[calc(100vh-69px)] overflow-y-auto bg-white border-b border-[var(--color-misa-line)] shadow-2xl z-50 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-4 space-y-3 divide-y divide-[var(--color-misa-line)]">
            <div className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between h-[48px] px-3 font-semibold text-sm transition ${
                    isActive ? "bg-[var(--color-misa-paper)] text-[var(--color-misa-red)] border-l-3 border-[var(--color-misa-red)]" : "text-neutral-800 hover:bg-[var(--color-misa-paper)]"
                  }`
                }
              >
                ACCUEIL
                <ChevronRight size={16} className="text-neutral-400" />
              </NavLink>

              {/* Accordion for Formation */}
              <div>
                <div className="flex items-center">
                  <NavLink
                    to="/formation"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `flex-1 flex items-center gap-2 h-[48px] px-3 font-semibold text-sm transition ${isActive ? "bg-[var(--color-misa-paper)] text-[var(--color-misa-red)]" : "text-neutral-800 hover:bg-[var(--color-misa-paper)]"}`}
                  >
                    <GraduationCap size={16} className="text-[var(--color-misa-red)]" />
                    FORMATION
                  </NavLink>
                  <button
                    type="button"
                    aria-label="Ouvrir le menu Formation"
                    aria-expanded={mobileFormationOpen}
                    onClick={() => setMobileFormationOpen(!mobileFormationOpen)}
                    className="flex items-center justify-center h-[48px] w-[48px] text-neutral-500 hover:bg-[var(--color-misa-paper)] transition cursor-pointer"
                  >
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileFormationOpen ? "rotate-180 text-[var(--color-misa-red)]" : ""}`} />
                  </button>
                </div>

                {mobileFormationOpen && (
                  <div className="ml-3 pl-3 border-l-2 border-[var(--color-misa-line)] space-y-1 my-1">
                    {[
                      { to: "/formation/arborescence", name: "Arborescence LMD", badge: "Schéma" },
                      { to: "/formation/licence", name: "Licence", badge: "L1 · L2 · L3" },
                      { to: "/formation/master", name: "Master", badge: "M1 · M2" },
                    ].map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between min-h-[44px] px-3 py-2 text-sm transition ${
                            isActive
                              ? "bg-[var(--color-misa-paper)] font-semibold text-[var(--color-misa-red)]"
                              : "text-neutral-700 hover:bg-neutral-50"
                          }`
                        }
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 border border-[var(--color-misa-line)] bg-white text-neutral-500">
                          {item.badge}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion for Admission */}
              <div>
                <button
                  onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
                  className="w-full flex items-center justify-between h-[48px] px-3 font-semibold text-sm text-neutral-800 hover:bg-[var(--color-misa-paper)] transition cursor-pointer"
                >
                  <span>ADMISSION</span>
                  <ChevronDown size={16} className={`text-neutral-500 transition-transform duration-200 ${mobileAdmissionOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileAdmissionOpen && (
                  <div className="ml-3 pl-3 border-l-2 border-[var(--color-misa-line)] space-y-1 my-1">
                    {[
                      { to: "/admission/licence", name: "Admission Licence", badge: "L1" },
                      { to: "/admission/master-int", name: "Admission Master INT", badge: "M1" },
                    ].map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between min-h-[44px] px-3 py-2 text-sm transition ${
                            isActive
                              ? "bg-[var(--color-misa-paper)] font-semibold text-[var(--color-misa-red)]"
                              : "text-neutral-700 hover:bg-neutral-50"
                          }`
                        }
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 border border-[var(--color-misa-line)] bg-white text-neutral-500">
                          {item.badge}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#footer"
                onClick={() => setOpen(false)}
                className="flex items-center h-[48px] px-3 font-semibold text-sm text-neutral-800 hover:bg-[var(--color-misa-paper)] transition"
              >
                CONTACTS
              </a>
            </div>

            {/* Mobile Footer Action inside Menu */}
            <div className="pt-4 space-y-3">
              <Link
                to="/admission"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center min-h-[44px] bg-[var(--color-misa-red)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--color-misa-red-dark)] active:scale-[0.99] transition shadow-xs"
              >
                CANDIDATER À LA MIT
              </Link>
              <div className="text-[11px] text-center text-neutral-500 leading-tight">
                Mention Informatique et Technologie - Université d’Antananarivo
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}