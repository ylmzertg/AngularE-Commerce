import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/IPagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl =environment.apiUrl;

  constructor(private http : HttpClient) { }

  getProducts(shopParams: ShopParams){

   let params = new HttpParams();

   if(shopParams.brandId !== 0 ){
     params = params.append('brandId',shopParams.brandId.toString());
   }

   if(shopParams.typeId  !== 0 ){
     params = params.append('typeId',shopParams.typeId.toString());
   }

    if(shopParams.search){
      params = params.append('search',shopParams.search);
    }

   params = params.append('sort', shopParams.sort);
   params = params.append('pageIndex',shopParams.pageNumber.toString());
   params = params.append('padeIndex',shopParams.pageSize.toString());
   

    return this.http.get<IPagination>(this.baseUrl + 'Products',{observe: 'response' ,params})
    .pipe(
        map(response =>{
              return response.body;
        })
    );
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl + 'products/'+ id);
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
