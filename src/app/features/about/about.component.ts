import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESTAURANT_INFO } from '../../data/restaurant.data';
import { GALLERY_IMAGES } from '../../data/gallery.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  
  restaurant = RESTAURANT_INFO;
  interiorImages = GALLERY_IMAGES.filter(img => img.category === 'interior').slice(0, 4);

  values = [
    {
      icon: 'heart',
      title: 'Passion',
      description: 'Une équipe passionnée qui met tout son cœur dans chaque plat servi'
    },
    {
      icon: 'leaf',
      title: 'Fraîcheur',
      description: 'Des produits frais et de saison sélectionnés avec soin'
    },
    {
      icon: 'users',
      title: 'Convivialité',
      description: 'Une ambiance chaleureuse comme à la maison'
    },
    {
      icon: 'award',
      title: 'Tradition',
      description: 'Des recettes traditionnelles transmises de génération en génération'
    }
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  private initScrollAnimations(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
