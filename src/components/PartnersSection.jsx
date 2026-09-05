import { useEffect, useRef } from "react";
import { partnerCategories } from "../data/partners";
import { asset } from "../lib/assets";
import { GraduationCap, Building2, Landmark, Store, Globe2 } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const categoryIcons = {
  institutional: Landmark,
  academic: GraduationCap,
  industry: Building2,
  local: Store,
};

// On aplatit toutes les catégories en une seule liste continue,
// chaque partenaire gardant une référence à sa catégorie d'origine
// (utile pour l'icône affichée au survol).
const allPartners = partnerCategories.flatMap((cat) =>
  cat.partners.map((partner) => ({ ...partner, categoryId: cat.id }))
);

// On duplique la liste pour permettre un défilement en boucle parfaitement continu.
const marqueeTrack = [...allPartners, ...allPartners];

const AUTO_SCROLL_SPEED = 40; // pixels / seconde
const RESUME_DELAY = 7000; // ms d'inactivité avant reprise du défilement auto
const DRAG_CLICK_THRESHOLD = 6; // px de déplacement au-delà duquel un clic est considéré comme un glisser

export default function PartnersSection() {
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const halfWidthRef = useRef(0);

  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Mesure la largeur d'une "moitié" de piste (= la liste non dupliquée)
  // pour savoir quand boucler le défilement de façon transparente.
  // ResizeObserver est plus fiable qu'un simple listener "resize" ici,
  // car il réagit aussi si la largeur du contenu change après le montage
  // (polices, images, re-render) et pas seulement si la fenêtre change de taille.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => {
      halfWidthRef.current = el.scrollWidth / 2;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Boucle de défilement automatique (requestAnimationFrame, indépendante du framerate).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = (timestamp) => {
      if (lastTimeRef.current == null) lastTimeRef.current = timestamp;
      const dt = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // On avance toujours, même si halfWidthRef n'est pas encore mesuré :
      // seule la logique de "rebouclage" en dépend, pas le défilement lui-même.
      if (!pausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED * dt;
        if (halfWidthRef.current > 0 && el.scrollLeft >= halfWidthRef.current) {
          el.scrollLeft -= halfWidthRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAndScheduleResume = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  // Glisser pour défiler (souris ET tactile, unifiés via Pointer Events).
  // touch-action:none sur le conteneur désactive le scroll tactile natif
  // pour laisser cette logique gérer le défilement de façon cohérente partout.
  const handlePointerDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    draggingRef.current = true;
    dragDistanceRef.current = 0;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = el.scrollLeft;
    pauseAndScheduleResume();
    el.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = e.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(delta);
    el.scrollLeft = dragStartScrollRef.current - delta;

    // Reboucle même pendant le glisser actif, pour ne jamais atteindre un bord.
    if (halfWidthRef.current > 0) {
      if (el.scrollLeft >= halfWidthRef.current) {
        el.scrollLeft -= halfWidthRef.current;
        dragStartScrollRef.current -= halfWidthRef.current;
      } else if (el.scrollLeft < 0) {
        el.scrollLeft += halfWidthRef.current;
        dragStartScrollRef.current += halfWidthRef.current;
      }
    }
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    pauseAndScheduleResume();
  };

  // Molette / trackpad horizontal : le navigateur défile nativement,
  // on se contente de mettre en pause et reprogrammer la reprise.
  const handleWheel = () => {
    pauseAndScheduleResume();
  };

  const handleLogoClick = (e) => {
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD) {
      e.preventDefault();
    }
  };

  return (
    <AnimatedSection
      direction="up"
      distance={30}
      className="bg-[var(--color-misa-paper)] border-b border-[var(--color-misa-line)] py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--color-misa-red)] font-bold uppercase mb-2">
            <Globe2 size={14} />
            <span>ALLIANCES & COOPÉRATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-misa-ink)]">
            Nos partenaires
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            {allPartners.length} organisations partenaires — survolez un logo pour en savoir plus, cliquez pour visiter le site
          </p>
          <div className="mt-4 h-px w-12 bg-[var(--color-misa-red)]" />
        </div>

        {/* Bandeau horizontal : défilement auto + glisser/molette manuel */}
        <div className="relative mt-10 sm:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[var(--color-misa-paper)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[var(--color-misa-paper)] to-transparent" />

          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onWheel={handleWheel}
            style={{ scrollBehavior: "auto" }}
            className="flex gap-3 sm:gap-4 overflow-x-auto touch-none cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {marqueeTrack.map((partner, i) => {
              const Icon = categoryIcons[partner.categoryId];
              const isEtech = partner.name.toLowerCase() === "etech";
              return (
                <a
                  key={`${partner.name}-${i}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLogoClick}
                  draggable={false}
                  className="group relative shrink-0 w-[140px] h-[100px] sm:w-[168px] sm:h-[116px] bg-white border border-[var(--color-misa-line)] hover:border-[var(--color-misa-ink)] transition duration-200"
                >
                  {/* Logo, visible par défaut */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-3 sm:p-4 transition-opacity duration-200 group-hover:opacity-0 ${
                      isEtech ? "bg-[var(--color-misa-ink)]" : "bg-white"
                    }`}
                  >
                    <img
                      src={asset(partner.logo)}
                      alt={`${partner.name} logo`}
                      className={`max-h-full max-w-full w-auto object-contain pointer-events-none ${
                        isEtech ? "brightness-0 invert" : ""
                      }`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  {/* Overlay d'informations, affiché au survol */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-3 text-center bg-[var(--color-misa-ink)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {Icon && <Icon size={16} className="text-[var(--color-misa-red)]" />}
                    <div className="text-xs font-bold leading-tight">{partner.name}</div>
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-neutral-300">
                      {partner.badge}
                    </div>
                    <div className="text-[9px] font-mono text-neutral-400">
                      {partner.domain}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 sm:mt-12 text-center text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wider uppercase border-t border-[var(--color-misa-line)] pt-6">
          Identités institutionnelles & marques officielles - Université d'Antananarivo (Mentions IT & MISA)
        </div>

      </div>
    </AnimatedSection>
  );
}