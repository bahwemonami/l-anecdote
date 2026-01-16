import { Component, AfterViewInit, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GalleryImage, GalleryCategory } from '../../data/gallery.data';
import { LightboxComponent } from '../../shared/components/ui/lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  
  images = GALLERY_IMAGES;
  categories = GALLERY_CATEGORIES;
  
  activeCategory = signal<GalleryCategory>('all');
  lightboxOpen = signal(false);
  currentImageIndex = signal(0);

  get filteredImages(): GalleryImage[] {
    const category = this.activeCategory();
    if (category === 'all') return this.images;
    return this.images.filter(img => img.category === category);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  setCategory(category: GalleryCategory): void {
    this.activeCategory.set(category);
  }

  openLightbox(index: number): void {
    this.currentImageIndex.set(index);
    this.lightboxOpen.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  onIndexChange(index: number): void {
    this.currentImageIndex.set(index);
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
