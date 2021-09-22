import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListingComponent } from './main-listing/main-listing.component';


const routes: Routes = [
  {path: '', component: MainListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainListingModuleRoutingModule { }
