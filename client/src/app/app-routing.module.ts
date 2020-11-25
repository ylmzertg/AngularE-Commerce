import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProdutDetailsComponent } from './shop/produt-details/produt-details.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'test-error',component: TestErrorComponent},
  {path:'server-error',component: ServerErrorComponent},
  {path:'not-found',component: NotFoundComponent},
  {path:'shop',component: ShopComponent},
  {path:'shop/:id',component: ProdutDetailsComponent},
  {path: '**',redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
