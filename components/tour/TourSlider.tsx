"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { popularTourPackages } from "@/data/tourPackages";
import TourCard from "./TourCard";

const TourSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const tours = popularTourPackages;

  return (
    <div className="w-full max-w-[1600px] bg-primary mx-auto px-4 md:px-6 py-12 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
      >
        <div>
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-white mb-3">
            Curated Experiences
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-3">
            Most Popular Journeys
          </h1>
          <p className="text-muted-foreground font-sans max-w-xl text-sm md:text-base">
            Discover our handpicked collection of extraordinary travel experiences, 
            designed for the discerning explorer.
          </p>
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
            >
              <TourCard tour={tour} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {/* Dots */}
        <div className="flex items-center gap-2">
          {tours.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-gradient-gold"
                  : "bg-secondary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots - Desktop */}
      <div className="hidden md:flex items-center justify-center gap-2 mt-8">
        {tours.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-gradient-gold"
                : "w-4 bg-secondary hover:bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TourSlider;
