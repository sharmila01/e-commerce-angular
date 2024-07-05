import { Component } from '@angular/core';
import { Product } from '../../../models/admin-models/product.model';
import { ProductService } from '../../../services/admin-services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../../services/customer-services/wishlist.service';
import { CartService } from '../../../services/customer-services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedBrand: string = '';
  priceRange: [number, number] = [0, 1000]; 

  constructor(private productService: ProductService,private wishlistService: WishlistService , private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  searchProducts(): void {
    this.productService.searchProducts(this.searchQuery, this.selectedCategory, this.priceRange, this.selectedBrand)
      .subscribe((products) => {
        this.products = products;
      });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      imageUrl: product.imageUrl,
      stockQuantity: product.stockQuantity,
      categoryId:product.categoryId,
      subcategoryId:product.subcategoryId
    });
  }

  addToWishlist(product: Product): void {
    this.wishlistService.addToWishlist({
      productId: product.productId,
      productName: product.name,
      productPrice: product.price,
      productImageUrl: product.imageUrl
    });
  }
}
