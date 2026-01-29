'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TrustBar from './header/trust-bar';
import MainNav from './header/main-nav';
import MobileMenu from './header/mobile-menu';
import Image from 'next/image';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(scrollPercent);
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-green-600 to-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Trust Bar */}
      <TrustBar />

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isSticky
            ? 'bg-white/92 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <Link
              href="/"
              className={`flex flex-col gap-0.5 transition-all duration-300 ${
                isSticky ? 'scale-90' : ''
              }`}
            >
              <Image src="/nature-trip-logo.png" alt="Naturestrip" width={200} height={200} />
            </Link>

            {/* Desktop Navigation */}
            <MainNav isSticky={isSticky} />

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
