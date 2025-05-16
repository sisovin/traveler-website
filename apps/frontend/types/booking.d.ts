export interface Booking {
  id: number;
  userId: number;
  packageId: number;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
  createdAt: string;
  updatedAt: string;
}
