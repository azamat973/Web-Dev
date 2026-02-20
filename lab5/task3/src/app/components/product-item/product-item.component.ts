import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  currentImageIndex = 0;

  getFullStars(): number[] {
    const fullStars = Math.floor(this.product.rating);
    return Array(fullStars).fill(0);
  }

  hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const totalStars = 5;
    const fullStars = Math.floor(this.product.rating);
    const hasHalf = this.hasHalfStar();
    const emptyCount = totalStars - fullStars - (hasHalf ? 1 : 0);
    return Array(emptyCount).fill(0);
  }

  getRatingColor(): string {
    if (this.product.rating >= 4.6) {
      return '#28a745';
    } else if (this.product.rating >= 4.0) {
      return '#fd7e14';
    } else {
      return '#6c757d';
    }
  }

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    if (confirm('Бұл өнімді жоясыз ба?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareOnWhatsApp() {
    const text = `✅ ${this.product.name} - Kaspi.kz-да ${this.product.price}₸`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
  nextImage() {
    if (this.product.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  prevImage() {
    if (this.product.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }

  setImage(index: number) {
    this.currentImageIndex = index;
  }
}