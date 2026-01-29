'use client';

import React from "react"

import { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';

interface LeadFormData {
  step: 1 | 2 | 3;
  pickupCity: string;
  dropCity: string;
  travelDate: string;
  numberOfDays: string;
  vehicleType: string;
  seatingCapacity: string;
  chauffeurDriven: boolean;
  name: string;
  mobile: string;
  email: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  vehicleType: string;
  seatingCapacity: string;
  onClose: () => void;
  onSubmit: (data: LeadFormData) => void;
}

export default function LeadCaptureModal({
  isOpen,
  vehicleType,
  seatingCapacity,
  onClose,
  onSubmit,
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    step: 1,
    pickupCity: '',
    dropCity: '',
    travelDate: '',
    numberOfDays: '',
    vehicleType,
    seatingCapacity,
    chauffeurDriven: true,
    name: '',
    mobile: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleNextStep = () => {
    if (formData.step < 3) {
      setFormData((prev) => ({
        ...prev,
        step: (prev.step + 1) as 1 | 2 | 3,
      }));
    }
  };

  const handlePrevStep = () => {
    if (formData.step > 1) {
      setFormData((prev) => ({
        ...prev,
        step: (prev.step - 1) as 1 | 2 | 3,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      onSubmit(formData);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          step: 1,
          pickupCity: '',
          dropCity: '',
          travelDate: '',
          numberOfDays: '',
          vehicleType,
          seatingCapacity,
          chauffeurDriven: true,
          name: '',
          mobile: '',
          email: '',
        });
        onClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal - Side Drawer on Desktop, Bottom Sheet on Mobile */}
      <div
        className={`fixed z-50 transition-all duration-300 bg-white backdrop-blur-2xl border border-gray-200 shadow-2xl
          md:right-0 md:top-0 md:h-full md:w-96 md:rounded-l-2xl
          bottom-0 left-0 right-0 h-auto max-h-screen w-full rounded-t-3xl
        `}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl md:rounded-t-none">
          {formData.step > 1 && (
            <button
              onClick={handlePrevStep}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          <h2 className="text-lg font-semibold text-foreground flex-1 text-center">
            {formData.step === 1 && 'Journey Basics'}
            {formData.step === 2 && 'Vehicle Details'}
            {formData.step === 3 && 'Contact Details'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-120px)]">
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Step 1: Journey Basics */}
            {formData.step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pickup City
                  </label>
                  <input
                    type="text"
                    name="pickupCity"
                    placeholder="Enter pickup city"
                    value={formData.pickupCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Drop City (Optional)
                  </label>
                  <input
                    type="text"
                    name="dropCity"
                    placeholder="Enter drop city"
                    value={formData.dropCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    name="numberOfDays"
                    placeholder="e.g., 3"
                    value={formData.numberOfDays}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    min="1"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Vehicle Context */}
            {formData.step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Selected Vehicle
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {formData.vehicleType}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Seating Capacity
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {formData.seatingCapacity}
                  </p>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-50/50 rounded-lg border border-primary/30">
                  <input
                    type="checkbox"
                    name="chauffeurDriven"
                    checked={formData.chauffeurDriven}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label className="font-medium text-foreground">
                    Chauffeur-Driven
                  </label>
                </div>

                <p className="text-xs text-muted-foreground">
                  Professional driver included for your comfort and safety.
                </p>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {formData.step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  We'll only contact you to assist with your booking.
                </p>
              </div>
            )}

            {/* Success State */}
            {isSuccess && (
              <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-center animate-fade-in">
                <p className="text-green-800 font-medium">
                  Thank you. Our team will assist you shortly.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Footer - Sticky CTA */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-6 py-4 flex gap-3 rounded-b-3xl md:rounded-b-none">
          {formData.step > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-foreground font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          <button
            type={formData.step < 3 ? 'button' : 'submit'}
            onClick={formData.step < 3 ? handleNextStep : undefined}
            onSubmit={formData.step === 3 ? handleSubmit : undefined}
            disabled={isSubmitting}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isSubmitting
                ? 'bg-primary/50 text-white cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 text-white'
            }`}
            form={formData.step === 3 ? 'lead-form' : undefined}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-1 bg-black/30 rounded-full animate-pulse"></span>
              </span>
            ) : formData.step < 3 ? (
              'Continue'
            ) : (
              'Get My Travel Quote'
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}
