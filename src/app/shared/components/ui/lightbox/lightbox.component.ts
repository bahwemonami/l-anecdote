import { Component, Input, Output, EventEmitter, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GalleryImage } from '../../../../data/gallery.data';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  private platformId = inject(PLATFORM_ID);
  
  @Input() images: GalleryImage[] = [];
  @Input() set currentIndex(value: number) {
    this._currentIndex.set(value);
  }
  @Input() isOpen = false;
  
  @Output() close = new EventEmitter<void>();
  @Output() indexChange = new EventEmitter<number>();

  _currentIndex = signal(0);
  isLoading = signal(true);

  get currentImage(): GalleryImage | null {
    return this.images[this._currentIndex()] || null;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.isOpen) return;
    
    switch (event.key) {
      case 'Escape':
        this.onClose();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
      case 'ArrowRight':
        this.next();
        break;
    }
  }

  onClose(): void {
    this.close.emit();
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  prev(): void {
    const newIndex = this._currentIndex() > 0 
      ? this._currentIndex() - 1 
      : this.images.length - 1;
    this._currentIndex.set(newIndex);
    this.indexChange.emit(newIndex);
    this.isLoading.set(true);
  }

  next(): void {
    const newIndex = this._currentIndex() < this.images.length - 1 
      ? this._currentIndex() + 1 
      : 0;
    this._currentIndex.set(newIndex);
    this.indexChange.emit(newIndex);
    this.isLoading.set(true);
  }

  onImageLoad(): void {
    this.isLoading.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox__backdrop')) {
      this.onClose();
    }
  }
}
