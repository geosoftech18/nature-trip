'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X, MapPin, Calendar, Users, Check, MessageCircle } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  hint: string;
  image: string;
  comfortLevel: string;
  badge: string;
}

const allVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Honda City',
    capacity: 4,
    hint: 'Best for city & short trips',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop',
    comfortLevel: 'Comfort',
    badge: 'Chauffeur-driven',
  },
  {
    id: '2',
    name: 'Maruti Dzire',
    capacity: 5,
    hint: 'Economy & efficiency combined',
    image: 'https://images.unsplash.com/photo-1609708536965-1ceb0dbcb1ea?w=500&h=400&fit=crop',
    comfortLevel: 'Economy',
    badge: 'Chauffeur-driven',
  },
  {
    id: '3',
    name: 'Honda Amaze',
    capacity: 5,
    hint: 'Compact comfort',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3feb3a81?w=500&h=400&fit=crop',
    comfortLevel: 'Comfort',
    badge: 'Chauffeur-driven',
  },
  {
    id: '4',
    name: 'Maruti Ertiga',
    capacity: 7,
    hint: 'Perfect for family travel',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3feb3a81?w=500&h=400&fit=crop',
    comfortLevel: 'Comfort',
    badge: 'Chauffeur-driven',
  },
  {
    id: '5',
    name: 'Toyota Innova',
    capacity: 8,
    hint: 'Premium comfort for long journeys',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop',
    comfortLevel: 'Premium',
    badge: 'Chauffeur-driven',
  },
  {
    id: '6',
    name: 'Mahindra Xylo',
    capacity: 8,
    hint: 'Group travel made easy',
    image: 'https://images.unsplash.com/photo-1609708536965-1ceb0dbcb1ea?w=500&h=400&fit=crop',
    comfortLevel: 'Premium',
    badge: 'Chauffeur-driven',
  },
];

interface PersonalData {
  name: string;
  mobile: string;
  email: string;
}

interface JourneyData {
  pickupCity: string;
  dropCity: string;
  travelDate: string;
  numberOfDays: string;
  numberOfTravelers: string;
}

interface LeadData extends PersonalData, JourneyData {
  selectedVehicleId: string;
  selectedVehicleName: string;
}

type ToolStep = 'closed' | 'personal' | 'journey' | 'vehicles' | 'availability' | 'success';

