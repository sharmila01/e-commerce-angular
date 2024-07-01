export interface Order {
    id: number;
    customer: string;
    status: string;
    date: string;
    total: number;
    items: OrderItem[];
    customerInfo: CustomerInfo;
    shippingAddress: string;
    paymentStatus: string;
  }
  
  export interface OrderItem {
    name: string;
    quantity: number;
    price: number;
  }
  
  export interface CustomerInfo {
    name: string;
    email: string;
  }
  