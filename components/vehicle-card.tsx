'use client';

import Image from 'next/image';
import { useState } from 'react';

interface VehicleCardProps {
  name: string;
  capacity: string;
  hint: string;
  image: string;
  onCheckAvailability: () => void;
}

export default function VehicleCard({
  name,
  capacity,
  hint,
  image,
  onCheckAvailability,
}: VehicleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-[22px] overflow-hidden backdrop-blur-lg bg-white/16 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/18"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vehicle Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-transform duration-300 ${
            isHovered ? 'scale-103' : 'scale-100'
          }`}
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Capacity Badge */}
        <div className="mb-3 inline-block">
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-primary/50 text-primary bg-green-50/30">
            {capacity}
          </span>
        </div>

        {/* Vehicle Name */}
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>

        {/* Usage Hint */}
        <p className="text-sm text-muted-foreground mb-4">{hint}</p>

        {/* CTA Button */}
        <button
          onClick={onCheckAvailability}
          className="w-full px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
        >
          Check Availability
          <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
