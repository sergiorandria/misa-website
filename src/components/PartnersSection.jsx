import { useEffect, useRef } from "react";

import { partnerCategories } from "../data/partners";

import { asset } from "../lib/assets";

import {
  GraduationCap,
  Building2,
  Landmark,
  Store,
  Globe2,
} from "lucide-react";

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
const DRAG_CLICK_THRESHOLD = 6; // px de déplacement au-delà duquel un clic est considéré comme un glisser

export default function PartnersSection() {
  // Le viewport ne défile plus avec scrollLeft : seule la piste interne est déplacée
  // avec transform: translate3d(...), ce qui évite les limites de scroll natif.
  const scrollRef = useRef(null);
  const trackRef = useRef(null);

  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const halfWidthRef = useRef(0);

  const pointerDownRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const dragPointerIdRef = useRef(null);

  const offsetRef = useRef(0);

  // Boucle de défilement automatique.
  // La piste entière est déplacée avec transform plutôt que scrollLeft.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;

      if (!track) {
        halfWidthRef.current = 0;
        return;
      }

      const secondSet = track.children[allPartners.length];

      if (secondSet) {
        // Distance entre le premier logo et le premier logo de la copie.
        // Cette valeur contient naturellement les largeurs + les gaps du premier groupe.
        halfWidthRef.current =
          secondSet.offsetLeft - track.firstElementChild.offsetLeft;
      }
    };

    const applyTransform = () => {
      const track = trackRef.current;

      if (track) {
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
    };

    const handleResize = () => {
      measure();

      // Après un redimensionnement, on garde l'offset dans la boucle courante.
      const halfWidth = halfWidthRef.current;

      if (halfWidth > 0) {
        offsetRef.current %= halfWidth;
      }

      applyTransform();
    };

    const step = (timestamp) => {
      const viewport = scrollRef.current;
      const track = trackRef.current;

      if (viewport && track) {
        measure();

        if (lastTimeRef.current === null) {
          lastTimeRef.current = timestamp;
        }

        const dt = (timestamp - lastTimeRef.current) / 1000;
        lastTimeRef.current = timestamp;

        if (!draggingRef.current && halfWidthRef.current > 0) {
          offsetRef.current += AUTO_SCROLL_SPEED * dt;

          // On reboucle dès que le premier groupe est entièrement passé.
          if (offsetRef.current >= halfWidthRef.current) {
            offsetRef.current %= halfWidthRef.current;
          }

          applyTransform();
        }
      } else {
        // Évite un grand saut de temps si le composant n'est pas encore monté/attaché.
        lastTimeRef.current = null;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    measure();
    applyTransform();

    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Glisser pour déplacer la piste (souris + tactile via Pointer Events).
  const handlePointerDown = (e) => {
    const track = trackRef.current;

    console.log("[partners] pointerdown", {
      pointerType: e.pointerType,
      clientX: e.clientX,
      target: e.target,
    });

    if (!track) return;

    // On note juste que le pointeur est appuyé — on ne sait pas encore
    // si ce sera un clic ou un vrai glisser, donc on NE touche PAS
    // encore à draggingRef ni à la piste.
    pointerDownRef.current = true;
    draggingRef.current = false;
    dragDistanceRef.current = 0;

    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    // On garde l'id du pointeur pour ne capturer que plus tard, une fois
    // qu'on sait que c'est un vrai glisser (voir handlePointerMove).
    dragPointerIdRef.current = e.pointerId;
  };

  const handlePointerMove = (e) => {
    if (!pointerDownRef.current) return;

    const track = trackRef.current;

    if (!track) return;

    const delta = e.clientX - dragStartXRef.current;

    dragDistanceRef.current = Math.abs(delta);

    // Tant que le mouvement ne dépasse pas le seuil, on considère qu'il
    // s'agit peut-être encore d'un simple clic : on ne déplace pas la
    // piste, pour ne jamais faire "sauter" visuellement un logo qu'on
    // est juste en train de cliquer (micro-tremblement de souris/doigt).
    if (!draggingRef.current) {
      if (dragDistanceRef.current < DRAG_CLICK_THRESHOLD) return;
      console.log("[partners] seuil de glisser dépassé, dragDistance =", dragDistanceRef.current);
      draggingRef.current = true;
      // On ne capture le pointeur que maintenant que c'est un vrai glisser :
      // capturer dès pointerdown empêchait l'événement "click" de se
      // déclencher sur l'ancre pour un simple clic.
      if (dragPointerIdRef.current != null) {
        track.setPointerCapture?.(dragPointerIdRef.current);
      }
    }

    offsetRef.current = dragStartOffsetRef.current - delta;

    const halfWidth = halfWidthRef.current;

    if (halfWidth > 0) {
      // Conserve toujours l'offset dans [0, halfWidth).
      offsetRef.current %= halfWidth;

      if (offsetRef.current < 0) {
        offsetRef.current += halfWidth;
      }
    }

    track.style.transform =
      `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (e) => {
    console.log("[partners] pointerup", {
      type: e.type,
      dragDistance: dragDistanceRef.current,
      wasDragging: draggingRef.current,
    });
    pointerDownRef.current = false;
    draggingRef.current = false;
  };

  const handleLogoClick = (e) => {
    console.log("[partners] click sur logo", {
      dragDistance: dragDistanceRef.current,
      threshold: DRAG_CLICK_THRESHOLD,
      willOpen: dragDistanceRef.current <= DRAG_CLICK_THRESHOLD,
      href: e.currentTarget.href,
    });

    // On empêche systématiquement la navigation native de l'ancre et on
    // ouvre nous-mêmes la fenêtre en JS. Ça contourne tout intercepteur de
    // clic externe au composant (typiquement un handler global de routing
    // SPA qui capture les clics sur les <a> sans tenir compte de
    // target="_blank") qui empêchait la navigation native de se produire.
    e.preventDefault();

    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD) {
      return;
    }

    window.open(e.currentTarget.href, "_blank", "noopener,noreferrer");
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

        {/* Bandeau horizontal : défilement auto + glisser manuel */}
        <div className="relative mt-10 sm:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[var(--color-misa-paper)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[var(--color-misa-paper)] to-transparent" />

          {/* Fenêtre visible : aucun scroll horizontal natif */}
          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="overflow-hidden touch-none cursor-grab active:cursor-grabbing select-none"
          >
            {/* Piste réellement déplacée */}
            <div
              ref={trackRef}
              className="flex w-max gap-3 sm:gap-4 will-change-transform"
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
                      {Icon && (
                        <Icon
                          size={16}
                          className="text-[var(--color-misa-red)]"
                        />
                      )}

                      <div className="text-xs font-bold leading-tight">
                        {partner.name}
                      </div>

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
        </div>

        {/* Footer Note */}
        <div className="mt-10 sm:mt-12 text-center text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wider uppercase border-t border-[var(--color-misa-line)] pt-6">
          Identités institutionnelles & marques officielles - Université d'Antananarivo (Mentions IT & MISA)
        </div>
      </div>
    </AnimatedSection>
  );
}