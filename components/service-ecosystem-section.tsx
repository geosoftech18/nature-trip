'use client';

import { useState } from 'react';
import ServiceCard from './service-card';
import ServicePopup from './service-popup';

const services = [
  {
    id: '1',
    title: 'Air Tickets',
    description: 'Seamless domestic and international flight bookings.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: '2',
    title: 'Rail Tickets',
    description: 'Reliable train reservations with real-time updates.',
    image:
      'https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: '3',
    title: 'Hotels & Cruises',
    description: 'Verified stays and luxury cruise experiences worldwide.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: '4',
    title: 'Domestic & International Packages',
    description: 'Curated journeys crafted for comfort and discovery.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: '5',
    title: 'Forex · Insurance · Visa',
    description: 'Complete international travel essentials in one place.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format',
  },
];

export default function ServiceEcosystemSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ id: string; title: string; icon: string } | null>(null);

  const handleServiceClick = (service: { id: string; title: string; icon: string }) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="relative py-32 lg:py-40 px-4 bg-gradient-to-b from-white via-white to-secondary/20 overflow-hidden">
        {/* Gradient Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl -z-10" />

        {/* Background Pattern - Subtle connector lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M0 400 Q300 200 600 400 T1200 400"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            />
            <circle cx="150" cy="400" r="4" fill="currentColor" />
            <circle cx="450" cy="350" r="4" fill="currentColor" />
            <circle cx="750" cy="450" r="4" fill="currentColor" />
            <circle cx="1050" cy="380" r="4" fill="currentColor" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Intro */}
          <div className="mb-20 text-center">
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary mb-4 font-sans">
              Our Service Ecosystem
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-pretty">
              Experiences We Offer
            </h2>

            {/* Supporting Line */}
            <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every essential service, thoughtfully handled — end to end.
            </p>
          </div>

          {/* Service Cards Grid - Premium Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 mb-20">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                onServiceClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Popup Modal */}
      <ServicePopup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        service={selectedService}
      />
    </>
  );
}
