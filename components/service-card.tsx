'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plane, Train, Hotel, Globe, Dessert as Passport } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  onServiceClick?: (service: { id: string; title: string; icon: string }) => void;
}

const serviceIcons = {
  '1': { icon: Plane, label: 'Plan My Flight' },
  '2': { icon: Train, label: 'Check Train Options' },
  '3': { icon: Hotel, label: 'Find Stays & Cruises' },
  '4': { icon: Globe, label: 'Explore Packages' },
  '5': { icon: Passport, label: 'Get Travel Assistance' },
};

export default function ServiceCard({
  id,
  title,
  description,
  image,
  onServiceClick,
}: ServiceCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const serviceConfig = serviceIcons[id as keyof typeof serviceIcons];
  const IconComponent = serviceConfig.icon;

  return (
    <button
      onClick={() => onServiceClick?.({ id, title, icon: serviceConfig.label })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className="group relative h-full text-left overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-white/20 active:scale-95"
      style={{
        animation: `fadeInUp 0.6s ease-out ${parseInt(id) * 0.1}s both`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-90' : 'opacity-0'
          } ${isHovered ? 'scale-105 brightness-75' : 'brightness-90'}`}
          onLoadingComplete={() => setImageLoaded(true)}
          quality={75}
        />
        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/15 transition-opacity duration-300" />
        )}
      </div>

      {/* Content Container */}
      <div
        className={`p-5 flex flex-col justify-between h-40 transition-all duration-300 ${
          isHovered ? 'translate-y-[-8px]' : ''
        }`}
      >
        {/* Title & Description */}
        <div>
          <h3 className="font-serif text-lg font-medium text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
            {description}
          </p>
        </div>

        {/* Hover CTA */}
        <div
          className={`flex items-center gap-2 text-[#155B02] font-medium text-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <IconComponent className="w-4 h-4" />
          <span>{serviceConfig.label}</span>
          <span className="ml-1">→</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </button>
  );
}
