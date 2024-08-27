import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CartComponent } from '../pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
