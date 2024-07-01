import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/admin/product/product-details/product-details.component';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { ProductFormComponent } from './components/admin/product/product-form/product-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/update/:id', component: ProductFormComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent }
];

