import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutDetailsComponent } from './produt-details/produt-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProdutDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports : [ShopComponent]
})
export class ShopModule { }
