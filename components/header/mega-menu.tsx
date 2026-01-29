'use client';

import Link from 'next/link';

interface MegaMenuProps {
  menuId: string;
  isActive: boolean;
  onClose: () => void;
}

const menuContent: Record<string, { left: { title: string; items: string[] }; right: { title: string; description: string } }> = {
  experiences: {
    left: {
      title: 'Categories',
      items: ['Flights & Rail', 'Hotels & Resorts', 'Holiday Packages', 'Visa · Forex · Insurance'],
    },
    right: {
      title: 'Travel Without Compromise',
      description: 'Curated experiences designed for the discerning traveler seeking authentic luxury and personalized service.',
    },
  },
  destinations: {
    left: {
      title: 'Popular Regions',
      items: ['Europe', 'Asia', 'Americas', 'Africa & Middle East', 'Oceania'],
    },
    right: {
      title: 'Discover Hidden Gems',
      description: 'Explore our curated collection of exclusive destinations handpicked for their cultural richness and natural beauty.',
    },
  },
  journeys: {
    left: {
      title: 'Journey Types',
      items: ['Romantic Escapes', 'Family Vacations', 'Adventure Trails', 'International Luxury Tours'],
    },
    right: {
      title: 'Unforgettable Moments',
      description: 'Every journey is a story. Discover carefully curated itineraries that promise memories for a lifetime.',
    },
  },
  mobility: {
    left: {
      title: 'Transportation',
      items: ['Private Cars', 'Helicopter Tours', 'Yacht Charters', 'Train Journeys'],
    },
    right: {
      title: 'Travel in Style',
      description: 'Premium mobility solutions ensuring your journey is as luxurious as your destination.',
    },
  },
  cruises: {
    left: {
      title: 'Cruise Types',
      items: ['Luxury Cruises', 'River Cruises', 'Expedition Voyages', 'Private Charters'],
    },
    right: {
      title: 'Sail the Seas',
      description: 'Experience the world\'s most exclusive cruise experiences with unparalleled service and comfort.',
    },
  },
};

export default function MegaMenu({ menuId, isActive, onClose }: MegaMenuProps) {
  const content = menuContent[menuId];

  if (!content) return null;

  return (
    <div
      className={`absolute top-full left-0 w-screen max-w-4xl -ml-32 mt-0 transition-all duration-300 ${
        isActive
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      }`}
      onMouseLeave={onClose}
    >
      <div className="bg-white shadow-2xl">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                {content.left.title}
              </h3>
              <nav className="space-y-3 flex flex-col">
                {content.left.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="text-sm text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Column - Featured Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-md mb-4" />
              <h4 className="text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                {content.right.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                {content.right.description}
              </p>
              <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                Explore {content.left.title.toLowerCase()} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
