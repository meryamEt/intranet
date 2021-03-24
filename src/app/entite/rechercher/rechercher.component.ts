import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entite } from 'src/app/Model/Entite';
import { ServiceService} from "../../Service/service.service"

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
Entite:Entite[]
  constructor( private secrvice: ServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.secrvice.getEntite()
    .subscribe(data=>{
      this.Entite=data;
    })

  }

}
