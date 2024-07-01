export interface Discount {
    id: number;
    code: string;
    amount: number; // or percentage: number
    usageLimit: number;
    expirationDate: Date;
    // Add more fields as needed
  }
  