import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { orderArray } from './shared/const/allArray';
import { OrderArrayComponent } from './shared/components/order-array/order-array.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'users', component:UsersComponent},
  {path:'order',component:OrderArrayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
