import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../services/admin-services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.loadProducts();
    });
  }

  bulkExport() {
    this.productService.bulkExport().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'products.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  bulkImport(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.productService.bulkImport(input.files[0]).subscribe(() => {
        this.loadProducts();
      });
    }
  }

}
