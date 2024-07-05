import { Component, OnInit } from '@angular/core';
import { WishlistItem } from '../../../models/customer-models/wishlist-item.model';
import { WishlistService } from '../../../services/customer-services/wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  wishlistItems: WishlistItem[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService.getWishlistItems().subscribe((items) => {
      this.wishlistItems = items;
    });
  }

  removeFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId);
  }
}
