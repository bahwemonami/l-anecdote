import { Component, AfterViewInit, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESTAURANT_INFO } from '../../data/restaurant.data';
import { MENU_ITEMS, MENU_FORMULAS, MENU_CATEGORIES, MenuItem, MenuCategory } from '../../data/menu.data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  
  restaurant = RESTAURANT_INFO;
  menuItems = MENU_ITEMS;
  formulas = MENU_FORMULAS;
  categories = MENU_CATEGORIES;
  
  activeCategory = signal<string>('all');
  
  get filteredItems(): MenuItem[] {
    const category = this.activeCategory();
    if (category === 'all') {
      return this.menuItems.filter(item => 
        ['starter', 'main', 'dessert'].includes(item.category)
      );
    }
    return this.menuItems.filter(item => item.category === category);
  }

  get starters(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'starter');
  }

  get mains(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'main');
  }

  get desserts(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'dessert');
  }

  get drinks(): MenuItem[] {
    return this.menuItems.filter(item => 
      ['beer', 'cocktail'].includes(item.category)
    );
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
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
