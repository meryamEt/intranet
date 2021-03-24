import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterComponent } from './entite/ajouter/ajouter.component';
import { ModifierComponent } from './entite/modifier/modifier.component';
import { RechercherComponent } from './entite/rechercher/rechercher.component';
import { AjoutercollComponent } from './collaborateur/ajoutercoll/ajoutercoll.component';
import { RecherechercollComponent } from './collaborateur/recherechercoll/recherechercoll.component';
import { ModifiercollComponent } from './collaborateur/modifiercoll/modifiercoll.component';
import{FormsModule} from '@angular/forms'
import {ServiceService} from '../app/Service/service.service';

@NgModule({
  declarations: [
    AppComponent,

    AjouterComponent,
    ModifierComponent,
    RechercherComponent,
    AjoutercollComponent,
    RecherechercollComponent,
    ModifiercollComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
