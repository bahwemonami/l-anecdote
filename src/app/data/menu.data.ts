// ==============================================
// MENU DATA
// L'Anecdote - Paris
// ==============================================

export type MenuCategory = 'starter' | 'main' | 'dessert' | 'drink' | 'beer' | 'cocktail' | 'wine';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isNew?: boolean;
  supplement?: number;
  allergens?: string[];
}

export interface MenuFormula {
  id: string;
  name: string;
  description: string;
  price: number;
  includes: string[];
}

// Menu Formules
export const MENU_FORMULAS: MenuFormula[] = [
  {
    id: 'formula-1',
    name: 'Menu Midi & Soir',
    description: 'Entrée + Plat ou Plat + Dessert',
    price: 21,
    includes: ['1 entrée au choix', '1 plat au choix', 'OU', '1 plat au choix', '1 dessert au choix']
  },
  {
    id: 'formula-2',
    name: 'Menu Complet',
    description: 'Entrée + Plat + Dessert',
    price: 25,
    includes: ['1 entrée au choix', '1 plat au choix', '1 dessert au choix']
  }
];

// Menu Items
export const MENU_ITEMS: MenuItem[] = [
  // ==================== ENTRÉES ====================
  {
    id: 'starter-1',
    name: 'Tomates Mozzarella',
    description: 'Tomates fraîches de saison, mozzarella di bufala, basilic frais et filet d\'huile d\'olive',
    price: 9,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    isVegetarian: true
  },
  {
    id: 'starter-2',
    name: 'Rillettes Cornichons',
    description: 'Rillettes de porc maison accompagnées de cornichons croquants et pain grillé',
    price: 8,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800',
    isSignature: true
  },
  {
    id: 'starter-3',
    name: 'Pâté de Campagne',
    description: 'Pâté de campagne traditionnel fait maison, servi avec ses condiments',
    price: 8,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800'
  },
  {
    id: 'starter-4',
    name: 'Œufs Mimosa',
    description: 'Œufs durs garnis d\'un mélange crémeux aux herbes fraîches et dés de tomate',
    price: 7,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1482049016gy4-c78dqgi4-dsp?w=800',
    isVegetarian: true
  },

  // ==================== PLATS ====================
  {
    id: 'main-1',
    name: 'Pièce du Boucher',
    description: 'Pièce du boucher du jour, cuisson à votre convenance, accompagnée de frites maison',
    price: 16,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800',
    isSignature: true
  },
  {
    id: 'main-2',
    name: 'Tartare de Bœuf',
    description: 'Tartare de bœuf préparé à la minute selon la tradition, servi avec frites maison et salade',
    price: 17,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    isSignature: true
  },
  {
    id: 'main-3',
    name: 'Wok de Légumes de Saison',
    description: 'Wok de légumes frais de saison sautés au wok, parfumés aux herbes et épices douces',
    price: 14,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    isVegetarian: true
  },
  {
    id: 'main-4',
    name: 'Andouillette Grillée',
    description: 'Andouillette AAAAA grillée, sauce moutarde à l\'ancienne et pommes de terre sautées',
    price: 16,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800'
  },
  {
    id: 'main-5',
    name: 'Fish and Chips',
    description: 'Poisson du jour en panure croustillante, frites maison et salade fraîche',
    price: 15,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800'
  },
  {
    id: 'main-6',
    name: 'Cheese Burger Maison',
    description: 'Burger maison au bœuf français, cheddar affiné, bacon croustillant et sauce secrète',
    price: 15,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800'
  },
  {
    id: 'main-7',
    name: 'Pâtes à la Carbonara',
    description: 'Pâtes fraîches à la carbonara traditionnelle, guanciale, œuf et parmesan',
    price: 14,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800'
  },
  {
    id: 'main-8',
    name: 'Confit de Canard Maison',
    description: 'Cuisse de canard confite maison, pommes de terre sarladaises',
    price: 18,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?w=800',
    supplement: 2,
    isSignature: true
  },
  {
    id: 'main-9',
    name: 'Côtes d\'Agneau',
    description: 'Côtes d\'agneau grillées à la perfection, accompagnées de frites maison',
    price: 18,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800'
  },
  {
    id: 'main-10',
    name: 'Linguine Végé',
    description: 'Linguine aux légumes du marché, pesto maison et parmesan',
    price: 14,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    isVegetarian: true
  },

  // ==================== DESSERTS ====================
  {
    id: 'dessert-1',
    name: 'Crème Caramel',
    description: 'Crème caramel onctueuse à la vanille de Madagascar',
    price: 6,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800'
  },
  {
    id: 'dessert-2',
    name: 'Crème Brûlée',
    description: 'Crème brûlée traditionnelle à la vanille bourbon, caramélisée minute',
    price: 7,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800',
    isSignature: true
  },
  {
    id: 'dessert-3',
    name: 'Mousse au Chocolat',
    description: 'Mousse au chocolat noir intense, préparée selon la recette traditionnelle',
    price: 6,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800'
  },
  {
    id: 'dessert-4',
    name: 'Tarte du Jour',
    description: 'Tarte maison du jour selon l\'inspiration du chef',
    price: 7,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800'
  },

  // ==================== BIÈRES ====================
  {
    id: 'beer-1',
    name: 'Pinte Blonde',
    description: 'Bière blonde pression',
    price: 5,
    category: 'beer'
  },
  {
    id: 'beer-2',
    name: 'Pinte Blanche',
    description: 'Bière blanche légère et rafraîchissante',
    price: 6,
    category: 'beer'
  },
  {
    id: 'beer-3',
    name: 'Pinte Leffe',
    description: 'Leffe blonde d\'abbaye',
    price: 6.5,
    category: 'beer'
  },
  {
    id: 'beer-4',
    name: 'Pinte I.P.A',
    description: 'India Pale Ale houblonnée',
    price: 7,
    category: 'beer'
  },

  // ==================== COCKTAILS ====================
  {
    id: 'cocktail-1',
    name: 'Spritz Aperol',
    description: 'Aperol, prosecco, eau gazeuse et orange',
    price: 7,
    category: 'cocktail',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800'
  },
  {
    id: 'cocktail-2',
    name: 'Mojito',
    description: 'Rhum blanc, menthe fraîche, citron vert, sucre de canne et eau gazeuse',
    price: 7,
    category: 'cocktail',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800'
  },
  {
    id: 'cocktail-3',
    name: 'Caïpirinha',
    description: 'Cachaça, citron vert et sucre de canne pilé',
    price: 7,
    category: 'cocktail'
  },
  {
    id: 'cocktail-4',
    name: 'Gin Tonic',
    description: 'Gin premium, tonic water et zeste de citron',
    price: 7,
    category: 'cocktail'
  },
  {
    id: 'cocktail-5',
    name: 'Suze Tonic',
    description: 'Suze, tonic water et zeste d\'orange',
    price: 7,
    category: 'cocktail'
  },
  {
    id: 'cocktail-6',
    name: 'Moscow Mule',
    description: 'Vodka, ginger beer et citron vert frais',
    price: 7,
    category: 'cocktail'
  },
  {
    id: 'cocktail-7',
    name: 'Ti-Punch',
    description: 'Rhum agricole, sucre de canne et citron vert',
    price: 7,
    category: 'cocktail'
  }
];

// Helper functions
export function getMenuByCategory(category: MenuCategory): MenuItem[] {
  return MENU_ITEMS.filter(item => item.category === category);
}

export function getSignatureDishes(): MenuItem[] {
  return MENU_ITEMS.filter(item => item.isSignature);
}

export function getVegetarianItems(): MenuItem[] {
  return MENU_ITEMS.filter(item => item.isVegetarian);
}

export function getStarters(): MenuItem[] {
  return getMenuByCategory('starter');
}

export function getMains(): MenuItem[] {
  return getMenuByCategory('main');
}

export function getDesserts(): MenuItem[] {
  return getMenuByCategory('dessert');
}

export function getDrinks(): MenuItem[] {
  return [...getMenuByCategory('beer'), ...getMenuByCategory('cocktail'), ...getMenuByCategory('wine')];
}

export const MENU_CATEGORIES = [
  { id: 'starter', label: 'Entrées', icon: 'utensils' },
  { id: 'main', label: 'Plats', icon: 'bowl-food' },
  { id: 'dessert', label: 'Desserts', icon: 'cake-candles' },
  { id: 'beer', label: 'Bières', icon: 'beer-mug-empty' },
  { id: 'cocktail', label: 'Cocktails', icon: 'martini-glass' }
] as const;
