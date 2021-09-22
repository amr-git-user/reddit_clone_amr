import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainListingModuleRoutingModule } from './main-listing-module-routing.module';
import { MainListingComponent } from './main-listing/main-listing.component';


@NgModule({
  declarations: [MainListingComponent],
  imports: [
    CommonModule,
    MainListingModuleRoutingModule
  ]
})
export class MainListingModuleModule { }
