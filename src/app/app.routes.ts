import { Routes } from '@angular/router';
import { ProductCreateComponent } from './components/admin/product/product-create/product-create.component';
import { ProductDetailsComponent } from './components/admin/product/product-details/product-details.component';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/admin/product/product-update/product-update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent }
];

