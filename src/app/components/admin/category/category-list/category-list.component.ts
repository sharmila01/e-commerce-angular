import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/admin-services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  categories: any[] = [];
  searchTerm: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  searchCategories() {
    if (this.searchTerm) {
      this.categoryService.searchCategories(this.searchTerm).subscribe(data => {
        this.categories = data;
      });
    } else {
      this.loadCategories();
    }
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
