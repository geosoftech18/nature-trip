'use client';

import { useState, useEffect } from 'react';
import SliderSection from '@/components/slider-section';
import TourSlider from '@/components/tour/TourSlider';
import { Gem, Target, BadgeCheck, Phone, Eye, Plane, Train, Hotel, Ship, Package, Shield, FileText, Home as HomeIcon, Bus } from 'lucide-react';
export default function Home() {
  const [animateIn, setAnimateIn] = useState(false);
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1');
  const [travelClass, setTravelClass] = useState('economy');
  const [selectedFare, setSelectedFare] = useState('regular');
  const [addCancellation, setAddCancellation] = useState(false);
  const [showFlightTracker, setShowFlightTracker] = useState(false);
  const [isEngaged, setIsEngaged] = useState(false);
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [ctaText, setCtaText] = useState('Plan My Journey');
  
  // Hotels Tab State
  const [hotelLocation, setHotelLocation] = useState('');
  const [hotelCheckIn, setHotelCheckIn] = useState('');
  const [hotelGuests, setHotelGuests] = useState('1');
  
  // Villas Tab State
  const [villaLocation, setVillaLocation] = useState('');
  const [villaDates, setVillaDates] = useState('');
  const [villaGuests, setVillaGuests] = useState('1');
  
  // Packages Tab State
  const [packageDestination, setPackageDestination] = useState('');
  const [packageDuration, setPackageDuration] = useState('');
  const [packageBudget, setPackageBudget] = useState('comfort');
  
  // Trains Tab State
  const [trainFrom, setTrainFrom] = useState('');
  const [trainTo, setTrainTo] = useState('');
  const [trainDate, setTrainDate] = useState('');
  
  // Buses Tab State
  const [busFrom, setBusFrom] = useState('');
  const [busTo, setBusTo] = useState('');
  const [busDate, setBusDate] = useState('');
  
  // Cruise Tab State
  const [cruiseDestination, setCruiseDestination] = useState('');
  const [cruiseDuration, setCruiseDuration] = useState('7');

  // Inquiry Modal State
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  // Tab Progress State
  const [showProgress, setShowProgress] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionField, setActiveSuggestionField] = useState(null);

  // Curated Journeys State
  const [activeJourneyFilter, setActiveJourneyFilter] = useState('all');
  const [hoveredJourney, setHoveredJourney] = useState(null);

  // Trust Section State
  const [hoveredTrustCard, setHoveredTrustCard] = useState(null);
  const [trustCardsAnimated, setTrustCardsAnimated] = useState(false);

  // Ecosystem Service State
  const [hoveredService, setHoveredService] = useState(null);
  const [servicesAnimated, setServicesAnimated] = useState(false);

  // Social Proof State
  const [socialProofAnimated, setSocialProofAnimated] = useState(false);

  // Testimonial Carousel State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [carouselAnimated, setCarouselAnimated] = useState(false);

  // Service Data
  const services = [
    {
      id: 1,
      title: 'Air Tickets',
      description: 'Seamless domestic and international flight bookings.',
      icon: Plane,
    },
    {
      id: 2,
      title: 'Rail Tickets',
      description: 'Fast, reliable train reservations with real-time updates.',
      icon: Train,
    },
    {
      id: 3,
      title: 'Hotels & Cruises',
      description: 'Verified stays and luxury cruises worldwide.',
      icon: Hotel,
    },
    {
      id: 4,
      title: 'Domestic & International Packages',
      description: 'Curated journeys designed for comfort and experience.',
      icon: Package,
    },
    {
      id: 5,
      title: 'Forex · Insurance · Visa',
      description: 'Complete international travel support in one place.',
      icon: Shield,
    },
  ];

  // Trust Items Data
  const trustItems = [
    {
      id: 1,
      title: 'Best Price Guarantee',
      description: 'Premium journeys at the most honest value.',
      icon: Gem,
    },
    {
      id: 2,
      title: 'Personalized Travel Planning',
      description: 'Trips designed around your pace, purpose, and comfort.',
      icon: Target,
    },
    {
      id: 3,
      title: 'Verified Partners Worldwide',
      description: 'Trusted airlines, hotels, and operators across the globe.',
      icon: BadgeCheck,
    },
    {
      id: 4,
      title: '24×7 Travel Support',
      description: 'Real humans, always available when you need help.',
      icon: Phone,
    },
    {
      id: 5,
      title: 'Transparent Pricing',
      description: 'Clear costs. No last-minute surprises.',
      icon: Eye,
    },
  ];

  // Testimonials Data — Premium, Advanced Experiences
  const testimonials = [
    {
      id: 1,
      quote: 'The attention to detail was extraordinary—from private car transfers to exclusive dining reservations. They anticipated every need before we asked.',
      author: 'Priya & Rajesh Mehta',
      location: 'Mumbai',
      experience: 'Swiss Alps Private Retreat',
      highlight: 'Luxury Concierge',
    },
    {
      id: 2,
      quote: 'Our multi-country itinerary was flawlessly coordinated across three continents. Not a single hiccup. Professional excellence at its finest.',
      author: 'Dr. Sameer Kapoor',
      location: 'Bangalore',
      experience: 'Europe & Asia Grand Tour',
      highlight: 'Complex Logistics',
    },
    {
      id: 3,
      quote: 'They transformed my vague travel dreams into a personalized masterpiece. Every moment felt curated just for us, yet completely authentic.',
      author: 'Anjali & Vikram Singh',
      location: 'Delhi',
      experience: 'Japan Cultural Odyssey',
      highlight: 'Curated Experiences',
    },
    {
      id: 4,
      quote: 'The 24/7 support was instrumental when our flights were disrupted. They rerouted everything within hours without us losing a single experience day.',
      author: 'Piyush Desai',
      location: 'Pune',
      experience: 'Maldives Luxury Escape',
      highlight: 'Crisis Management',
    },
  ];

  // Partner Logos Data
  const partners = [
    { id: 1, name: 'Air India' },
    { id: 2, name: 'ITC Hotels' },
    { id: 3, name: 'IRCTC' },
    { id: 4, name: 'Marriott' },
    { id: 5, name: 'Emirates' },
  ];

  // Journey Data
  const journeys = [
    {
      id: 1,
      title: 'Bali Paradise Escape',
      mood: 'Serene · Cultural · Romantic',
      duration: '7–9 Days',
      region: 'Asia',
      tags: ['International', 'Luxury Escape'],
      categories: ['relax', 'honeymoon'],
      image: 'https://images.unsplash.com/photo-1537996941826-4c4ea7161dd9?w=800&h=600&fit=crop',
      description: 'Designed for slow mornings, rich culture, and unforgettable evenings.',
    },
    {
      id: 2,
      title: 'Royal Rajasthan Sojourn',
      mood: 'Heritage · Royal · Timeless',
      duration: '10 Days',
      region: 'India',
      tags: ['Signature', 'Cultural'],
      categories: ['adventure', 'family'],
      image: 'https://images.unsplash.com/photo-1516399154795-f1201a62b3f3?w=800&h=600&fit=crop',
      description: 'Journey through palaces, traditions, and the soul of India.',
    },
    {
      id: 3,
      title: 'European Dreams Tour',
      mood: 'Adventure · Art · Freedom',
      duration: '12 Days',
      region: 'Europe',
      tags: ['International', 'Premium'],
      categories: ['adventure', 'international'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      description: 'Iconic cities, timeless culture, and moments that define wanderlust.',
    },
    {
      id: 4,
      title: 'Maldives Luxury Retreat',
      mood: 'Exclusive · Tranquil · Romantic',
      duration: '5–7 Days',
      region: 'Asia',
      tags: ['Luxury Escape', 'Honeymoon'],
      categories: ['relax', 'honeymoon'],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      description: 'Private islands, crystal waters, and intimate moments await.',
    },
    {
      id: 5,
      title: 'Swiss Alpine Adventure',
      mood: 'Nature · Majestic · Peaceful',
      duration: '8 Days',
      region: 'Europe',
      tags: ['International', 'Adventure'],
      categories: ['adventure', 'family'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Mountains, valleys, and the pure essence of Alpine beauty.',
    },
    {
      id: 6,
      title: 'Japan Cultural Immersion',
      mood: 'Spiritual · Artistic · Modern',
      duration: '10 Days',
      region: 'Asia',
      tags: ['Signature', 'Family Favorite'],
      categories: ['family', 'international'],
      image: 'https://images.unsplash.com/photo-1524631049281-5f3ebf74ba72?w=800&h=600&fit=crop',
      description: 'From ancient temples to neon cities—a complete journey through Japan.',
    },
  ];

  // Suggestion data
  const suggestionData = {
    from: ['Delhi (DEL)', 'Mumbai (BOM)', 'Bangalore (BLR)', 'Hyderabad (HYD)', 'Chennai (MAA)'],
    to: ['New York (JFK)', 'London (LHR)', 'Paris (CDG)', 'Singapore (SIN)', 'Dubai (DXB)'],
    location: ['Mumbai', 'Goa', 'Jaipur', 'Kerala', 'Agra'],
    destination: ['Bali', 'Maldives', 'Thailand', 'Vietnam', 'Japan'],
  };

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Intersection Observer for Trust Cards Animation
  useEffect(() => {
    const handleTrustAnimate = () => {
      setTrustCardsAnimated(true);
    };

    window.addEventListener('trust-animate', handleTrustAnimate);
    return () => window.removeEventListener('trust-animate', handleTrustAnimate);
  }, []);

  // Intersection Observer for Services Animation
  useEffect(() => {
    const handleServicesAnimate = () => {
      setServicesAnimated(true);
    };

    window.addEventListener('services-animate', handleServicesAnimate);
    return () => window.removeEventListener('services-animate', handleServicesAnimate);
  }, []);

  // Intersection Observer for Social Proof Animation
  useEffect(() => {
    const handleSocialProofAnimate = () => {
      setSocialProofAnimated(true);
    };

    window.addEventListener('socialproof-animate', handleSocialProofAnimate);
    return () => window.removeEventListener('socialproof-animate', handleSocialProofAnimate);
  }, []);

  // Testimonial Carousel Auto-Play
  useEffect(() => {
    if (!carouselAnimated) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [carouselAnimated, testimonials.length]);

  // Pause carousel on hover/interaction
  const handleCarouselInteraction = () => {
    // Reset timer on manual interaction (optional)
  };

  // Testimonial Carousel Init
  useEffect(() => {
    const handleCarouselAnimate = () => {
      setCarouselAnimated(true);
    };

    window.addEventListener('carousel-animate', handleCarouselAnimate);
    return () => window.removeEventListener('carousel-animate', handleCarouselAnimate);
  }, []);

  const backgroundVideos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop', // Mountain sunrise
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&h=1080&fit=crop', // Ocean cruise
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop', // City morning
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ULTRA-PREMIUM HERO SECTION */}
      <section className="relative h-screen md:h-[92vh] overflow-hidden flex items-center">
        {/* Cinematic Background with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundVideos[0]})`,
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark Cinematic Overlay (40%) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content Grid - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Micro Badge - Trust Signal */}
            <div
              className={`inline-block mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 ${
                animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span
                className="text-xs font-medium tracking-widest text-white"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                TRUSTED JOURNEYS · WORLDWIDE
              </span>
            </div>

            {/* Hero Headline */}
            <h1
              className={`text-6xl md:text-7xl font-medium text-white leading-tight mb-8 transition-all duration-700 delay-200 ${
                animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Journey Beyond Boundaries
            </h1>

            {/* Sub-Headline */}
            <p
              className={`text-lg text-gray-100 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-300 ${
                animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Plan unforgettable journeys with seamless bookings, curated experiences, and personal travel
              assistance — wherever the world calls you.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 items-start transition-all duration-700 delay-500 ${
                animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Primary CTA */}
              <button
                className="px-8 py-3.5 rounded-full  bg-gradient-to-r from-[#104401] to-[#155B02]  text-white font-semibold hover:bg-[#155B02] transition-all duration-300 hover:shadow-2xl hover:shadow-[#155B02]/30 group"  
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <span className="flex items-center gap-2">
                  Plan My Journey
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>

              {/* Secondary CTA - Text Only */}
              <button
                className="text-white  transition-colors font-medium tracking-wide"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Explore Experiences
              </button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Advanced Search Panel - Premium Travel Booking */}
      <section className="relative pb-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          {/* Glassmorphic Card with Gradient */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Service Tabs with Progress Bar */}
            <div className="relative border-b border-[#155B02] overflow-x-auto">
              {/* Progress Bar Animation */}
              {showProgress && (
                <div className="absolute bottom-0 h-1 bg-gradient-to-r from-[#22670f] to-[#155B02] animate-progress" style={{ width: '100%' }} />
              )}

              <div className="flex">
                {[
                  { id: 'flights', label: 'Flights', icon: Plane },
                  { id: 'hotels', label: 'Hotels', icon: Hotel },
                  { id: 'villas', label: 'Villas & Homestays', icon: HomeIcon },
                  { id: 'packages', label: 'Holiday Packages', icon: Package },
                  { id: 'trains', label: 'Trains', icon: Train },
                  { id: 'buses', label: 'Buses', icon: Bus },
                  { id: 'cruise', label: 'Cruise', icon: Ship },
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setShowProgress(true);
                        setTimeout(() => setShowProgress(false), 1200);
                      }}
                      className={`px-6 py-4 font-medium text-sm transition-all whitespace-nowrap relative flex items-center gap-2 ${
                        activeTab === tab.id
                          ? 'text-[#155B02]'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <IconComponent className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#155B02]' : 'text-gray-600'}`} />
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#155B02] to-transparent animate-slide-in" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flights Tab Content */}
            {activeTab === 'flights' && (
              <div className="p-8 md:p-10 space-y-6">
                {/* Trip Type Selection - Minimalist */}
                <div className="flex gap-4 items-center">
                  {[
                    { value: 'oneway', label: 'One Way' },
                    { value: 'roundtrip', label: 'Round Trip' },
                    { value: 'multicity', label: 'Multi City' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <input
                        type="radio"
                        name="tripType"
                        value={option.value}
                        checked={tripType === option.value}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>

                {/* From & To Airports */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="animate-in fade-in duration-300 relative">
                    <input
                      type="text"
                      placeholder="From"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                        if (e.target.value.length > 0) {
                          setSuggestions(suggestionData.from.filter(s => s.toLowerCase().includes(e.target.value.toLowerCase())));
                          setActiveSuggestionField('from');
                        } else {
                          setSuggestions([]);
                        }
                      }}
                      onFocus={() => {
                        if (from.length > 0) {
                          setSuggestions(suggestionData.from.filter(s => s.toLowerCase().includes(from.toLowerCase())));
                          setActiveSuggestionField('from');
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                    {activeSuggestionField === 'from' && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 animate-dropdown">
                        {suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setFrom(suggestion);
                              setSuggestions([]);
                              setActiveSuggestionField(null);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all border-b border-gray-100 last:border-b-0"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            <div className="font-medium text-sm">{suggestion}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="p-2 rounded-full hover:bg-blue-100/50 transition-all">
                      ⇄
                    </button>
                  </div>

                  <div className="animate-in fade-in duration-300 delay-75 relative">
                    <input
                      type="text"
                      placeholder="To"
                      value={to}
                      onChange={(e) => {
                        setTo(e.target.value);
                        if (e.target.value.length > 0) {
                          setSuggestions(suggestionData.to.filter(s => s.toLowerCase().includes(e.target.value.toLowerCase())));
                          setActiveSuggestionField('to');
                        } else {
                          setSuggestions([]);
                        }
                      }}
                      onFocus={() => {
                        if (to.length > 0) {
                          setSuggestions(suggestionData.to.filter(s => s.toLowerCase().includes(to.toLowerCase())));
                          setActiveSuggestionField('to');
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                    {activeSuggestionField === 'to' && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 animate-dropdown">
                        {suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setTo(suggestion);
                              setSuggestions([]);
                              setActiveSuggestionField(null);
                            }}
                            className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all border-b border-gray-100 last:border-b-0"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            <div className="font-medium text-sm">{suggestion}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date & Travelers Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300 delay-100">
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>

                  {tripType === 'roundtrip' && (
                    <div className="animate-in fade-in duration-300 delay-150">
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      />
                    </div>
                  )}

                  <div className="animate-in fade-in duration-300 delay-200">
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4+ Travellers</option>
                    </select>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center pt-4">
                
                  <button
                    onClick={() => setShowInquiry(true)}
                    className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all"
                    style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      SUBMIT INQUIRY
                  </button>
                </div>
              </div>
            )}

            {/* Hotels Tab */}
            {activeTab === 'hotels' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="Location" value={hotelLocation} onChange={(e) => setHotelLocation(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <input type="date" value={hotelCheckIn} onChange={(e) => setHotelCheckIn(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <input type="date" placeholder="Check-out" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-150">
                    <select value={hotelGuests} onChange={(e) => setHotelGuests(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                 
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}

            {/* Villas Tab */}
            {activeTab === 'villas' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="Destination" value={villaLocation} onChange={(e) => setVillaLocation(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <input type="date" value={villaDates} onChange={(e) => setVillaDates(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option>3-7 nights</option>
                      <option>7-14 nights</option>
                      <option>14+ nights</option>
                    </select>
                  </div>
                  <div className="animate-in fade-in duration-300 delay-150">
                    <select value={villaGuests} onChange={(e) => setVillaGuests(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option value="1">1 Guest</option>
                      <option value="4">4 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}

            {/* Holiday Packages Tab */}
            {activeTab === 'packages' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="Destination" value={packageDestination} onChange={(e) => setPackageDestination(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <select value={packageDuration} onChange={(e) => setPackageDuration(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option value="">Select Days</option>
                      <option value="3">3 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">7 Days</option>
                    </select>
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <select value={packageBudget} onChange={(e) => setPackageBudget(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option value="value">Value</option>
                      <option value="comfort">Comfort</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                 
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}

            {/* Trains Tab */}
            {activeTab === 'trains' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="From" value={trainFrom} onChange={(e) => setTrainFrom(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <input type="text" placeholder="To" value={trainTo} onChange={(e) => setTrainTo(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <input type="date" value={trainDate} onChange={(e) => setTrainDate(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-150">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option>AC 1st</option>
                      <option>AC 2 Tier</option>
                      <option>Sleeper</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                 
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}

            {/* Buses Tab */}
            {activeTab === 'buses' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="From" value={busFrom} onChange={(e) => setBusFrom(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <input type="text" placeholder="To" value={busTo} onChange={(e) => setBusTo(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <input type="date" value={busDate} onChange={(e) => setBusDate(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-150">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option>AC Sleeper</option>
                      <option>AC Semi</option>
                      <option>Non AC</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                 
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}

            {/* Cruise Tab */}
            {activeTab === 'cruise' && (
              <div className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="animate-in fade-in duration-300">
                    <input type="text" placeholder="Destination" value={cruiseDestination} onChange={(e) => setCruiseDestination(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-75">
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }} />
                  </div>
                  <div className="animate-in fade-in duration-300 delay-100">
                    <select value={cruiseDuration} onChange={(e) => setCruiseDuration(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option value="3">3 Nights</option>
                      <option value="5">5 Nights</option>
                      <option value="7">7 Nights</option>
                    </select>
                  </div>
                  <div className="animate-in fade-in duration-300 delay-150">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" style={{ fontFamily: 'var(--font-inter)' }}>
                      <option>Interior</option>
                      <option>Ocean View</option>
                      <option>Balcony</option>
                      <option>Suite</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                
                  <button onClick={() => setShowInquiry(true)} className="px-12 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-all" style={{ fontFamily: 'var(--font-inter)' }}>
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>
                Submit Inquiry
              </h2>
              <button
                onClick={() => setShowInquiry(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your travel plans..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowInquiry(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowInquiry(false);
                    setInquiryName('');
                    setInquiryEmail('');
                    setInquiryPhone('');
                    setInquiryMessage('');
                  }}
                  className="flex-1 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CURATED JOURNEYS SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-green-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              Curated Journeys — Signature Packages
            </p>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 text-balance" style={{ fontFamily: 'var(--font-playfair)' }}>
              Handcrafted Journeys, Designed with Care
            </h2>

            {/* Supporting Line */}
            <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
              Each journey is thoughtfully curated by our travel experts to balance comfort, culture, and unforgettable moments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {['all', 'relax', 'adventure', 'family', 'honeymoon', 'international'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveJourneyFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 capitalize ${
                  activeJourneyFilter === filter
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Journey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {journeys
              .filter((journey) => activeJourneyFilter === 'all' || journey.categories.includes(activeJourneyFilter))
              .map((journey, idx) => (
                <div
                  key={journey.id}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-primary/30 ${
                    idx === 0 && activeJourneyFilter === 'all' ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredJourney(journey.id)}
                  onMouseLeave={() => setHoveredJourney(null)}
                >
                  {/* Gradient Background - Initial State */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredJourney === journey.id ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-primary via-green-600 to-green-700" />
                  </div>

                  {/* Image Background - Revealed on Hover */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredJourney === journey.id ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                      src={journey.image || "/placeholder.svg"}
                      alt={journey.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Enhanced Dark Overlay - More prominent on hover */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredJourney === journey.id ? 'bg-black/40' : 'bg-black/20'}`} />

                  {/* Premium Content Container */}
                  <div className="relative w-full h-96 md:h-full overflow-hidden flex flex-col justify-end p-8 md:p-10 text-white">
                    {/* Top Section - Badges and Meta */}
                    <div className="mb-auto flex items-start justify-between">
                      {/* Tag Badge */}
                      <div className={`transition-all duration-500 ${hoveredJourney === journey.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-40'}`}>
                        <span 
                          className="px-3 py-1 bg-white/15 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30 inline-block" 
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {journey.tags[0]}
                        </span>
                      </div>

                      {/* Second Tag - Premium indicator */}
                      <div className={`transition-all duration-500 delay-75 ${hoveredJourney === journey.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <span 
                          className="px-3 py-1 bg-primary/20 backdrop-blur-md text-green-100 text-xs font-semibold rounded-full border border-primary/30 inline-block" 
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {journey.tags[1]}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section - Main Content */}
                    <div className="space-y-4">
                      {/* Journey Title */}
                      <div>
                        <h3 
                          className="text-2xl md:text-3xl font-medium mb-2 transition-colors duration-500 leading-tight" 
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {journey.title}
                        </h3>
                      </div>

                      {/* Mood Line - Always visible */}
                      <p 
                        className="text-sm font-medium text-green-100 transition-colors duration-500" 
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {journey.mood}
                      </p>

                      {/* Duration & Region - Always visible with refined styling */}
                      <p 
                        className="text-xs text-gray-100 font-medium tracking-wide transition-colors duration-500" 
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {journey.duration} · {journey.region}
                      </p>

                      {/* Divider Line */}
                      <div className={`h-px bg-gradient-to-r from-white/40 via-white/20 to-transparent transition-opacity duration-500 ${hoveredJourney === journey.id ? 'opacity-100' : 'opacity-0'}`} />

                      {/* Storytelling Line - Appears on Hover */}
                      <p
                        className={`text-sm text-gray-100 leading-relaxed transition-all duration-500 ${hoveredJourney === journey.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {journey.description}
                      </p>

                      {/* Premium CTA Button - Appears on Hover */}
                      <div className={`pt-2 transition-all duration-500 ${hoveredJourney === journey.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <button
                          className="flex items-center gap-2 text-white font-semibold text-sm group/cta hover:gap-3 transition-all duration-300"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          Explore Journey
                          <span className="transition-transform duration-300 group-hover/cta:translate-x-1.5">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Magazine-style Bottom CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <button
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Explore All Journeys
            </button>
          </div>
        </div>
      </section>

      {/* WHY NATURESTRIP — TRUST ARCHITECTURE */}
      <section className="relative py-32 md:py-40 overflow-hidden" data-trust-section>
        {/* Multi-Layered Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient - Midnight Blue to Charcoal to Ivory */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#17470a] via-[#155B02] to-[#17470a]" />

          {/* Accent Gradient Layer - Animated (Champagne Gold) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/8 to-transparent animate-gradient opacity-80" />

          {/* Subtle Radial Highlight - Pearl-like glow */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-green-200/6 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-green-100/4 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-trust-section>
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-24">
            {/* Eyebrow - Muted Gold */}
            <p
              className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-6 letter-spacing"
              style={{ fontFamily: 'var(--font-inter)', letterSpacing: '1.2px' }}
            >
              Why Travelers Trust Us
            </p>

            {/* Main Title */}
            <h2
              className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Built on Trust. Designed for Comfort.
            </h2>

            {/* Sub-line */}
            <p
              className="text-lg text-gray-300 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Thoughtfully crafted travel experiences backed by reliability, transparency, and care.
            </p>
          </div>

          {/* Trust Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative transition-all duration-300 h-full ${trustCardsAnimated ? 'animate-float-up' : 'opacity-100'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredTrustCard(item.id)}
                onMouseLeave={() => setHoveredTrustCard(null)}
              >
                {/* Glassmorphic Card - Premium Surface */}
                <div
                  className={`relative backdrop-blur-xl rounded-3xl p-8 transition-all duration-250 border h-full flex flex-col ${
                    hoveredTrustCard === item.id
                      ? 'bg-white border-primary/50 shadow-2xl -translate-y-1.5'
                      : 'bg-white border-white/25 shadow-lg text-[#155B02]'
                  }`}
                >
                  {/* Icon Orb - Soft Gold Gradient */}
                  <div
                    className={`relative w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-all duration-250 flex-shrink-0 ${
                      hoveredTrustCard === item.id
                        ? 'bg-gradient-to-br from-primary/50 to-green-600/25 shadow-xl'
                        : 'bg-gradient-to-br from-green-200/35 to-primary/15'
                    } ${hoveredTrustCard === item.id ? 'animate-icon-glow' : ''}`}
                  >
                    <item.icon className="w-8 h-8 text-[#155B02]" />
                  </div>

                  {/* Card Content */}
                  <h3
                    className="text-lg font-bold text-[#155B02] mb-2 leading-tight flex-shrink-0"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm text-[#3e413f] leading-relaxed flex-grow"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.description}
                  </p>

                  {/* Bottom Accent Line - Appears on Hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-3xl transition-opacity duration-300 ${
                      hoveredTrustCard === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trigger Trust Cards Animation on Mount */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.addEventListener('load', () => {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const event = new CustomEvent('trust-animate');
                      window.dispatchEvent(event);
                    }
                  });
                }, { threshold: 0.3 });
                
                const trustSection = document.querySelector('[data-trust-section]');
                if (trustSection) observer.observe(trustSection);
              });
            }
          `,
        }}
      />

      {/* EXPERIENCES WE OFFER — SERVICE ECOSYSTEM */}
      <section className="relative py-32 md:py-40 overflow-hidden" data-services-section>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          {/* Base: Soft Ivory */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-gray-50" />

          {/* Animated Pearl → Gold → Mist Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100/0 via-green-100/12 to-blue-100/8 animate-ecosystem-gradient opacity-70" />

          {/* Subtle Radial Glows */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/6 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold tracking-widest text-primary/70 uppercase mb-6"
              style={{ fontFamily: 'var(--font-inter)', letterSpacing: '1.2px' }}
            >
              Our Service Ecosystem
            </p>

            {/* Main Title */}
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Experiences We Offer
            </h2>

            {/* Supporting Line */}
            <p
              className="text-lg text-gray-600 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              From planning to paperwork — every aspect of your journey is seamlessly managed.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`group relative transition-all duration-300 h-full ${servicesAnimated ? 'animate-service-card' : 'opacity-100'}`}
                style={{ animationDelay: `${idx * 120}ms` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Glassmorphic Service Card */}
                <div
                  className={`relative backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 border h-full flex flex-col ${
                    hoveredService === service.id
                      ? 'bg-white/18 border-primary/50 shadow-xl -translate-y-1.5'
                      : 'bg-white/14 border-gray-200/30 shadow-md'
                  }`}
                >
                  {/* Icon Orb with Soft Gradient */}
                  <div
                    className={`relative w-14 h-14 rounded-full mb-6 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      hoveredService === service.id
                        ? 'bg-gradient-to-br from-primary/45 to-green-200/20 shadow-lg'
                        : 'bg-gradient-to-br from-green-200/40 to-green-100/20'
                    } ${hoveredService === service.id ? 'animate-icon-pulse' : ''}`}
                  >
                    <service.icon className="w-7 h-7 text-[#155B02]" />
                  </div>

                  {/* Service Title */}
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3 leading-tight flex-shrink-0"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    className="text-sm text-gray-700 leading-relaxed flex-grow"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {service.description}
                  </p>

                  {/* Hover Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-3xl transition-opacity duration-300 ${
                      hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft CTA */}
          <div className="flex justify-center pt-8">
            <button
              className="text-gray-900 font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Explore How It Works
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trigger Services Animation on Mount */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const triggerServicesAnimation = () => {
                const servicesSection = document.querySelector('[data-services-section]');
                if (servicesSection) {
                  const rect = servicesSection.getBoundingClientRect();
                  if (rect.top < window.innerHeight) {
                    const event = new CustomEvent('services-animate');
                    window.dispatchEvent(event);
                  }
                }
              };
              
              window.addEventListener('load', triggerServicesAnimation);
              window.addEventListener('scroll', triggerServicesAnimation, { once: true });
              triggerServicesAnimation();
            }
          `,
        }}
      />

      {/* SOCIAL PROOF & CREDIBILITY SECTION — PREMIUM VALIDATION */}
      <section className="relative py-28 md:py-32 bg-gradient-to-b from-white via-gray-50/40 to-white" data-socialproof-section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header — Premium Authority & Conversion */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            {/* Eyebrow — Authoritative Trust Signal */}
            <div
              className="text-xs uppercase tracking-[2.5px] text-primary/75 font-semibold mb-6 inline-block px-4 py-2 rounded-full bg-green-50/40 backdrop-blur-sm border border-primary/30"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ✓ Premium Member Reviews
            </div>

            {/* Main Title — Premium Confidence */}
            <h2
              className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight text-balance"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why Discerning Travelers Choose Us
            </h2>

            {/* Subline — Premium Value Proposition */}
            <p
              className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 font-light"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              From seamless logistics to curated experiences, our travelers consistently report unparalleled service, thoughtful attention to detail, and genuine expertise across continents.
            </p>

            {/* Social Proof Stats Row */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>4.9★</p>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--font-inter)' }}>From 2000+ Reviews</p>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>15+</p>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Years Excellence</p>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>50K+</p>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Happy Travelers</p>
              </div>
            </div>
          </div>

         
         

        

        
        </div>
      </section>

      {/* Trigger Social Proof Animation on Mount */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const triggerSocialProofAnimation = () => {
                const socialProofSection = document.querySelector('[data-socialproof-section]');
                if (socialProofSection) {
                  const rect = socialProofSection.getBoundingClientRect();
                  if (rect.top < window.innerHeight) {
                    const event = new CustomEvent('socialproof-animate');
                    window.dispatchEvent(event);
                  }
                }
              };
              
              window.addEventListener('load', triggerSocialProofAnimation);
              window.addEventListener('scroll', triggerSocialProofAnimation, { once: true });
              triggerSocialProofAnimation();
            }
          `,
        }}
      />



<TourSlider />
      {/* ADVANCED TESTIMONIAL CAROUSEL — EDITORIAL STYLE */}

      {/* Trigger Carousel Animation on Mount */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const triggerCarouselAnimation = () => {
                const carouselSection = document.querySelector('[data-carousel-section]');
                if (carouselSection) {
                  const rect = carouselSection.getBoundingClientRect();
                  if (rect.top < window.innerHeight) {
                    const event = new CustomEvent('carousel-animate');
                    window.dispatchEvent(event);
                  }
                }
              };
              
              window.addEventListener('load', triggerCarouselAnimation);
              window.addEventListener('scroll', triggerCarouselAnimation, { once: true });
              triggerCarouselAnimation();
            }
          `,
        }}
      />

      {/* Features Grid */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '✈️',
              title: 'Global Reach',
              description: 'Access to curated experiences across 40+ countries worldwide',
            },
            {
              icon: '🛡️',
              title: 'Trust & Safety',
              description: 'Best price guarantee and zero hidden charges guaranteed',
            },
            {
              icon: '👨‍💼',
              title: '24/7 Support',
              description: 'Dedicated concierge service available round the clock',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section> */}
        <SliderSection />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Ready for Your Next Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our team of luxury travel experts create a personalized itinerary just for you.
          </p>
          <button className="px-8 py-3 bg-[#155B02] text-white rounded-full hover:bg-[#155B02]/90 transition-colors font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
            Plan My Journey Now
          </button>
        </div>
      </section>
    </main>
  );
}
