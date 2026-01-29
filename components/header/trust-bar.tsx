'use client';

import { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';

const trustMessages = [
  'Trusted Journeys Across 40+ Countries',
  'Best Price Guarantee · Zero Hidden Charges',
  'Curated Travel · Personal Assistance',
];

export default function TrustBar() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % trustMessages.length);
    }, 5000);

    const scrollHandler = () => {
      setIsVisible(window.scrollY < 300);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="h-8 bg-gray-950/5 backdrop-blur-sm border-b border-gray-950/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Rotating Trust Message */}
        <div className="flex-1 min-h-full flex items-center">
          <div className="text-xs text-gray-700 tracking-wide font-medium transition-opacity duration-500" style={{ fontFamily: 'var(--font-inter)' }}>
            ✨ {trustMessages[currentMessage]}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-xs text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
          {/* Currency Selector */}
          <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer">
            <Globe size={14} />
            <select className="bg-transparent border-none outline-none cursor-pointer hover:text-gray-900">
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          {/* Support */}
          <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer">
            <Clock size={14} />
            <span>24×7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
