// ==============================================
// REVIEWS DATA
// L'Anecdote - Paris
// ==============================================

export type ReviewSource = 'thefork' | 'google' | 'tripadvisor';

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  maxRating: number;
  date: string;
  dateFormatted: string;
  comment: string;
  source: ReviewSource;
  reviewCount?: number;
  response?: {
    author: string;
    comment: string;
    date: string;
  };
}

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    author: 'Christian V.',
    rating: 9.5,
    maxRating: 10,
    date: '2025-12-18',
    dateFormatted: '18 décembre 2025',
    comment: 'Belle surprise, couscous pour tout le monde et il était délicieux et servi généreusement ! A refaire',
    source: 'thefork',
    reviewCount: 177
  },
  {
    id: 'review-2',
    author: 'Gerald C.',
    rating: 10,
    maxRating: 10,
    date: '2025-12-12',
    dateFormatted: '12 décembre 2025',
    comment: 'Bon produit, bonne cuisine, service sympathique et prix abordable. Parfait',
    source: 'thefork',
    reviewCount: 1
  },
  {
    id: 'review-3',
    author: 'Jerome C.',
    rating: 10,
    maxRating: 10,
    date: '2025-11-04',
    dateFormatted: '4 novembre 2025',
    comment: 'Excellent accueil. Rapport qualité prix très satisfaisant.',
    source: 'thefork',
    reviewCount: 1
  },
  {
    id: 'review-4',
    author: 'Lopes P.',
    rating: 10,
    maxRating: 10,
    date: '2025-11-01',
    dateFormatted: '1 novembre 2025',
    comment: 'Excellent accueil, chaleureux. À l\'écoute. Repas excellent.',
    source: 'thefork',
    reviewCount: 1
  },
  {
    id: 'review-5',
    author: 'Morgane G.',
    rating: 9,
    maxRating: 10,
    date: '2025-10-26',
    dateFormatted: '26 octobre 2025',
    comment: 'Très bien pour un repas juste avant le départ. Merci à l\'équipe et le service. Efficace et bon. Un vrai café de Paris typique.',
    source: 'thefork',
    reviewCount: 16
  },
  {
    id: 'review-6',
    author: 'Geneviève M.',
    rating: 9,
    maxRating: 10,
    date: '2025-10-20',
    dateFormatted: '20 octobre 2025',
    comment: 'Très bonne brasserie, avec un accueil super.',
    source: 'thefork',
    reviewCount: 24
  },
  {
    id: 'review-7',
    author: 'Daniel S.',
    rating: 10,
    maxRating: 10,
    date: '2025-05-25',
    dateFormatted: '25 mai 2025',
    comment: 'Ambiance restaurant de quartier à deux pas de la gare. Cuisine maison. Très bon rapport qualité prix.',
    source: 'thefork',
    reviewCount: 3
  },
  {
    id: 'review-8',
    author: 'Adeline V.',
    rating: 10,
    maxRating: 10,
    date: '2025-05-16',
    dateFormatted: '16 mai 2025',
    comment: 'Bonne cuisine et accueil excellent',
    source: 'thefork',
    reviewCount: 7
  },
  {
    id: 'review-9',
    author: 'Patrick M.',
    rating: 10,
    maxRating: 10,
    date: '2025-05-09',
    dateFormatted: '9 mai 2025',
    comment: 'Le repas était bon et le service avenant',
    source: 'thefork',
    reviewCount: 1
  },
  {
    id: 'review-10',
    author: 'Corinne B.',
    rating: 9,
    maxRating: 10,
    date: '2025-04-17',
    dateFormatted: '17 avril 2025',
    comment: 'Petit restaurant de quartier, excellent service avec un sourire, nourriture fraîche!! Nous y retournerons certainement!!',
    source: 'thefork',
    reviewCount: 1
  },
  {
    id: 'review-11',
    author: 'Christian D.',
    rating: 8,
    maxRating: 10,
    date: '2025-04-12',
    dateFormatted: '12 avril 2025',
    comment: 'Petit bistrot parisien très sympa et personnels super',
    source: 'thefork',
    reviewCount: 118,
    response: {
      author: "L'Anecdote",
      comment: 'Merci pour votre retour ! Nous sommes ravis que vous ayez passé un bon moment chez nous au plaisir de vous revoir très bientôt',
      date: '13 avril 2025'
    }
  },
  {
    id: 'review-12',
    author: 'Marie-Claire L.',
    rating: 9,
    maxRating: 10,
    date: '2025-03-28',
    dateFormatted: '28 mars 2025',
    comment: 'Un vrai plaisir de découvrir ce petit bistrot authentique. Les plats sont généreux et savoureux, le service impeccable. Je recommande vivement le confit de canard !',
    source: 'thefork',
    reviewCount: 45
  },
  {
    id: 'review-13',
    author: 'Pierre D.',
    rating: 8.5,
    maxRating: 10,
    date: '2025-03-15',
    dateFormatted: '15 mars 2025',
    comment: 'Excellente adresse près de la gare de Lyon. Parfait pour un déjeuner rapide mais de qualité avant de prendre le train. Le tartare est délicieux !',
    source: 'thefork',
    reviewCount: 32
  }
];

// Statistics
export const REVIEW_STATS = {
  averageRating: 8.3,
  totalReviews: 28,
  ratingDistribution: {
    excellent: 18, // 9-10
    good: 7,       // 7-8.9
    average: 2,    // 5-6.9
    poor: 1        // < 5
  },
  categories: {
    ambiance: 8.1,
    food: 8.4,
    service: 8.4
  }
};

// Helper functions
export function getReviewsByRating(minRating: number): Review[] {
  return REVIEWS.filter(review => review.rating >= minRating);
}

export function getRecentReviews(count: number): Review[] {
  return [...REVIEWS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getTopReviews(count: number): Review[] {
  return [...REVIEWS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}

export function getReviewsBySource(source: ReviewSource): Review[] {
  return REVIEWS.filter(review => review.source === source);
}

export function calculateAverageRating(): number {
  const total = REVIEWS.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / REVIEWS.length) * 10) / 10;
}

// Featured reviews for homepage carousel
export function getFeaturedReviews(): Review[] {
  return REVIEWS
    .filter(review => review.rating >= 9 && review.comment.length > 50)
    .slice(0, 5);
}
