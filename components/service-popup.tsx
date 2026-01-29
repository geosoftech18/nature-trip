'use client';

import React from "react"

import { useState } from 'react';
import { X, CheckCircle, MessageCircle } from 'lucide-react';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    icon: string;
  } | null;
}

const serviceConfigs = {
  '1': {
    title: 'Let\'s Plan Your Flight',
    subtitle: 'Share a few details — our team will take care of the rest.',
    fields: [
      { name: 'from', label: 'From City', placeholder: 'Departure City' },
      { name: 'to', label: 'To City', placeholder: 'Destination City' },
      { name: 'date', label: 'Travel Date', placeholder: 'Select Date', type: 'date' },
      { name: 'passengers', label: 'Number of Passengers', placeholder: 'How many travelers?', type: 'number' },
      { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
      { name: 'mobile', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
    ],
    cta: 'Get Best Flight Options',
  },
  '2': {
    title: 'Let\'s Plan Your Journey',
    subtitle: 'Share a few details — our team will take care of the rest.',
    fields: [
      { name: 'from', label: 'From Station', placeholder: 'Departure Station' },
      { name: 'to', label: 'To Station', placeholder: 'Destination Station' },
      { name: 'date', label: 'Travel Date', placeholder: 'Select Date', type: 'date' },
      { name: 'passengers', label: 'Number of Passengers', placeholder: 'How many travelers?', type: 'number' },
      { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
      { name: 'mobile', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
    ],
    cta: 'Check Train Availability',
  },
  '3': {
    title: 'Let\'s Find Your Perfect Stay',
    subtitle: 'Share a few details — our team will take care of the rest.',
    fields: [
      { name: 'destination', label: 'Destination', placeholder: 'Where would you like to stay?' },
      { name: 'checkin', label: 'Check-in', placeholder: 'Select Date', type: 'date' },
      { name: 'checkout', label: 'Check-out', placeholder: 'Select Date', type: 'date' },
      { name: 'guests', label: 'Number of Guests', placeholder: 'How many guests?', type: 'number' },
      { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
      { name: 'mobile', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
    ],
    cta: 'Find My Stay',
  },
  '4': {
    title: 'Let\'s Curate Your Package',
    subtitle: 'Share a few details — our team will take care of the rest.',
    fields: [
      { name: 'destination', label: 'Destination', placeholder: 'Where would you like to go?' },
      { name: 'month', label: 'Travel Month', placeholder: 'When do you plan to travel?', type: 'month' },
      { name: 'duration', label: 'Duration (days)', placeholder: 'How many days?', type: 'number' },
      { name: 'travelers', label: 'Number of Travelers', placeholder: 'How many travelers?', type: 'number' },
      { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
      { name: 'mobile', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
    ],
    cta: 'Get Curated Packages',
  },
  '5': {
    title: 'Travel Essentials Assistance',
    subtitle: 'Share a few details — our team will take care of the rest.',
    fields: [
      { name: 'destination', label: 'Destination Country', placeholder: 'Where are you traveling?' },
      { name: 'service', label: 'Service Needed', placeholder: 'Forex / Insurance / Visa', options: ['Forex', 'Insurance', 'Visa', 'All'] },
      { name: 'date', label: 'Travel Date', placeholder: 'Select Date', type: 'date' },
      { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
      { name: 'mobile', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
    ],
    cta: 'Get Travel Assistance',
  },
};

export default function ServicePopup({ isOpen, onClose, service }: ServicePopupProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen || !service) return null;

  const config = serviceConfigs[service.id as keyof typeof serviceConfigs];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-end md:items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={handleReset}
      />

      {/* Modal */}
      <div className={`relative w-full md:w-full md:max-w-lg bg-white/95 backdrop-blur-2xl rounded-t-3xl md:rounded-3xl shadow-2xl transform transition-all duration-300 ${isOpen ? 'translate-y-0 md:scale-100' : 'translate-y-full md:scale-95'}`}>
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-6 pr-8">
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {config.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {config.subtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.fields.map((field) => (
                    <div key={field.name} className={field.options ? 'md:col-span-2' : ''}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {field.label}
                      </label>
                      {field.options ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-foreground placeholder-gray-400"
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-foreground placeholder-gray-400"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:from-primary/90 hover:to-accent/90 disabled:opacity-70 transition-all duration-200 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    config.cta
                  )}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our travel expert will contact you shortly with personalized options.
                </p>

                {/* WhatsApp CTA */}
                <button
                  onClick={() => {
                    // WhatsApp integration
                    window.open(
                      `https://wa.me/919876543210?text=Hi,%20I%20submitted%20a%20${service.title}%20inquiry.%20Can%20you%20help%20me?`,
                      '_blank'
                    );
                  }}
                  className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Continue on WhatsApp
                </button>

                {/* Close Button */}
                <button
                  onClick={handleReset}
                  className="w-full mt-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
