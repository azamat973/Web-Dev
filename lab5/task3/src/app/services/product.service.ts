import { Injectable } from '@angular/core';
import { Category } from '../shared/models/category.models';
import { Product } from '../shared/models/product.model';

import { CATEGORIES, PRODUCTS } from '../shared/data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [];
  private products: Product[] = [];

  constructor() {
    
    this.categories = CATEGORIES;
    this.products = PRODUCTS;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  deleteProduct(productId: number): boolean {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }

  likeProduct(productId: number): boolean {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
      return true;
    }
    return false;
  }
}