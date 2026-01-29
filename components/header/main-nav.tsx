'use client';

import { useState } from 'react';
import Link from 'next/link';
import MegaMenu from './mega-menu';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Experiences', id: 'experiences' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Journeys', id: 'journeys' },
  { label: 'Mobility', id: 'mobility' },
  { label: 'Cruises', id: 'cruises' },
  { label: 'About', id: 'about' },
];

interface MainNavProps {
  isSticky: boolean;
}

export default function MainNav({ isSticky }: MainNavProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {/* Navigation Items */}
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <button
              onMouseEnter={() => setActiveMenu(item.id)}
              onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                isSticky
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-gray-900 hover:text-primary'
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {item.label}
              {item.id !== 'about' && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeMenu === item.id ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {/* Mega Menu */}
            {item.id !== 'about' && (
              <MegaMenu
                menuId={item.id}
                isActive={activeMenu === item.id}
                onClose={() => setActiveMenu(null)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Section - Icons and CTA */}
      <div className="flex items-center gap-6 pl-8 border-l border-gray-200">
        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button
            className={`transition-all duration-300 hover:scale-110 ${
              isSticky ? 'text-gray-900' : 'text-gray-700'
            }`}
            title="Discover"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            className={`transition-all duration-300 hover:scale-110 ${
              isSticky ? 'text-gray-900' : 'text-gray-700'
            }`}
            title="Saved"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            className={`transition-all duration-300 hover:scale-110 ${
              isSticky ? 'text-gray-900' : 'text-gray-700'
            }`}
            title="Account"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Primary CTA */}
        <button
          className={`px-6 py-2.5 w-full text-center text-sm font-semibold tracking-wide rounded-lg transition-all duration-300 whitespace-nowrap ${
            isSticky
              ? 'bg-primary text-white hover:bg-[#155B02] shadow-lg'
              : 'border border-primary text-primary hover:bg-green-50'
          }`}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Plan My Journey
        </button>
      </div>
    </nav>
  );
}
