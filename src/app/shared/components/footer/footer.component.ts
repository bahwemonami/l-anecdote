import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESTAURANT_INFO } from '../../../data/restaurant.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  restaurant = RESTAURANT_INFO;
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'La Carte', path: '/menu' },
    { label: 'Galerie', path: '/gallery' },
    { label: 'Avis', path: '/reviews' },
    { label: 'Contact', path: '/contact' }
  ];
}
