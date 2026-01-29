"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight, Users } from "lucide-react";
import { TourPackage } from "@/data/tourPackages";
import TourBadge from "./TourBadge";
import { Button } from "@/components/ui/button";

// Map tour data image paths to actual public folder paths
const imageMap: Record<string, string> = {
  "/swiss-alps.jpg": "/slider/swiss-alps.jpg",
  "/japan-heritage.jpg": "/slider/japan-heritage.jpg",
  "/african-safari.jpg": "/slider/african-safari.jpg",
  "/maldives.jpg": "/slider/maldives.jpg",
  "/greece-santorini.jpg": "/slider/greece-santorini.jpg",
  "/peru-machu-picchu.jpg": "/slider/peru-machu-picchu.jpg",
  "/iceland-aurora.jpg": "/slider/iceland-aurora.jpg",
  "/dubai-luxury.jpg": "/slider/dubai-luxury.jpg",
};

interface TourCardProps {
  tour: TourPackage;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  const imageSrc = imageMap[tour.visuals.coverImage] || tour.visuals.coverImage;
  const savings = tour.pricing.originalPrice - tour.pricing.discountedPrice;
  const savingsPercent = Math.round((savings / tour.pricing.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="relative h-full bg-primary rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[#E5AB44] flex flex-col p">
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={imageSrc}
            alt={tour.destination.travelTheme}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Badge */}
          <div className="absolute text-white top-3 left-3 z-10">
            <TourBadge type={tour.badge} />
          </div>

          {/* Save Badge */}
          <div className="absolute top-3 right-3 bg-destructive/90 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="text-xs font-sans font-bold text-foreground">
              -{savingsPercent}%
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          {/* Theme */}
          <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-[#E5AB44] mb-1">
            {tour.destination.travelTheme}
          </p>
          
          {/* Country */}
          <h3 className="text-xl font-serif font-semibold text-[#E5AB44] mb-2 group-hover:text-gradient-[#E5AB44] transition-colors">
            {tour.destination.country}
          </h3>

          {/* Route */}
          <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E5AB44] flex-shrink-0" />
            <span className="text-xs font-sans truncate text-white/80">{tour.destination.cityRoute}</span>
          </div>

          {/* Meta Row */}
          <div className="flex items-center gap-3 text-xs font-sans text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#E17100]" />
              <span className="text-white/80">{tour.duration.days}D/{tour.duration.nights}N</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#E5AB44] fill-[#E5AB44]" />
              <span className="text-white/80">{tour.smartChart.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#E5AB44]" />
              <span className="text-white/80">{(tour.trustIndicators.totalBookings / 1000).toFixed(1)}k</span>
            </div>
          </div>

          {/* Smart Chart Mini */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Popularity</span>
              <span className="text-foreground font-medium">{tour.smartChart.popularityScore}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tour.smartChart.popularityScore}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-[#E5AB44] rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Value Score</span>
              <span className="text-foreground font-medium">{tour.smartChart.valueForMoney}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tour.smartChart.valueForMoney}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-[#E5AB44] rounded-full"
              />
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Pricing */}
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[10px] font-sans text-muted-foreground mb-0.5">From</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-serif font-bold text-[#E5AB44]">
                  ${tour.pricing.discountedPrice.toLocaleString()}
                </span>
                <span className="text-xs font-sans text-muted-foreground line-through">
                  ${tour.pricing.originalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] font-sans text-muted-foreground">per person</p>
            </div>
          </div>

          {/* CTA */}
          <Button variant="premium" size="default" className="w-full btn-primary bg-gradient-to-r from-[#E17100] to-[#E5AB44] text-white">
            {tour.cta.primary.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
