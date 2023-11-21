import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./home/layout/home-layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("../app/home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
