import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produt-details',
  templateUrl: './produt-details.component.html',
  styleUrls: ['./produt-details.component.css']
})
export class ProdutDetailsComponent implements OnInit {

  product: IProduct;

  constructor(private shopService : ShopService , private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe( pro => {
        this.product = pro;
    }),error=>{
      console.log(error);
    }
  }

}
