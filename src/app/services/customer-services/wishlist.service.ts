import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WishlistItem } from '../../models/customer-models/wishlist-item.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: WishlistItem[] = [];
  private wishlistSubject: BehaviorSubject<WishlistItem[]> = new BehaviorSubject<WishlistItem[]>([]);

  constructor() {}

  getWishlistItems(): Observable<WishlistItem[]> {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(item: WishlistItem): void {
    const existingItem = this.wishlistItems.find(w => w.productId === item.productId);
    if (!existingItem) {
      this.wishlistItems.push(item);
      this.wishlistSubject.next(this.wishlistItems);
    }
  }

  removeFromWishlist(productId: number): void {
    this.wishlistItems = this.wishlistItems.filter(item => item.productId !== productId);
    this.wishlistSubject.next(this.wishlistItems);
  }

  clearWishlist(): void {
    this.wishlistItems = [];
    this.wishlistSubject.next(this.wishlistItems);
  }
}
