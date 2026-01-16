import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private platformId = inject(PLATFORM_ID);
  private initialized = false;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initGSAP();
    }
  }

  private initGSAP(): void {
    if (this.initialized) return;
    gsap.registerPlugin(ScrollTrigger);
    this.initialized = true;
  }

  /**
   * Animate elements when they scroll into view
   */
  scrollReveal(elements: string | Element | Element[], options?: gsap.TweenVars): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    return gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: typeof elements === 'string' ? elements : elements[0] || elements,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      ...options
    });
  }

  /**
   * Create a parallax effect on an element
   */
  parallax(element: string | Element, speed: number = 0.5): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    return gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  /**
   * Fade in animation
   */
  fadeIn(element: string | Element, options?: gsap.TweenVars): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    return gsap.from(element, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    });
  }

  /**
   * Slide up animation
   */
  slideUp(element: string | Element, options?: gsap.TweenVars): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    return gsap.from(element, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      ...options
    });
  }

  /**
   * Stagger animation for multiple elements
   */
  staggerIn(elements: string | Element[], options?: gsap.TweenVars): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    return gsap.from(elements, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      ...options
    });
  }

  /**
   * Counter animation
   */
  animateCounter(
    element: Element,
    endValue: number,
    duration: number = 2,
    decimals: number = 0
  ): gsap.core.Tween | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    const counter = { value: 0 };
    return gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = counter.value.toFixed(decimals);
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }

  /**
   * Hero section animation
   */
  animateHero(container: string | Element): gsap.core.Timeline | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    const tl = gsap.timeline();
    
    tl.from(`${container} .hero__badge`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from(`${container} .hero__title`, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
    .from(`${container} .hero__subtitle`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from(`${container} .hero__rating`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .from(`${container} .hero__cta`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3');

    return tl;
  }

  /**
   * Clean up ScrollTrigger instances
   */
  killScrollTriggers(element?: string | Element): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    if (element) {
      ScrollTrigger.getAll()
        .filter(trigger => trigger.vars.trigger === element)
        .forEach(trigger => trigger.kill());
    } else {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }

  /**
   * Refresh ScrollTrigger (useful after DOM changes)
   */
  refreshScrollTrigger(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    ScrollTrigger.refresh();
  }
}
