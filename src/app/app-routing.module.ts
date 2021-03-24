import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterComponent } from './entite/ajouter/ajouter.component';
import { ModifierComponent } from './entite/modifier/modifier.component';
import { RechercherComponent } from './entite/rechercher/rechercher.component';


const routes: Routes = [
  {path:'lister',component:RechercherComponent},
  { path: 'AjouterEntite', component: AjouterComponent, data: { state: 'connection' } },
  { path: 'ModiferEntite', component: ModifierComponent, data: { state: 'connection' } },
  { path: 'RechercherEntite', component: RechercherComponent, data: { state: 'connection' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
