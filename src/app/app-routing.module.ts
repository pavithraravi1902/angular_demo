import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './component-demo/container/container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CafeCoffeeComponent } from './cafe-coffee/cafe-coffee.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [
  {
    path: "happy-pills",
    component: FoodListComponent
  },
  {
    path: "home",
    component: ContainerComponent
  },
  {
    path: "cafe-coffee",
    component: CafeCoffeeComponent
  },
  {
    path: "toys",
    component: ToysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
