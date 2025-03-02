import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private couponCode: string = '';
  private readonly DISCOUNT_RATE = 0.1; // 10% discount

  constructor() {}

  // Add a product to the cart
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
  }

  // Update the quantity of a product in the cart
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  // Get all items in the cart
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Calculate the total cost of items in the cart
  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // Apply a coupon code
  applyCoupon(code: string): boolean {
    this.couponCode = code;
    return this.isCouponValid();
  }

  // Check if the coupon code is valid
  isCouponValid(): boolean {
    return this.couponCode === 'DISCOUNT10'; // Example valid coupon code
  }

  // Calculate the discount
  getDiscount(): number {
    return this.isCouponValid() ? this.getTotalCost() * this.DISCOUNT_RATE : 0;
  }

  // Calculate shipping cost
  getShippingCost(): number {
    return this.getTotalCost() > 50 ? 0 : 5.99; // Free shipping for orders over $50
  }

  // Calculate the final total
  getFinalTotal(): number {
    return this.getTotalCost() - this.getDiscount() + this.getShippingCost();
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
    this.couponCode = '';
  }
}