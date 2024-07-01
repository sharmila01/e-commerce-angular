import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Order } from '../../../../models/admin-models/order.model';
import { OrderService } from '../../../../services/admin-services/order.service';


@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  order: Order | null = null;
  orderId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderId = +this.route.snapshot.params['id'];
    this.loadOrderDetails();
  }

  loadOrderDetails() {
    this.orderService.getOrder(this.orderId).subscribe(data => {
      this.order = data;
    });
  }

  updateOrderStatus(status: string) {
    if (this.order) {
      this.order.status = status;
      this.orderService.updateOrder(this.order).subscribe(() => {
        this.loadOrderDetails();
      });
    }
  }

  issueRefund() {
    if (this.order) {
      this.orderService.issueRefund(this.order.id).subscribe(() => {
        this.loadOrderDetails();
      });
    }
  }
  
  generateInvoice() {
    const data = document.getElementById('invoice');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`invoice_${this.orderId}.pdf`);
      });
    }
  }
}
