import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, Basket, IBasketItem } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;
  basket: Basket; 

  constructor(private basketService: BasketService) { } 

  ngOnInit(): void {
  this.basket$ = this.basketService.basket$;
  this.basket$.subscribe(response=>{
    this.basket = response;
    console.log("Subscribe Log ",this.basket);
  });
  }

  removeBasketItem(item:IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item:IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item:IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }
}
