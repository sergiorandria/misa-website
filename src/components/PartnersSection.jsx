import { useState } from "react";
import { motion } from "motion/react";
import { partnerCategories } from "../data/partners";
import { asset } from "../lib/assets";
import { GraduationCap, Building2, FlaskConical, Globe2 } from "lucide-react";
import AnimatedSection, { childFadeUpVariants, staggerContainerVariants } from "./ui/AnimatedSection";

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    academic: GraduationCap,
    industry: Building2,
    research: FlaskConical,
  };

  const categoryShortLabels = {
    academic: "Académique",
    industry: "Industrie & Tech",
    research: "Recherche",
  };

  const filteredCategories =
    activeCategory === "all"
      ? partnerCategories
      : partnerCategories.filter((c) => c.id === activeCategory);

  return (
    <AnimatedSection direction="up" distance={30} className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--color-misa-line)]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase mb-2">
              <Globe2 size={14} />
              <span>ALLIANCES & COOPÉRATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
              Un réseau académique & industriel d'exception
            </h2>
            <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`min-h-[42px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[var(--color-misa-ink)] text-white shadow-xs"
                  : "bg-white border border-[var(--color-misa-line)] text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              Tous ({partnerCategories.reduce((acc, c) => acc + c.partners.length, 0)})
            </button>
            {partnerCategories.map((cat) => {
              const Icon = categoryIcons[cat.id];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[42px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[var(--color-misa-red)] text-white shadow-xs"
                      : "bg-white border border-[var(--color-misa-line)] text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <Icon size={14} />
                  <span>{categoryShortLabels[cat.id]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Logo Wall */}
        <div className="mt-8 sm:mt-12 space-y-12 sm:space-y-16">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            return (
              <div key={cat.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-l-3 border-[var(--color-misa-red)] pl-4">
                  <Icon size={18} className="text-[var(--color-misa-red)] shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-misa-ink)]">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Grid of Partner Logo Cards */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {cat.partners.map((partner) => {
                    const isEtech = partner.name === "Etech";
                    const isBMOI = partner.name === "BMOI";
                    return (
                    <motion.div
                      key={partner.name}
                      variants={childFadeUpVariants}
                      className="academic-card bg-white border border-[var(--color-misa-line)] p-3 sm:p-4 flex flex-col justify-between hover:border-[var(--color-misa-ink)] transition duration-200 group"
                    >
                      {/* Logo Container — special handling for Etech (white on white) and BMOI (very wide) */}
                      <div className={`flex items-center justify-center p-1.5 border mb-2 sm:mb-3 transition duration-300 ${
                        isEtech
                          ? "h-12 sm:h-14 bg-[var(--color-misa-ink)] border-[var(--color-misa-ink)] group-hover:bg-black"
                          : "h-12 sm:h-14 bg-white border-neutral-100 group-hover:bg-neutral-50/30 group-hover:border-[var(--color-misa-red)]"
                      }`}>
                        <img
                          src={asset(partner.logo)}
                          alt={`${partner.name} logo`}
                          className={`w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-300 ${
                            isBMOI
                              ? "max-h-6 sm:max-h-7 max-w-[110px] sm:max-w-[130px]"
                              : isEtech
                                ? "max-h-7 sm:max-h-8 max-w-[120px] sm:max-w-[140px] brightness-0 invert"
                                : "max-h-8 sm:max-h-10 max-w-full"
                          }`}
                          loading="lazy"
                        />
                      </div>

                      {/* Info & Badges */}
                      <div>
                        <div className="text-xs font-bold text-[var(--color-misa-ink)] group-hover:text-[var(--color-misa-red)] transition">
                          {partner.name}
                        </div>
                        
                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px]">
                          <span className="bg-[var(--color-misa-paper)] text-neutral-700 px-2 py-0.5 border border-[var(--color-misa-line)] font-semibold uppercase tracking-wider">
                            {partner.badge}
                          </span>
                          <span className="text-neutral-500 font-mono text-[9px]">
                            {partner.domain}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                  })}
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 sm:mt-12 text-center text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wider uppercase border-t border-[var(--color-misa-line)] pt-6">
          Identités institutionnelles & marques officielles - Université d'Antananarivo (Mentions IT & MISA)
        </div>

      </div>
    </AnimatedSection>
  );
}
