import { Order } from './../order';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-order',
  templateUrl: 'view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getMyOrders();
  }

  getMyOrders(){
    const id = parseInt(localStorage.getItem('userId')!);
    this.cartService.getOrdersById(id).subscribe(orders => this.orders = orders);
  }

  deleteOrder(id: any){
    this.cartService.deleteOrder(id).subscribe();
    window.alert('You order is removed');
  }

}
