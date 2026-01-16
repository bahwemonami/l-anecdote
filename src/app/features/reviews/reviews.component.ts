import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESTAURANT_INFO } from '../../data/restaurant.data';
import { REVIEWS, REVIEW_STATS, Review } from '../../data/reviews.data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  
  restaurant = RESTAURANT_INFO;
  reviews = REVIEWS;
  stats = REVIEW_STATS;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  getStarArray(rating: number): number[] {
    return Array(Math.round(rating / 2)).fill(0);
  }

  getInitial(name: string): string {
    return name.charAt(0).toUpperCase();
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
