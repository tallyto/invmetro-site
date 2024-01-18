import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicosComponent} from "./servicos/servicos.component";
import {SobreComponent} from "./sobre/sobre.component";
import {FaqComponent} from "./faq/faq.component";

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: "full"},
  {path: 'inicio', component: HomeComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'duvidas', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
