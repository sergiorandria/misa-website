import { useState, useRef, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const base = import.meta.env.BASE_URL;

const linkBase = "text-[13px] tracking-wide font-medium px-2 py-1 border-b-2 transition-colors";
const linkActive = "border-[var(--color-misa-red)] text-[var(--color-misa-ink)]";
const linkIdle = "border-transparent text-neutral-500 hover:text-[var(--color-misa-ink)] hover:border-neutral-300";

const formationItems = [
  { to: "/formation/arborescence", k: "Arborescence", d: "Schéma LMD" },
  { to: "/formation/licence", k: "Licence", d: "L1 · L2 · L3" },
  { to: "/formation/master", k: "Master", d: "M1 · M2" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef(null);
  const triggerRef = useRef(null);
  const [dropFocusIndex, setDropFocusIndex] = useState(-1);

  const closeDrop = useCallback(() => {
    setDrop(false);
    setDropFocusIndex(-1);
  }, []);

  const openDrop = useCallback(() => {
    setDrop(true);
    setDropFocusIndex(-1);
  }, []);

  const toggleDrop = useCallback(() => {
    setDrop(prev => {
      if (!prev) setDropFocusIndex(-1);
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (!drop) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDrop();
        triggerRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setDropFocusIndex(prev => (prev + 1) % formationItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setDropFocusIndex(prev => (prev - 1 + formationItems.length) % formationItems.length);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drop, closeDrop]);

  useEffect(() => {
    if (dropFocusIndex < 0 || !dropRef.current) return;
    const links = dropRef.current.querySelectorAll('[role="menuitem"]');
    links[dropFocusIndex]?.focus();
  }, [dropFocusIndex]);

  useEffect(() => {
    if (!drop) return;
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target) && !triggerRef.current?.contains(e.target)) {
        closeDrop();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drop, closeDrop]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-misa-line)]">
      <div className="max-w-[1160px] mx-auto px-6 h-[64px] flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <img src={`${base}logo-mit.png`} alt="MIT" className="h-10 w-auto object-contain" />
          <img src={`${base}logo-misa.png`} alt="MISA" className="h-10 w-auto object-contain" />
          <div className="hidden sm:block leading-none">
            <div className="text-[14px] font-bold tracking-tight text-[var(--color-misa-ink)]">MIT — MISA</div>
            <div className="text-[10px] tracking-[0.14em] text-neutral-500">UNIVERSITÉ D'ANTANANARIVO</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>ACCUEIL</NavLink>

          <div
            className="relative"
            ref={dropRef}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <button
              ref={triggerRef}
              onClick={toggleDrop}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" && !drop) {
                  e.preventDefault();
                  openDrop();
                }
              }}
              className={`${linkBase} ${linkIdle} flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={drop}
            >
              FORMATION <ChevronDown size={14} className={`${drop ? "rotate-180" : ""} transition`} />
            </button>
            {drop && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[420px] bg-white border border-[var(--color-misa-line)] p-2 flex gap-2 shadow-sm"
                role="menu"
              >
                {formationItems.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    role="menuitem"
                    tabIndex={-1}
                    className="flex-1 border border-[var(--color-misa-line)] p-3 hover:border-[var(--color-misa-ink)] focus:border-[var(--color-misa-ink)] focus:outline-none transition"
                  >
                    <div className="text-sm font-semibold">{i.k}</div>
                    <div className="text-xs text-neutral-500">{i.d}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/admission" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>ADMISSION</NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/admission" className="text-xs font-semibold tracking-wide border border-[var(--color-misa-red)] text-[var(--color-misa-red)] px-4 py-2 hover:bg-[var(--color-misa-red)] hover:text-white transition">
            CANDIDATER
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 border border-[var(--color-misa-line)]">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-misa-line)] bg-white">
          <div className="px-6 py-4 space-y-1 text-sm">
            <NavLink onClick={() => setOpen(false)} to="/" className="block py-2 border-b border-[var(--color-misa-line)]">Accueil</NavLink>
            <div className="pt-3 pb-1 text-xs tracking-widest text-neutral-500">FORMATION</div>
            <Link onClick={() => setOpen(false)} to="/formation/arborescence" className="block py-2 pl-3">— Arborescence</Link>
            <Link onClick={() => setOpen(false)} to="/formation/licence" className="block py-2 pl-3">— Licence</Link>
            <Link onClick={() => setOpen(false)} to="/formation/master" className="block py-2 pl-3">— Master</Link>
            <NavLink onClick={() => setOpen(false)} to="/admission" className="block py-2 mt-3 border-t border-[var(--color-misa-line)]">Admission</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
