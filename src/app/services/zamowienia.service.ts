import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Zamowienia } from '../models/zamowienia';

const baseUrl = 'https://localhost:44382/api/Zamowienies'

@Injectable({
  providedIn: 'root'
})
export class ZamowieniaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  } 

  getById(nrKlienta: number){
    return this.http.get(`${baseUrl}/${nrKlienta}`);
  }

  create(zam: Zamowienia){
    return this.http.post(baseUrl, zam);
  }

  update(idZam: number ,zam: Zamowienia){
    return this.http.put(`${baseUrl}/${idZam}`, zam);
  }

  deleteById(idZam: number){
    return this.http.delete(`${baseUrl}/${idZam}`);
  }
}
