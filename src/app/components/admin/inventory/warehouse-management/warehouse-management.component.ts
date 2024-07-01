import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../../../services/admin-services/inventory.service';

@Component({
  selector: 'app-warehouse-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse-management.component.html',
  styleUrl: './warehouse-management.component.scss'
})
export class WarehouseManagementComponent {
  warehouses: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.loadWarehouses();
  }

  loadWarehouses() {
    this.inventoryService.getWarehouses().subscribe(data => {
      this.warehouses = data;
    });
  }

  addWarehouse(name: string) {
    this.inventoryService.addWarehouse({ name }).subscribe(() => {
      this.loadWarehouses();
    });
  }
}
