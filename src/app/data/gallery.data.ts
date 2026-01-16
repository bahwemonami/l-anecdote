// ==============================================
// GALLERY DATA
// L'Anecdote - Paris
// ==============================================

export type GalleryCategory = 'all' | 'dish' | 'interior' | 'atmosphere' | 'team';

export interface GalleryImage {
  id: string;
  url: string;
  thumbnail: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // ==================== INTÉRIEUR (Photos Google Maps L'Anecdote) ====================
  {
    id: 'interior-1',
    url: 'assets/images/gallery/interior-1.jpg',
    thumbnail: 'assets/images/gallery/interior-1.jpg',
    alt: 'Salle principale du restaurant L\'Anecdote avec ambiance chaleureuse',
    category: 'interior',
    caption: 'Notre salle principale chaleureuse',
    width: 1920,
    height: 1440
  },
  {
    id: 'interior-2',
    url: 'assets/images/gallery/interior-2.jpg',
    thumbnail: 'assets/images/gallery/interior-2.jpg',
    alt: 'Intérieur du restaurant L\'Anecdote - Décoration bistrot parisien',
    category: 'interior',
    caption: 'Ambiance bistrot authentique',
    width: 1920,
    height: 1440
  },
  {
    id: 'interior-3',
    url: 'assets/images/gallery/interior-3.jpg',
    thumbnail: 'assets/images/gallery/interior-3.jpg',
    alt: 'Espace bar du restaurant L\'Anecdote',
    category: 'interior',
    caption: 'Notre bar et sa sélection de vins',
    width: 1920,
    height: 1440
  },

  // ==================== PLATS ====================
  {
    id: 'dish-1',
    url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400',
    alt: 'Pièce du boucher grillée avec frites maison',
    category: 'dish',
    caption: 'Notre pièce du boucher signature',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-2',
    url: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400',
    alt: 'Tartare de bœuf préparé à la minute',
    category: 'dish',
    caption: 'Tartare de bœuf frais du jour',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-3',
    url: 'https://images.unsplash.com/photo-1535400255456-984241443b29?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1535400255456-984241443b29?w=400',
    alt: 'Confit de canard maison aux pommes sarladaises',
    category: 'dish',
    caption: 'Confit de canard maison',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-4',
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    alt: 'Cheese burger maison du restaurant',
    category: 'dish',
    caption: 'Notre cheese burger gourmand',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-5',
    url: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400',
    alt: 'Pâtes carbonara crémeuses',
    category: 'dish',
    caption: 'Carbonara à l\'italienne',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-6',
    url: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400',
    alt: 'Tomates mozzarella fraîches',
    category: 'dish',
    caption: 'Tomates mozzarella de saison',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-7',
    url: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400',
    alt: 'Crème brûlée caramélisée',
    category: 'dish',
    caption: 'Crème brûlée à la vanille',
    width: 1200,
    height: 800
  },
  {
    id: 'dish-8',
    url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400',
    alt: 'Mousse au chocolat maison',
    category: 'dish',
    caption: 'Mousse au chocolat intense',
    width: 1200,
    height: 800
  },

  // ==================== AMBIANCE (Photos Google Maps L'Anecdote) ====================
  {
    id: 'atmosphere-1',
    url: 'assets/images/gallery/ambiance-1.jpg',
    thumbnail: 'assets/images/gallery/ambiance-1.jpg',
    alt: 'Ambiance chaleureuse du restaurant L\'Anecdote',
    category: 'atmosphere',
    caption: 'Ambiance conviviale',
    width: 1920,
    height: 1440
  },
  {
    id: 'atmosphere-2',
    url: 'assets/images/gallery/ambiance-2.jpg',
    thumbnail: 'assets/images/gallery/ambiance-2.jpg',
    alt: 'Décoration intérieure du restaurant L\'Anecdote',
    category: 'atmosphere',
    caption: 'Moments de partage',
    width: 1920,
    height: 1440
  },
  {
    id: 'atmosphere-3',
    url: 'assets/images/gallery/ambiance-3.jpg',
    thumbnail: 'assets/images/gallery/ambiance-3.jpg',
    alt: 'Détails de décoration du restaurant L\'Anecdote',
    category: 'atmosphere',
    caption: 'Détails soignés',
    width: 1920,
    height: 1440
  }
];

// Gallery categories for filtering
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Toutes', count: GALLERY_IMAGES.length },
  { id: 'dish', label: 'Plats', count: GALLERY_IMAGES.filter(img => img.category === 'dish').length },
  { id: 'interior', label: 'Intérieur', count: GALLERY_IMAGES.filter(img => img.category === 'interior').length },
  { id: 'atmosphere', label: 'Ambiance', count: GALLERY_IMAGES.filter(img => img.category === 'atmosphere').length }
] as const;

// Helper functions
export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  if (category === 'all') return GALLERY_IMAGES;
  return GALLERY_IMAGES.filter(img => img.category === category);
}

export function getImageById(id: string): GalleryImage | undefined {
  return GALLERY_IMAGES.find(img => img.id === id);
}

export function getRandomImages(count: number): GalleryImage[] {
  const shuffled = [...GALLERY_IMAGES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
