import { Component, OnInit, OnDestroy, AfterViewInit, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESTAURANT_INFO, getTodayHours, isRestaurantOpen } from '../../data/restaurant.data';
import { MENU_ITEMS, getSignatureDishes } from '../../data/menu.data';
import { REVIEWS, getFeaturedReviews } from '../../data/reviews.data';
import { GALLERY_IMAGES, getRandomImages } from '../../data/gallery.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  
  restaurant = RESTAURANT_INFO;
  signatureDishes = getSignatureDishes().slice(0, 4);
  featuredReviews = getFeaturedReviews();
  galleryPreview = getRandomImages(4);
  
  todayHours = getTodayHours();
  isOpen = signal(false);
  currentReviewIndex = signal(0);
  
  private reviewInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.isOpen.set(isRestaurantOpen());
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startReviewCarousel();
      this.initScrollAnimations();
    }
  }

  ngOnDestroy(): void {
    if (this.reviewInterval) {
      clearInterval(this.reviewInterval);
    }
  }

  private startReviewCarousel(): void {
    this.reviewInterval = setInterval(() => {
      this.currentReviewIndex.update(i => 
        i < this.featuredReviews.length - 1 ? i + 1 : 0
      );
    }, 5000);
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

  setReviewIndex(index: number): void {
    this.currentReviewIndex.set(index);
    // Reset interval when manually changing
    if (this.reviewInterval) {
      clearInterval(this.reviewInterval);
      this.startReviewCarousel();
    }
  }

  getStarArray(rating: number): number[] {
    return Array(Math.round(rating / 2)).fill(0);
  }
}
