import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashSaleComponent } from './components/customer/flash-sale/flash-sale.component';
import { HeaderComponent } from './components/customer/header/header.component';
import { ProductListComponent } from './components/customer/product-list/product-list.component';
import { CategoryListCustomerComponent } from './components/customer/category-list-customer/category-list-customer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CategoryListCustomerComponent,
    FlashSaleComponent,
    ProductListComponent,
  ]
})
export class AppComponent {}
