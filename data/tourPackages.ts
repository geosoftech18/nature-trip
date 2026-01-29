export interface TourPackage {
  id: string;
  priority: number;
  badge: "Most Booked" | "Trending" | "Best Value" | "Limited Spots";
  destination: {
    country: string;
    cityRoute: string;
    travelTheme: string;
  };
  duration: {
    days: number;
    nights: number;
  };
  bestSeason: string[];
  difficultyLevel: "Easy" | "Moderate" | "Challenging" | "Expert";
  pricing: {
    currency: string;
    originalPrice: number;
    discountedPrice: number;
    perPerson: boolean;
  };
  smartChart: {
    rating: number;
    popularityScore: number;
    valueForMoney: number;
  };
  highlights: string[];
  trustIndicators: {
    totalBookings: number;
    totalReviews: number;
    verified: boolean;
  };
  visuals: {
    coverImage: string;
    galleryImages?: string[];
  };
  cta: {
    primary: { label: string; action: string };
    secondary: { label: string; action: string };
  };
}

export const popularTourPackages: TourPackage[] = [
  {
    id: "swiss-alps-luxury",
    priority: 1,
    badge: "Most Booked",
    destination: {
      country: "Switzerland",
      cityRoute: "Zurich → Interlaken → Zermatt",
      travelTheme: "Alpine Luxury Escape"
    },
    duration: {
      days: 8,
      nights: 7
    },
    bestSeason: ["December", "January", "February", "July", "August"],
    difficultyLevel: "Moderate",
    pricing: {
      currency: "USD",
      originalPrice: 8999,
      discountedPrice: 7499,
      perPerson: true
    },
    smartChart: {
      rating: 4.9,
      popularityScore: 98,
      valueForMoney: 92
    },
    highlights: [
      "Private Glacier Express journey",
      "5-star boutique mountain lodges",
      "Helicopter tour over the Matterhorn",
      "Michelin-starred dining experiences"
    ],
    trustIndicators: {
      totalBookings: 2847,
      totalReviews: 1923,
      verified: true
    },
    visuals: {
      coverImage: "/swiss-alps.jpg",
      galleryImages: ["/swiss-1.jpg", "/swiss-2.jpg", "/swiss-3.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/swiss-alps-luxury" },
      secondary: { label: "View Details", action: "/tours/swiss-alps-luxury" }
    }
  },
  {
    id: "japanese-heritage",
    priority: 2,
    badge: "Trending",
    destination: {
      country: "Japan",
      cityRoute: "Tokyo → Kyoto → Osaka",
      travelTheme: "Cultural Immersion Journey"
    },
    duration: {
      days: 12,
      nights: 11
    },
    bestSeason: ["March", "April", "October", "November"],
    difficultyLevel: "Easy",
    pricing: {
      currency: "USD",
      originalPrice: 12500,
      discountedPrice: 10999,
      perPerson: true
    },
    smartChart: {
      rating: 4.8,
      popularityScore: 95,
      valueForMoney: 88
    },
    highlights: [
      "Private tea ceremony with Kyoto masters",
      "Exclusive ryokan stays with onsen",
      "Behind-the-scenes geisha district tour",
      "Bullet train first-class experience"
    ],
    trustIndicators: {
      totalBookings: 1876,
      totalReviews: 1542,
      verified: true
    },
    visuals: {
      coverImage: "/japan-heritage.jpg",
      galleryImages: ["/japan-1.jpg", "/japan-2.jpg", "/japan-3.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/japanese-heritage" },
      secondary: { label: "Get Quote", action: "/quote/japanese-heritage" }
    }
  },
  {
    id: "african-safari-ultimate",
    priority: 3,
    badge: "Best Value",
    destination: {
      country: "Tanzania & Kenya",
      cityRoute: "Serengeti → Ngorongoro → Maasai Mara",
      travelTheme: "Ultimate Safari Adventure"
    },
    duration: {
      days: 10,
      nights: 9
    },
    bestSeason: ["June", "July", "August", "September", "October"],
    difficultyLevel: "Moderate",
    pricing: {
      currency: "USD",
      originalPrice: 15999,
      discountedPrice: 13499,
      perPerson: true
    },
    smartChart: {
      rating: 4.9,
      popularityScore: 94,
      valueForMoney: 96
    },
    highlights: [
      "Witness the Great Migration",
      "Luxury tented camps under the stars",
      "Private hot air balloon safari",
      "Exclusive wildlife conservation experience"
    ],
    trustIndicators: {
      totalBookings: 1234,
      totalReviews: 987,
      verified: true
    },
    visuals: {
      coverImage: "/african-safari.jpg",
      galleryImages: ["/safari-1.jpg", "/safari-2.jpg", "/safari-3.jpg"]
    },
    cta: {
      primary: { label: "Reserve Spot", action: "/book/african-safari" },
      secondary: { label: "View Details", action: "/tours/african-safari" }
    }
  },
  {
    id: "maldives-paradise",
    priority: 4,
    badge: "Limited Spots",
    destination: {
      country: "Maldives",
      cityRoute: "Male → North Atoll → Private Island",
      travelTheme: "Tropical Paradise Retreat"
    },
    duration: {
      days: 7,
      nights: 6
    },
    bestSeason: ["November", "December", "January", "February", "March"],
    difficultyLevel: "Easy",
    pricing: {
      currency: "USD",
      originalPrice: 9999,
      discountedPrice: 8499,
      perPerson: true
    },
    smartChart: {
      rating: 4.95,
      popularityScore: 97,
      valueForMoney: 89
    },
    highlights: [
      "Overwater villa with private pool",
      "Private sunset dolphin cruise",
      "Underwater restaurant dining",
      "Personalized spa treatments"
    ],
    trustIndicators: {
      totalBookings: 892,
      totalReviews: 756,
      verified: true
    },
    visuals: {
      coverImage: "/maldives.jpg",
      galleryImages: ["/maldives-1.jpg", "/maldives-2.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/maldives" },
      secondary: { label: "View Details", action: "/tours/maldives" }
    }
  },
  {
    id: "greece-santorini",
    priority: 5,
    badge: "Trending",
    destination: {
      country: "Greece",
      cityRoute: "Athens → Mykonos → Santorini",
      travelTheme: "Mediterranean Romance"
    },
    duration: {
      days: 9,
      nights: 8
    },
    bestSeason: ["May", "June", "September", "October"],
    difficultyLevel: "Easy",
    pricing: {
      currency: "USD",
      originalPrice: 7499,
      discountedPrice: 6299,
      perPerson: true
    },
    smartChart: {
      rating: 4.85,
      popularityScore: 93,
      valueForMoney: 91
    },
    highlights: [
      "Private yacht sunset cruise",
      "Exclusive wine tasting in Santorini",
      "Ancient ruins private guided tours",
      "Boutique cave hotel experience"
    ],
    trustIndicators: {
      totalBookings: 2134,
      totalReviews: 1678,
      verified: true
    },
    visuals: {
      coverImage: "/greece-santorini.jpg",
      galleryImages: ["/greece-1.jpg", "/greece-2.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/greece" },
      secondary: { label: "View Details", action: "/tours/greece" }
    }
  },
  {
    id: "peru-machu-picchu",
    priority: 6,
    badge: "Best Value",
    destination: {
      country: "Peru",
      cityRoute: "Lima → Cusco → Machu Picchu",
      travelTheme: "Ancient Wonders Expedition"
    },
    duration: {
      days: 11,
      nights: 10
    },
    bestSeason: ["April", "May", "September", "October"],
    difficultyLevel: "Challenging",
    pricing: {
      currency: "USD",
      originalPrice: 6999,
      discountedPrice: 5499,
      perPerson: true
    },
    smartChart: {
      rating: 4.75,
      popularityScore: 89,
      valueForMoney: 94
    },
    highlights: [
      "Sunrise at Machu Picchu",
      "Luxury Belmond train journey",
      "Sacred Valley private exploration",
      "Authentic Peruvian culinary experience"
    ],
    trustIndicators: {
      totalBookings: 1567,
      totalReviews: 1234,
      verified: true
    },
    visuals: {
      coverImage: "/peru-machu-picchu.jpg",
      galleryImages: ["/peru-1.jpg", "/peru-2.jpg"]
    },
    cta: {
      primary: { label: "Reserve Spot", action: "/book/peru" },
      secondary: { label: "View Details", action: "/tours/peru" }
    }
  },
  {
    id: "iceland-aurora",
    priority: 7,
    badge: "Limited Spots",
    destination: {
      country: "Iceland",
      cityRoute: "Reykjavik → Golden Circle → South Coast",
      travelTheme: "Arctic Aurora Adventure"
    },
    duration: {
      days: 8,
      nights: 7
    },
    bestSeason: ["September", "October", "February", "March"],
    difficultyLevel: "Moderate",
    pricing: {
      currency: "USD",
      originalPrice: 8999,
      discountedPrice: 7299,
      perPerson: true
    },
    smartChart: {
      rating: 4.9,
      popularityScore: 91,
      valueForMoney: 87
    },
    highlights: [
      "Northern Lights private chase",
      "Blue Lagoon exclusive access",
      "Glacier hiking adventure",
      "Luxury wilderness lodges"
    ],
    trustIndicators: {
      totalBookings: 987,
      totalReviews: 823,
      verified: true
    },
    visuals: {
      coverImage: "/iceland-aurora.jpg",
      galleryImages: ["/iceland-1.jpg", "/iceland-2.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/iceland" },
      secondary: { label: "View Details", action: "/tours/iceland" }
    }
  },
  {
    id: "dubai-luxury",
    priority: 8,
    badge: "Most Booked",
    destination: {
      country: "Dubai",
      cityRoute: "Dubai → Abu Dhabi → Desert Safari",
      travelTheme: "Ultra Luxury Experience"
    },
    duration: {
      days: 6,
      nights: 5
    },
    bestSeason: ["November", "December", "January", "February", "March"],
    difficultyLevel: "Easy",
    pricing: {
      currency: "USD",
      originalPrice: 11999,
      discountedPrice: 9999,
      perPerson: true
    },
    smartChart: {
      rating: 4.8,
      popularityScore: 96,
      valueForMoney: 85
    },
    highlights: [
      "Burj Khalifa VIP experience",
      "Desert glamping under stars",
      "Private yacht Dubai Marina cruise",
      "Michelin-starred dining tour"
    ],
    trustIndicators: {
      totalBookings: 3421,
      totalReviews: 2876,
      verified: true
    },
    visuals: {
      coverImage: "/dubai-luxury.jpg",
      galleryImages: ["/dubai-1.jpg", "/dubai-2.jpg"]
    },
    cta: {
      primary: { label: "Book Now", action: "/book/dubai" },
      secondary: { label: "View Details", action: "/tours/dubai" }
    }
  }
];
