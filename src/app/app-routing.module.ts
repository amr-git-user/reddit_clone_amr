import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren: () => import('./components/main-listing-module/main-listing-module.module').then(mod => mod.MainListingModuleModule)},
  {path:'post/:post-id', loadChildren: () => import('./components/post-module/post-module.module').then(mod => mod.PostModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
