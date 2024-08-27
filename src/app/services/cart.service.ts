import { Injectable } from '@angular/core';
import { ProductsResponse } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ProductsResponse[] = [];

  constructor() {
    this.loadCart();
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  addProduct(product: ProductsResponse) {
    this.cart.push(product);
    this.saveCart();
  }

  removeProducts(product: ProductsResponse) {
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }
}
