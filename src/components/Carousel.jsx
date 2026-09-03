import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const defaultSlides = [
  {
    id: 1,
    image: `${base}slide1.png`,
    alt: "Slide 1",
  },
  {
    id: 2,
    image: `${base}slide2.png`,
    alt: "Slide 2",
  },
  {
    id: 3,
    image: `${base}slide3.png`,
    alt: "Slide 3",
  },
];

export default function Carousel({ slides = defaultSlides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, slides.length]);

  // Mobile Swipe Handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative w-full max-w-[1160px] mx-auto group overflow-hidden rounded-sm border border-[var(--color-misa-line)] bg-neutral-900 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Viewport */}
      <div className="relative h-[240px] xs:h-[300px] sm:h-[380px] md:h-[450px] w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id || idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[var(--color-misa-ink)] hover:bg-white hover:text-[var(--color-misa-red)] shadow-md transition-all duration-200 opacity-80 group-hover:opacity-100 cursor-pointer"
        aria-label="Image précédente"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[var(--color-misa-ink)] hover:bg-white hover:text-[var(--color-misa-red)] shadow-md transition-all duration-200 opacity-80 group-hover:opacity-100 cursor-pointer"
        aria-label="Image suivante"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-8 bg-[var(--color-misa-red)]"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Aller à l'image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
