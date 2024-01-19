import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicosComponent} from "./servicos/servicos.component";
import {SobreComponent} from "./sobre/sobre.component";
import {FaqComponent} from "./faq/faq.component";
import {ContatoComponent} from "./contato/contato.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'duvidas', component: FaqComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
