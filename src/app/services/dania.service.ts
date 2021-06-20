import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dania } from '../models/dania';

const baseUrl = 'https://localhost:44382/api/Danias'

@Injectable({
  providedIn: 'root'
})
export class DaniaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getById(idD: number){
    return this.http.get(`${baseUrl}/${idD}`);
  }

  create(Dania: Dania){
    return this.http.post(baseUrl, Dania);
  }

  update(id: number ,Dania: Dania){
    return this.http.put(`${baseUrl}/${id}`, Dania);
  }

  deleteById(idD: number){
    return this.http.delete(`${baseUrl}/${idD}`);
  }

}

