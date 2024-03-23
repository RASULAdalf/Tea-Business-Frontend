import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyingPageRoutingModule } from './buying-page-routing.module';
import { BuyingPageComponent } from './buying-page.component';


@NgModule({
  declarations: [
    BuyingPageComponent
  ],
  imports: [
    CommonModule,
    BuyingPageRoutingModule
  ]
})
export class BuyingPageModule { }
