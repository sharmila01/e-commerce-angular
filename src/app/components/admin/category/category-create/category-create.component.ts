import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/admin-services/category.service';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.scss'
})
export class CategoryCreateComponent {
  category: any = {};
  selectedFile: File | null = null;

  constructor(private categoryService: CategoryService, private router: Router) { }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  createCategory() {
    const formData = new FormData();
    formData.append('name', this.category.name);
    formData.append('description', this.category.description);
    if (this.category.parentCategory) {
      formData.append('parentCategory', this.category.parentCategory);
    }
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.categoryService.createCategory(formData).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}
