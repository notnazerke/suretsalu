import { Injectable } from '@angular/core';
import { Product} from './product';
import { HttpClient } from '@angular/common/http';
import {Order} from './order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart( product: any) {
    this.cartItems.push(product);
  }

  getItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }

  createOrder(customer: number, product: Array<number>, note: string):Observable<Order>{
    return this.http.post<Order>("http://127.0.0.1:8000/core/orders/",{customer, product, note});
  }

  getOrdersById(id: number):Observable<Order[]>{
    return this.http.get<Order[]>(`http://127.0.0.1:8000/core/orders/${id}/`);
  }

  deleteOrder(id: any):Observable<Order>{
    return this.http.delete<Order>(`http://127.0.0.1:8000/core/orders/${parseInt(localStorage.getItem('userId')!)}/${id}/`);
  }
}
