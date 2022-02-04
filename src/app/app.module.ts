import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component-demo/header/header.component';
import { LeftMenuComponent } from './component-demo/left-menu/left-menu.component';
import { RightMenuComponent } from './component-demo/right-menu/right-menu.component';
import { ContainerComponent } from './component-demo/container/container.component';
import { CafeCoffeeComponent } from './cafe-coffee/cafe-coffee.component';
import { ToysComponent } from './toys/toys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ContainerComponent,
    CafeCoffeeComponent,
    ToysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
