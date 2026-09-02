import { Download, Phone, Mail, MapPin, FileCheck, HelpCircle, CheckCircle, FileText, Calendar, CreditCard } from "lucide-react";
import { admission, contact } from "../data/content";
import { asset } from "../lib/assets";
import PartnersSection from "../components/PartnersSection";

export default function Admission() {
  return (
    <div className="bg-white">

      {/* ── BANNER — paper band with campus image accent ─────────────────── */}
      <div className="border-b border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] relative overflow-hidden">
        {/* Campus image accent — right side, desktop only */}
        <div className="absolute inset-y-0 right-0 w-72 xl:w-96 hidden lg:block">
          <img
            src={asset('campus-main.jpg')}
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
          <p className="mt-5 max-w-[640px] text-sm sm:text-base leading-[1.7] text-neutral-600">
            Cursus complet L1 → M2 : tronc commun IT (L1-L2), spécialisation MISA (L3), puis Master MISA (data/IA) ou INT (embarqué). Sélection sur dossier et entretien.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT — white band ────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

          {/* Left Column — Detailed Admission Steps & Docs */}
          <div className="space-y-12">

            {/* 1. Conditions & Classement */}
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-misa-red)] inline-block" />
                <span>1. PRÉREQUIS & SÉLECTION EN L1</span>
              </p>
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8 space-y-4">
                <h3 className="text-base font-bold text-[var(--color-misa-ink)] flex items-center gap-2">
                  <CheckCircle size={18} className="text-[var(--color-misa-red)]" />
                  <span>Classement de dossier et sélection</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {admission.classement.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-[1.7] text-neutral-700">
                      <span className="mt-2 w-1.5 h-1.5 bg-[var(--color-misa-red)] shrink-0 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Dossier à fournir */}
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-misa-ink)] font-bold uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-misa-ink)] inline-block" />
                <span>2. DOSSIER ACADÉMIQUE À FOURNIR</span>
              </p>
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8 space-y-4">
                <h3 className="text-base font-bold text-[var(--color-misa-ink)] flex items-center gap-2">
                  <FileText size={18} className="text-[var(--color-misa-ink)]" />
                  <span>Pièces justificatives requises</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {admission.dossier.map((doc, idx) => (
                    <div key={doc} className="flex items-start gap-3 text-sm leading-[1.7] border-b last:border-0 border-[var(--color-misa-line)] pb-3 text-neutral-700">
                      <span className="text-xs font-mono font-bold text-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-2 py-0.5 border border-[var(--color-misa-line)] shrink-0 mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                {/* PDF Download Box */}
                <div className="mt-6 border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-6">
                  <div className="flex items-center gap-4 border-b border-[var(--color-misa-line)] pb-4 mb-4">
                    <div className="p-2.5 bg-white border border-[var(--color-misa-line)] text-[var(--color-misa-red)]">
                      <FileCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-misa-ink)] uppercase tracking-wide">Fiche de Pré-inscription PDF</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">Formulaire officiel à compléter et joindre au dossier</p>
                    </div>
                  </div>
                  <a
                    href={asset('assets/file/PREINSCRIPTION.pdf')}
                    download
                    className="min-h-[44px] inline-flex items-center justify-center gap-2.5 bg-[var(--color-misa-red)] text-white text-xs font-bold tracking-[0.12em] uppercase px-6 py-2.5 hover:bg-[var(--color-misa-red-dark)] transition duration-200"
                  >
                    <Download size={15} />
                    <span>Télécharger la fiche PDF</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Inscription administrative & BNI */}
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-misa-red)] inline-block" />
                <span>3. INSCRIPTION ET FRAIS DE DOSSIER</span>
              </p>
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8 space-y-6">
                <p className="text-sm leading-[1.7] text-neutral-700">
                  {admission.inscription.enLigne}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-[var(--color-misa-line)] p-4 bg-[var(--color-misa-paper)]">
                    <div className="text-[10px] font-bold tracking-wider text-[var(--color-misa-red)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-3">
                      Pièces pour l'inscription définitive
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-misa-red)] font-bold">—</span>
                        <span>Acte de naissance récent (&lt; 3 mois)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-misa-red)] font-bold">—</span>
                        <span>Reçu originel de versement des frais de dossier</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-[var(--color-misa-line)] p-4 bg-white">
                    <div className="text-[10px] font-bold tracking-wider text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-3">
                      Démarches d'inscription
                    </div>
                    <ol className="space-y-2 text-xs text-neutral-700">
                      {admission.inscription.etapes.map((step, idx) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="font-mono text-neutral-400 font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Admissions Master (MISA vs INT) */}
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-misa-ink)] font-bold uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-misa-ink)] inline-block" />
                <span>4. ADMISSIONS MASTER (M1 / M2)</span>
              </p>
              <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6 sm:p-8 space-y-6">
                <p className="text-sm leading-[1.7] text-neutral-700">
                  {admission.m1.intro}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-[var(--color-misa-line)] p-4 bg-white">
                    <div className="text-xs font-bold tracking-wider text-[var(--color-misa-red)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-2">
                      Parcours MISA (M1/M2)
                    </div>
                    <p className="text-xs leading-[1.7] text-neutral-700 mt-2">{admission.m1.misa}</p>
                  </div>
                  <div className="border border-[var(--color-misa-line)] p-4 bg-white">
                    <div className="text-xs font-bold tracking-wider text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-2 mb-2">
                      Parcours INT (M1/M2)
                    </div>
                    <p className="text-xs leading-[1.7] text-neutral-700 mt-2">{admission.m1.int}</p>
                  </div>
                </div>

                <div className="border-t border-[var(--color-misa-line)] pt-5">
                  <div className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase mb-3">
                    Procédure candidats externes — Parcours INT
                  </div>
                  <ol className="space-y-2">
                    {admission.m1.etapesExternes.map((item, idx) => (
                      <li key={item} className="text-xs text-neutral-700 flex items-start gap-3">
                        <span className="font-mono text-xs font-bold text-[var(--color-misa-red)] bg-[var(--color-misa-paper)] px-1.5 py-0.5 border border-[var(--color-misa-line)] shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Date limite box */}
            <div className="border-l-4 border-amber-600 bg-amber-50/60 p-6 border-y border-r border-amber-200">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-900 uppercase">
                <Calendar size={16} className="text-amber-700" />
                <span>DATE LIMITE DE DÉPÔT</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-[1.7] text-amber-950 font-medium">
                {admission.depot}. Date communiquée sur le portail officiel — se renseigner auprès de la scolarité pour le calendrier exact de l'année en cours.
              </p>
            </div>

          </div>

          {/* Right Column — Sidebar Info & Contacts */}
          <div className="space-y-6">

            {/* Scolarité contact card */}
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

            {/* BNI Payment Card */}
            <div className="academic-card border border-[var(--color-misa-line)] bg-[var(--color-misa-paper)] p-6">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-3 mb-3">
                <CreditCard size={15} className="text-[var(--color-misa-red)]" />
                <span>FRAIS DE DOSSIER & BNI</span>
              </div>
              <p className="text-xs leading-[1.7] text-neutral-700">
                <strong className="text-[var(--color-misa-ink)]">Montant :</strong> 40 000 Ar<br />
                <strong className="text-[var(--color-misa-ink)]">Compte BNI :</strong> n° 00005 00002 214103 602 00 43<br />
                <strong className="text-[var(--color-misa-ink)]">Ordre :</strong> « M. le Doyen de la Faculté des Sciences — BP 906 »
              </p>
            </div>

            {/* Admission Process Overview List */}
            <div className="academic-card border border-[var(--color-misa-line)] bg-white p-6">
              <div className="text-[11px] font-bold tracking-[0.16em] text-[var(--color-misa-ink)] uppercase border-b border-[var(--color-misa-line)] pb-3 mb-4">
                SYNTHÈSE DU PROCESSUS
              </div>
              <ol className="space-y-2.5 text-xs">
                {admission.etapes.map((step, idx) => (
                  <li key={step} className="flex items-start gap-2.5 text-neutral-700">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-misa-red)] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>
      </div>

      {/* ── PARTENAIRES — Ivy League Wall of Trust ──────────────────────── */}
      <PartnersSection />

    </div>
  );
}
