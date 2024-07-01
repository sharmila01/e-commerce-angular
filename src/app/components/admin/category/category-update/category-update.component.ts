import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CategoryService } from '../../../../services/admin-services/category.service';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.scss'
})
export class CategoryUpdateComponent {
  id!: number;
  category: any = {};
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.id).subscribe(data => {
      this.category = data;
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  updateCategory() {
    const formData = new FormData();
    formData.append('name', this.category.name);
    formData.append('description', this.category.description);
    if (this.category.parentCategory) {
      formData.append('parentCategory', this.category.parentCategory);
    }
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.categoryService.updateCategory(this.id, formData).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}
