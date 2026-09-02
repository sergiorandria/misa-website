import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink, ShieldAlert } from "lucide-react";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-misa-red)] text-white relative">
      {/* Top accent border */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--color-misa-red-dark)] via-white/40 to-[var(--color-misa-red-dark)]" />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-xs sm:text-sm">
        
        {/* Col 1: University Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white border border-white/20 shadow-2xs">
              <img src={`${import.meta.env.BASE_URL}logo-mit.png`} alt="MIT" className="h-8 w-auto object-contain" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">MIT — MISA</span>
          </div>
          <p className="leading-relaxed text-white/90 text-xs sm:text-sm">
            Université d’Antananarivo<br />
            Faculté des Sciences — Domaine Sciences et Technologies<br />
            Département MIT · BP 906 Ankatso — Antananarivo 101
          </p>
          <p className="text-[11px] text-white/70 pt-1 font-mono tracking-wider uppercase">
            Fondée en 1996 — PRESUP & Coopération Française
          </p>
        </div>

        {/* Col 2: Contacts with tap-to-call / mailto */}
        <div>
          <div className="text-[11px] tracking-[0.16em] text-white/70 font-bold uppercase border-b border-white/20 pb-2">CONTACTS</div>
          <ul className="mt-3 space-y-2.5 text-white/90">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-white/70 shrink-0" />
              <a href={`tel:${contact.tel.replace(/\s+/g, "")}`} className="hover:underline font-semibold min-h-[38px] flex items-center">
                {contact.tel}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-white/70 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:underline min-h-[38px] flex items-center break-all">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-white/70 shrink-0" />
              <a href={`mailto:${contact.email2}`} className="hover:underline min-h-[38px] flex items-center break-all">
                {contact.email2}
              </a>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <ExternalLink size={15} className="text-white/70 shrink-0 mt-0.5" />
              <span className="text-white/80">Facebook : MIT-Mention Informatique et Technologie</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <div className="text-[11px] tracking-[0.16em] text-white/70 font-bold uppercase border-b border-white/20 pb-2">NAVIGATION</div>
          <ul className="mt-3 space-y-1.5 font-medium">
            {[
              { to: "/", label: "Accueil" },
              { to: "/formation/arborescence", label: "Arborescence" },
              { to: "/formation/licence", label: "Licence" },
              { to: "/formation/master", label: "Master" },
              { to: "/admission", label: "Conditions d’admission" },
            ].map(item => (
              <li key={item.to}>
                <Link to={item.to} className="inline-block py-1 text-white/90 hover:text-white hover:underline transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] sm:text-xs text-white/75 text-center sm:text-left">
          <span>© {new Date().getFullYear()} MIT — MISA. Tous droits réservés.</span>
          <span>Site non officiel — reproduction fidèle de mit.univ-antananarivo.mg à titre de maquette.</span>
        </div>
      </div>
    </footer>
  );
}
