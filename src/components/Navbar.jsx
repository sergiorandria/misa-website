import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, GraduationCap } from "lucide-react";

const linkBase = "text-[13px] tracking-wide font-medium px-2 py-1 border-b-2 transition-colors";
const linkActive = "border-[var(--color-misa-red)] text-[var(--color-misa-ink)] font-semibold";
const linkIdle = "border-transparent text-neutral-600 hover:text-[var(--color-misa-ink)] hover:border-neutral-300";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobileFormationOpen, setMobileFormationOpen] = useState(true);
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
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-misa-line)]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">
        {/* Brand logo & title */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo-mit.png" alt="MIT" className="h-8 sm:h-9 w-auto object-contain" />
          <div className="leading-tight">
            <div className="text-[13px] sm:text-[14px] font-bold tracking-tight text-[var(--color-misa-ink)]">
              MIT — MISA
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.14em] text-neutral-500 font-medium">
              UNIVERSITÉ D'ANTANANARIVO
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            ACCUEIL
          </NavLink>

          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className={`${linkBase} ${linkIdle} flex items-center gap-1 cursor-pointer`}>
              FORMATION <ChevronDown size={14} className={`${drop ? "rotate-180" : ""} transition-transform duration-200`} />
            </button>
            {drop && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[420px] bg-white border border-[var(--color-misa-line)] p-2 flex gap-2 shadow-lg">
                {[
                  { to: "/formation/arborescence", k: "Arborescence", d: "Schéma LMD" },
                  { to: "/formation/licence", k: "Licence", d: "L1 · L2 · L3" },
                  { to: "/formation/master", k: "Master", d: "M1 · M2" },
                ].map(i => (
                  <Link key={i.to} to={i.to} className="flex-1 border border-[var(--color-misa-line)] p-3 hover:border-[var(--color-misa-ink)] transition bg-white hover:bg-[var(--color-misa-paper)]">
                    <div className="text-sm font-semibold">{i.k}</div>
                    <div className="text-xs text-neutral-500">{i.d}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/admission" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
            ADMISSION
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/admission" className="text-xs font-semibold tracking-wide border border-[var(--color-misa-red)] text-[var(--color-misa-red)] px-4 py-2 hover:bg-[var(--color-misa-red)] hover:text-white transition">
            CANDIDATER
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center border border-[var(--color-misa-line)] bg-white text-[var(--color-misa-ink)] hover:bg-[var(--color-misa-paper)] active:bg-neutral-100 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 top-[64px] bg-black/40 backdrop-blur-xs z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Mobile Drawer Content */}
      {open && (
        <div className="fixed top-[64px] left-0 right-0 max-h-[calc(100vh-64px)] overflow-y-auto bg-white border-b border-[var(--color-misa-line)] shadow-xl z-50 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-4 space-y-3 divide-y divide-[var(--color-misa-line)]">
            <div className="space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center justify-between h-[48px] px-3 font-semibold text-sm transition ${
                    isActive ? "bg-[var(--color-misa-paper)] text-[var(--color-misa-red)] border-l-2 border-[var(--color-misa-red)]" : "text-neutral-800 hover:bg-[var(--color-misa-paper)]"
                  }`
                }
              >
                ACCUEIL
                <ChevronRight size={16} className="text-neutral-400" />
              </NavLink>

              {/* Accordion for Formation */}
              <div>
                <button
                  onClick={() => setMobileFormationOpen(!mobileFormationOpen)}
                  className="w-full flex items-center justify-between h-[48px] px-3 font-semibold text-sm text-neutral-800 hover:bg-[var(--color-misa-paper)] transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[var(--color-misa-red)]" />
                    FORMATION
                  </span>
                  <ChevronDown size={16} className={`text-neutral-500 transition-transform duration-200 ${mobileFormationOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileFormationOpen && (
                  <div className="ml-3 pl-3 border-l border-[var(--color-misa-line)] space-y-1 my-1">
                    {[
                      { to: "/formation/arborescence", name: "Arborescence LMD", badge: "Schéma" },
                      { to: "/formation/licence", name: "Licence", badge: "L1 · L2 · L3" },
                      { to: "/formation/master", name: "Master", badge: "M1 · M2" },
                    ].map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
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

              <NavLink
                to="/admission"
                className={({ isActive }) =>
                  `flex items-center justify-between h-[48px] px-3 font-semibold text-sm transition ${
                    isActive ? "bg-[var(--color-misa-paper)] text-[var(--color-misa-red)] border-l-2 border-[var(--color-misa-red)]" : "text-neutral-800 hover:bg-[var(--color-misa-paper)]"
                  }`
                }
              >
                ADMISSION
                <ChevronRight size={16} className="text-neutral-400" />
              </NavLink>
            </div>

            {/* Mobile Footer Action inside Menu */}
            <div className="pt-4 space-y-3">
              <Link
                to="/admission"
                className="w-full flex items-center justify-center min-h-[44px] bg-[var(--color-misa-red)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--color-misa-red-dark)] active:scale-[0.99] transition shadow-xs"
              >
                CANDIDATER À LA MIT
              </Link>
              <div className="text-[11px] text-center text-neutral-500 leading-tight">
                Mention Informatique et Technologie — Université d’Antananarivo
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
