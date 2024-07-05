import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListCustomerComponent } from './category-list-customer.component';

describe('CategoryListCustomerComponent', () => {
  let component: CategoryListCustomerComponent;
  let fixture: ComponentFixture<CategoryListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
