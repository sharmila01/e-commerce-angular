import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../services/admin-services/category.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  id!: number;
  category: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.id).subscribe(data => {
      this.category = data;
    });
  }
}
