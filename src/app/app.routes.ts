import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: "L'Anecdote - Restaurant Français à Paris | Bistrot près Gare de Lyon"
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: "À Propos - L'Anecdote | Notre Histoire"
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: "La Carte - L'Anecdote | Menu & Prix"
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent),
    title: "Galerie Photos - L'Anecdote | Plats & Ambiance"
  },
  {
    path: 'reviews',
    loadComponent: () => import('./features/reviews/reviews.component').then(m => m.ReviewsComponent),
    title: "Avis Clients - L'Anecdote | Témoignages"
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: "Contact - L'Anecdote | Nous Trouver"
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
