import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Platnosc } from '../models/platnosci'

const baseUrl = 'https://localhost:44382/api/Platnoscs'

@Injectable({
  providedIn: 'root'
})
export class PlatnosciService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  create(platnosc: Platnosc){
    return this.http.post(baseUrl, platnosc);
  }

  deleteById(idP: number){
    return this.http.delete(`${baseUrl}/${idP}`);
  }
}
