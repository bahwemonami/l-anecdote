// ==============================================
// RESTAURANT DATA
// L'Anecdote - Paris
// ==============================================

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  full: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Contact {
  phone: string;
  phoneDisplay: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    tripadvisor?: string;
    thefork: string;
  };
}

export interface OpeningHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface Rating {
  overall: number;
  maxRating: number;
  totalReviews: number;
  categories: {
    ambiance: number;
    food: number;
    service: number;
  };
  tripadvisorRating: number;
  tripadvisorReviews: number;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  cuisine: string;
  priceRange: string;
  averagePrice: number;
  address: Address;
  contact: Contact;
  hours: OpeningHours[];
  rating: Rating;
  features: string[];
  suitableFor: string[];
  paymentMethods: string[];
  metroStation: string;
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "L'Anecdote",
  tagline: "Cuisine française traditionnelle au cœur du 12ème",
  description: `Bienvenue à L'Anecdote, un bistrot parisien authentique situé à deux pas de la Gare de Lyon. 
  Notre établissement vous accueille dans une ambiance chaleureuse et conviviale, avec ses nappes à carreaux 
  rouges et blancs typiques des brasseries parisiennes.
  
  Notre chef vous propose une cuisine française traditionnelle et généreuse, préparée avec des produits frais 
  et de saison. Des plats classiques revisités aux spécialités du jour, chaque assiette est une invitation 
  à découvrir les saveurs authentiques de la gastronomie française.
  
  Que ce soit pour un déjeuner d'affaires, un dîner en famille ou entre amis, L'Anecdote est l'adresse 
  idéale pour partager un moment gourmand dans une atmosphère décontractée.`,
  
  shortDescription: "Bistrot parisien authentique proposant une cuisine française traditionnelle et généreuse dans une ambiance chaleureuse, à deux pas de la Gare de Lyon.",
  
  cuisine: "Français",
  priceRange: "€€",
  averagePrice: 28,
  
  address: {
    street: "237 Rue de Bercy",
    city: "Paris",
    postalCode: "75012",
    country: "France",
    full: "237 Rue de Bercy, 75012 Paris",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=237+Rue+de+Bercy+75012+Paris",
    coordinates: {
      lat: 48.8448,
      lng: 2.3863
    }
  },
  
  contact: {
    phone: "+33143433030",
    phoneDisplay: "01 43 43 30 30",
    email: "contact@lanecdote-paris.fr",
    social: {
      thefork: "https://www.thefork.fr/restaurant/l-anecdote-r839905",
      tripadvisor: "https://www.tripadvisor.fr/Restaurant_Review-g187147-d1234567-Reviews-L_Anecdote-Paris_Ile_de_France.html"
    }
  },
  
  hours: [
    { day: "Lundi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Mardi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Mercredi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Jeudi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Vendredi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Samedi", hours: "11:30 - 23:00", isOpen: true },
    { day: "Dimanche", hours: "11:30 - 23:00", isOpen: true }
  ],
  
  rating: {
    overall: 8.3,
    maxRating: 10,
    totalReviews: 28,
    categories: {
      ambiance: 8.1,
      food: 8.4,
      service: 8.4
    },
    tripadvisorRating: 4.5,
    tripadvisorReviews: 67
  },
  
  features: [
    "Options végétariennes",
    "Terrasse",
    "Wifi gratuit",
    "Accessible PMR",
    "Climatisation"
  ],
  
  suitableFor: [
    "En famille",
    "Entre amis",
    "Déjeuner",
    "Dîner",
    "Repas d'affaires"
  ],
  
  paymentMethods: [
    "Carte bancaire",
    "Visa",
    "Mastercard",
    "American Express",
    "Espèces",
    "Tickets restaurant"
  ],
  
  metroStation: "Gare de Lyon"
};

// Helper function to check if restaurant is currently open
export function isRestaurantOpen(): boolean {
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const today = RESTAURANT_INFO.hours.find(h => h.day === days[dayIndex]);
  
  if (!today || !today.isOpen) return false;
  
  const [openTime, closeTime] = today.hours.split(' - ');
  const [openHour, openMin] = openTime.split(':').map(Number);
  const [closeHour, closeMin] = closeTime.split(':').map(Number);
  
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openHour * 60 + openMin;
  const closeMinutes = closeHour * 60 + closeMin;
  
  return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
}

// Get today's opening hours
export function getTodayHours(): string {
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const today = RESTAURANT_INFO.hours.find(h => h.day === days[dayIndex]);
  return today?.hours || 'Fermé';
}
