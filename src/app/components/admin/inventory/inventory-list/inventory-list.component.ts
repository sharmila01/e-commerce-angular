import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../../../services/admin-services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent {
  inventory: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.getInventory().subscribe(data => {
      this.inventory = data;
    });
  }
}
