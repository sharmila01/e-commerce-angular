import { Component } from '@angular/core';
import { Category } from '../../../models/admin-models/category.model';
import { CategoryService } from '../../../services/admin-services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list-customer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list-customer.component.html',
  styleUrl: './category-list-customer.component.scss'
})
export class CategoryListCustomerComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    debugger
    this.categoryService.getCategories().subscribe(categories => {
      debugger
      this.categories = categories;
      console.log(this.categories)
    });
  }
}
