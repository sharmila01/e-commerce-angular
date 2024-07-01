import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../../../services/admin-services/inventory.service';

@Component({
  selector: 'app-stock-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-alert.component.html',
  styleUrl: './stock-alert.component.scss'
})
export class StockAlertComponent {
  alerts: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.loadAlerts();
  }

  loadAlerts() {
    this.inventoryService.getStockAlerts().subscribe(data => {
      this.alerts = data;
    });
  }

  addAlert(productId: string, threshold: string) {
    const productIdNum = Number(productId);
    const thresholdNum = Number(threshold);

    if (!isNaN(productIdNum) && !isNaN(thresholdNum)) {
      this.inventoryService.addStockAlert({ productId: productIdNum, threshold: thresholdNum }).subscribe(() => {
        this.loadAlerts();
      });
    } else {
      alert('Please enter valid numbers for Product ID and Threshold.');
    }
  }
}
