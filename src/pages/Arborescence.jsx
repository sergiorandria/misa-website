import { useState } from "react";
import { Link } from "react-router-dom";
import { ZoomIn, X, Download } from "lucide-react";
import { asset } from "../lib/assets";

export default function Arborescence() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">FORMATION — ARBORESCENCE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
            Arborescence du Cursus LMD
          </h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-4 sm:mt-5 max-w-[680px] text-sm sm:text-base leading-[1.7] text-neutral-600">
            Découvrez le cheminement académique au sein de la Mention Informatique et Technologie (MIT / MISA) : du tronc commun en Licence aux filières spécialisées de Master et aux ouvertures vers le Doctorat et le milieu professionnel.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Stanford-style Academic Progression Pathway */}
        <div className="border border-[var(--color-misa-line)] bg-white shadow-xs">
          
          {/* L1 */}
          <div className="grid md:grid-cols-[220px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)] flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                L1 — S1·S2
              </div>
              <div className="font-bold text-sm sm:text-base mt-1.5 text-[var(--color-misa-ink)]">Informatique et Technologie</div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-[11px] tracking-widest text-neutral-500 font-bold uppercase">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1 text-neutral-700">
                <li>Sélection sur dossier</li>
                <li>Ouvert aux titulaires d’un baccalauréat série C ou S</li>
              </ul>
            </div>
          </div>

          {/* L2 */}
          <div className="grid md:grid-cols-[220px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)] flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                L2 — S3·S4
              </div>
              <div className="font-bold text-sm sm:text-base mt-1.5 text-[var(--color-misa-ink)]">Informatique et Technologie</div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-[11px] tracking-widest text-neutral-500 font-bold uppercase">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1 text-neutral-700">
                <li>Ouvert aux étudiants ayant validé le L1 en MIT</li>
                <li>Ouvert aux étudiants de Mathématiques ayant validé L1, après sélection et entretien</li>
              </ul>
            </div>
          </div>

          {/* L3 */}
          <div className="grid md:grid-cols-[220px_1fr] border-b border-[var(--color-misa-line)]">
            <div className="bg-[var(--color-misa-paper)] p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[var(--color-misa-line)] flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                L3 — S5·S6
              </div>
              <div className="font-bold text-sm sm:text-base mt-1.5 text-[var(--color-misa-ink)]">MISA</div>
              <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Mathématiques, Informatique et Statistique Appliquées</div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-[11px] tracking-widest text-neutral-500 font-bold uppercase">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1 text-neutral-700">
                <li>Ouvert aux étudiants ayant validé le L2 du parcours Informatique de la mention IT</li>
                <li>Ouvert aux étudiants de Mathématiques ayant validé L1/L2, après sélection sur dossier et entretien</li>
              </ul>
              <div className="mt-3">
                <Link to="/formation/licence" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-misa-red)] hover:underline">
                  Consulter le détail des Unités d'Enseignement (UE) de Licence →
                </Link>
              </div>
            </div>
          </div>

          {/* M1 */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-misa-line)] border-b border-[var(--color-misa-line)]">
            <div className="p-4 sm:p-5">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                M1 MISA — S7·S8
              </div>
              <div className="text-[11px] tracking-widest text-neutral-500 font-bold uppercase mt-3">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1 text-neutral-700">
                <li>Sélection sur dossier et entretien avec l’équipe pédagogique</li>
                <li>Ouvert aux titulaires d’une Licence MISA ou d'une Licence en informatique d’un établissement public</li>
              </ul>
            </div>
            
            <div className="p-4 sm:p-5">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                M1 INT — S7·S8
              </div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Innovation et Technologie</div>
              <div className="text-[11px] tracking-widest text-neutral-500 font-bold uppercase mt-3">MODALITÉ D’ACCÈS</div>
              <ul className="mt-2 text-xs sm:text-sm leading-relaxed list-disc pl-5 space-y-1 text-neutral-700">
                <li>Sélection sur dossier et entretien de motivation</li>
                <li>Ouvert aux titulaires d’une Licence MISA ou équivalente issue d'un établissement d'enseignement supérieur public</li>
              </ul>
            </div>
          </div>

          {/* M2 */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-misa-line)]">
            <div className="p-4 sm:p-5">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                M2 MISA — S9·S10
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Parcours axé sur la recherche et les technologies avancées : Data Science, Modélisation, Intelligence Artificielle et Systèmes complexes. Stage de fin d'études et mémoire ouvrant vers le Doctorat et les carrières R&D internationales.
              </div>
            </div>
            
            <div className="p-4 sm:p-5">
              <div className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-[var(--color-misa-red)] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
                M2 INT — S9·S10
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Parcours professionnalisant orienté industrie logicielle : Architecture logicielle, Solutions distribuées, IoT & embarqué, Management de projet et qualification logicielle. Stage de fin d'études et insertion directe.
              </div>
            </div>
          </div>

        </div>

        {/* Diagram Image Verification Box */}
        <div className="mt-8 border border-[var(--color-misa-line)] p-4 sm:p-6 bg-[var(--color-misa-paper)] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">SCHÉMA OFFICIEL DU CURSUS</div>
              <p className="text-xs text-neutral-600 mt-1">Consultez le schéma de progression pédagogique haute définition. Cliquez pour agrandir en plein écran.</p>
            
            <button
              onClick={() => setModalOpen(true)}
              className="min-h-[44px] flex items-center justify-center gap-2 bg-[var(--color-misa-ink)] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 hover:bg-black active:scale-[0.99] transition duration-200 cursor-pointer shrink-0 shadow-xs"
            >
              <ZoomIn size={16} />
              <span>Agrandir le schéma</span>
            </button>
          </div>

          <div
            onClick={() => setModalOpen(true)}
            className="mt-4 relative group cursor-pointer border border-[var(--color-misa-line)] bg-white overflow-hidden"
          >
            <img
              src={asset('arborescence.png')}
              alt="Arborescence MIT originale"
              className="w-full h-auto max-h-[500px] object-top object-cover group-hover:scale-[1.01] transition duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-200">
              <span className="bg-white text-[var(--color-misa-ink)] font-bold text-xs px-4 py-2.5 border border-neutral-300 shadow-xl flex items-center gap-2 uppercase tracking-wide">
                <ZoomIn size={15} /> Touchez pour faire un zoom plein écran
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 p-4 sm:p-6 flex flex-col justify-between backdrop-blur-md animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white border-b border-white/20 pb-3">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
              Schéma Officiel LMD — MIT (3508 × 4961 px)
            </span>
            
            <div className="flex items-center gap-2">
              <a
                href={asset('arborescence.png')}
                download="MIT_Arborescence_LMD.png"
                className="min-h-[40px] px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide uppercase flex items-center gap-2 transition border border-white/20"
              >
                <Download size={15} />
                <span className="hidden sm:inline">Télécharger</span>
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4 flex items-center justify-center">
            <img
              src={asset('arborescence.png')}
              alt="Arborescence MIT officielle plein écran"
              className="max-w-none w-auto max-h-none sm:max-w-full sm:max-h-full object-contain mx-auto"
            />
          </div>

          <div className="text-center text-xs text-white/70 pt-2 border-t border-white/20">
            Utilisez le pincement de doigts ou le défilement pour vous déplacer sur l'image.
          </div>
        </div>
      )}
    </div>
  );
}