export default function CarRentalsSection() {
  const [toolStep, setToolStep] = useState<ToolStep>('closed');
  const [personalData, setPersonalData] = useState<PersonalData>({
    name: '',
    mobile: '',
    email: '',
  });
  const [journeyData, setJourneyData] = useState<JourneyData>({
    pickupCity: '',
    dropCity: '',
    travelDate: '',
    numberOfDays: '',
    numberOfTravelers: '',
  });
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get available vehicles based on traveler count
  const availableVehicles = allVehicles.filter(
    (v) => (journeyData.numberOfTravelers ? v.capacity >= parseInt(journeyData.numberOfTravelers) : true)
  );

  // Progress indicator (1-4)
  const getProgress = () => {
    if (toolStep === 'personal') return 1;
    if (toolStep === 'journey') return 2;
    if (toolStep === 'vehicles') return 3;
    if (toolStep === 'availability') return 4;
    return 0;
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToolStep('journey');
  };

  const handleJourneySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToolStep('vehicles');
  };

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setToolStep('availability');
  };

  const handleCheckAvailability = () => {
    if (selectedVehicle) {
      setLeadData({
        ...personalData,
        ...journeyData,
        selectedVehicleId: selectedVehicle.id,
        selectedVehicleName: selectedVehicle.name,
      });
      setToolStep('availability');
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('[v0] Lead submitted:', leadData);
      setToolStep('success');
      setTimeout(() => {
        resetTool();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetTool = () => {
    setToolStep('closed');
    setPersonalData({ name: '', mobile: '', email: '' });
    setJourneyData({
      pickupCity: '',
      dropCity: '',
      travelDate: '',
      numberOfDays: '',
      numberOfTravelers: '',
    });
    setSelectedVehicle(null);
    setLeadData(null);
  };

  const handleBack = () => {
    if (toolStep === 'journey') setToolStep('personal');
    else if (toolStep === 'vehicles') setToolStep('journey');
    else if (toolStep === 'availability') setToolStep('vehicles');
  };

  return (
    <section className="py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro - Only show when tool is closed */}
        {toolStep === 'closed' && (
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
              Smart Mobility Planner
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find the Perfect Vehicle for Your Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Share a few details and we'll match you with the most suitable options — instantly.
            </p>

            <button
              onClick={() => setToolStep('personal')}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg inline-flex items-center gap-2"
            >
              Plan Your Journey
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Backdrop - Show when tool is active */}
        {toolStep !== 'closed' && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={resetTool}
          />
        )}

        {/* Tool Container - Glassmorphism Design */}
        {toolStep !== 'closed' && (
          <div className="fixed z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl inset-4 rounded-3xl max-h-[90vh] overflow-hidden flex flex-col md:inset-auto md:right-0 md:top-0 md:h-full md:w-96 md:rounded-l-3xl md:rounded-r-0">
            {/* Header with Progress */}
            <div className="sticky top-0 bg-gradient-to-r from-secondary/50 to-white/50 border-b border-white/20 px-6 py-4">
              {/* Close Button */}
              <div className="flex items-center justify-between mb-4">
                {toolStep !== 'personal' && (
                  <button
                    onClick={handleBack}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Go back"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                )}
                <div className="flex-1" />
                <button
                  onClick={resetTool}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        step <= getProgress() ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Step Title */}
              <h2 className="text-lg font-semibold text-foreground mt-4">
                {toolStep === 'personal' && 'Your Details'}
                {toolStep === 'journey' && 'Trip Requirements'}
                {toolStep === 'vehicles' && 'Vehicle Suggestions'}
                {toolStep === 'availability' && 'Check Availability'}
                {toolStep === 'success' && 'Thank You!'}
              </h2>
            </div>

            {/* Content Area */}
            <div className="overflow-y-auto flex-1">
              {/* Step 1: Personal Details */}
              {toolStep === 'personal' && (
                <form onSubmit={handlePersonalSubmit} className="p-6 space-y-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    Your details help us check availability and assist you better.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={personalData.name}
                      onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={personalData.mobile}
                      onChange={(e) => setPersonalData({ ...personalData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={personalData.email}
                      onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="sticky bottom-0 bg-white pt-4 -mx-6 px-6 pb-6 border-t border-gray-100 space-y-2">
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2: Journey Details */}
              {toolStep === 'journey' && (
                <form onSubmit={handleJourneySubmit} className="p-6 space-y-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    Tell us about your journey.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pickup City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pickup city"
                      value={journeyData.pickupCity}
                      onChange={(e) =>
                        setJourneyData({ ...journeyData, pickupCity: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Drop City (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter drop city"
                      value={journeyData.dropCity}
                      onChange={(e) =>
                        setJourneyData({ ...journeyData, dropCity: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={journeyData.travelDate}
                      onChange={(e) =>
                        setJourneyData({ ...journeyData, travelDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Days
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 3"
                      value={journeyData.numberOfDays}
                      onChange={(e) =>
                        setJourneyData({ ...journeyData, numberOfDays: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      min="1"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 4"
                      value={journeyData.numberOfTravelers}
                      onChange={(e) =>
                        setJourneyData({ ...journeyData, numberOfTravelers: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      min="1"
                      required
                    />
                  </div>

                  <div className="sticky bottom-0 bg-white pt-4 -mx-6 px-6 pb-6 border-t border-gray-100 space-y-2">
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      See Vehicles
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Vehicle Suggestions */}
              {toolStep === 'vehicles' && (
                <div className="p-6 space-y-5">
                  <div className="bg-secondary/50 rounded-xl p-4 border border-primary/20/50 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        {journeyData.pickupCity}
                        {journeyData.dropCity && ` → ${journeyData.dropCity}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        {journeyData.travelDate} ({journeyData.numberOfDays} days)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        {journeyData.numberOfTravelers} travelers
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {availableVehicles.length > 0 ? (
                      availableVehicles.map((vehicle) => (
                        <button
                          key={vehicle.id}
                          onClick={() => handleVehicleSelect(vehicle)}
                          className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-secondary/30 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground group-hover:text-primary">
                                {vehicle.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {vehicle.capacity} Seaters
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {vehicle.hint}
                              </p>
                              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-primary text-xs font-medium rounded-full">
                                {vehicle.badge}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          No vehicles available for {journeyData.numberOfTravelers} travelers
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Availability & Lead Capture */}
              {toolStep === 'availability' && selectedVehicle && (
                <div className="p-6 space-y-5">
                  {toolStep === 'success' ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Thank You!
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Our travel team will contact you shortly to assist with your vehicle booking.
                      </p>
                      <button
                        className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 mt-4"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Continue on WhatsApp
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Vehicle & Journey Summary */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-primary/20/50 space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Selected Vehicle</h3>
                          <p className="text-foreground font-medium">{selectedVehicle.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedVehicle.capacity} Seaters • {selectedVehicle.comfortLevel}
                          </p>
                        </div>

                        <div className="border-t border-primary/20/50 pt-4">
                          <p className="text-sm text-muted-foreground mb-2">Journey Details</p>
                          <p className="text-foreground font-medium">
                            {journeyData.pickupCity}
                            {journeyData.dropCity && ` → ${journeyData.dropCity}`}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {journeyData.travelDate} • {journeyData.numberOfDays} days
                          </p>
                        </div>
                      </div>

                      {/* Availability Status */}
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-foreground">Availability Status</p>
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-700 font-medium">
                            ✅ Available for your dates
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="sticky bottom-0 bg-white pt-4 -mx-6 px-6 pb-6 border-t border-gray-100 space-y-2">
                        <button
                          onClick={handleFinalSubmit}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-primary hover:bg-primary/90 disabled:bg-gray-300 text-white font-semibold rounded-lg transition-all duration-200"
                        >
                          {isSubmitting ? 'Confirming...' : 'Confirm My Request'}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Success State */}
              {toolStep === 'success' && (
                <div className="p-6 text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our travel team will contact you shortly to assist with your vehicle booking.
                  </p>
                  <button
                    className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 mt-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continue on WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
