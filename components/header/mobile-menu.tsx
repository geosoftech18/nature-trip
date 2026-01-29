'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Experiences', id: 'experiences' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Journeys', id: 'journeys' },
  { label: 'Mobility', id: 'mobility' },
  { label: 'Cruises', id: 'cruises' },
  { label: 'About', id: 'about' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-900 hover:text-primary transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="fixed inset-0 top-32 z-30 bg-white">
          <div className="max-w-full mx-auto px-4 py-8 space-y-6">
            {/* Navigation Items */}
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left text-lg font-semibold text-gray-900 hover:text-primary transition-colors pb-4 border-b border-gray-200"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button className="flex-1 flex justify-center p-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="flex-1 flex justify-center p-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="flex-1 flex justify-center p-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Plan My Journey
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
