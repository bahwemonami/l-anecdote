import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RESTAURANT_INFO } from '../../../data/restaurant.data';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private platformId = inject(PLATFORM_ID);
  
  restaurant = RESTAURANT_INFO;
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'La Carte', path: '/menu' },
    { label: 'Galerie', path: '/gallery' },
    { label: 'Avis', path: '/reviews' },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
