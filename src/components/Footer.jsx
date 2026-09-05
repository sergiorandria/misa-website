import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { asset } from "../lib/assets";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-misa-red)] text-white relative scroll-mt-[69px]">
      {/* Top accent border */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--color-misa-red-dark)] via-white/40 to-[var(--color-misa-red-dark)]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-sm">
        
        {/* Col 1: University Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white border border-white/20 shadow-2xs">
              <img src={asset('logo-mit.png')} alt="MIT" className="h-8 w-auto object-contain" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">MIT - MISA</span>
          </div>
          <p className="leading-relaxed text-white/90 text-xs sm:text-sm">
            Université d’Antananarivo<br />
            Faculté des Sciences - Domaine Sciences et Technologies<br />
            Département MIT · BP 906 Ankatso - Antananarivo 101
          </p>
          <p className="text-[11px] text-white/70 pt-1 font-mono tracking-wider uppercase">
            Fondée en 1996 - PRESUP & Coopération Française
          </p>
        </div>

        {/* Col 2: Contacts with mailto / external links */}
        <div>
          <div className="text-[11px] tracking-[0.16em] text-white/70 font-bold uppercase border-b border-white/20 pb-2">CONTACTS</div>
          <ul className="mt-3 space-y-2.5 text-white/90">
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-white/80 shrink-0">
                <Mail size={14} aria-hidden="true" />
              </span>
              <a href="mailto:mit@univ-antananarivo.mg" className="hover:underline min-h-[38px] flex items-center break-all">
                mit@univ-antananarivo.mg
              </a>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-white/80 shrink-0">
                <MapPin size={14} aria-hidden="true" />
              </span>
              <a href="https://maps.app.goo.gl/gcEK5goTVk1HJAsM6" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white hover:underline">
                Ankatso-Antananarivo
              </a>
            </li>
            <li className="flex items-center gap-2 pt-1">
              <a href="https://www.facebook.com/profile.php?id=100084982487450" target="_blank" rel="noreferrer" aria-label="Facebook MIT" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-sm font-bold text-white/80 hover:border-white hover:text-white transition">
                f
              </a>
              <a href="https://www.facebook.com/profile.php?id=100084982487450" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 pt-1">
              <a href="https://www.linkedin.com/school/mit-mention-informatique-et-technologie/" target="_blank" rel="noreferrer" aria-label="LinkedIn MIT" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[11px] font-extrabold text-white/80 hover:border-white hover:text-white transition">
                in
              </a>
              <a href="https://www.linkedin.com/school/mit-mention-informatique-et-technologie/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <div className="text-[11px] tracking-[0.16em] text-white/70 font-bold uppercase border-b border-white/20 pb-2">NAVIGATION</div>
          <ul className="mt-3 space-y-1.5 font-medium">
            {[
              { to: "/", label: "Accueil" },
              { to: "/formation/parcours", label: "Parcours" },
              { to: "/formation/licence", label: "Licence" },
              { to: "/formation/master", label: "Master" },
              { to: "/admission", label: "Conditions d’admission" },
              { to: "/admission/licence", label: "Admission Licence" },
              { to: "/admission/master-int", label: "Admission Master INT" },
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
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-white/75 text-center sm:text-left">
          <span>© 2026 MIT - MISA. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
