import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Klienci } from '../models/klienci';

const baseUrl = 'https://localhost:44382/api/Klients'

@Injectable({
  providedIn: 'root'
})
export class KilenciService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  } 

  getById(nrKlienta: number){
    return this.http.get(`${baseUrl}/${nrKlienta}`);
  }

  create(klienci: Klienci){
    return this.http.post(baseUrl, klienci);
  }

  update(nrKlienta: number ,klienci: Klienci){
    return this.http.put(`${baseUrl}/${nrKlienta}`, klienci);
  }

  deleteById(nrKlienta: number){
    return this.http.delete(`${baseUrl}/${nrKlienta}`);
  }
}
