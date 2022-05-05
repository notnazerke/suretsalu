export interface Order {
    id: number
    customer: number;
    product: Array<number>;
    date_created: Date;
    status: string;
    note: string;
  }
