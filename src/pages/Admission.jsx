import { Download, Phone, Mail, MapPin, FileCheck, HelpCircle } from "lucide-react";
import { contact } from "../data/content";

export default function Admission() {
  return (
    <div className="bg-white">

      {/* ── BANNER — paper band with campus image accent ─────────────────── */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] relative overflow-hidden">
        {/* Campus image accent — right side, desktop only */}
        <div className="absolute inset-y-0 right-0 w-72 xl:w-96 hidden lg:block">
          <img
            src={`${import.meta.env.BASE_URL}campus-main.jpg`}
            alt=""
            aria-hidden="true"
            className="campus-img opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-misa-paper)] via-[var(--color-misa-paper)]/40 to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <p className="text-[11px] tracking-[0.18em] text-neutral-400 font-bold uppercase">ADMISSION & PROCÉDURE</p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)] max-w-[540px]">
            Conditions d'admission à la MIT
          </h1>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          <p className="mt-5 max-w-[600px] text-sm sm:text-base leading-[1.7] text-neutral-600">
            Reproduction exacte des conditions d'admission publiées sur le site officiel de la Mention Informatique et Technologie.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT — white band ────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

          {/* Steps */}
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-misa-red)] inline-block" />
              <span>PARCOURS D'ADMISSION EN 4 ÉTAPES</span>
            </p>

            <div className="space-y-4">
              {[
                {
                  n: 1, color: "border-[var(--color-misa-red)] text-[var(--color-misa-red)]",
                  title: "Profil & Prérequis BAC",
                  body: "L'admission en première année (L1) est réservée aux bacheliers des séries C et S (ou équivalents scientifiques reconnus).",
                },
                {
                  n: 2, color: "border-[var(--color-misa-ink)] text-[var(--color-misa-ink)]",
                  title: "Constitution du Dossier",
                  body: "La sélection s'effectue sur étude de dossier académique par la commission d'admission du département MIT.",
                },
                {
                  n: 3, color: "border-[var(--color-misa-red)] text-[var(--color-misa-red)]",
                  title: "Admissions Master & Passerelles",
                  body: "Pour les niveaux L2, L3 et Master (M1/M2), la sélection s'effectue sur dossier et entretien pour les titulaires de diplômes scientifiques adaptés.",
                },
                {
                  n: 4, color: "border-[var(--color-misa-ink)] text-[var(--color-misa-ink)]",
                  title: "Inscription Définitive",
                  body: "Publication des résultats retenus et finalisation de l'inscription administrative auprès de la scolarité de la Faculté des Sciences.",
                },
              ].map((step) => (
                <div key={step.n} className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8 flex items-start gap-5">
                  <div className={`w-10 h-10 border-2 ${step.color} font-extrabold text-base flex items-center justify-center shrink-0`}>
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--color-misa-ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-neutral-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PDF Download Box */}
            <div className="mt-8 border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-6 sm:p-8">
              <div className="flex items-center gap-4 border-b border-[var(--color-misa-line)] pb-5 mb-5">
                <div className="p-2.5 bg-white border border-[var(--color-misa-line)] text-[var(--color-misa-red)]">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-misa-ink)] uppercase tracking-wide">Fiche de Pré-inscription PDF</h3>
                  <p className="text-sm text-neutral-500 mt-0.5">Formulaire officiel à joindre à votre dossier</p>
                </div>
              </div>
              <a
                href={`${import.meta.env.BASE_URL}assets/file/PREINSCRIPTION.pdf`}
                download
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[var(--color-misa-red)] text-white text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 hover:bg-[var(--color-misa-red-dark)] transition duration-200"
              >
                <Download size={16} />
                <span>Télécharger la fiche PDF</span>
              </a>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div>
            <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8">
              <div className="text-[11px] font-bold tracking-[0.16em] text-[var(--color-misa-red)] uppercase border-b border-[var(--color-misa-line)] pb-4 mb-5 flex items-center gap-2">
                <HelpCircle size={15} />
                <span>SCOLARITÉ & CONTACTS</span>
              </div>

              <div className="space-y-5 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Téléphone</div>
                    <a href={`tel:${contact.tel.replace(/\s+/g, "")}`} className="font-semibold text-neutral-900 hover:underline flex items-center min-h-[36px]">
                      {contact.tel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-5">
                  <Mail size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Email principal</div>
                    <a href={`mailto:${contact.email}`} className="font-semibold text-neutral-900 hover:underline break-all flex items-center min-h-[36px]">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-5">
                  <Mail size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Email accueil</div>
                    <a href={`mailto:${contact.email2}`} className="font-semibold text-neutral-900 hover:underline break-all flex items-center min-h-[36px]">
                      {contact.email2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[var(--color-misa-line)] pt-5">
                  <MapPin size={16} className="text-[var(--color-misa-red)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Adresse</div>
                    <p className="font-medium text-neutral-800 leading-[1.6] mt-1">
                      BP 906 Ankatso — Antananarivo 101<br />
                      Université d'Antananarivo
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
