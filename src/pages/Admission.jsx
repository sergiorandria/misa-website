import { Download, Phone, Mail, MapPin, CheckCircle2, FileCheck, UserCheck, CalendarCheck, HelpCircle } from "lucide-react";
import { contact } from "../data/content";

export default function Admission() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-[11px] sm:text-xs tracking-[0.16em] text-neutral-500 font-bold uppercase">ADMISSION & PROCDURE</div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-misa-ink)]">
            Conditions d’admission à la MIT
          </h1>
          <p className="mt-2 sm:mt-3 max-w-[760px] text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Reproduction exacte des conditions d’admission publiées sur le site officiel de la Mention Informatique et Technologie.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-10 items-start">
          
          {/* Main Harvard-style Admission Step Guide */}
          <div>
            <div className="text-[11px] sm:text-xs tracking-[0.16em] text-[var(--color-misa-red)] font-bold uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-misa-red)]" />
              <span>PARCOURS D'ADMISSION EN 4 ÉTAPES</span>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-misa-paper)] border-2 border-[var(--color-misa-red)] text-[var(--color-misa-red)] font-extrabold text-base flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">Profil & Prérequis BAC</h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    L’admission en première année (L1) est réservée aux bacheliers des séries <strong>C</strong> et <strong>S</strong> (ou équivalents scientifiques reconnus).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-misa-paper)] border-2 border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] font-extrabold text-base flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">Constitution du Dossier</h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    La sélection s'effectue sur étude de dossier académique par la commission d'admission du département MIT.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-misa-paper)] border-2 border-[var(--color-misa-red)] text-[var(--color-misa-red)] font-extrabold text-base flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">Admissions Master & Passerelles</h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Pour les niveaux L2, L3 et Master (M1/M2), la sélection s'effectue sur dossier et entretien pour les titulaires de diplômes scientifiques adaptés.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-5 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-misa-paper)] border-2 border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] font-extrabold text-base flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">Inscription Définitive</h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Publication des résultats retenus et finalisation de l'inscription administrative auprès de la scolarité de la Faculté des Sciences.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Download Callout Box */}
            <div className="mt-8 border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-3 border-b border-[var(--color-misa-line)] pb-4 mb-4">
                <div className="p-2 bg-white border border-[var(--color-misa-line)] text-[var(--color-misa-red)]">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-misa-ink)] uppercase">Fiche de Pré-inscription PDF</h3>
                  <p className="text-xs text-neutral-500">Téléchargez le formulaire officiel à joindre à votre dossier</p>
                </div>
              </div>
              
              <a
                href={`${import.meta.env.BASE_URL}assets/file/PREINSCRIPTION.pdf`}
                download
                className="min-h-[46px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--color-misa-red)] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-6 py-3 hover:bg-[var(--color-misa-red-dark)] transition duration-200 shadow-xs"
              >
                <Download size={16} />
                <span>Télécharger la fiche PDF</span>
              </a>
            </div>
          </div>

          {/* Right Contact Sidebar */}
          <div className="space-y-5">
            <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 shadow-xs">
              <div className="text-[11px] font-bold tracking-widest text-[var(--color-misa-red)] uppercase border-b border-[var(--color-misa-line)] pb-3 mb-4 flex items-center gap-2">
                <HelpCircle size={16} />
                <span>SCOLARITÉ & CONTACTS</span>
              </div>
              
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-400 font-bold uppercase">TÉLÉPHONE SCOLARITÉ</div>
                    <a href={`tel:${contact.tel.replace(/\s+/g, "")}`} className="font-semibold text-neutral-900 hover:underline min-h-[38px] flex items-center text-sm">
                      {contact.tel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-3">
                  <Mail size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-400 font-bold uppercase">EMAIL PRINCIPAL</div>
                    <a href={`mailto:${contact.email}`} className="font-semibold text-neutral-900 hover:underline break-all min-h-[38px] flex items-center">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-3">
                  <Mail size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-400 font-bold uppercase">EMAIL ACCUEIL</div>
                    <a href={`mailto:${contact.email2}`} className="font-semibold text-neutral-900 hover:underline break-all min-h-[38px] flex items-center">
                      {contact.email2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-3">
                  <MapPin size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-400 font-bold uppercase">ADRESSE DU DÉPARTEMENT</div>
                    <p className="font-medium text-neutral-800 leading-relaxed mt-0.5">
                      BP 906 Ankatso — Antananarivo 101<br />
                      Université d’Antananarivo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
