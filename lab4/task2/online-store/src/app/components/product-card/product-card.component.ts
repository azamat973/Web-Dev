import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex = 0;

  getFullStars(): number[] {
    const fullStars = Math.floor(this.product.rating);
    return Array(fullStars).fill(0);
  }

  hasHalfStar(): boolean {
    const remainder = this.product.rating - Math.floor(this.product.rating);
    return remainder >= 0.5;
  }

  getEmptyStars(): number[] {
    const totalStars = 5;
    const fullStars = Math.floor(this.product.rating);
    const hasHalf = this.hasHalfStar();
    const emptyCount = totalStars - fullStars - (hasHalf ? 1 : 0);
    return Array(emptyCount).fill(0);
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
