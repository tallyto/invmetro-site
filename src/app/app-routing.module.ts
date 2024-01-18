import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicosComponent} from "./servicos/servicos.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
