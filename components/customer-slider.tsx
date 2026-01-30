'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Customer {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

interface CustomerSliderProps {
  customers: Customer[];
  autoPlayInterval?: number;
}

export default function CustomerSlider({
  customers,
  autoPlayInterval = 5000,
}: CustomerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const itemsPerView = {
    mobile: 2,
    desktop: 3,
  };

  const visibleItems = typeof window !== 'undefined' && window.innerWidth >= 1024
    ? itemsPerView.desktop
    : itemsPerView.mobile;

  // Calculate how many slides to advance (for infinite scroll effect)
  const getVisibleSlides = useCallback(() => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    return window.innerWidth >= 1024 ? itemsPerView.desktop : itemsPerView.mobile;
  }, []);

  const maxIndex = customers.length - getVisibleSlides();

  const handlePrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlay(false);
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlay(false);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      setDirection('right');
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, maxIndex, autoPlayInterval]);

  // Resume auto-play after user interaction
  useEffect(() => {
    if (isAutoPlay) return;

    const timer = setTimeout(() => {
      setIsAutoPlay(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  if (customers.length === 0) {
    return <div>No customers to display</div>;
  }

  return (
    <div
      className="w-full bg-gradient-to-br from-primary via-green-600 to-green-700 py-12 lg:py-20"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            See what our customers have to say about our service
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden" ref={sliderRef}>
            <div
              className={`flex transition-transform duration-500 ease-out`}
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
              }}
            >
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className={`w-full lg:w-1/3 md:w-1/2 flex-shrink-0 px-3 lg:px-4`}
                >
                  <div className="h-full bg-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            'transition-colors',
                            i < customer.rating
                              ? 'fill-accent text-accent'
                              : 'text-muted-foreground'
                          )}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-6">
                      <p className="text-card-foreground text-base lg:text-lg leading-relaxed italic">
                        "{customer.quote}"
                      </p>
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#155B02] to-[#17470a] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-card-foreground truncate">
                          {customer.name}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {customer.title} @ {customer.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 z-10 p-2 rounded-full bg-white text-[#155B02] hover:bg-primary/90 transition-colors disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 z-10 p-2 rounded-full bg-white text-[#155B02] hover:bg-primary/90 transition-colors disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  currentIndex === i
                    ? 'w-8 bg-white/80'
                    : 'w-2 bg-muted-foreground hover:bg-muted-foreground/70'
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            {isAutoPlay ? 'Auto-scrolling...' : 'Interaction detected - paused'}
          </div>
        </div>
      </div>
    </div>
  );
}
