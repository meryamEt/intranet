import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Entite} from '../Model/Entite'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
    url:'http//localhost:8080/IntranetIntelcom/Entite';

    getEntite(){
      return this.http.get<Entite[]>(this.url);

   }
}
