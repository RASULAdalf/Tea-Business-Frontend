import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingPageComponent } from './buying-page.component';

const routes: Routes = [{ path: '', component: BuyingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyingPageRoutingModule { }
