import { Component, OnInit } from '@angular/core';
import { Zamowienia } from 'src/app/models/zamowienia';
import { ZamowieniaService } from 'src/app/services/zamowienia.service';
import { KilenciService } from 'src/app/services/kilenci.service';
import { DaniaService } from 'src/app/services/dania.service';

@Component({
  selector: 'app-add-zamowienia',
  templateUrl: './add-zamowienia.component.html',
  styleUrls: ['./add-zamowienia.component.css']
})
export class AddZamowieniaComponent implements OnInit {

  constructor(private zamowieniaService: ZamowieniaService, private daniaService: DaniaService, private klienciService: KilenciService) { }

  danie: any ;
  klient: any ;
  Zamowienie: Zamowienia ={
    idZam: 0,
    nrKlienta: 0,
    imie: '',
    idD: 0,
    nazwa: '',
    cena: 0,
    zakonczone: false,
  }

  ngOnInit(): void {
    this.retrive();
    this.retriveKlineci();
  }

  dodajZamowienie(){
    const buffer: Zamowienia ={
      idZam: this.Zamowienie.idZam,
      nrKlienta: this.Zamowienie.nrKlienta,
      imie: this.Zamowienie.imie,
      idD: this.Zamowienie.idD,
      nazwa: this.Zamowienie.nazwa,
      cena: this.Zamowienie.cena,
      zakonczone: this.Zamowienie.zakonczone,
    };

    this.zamowieniaService.create(buffer)
      .subscribe( Response => {
        console.log(Response);
        location.href = 'http://localhost:4200/zamowienia'
      },
      error => console.log(error)
      );
  }
  
  retrive(){
    this.daniaService.getAll()
    .subscribe(
      data =>{
        this.danie = data;
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
  }

  retriveKlineci(){
    this.klienciService.getAll()
    .subscribe(
      data =>{
        this.klient = data;
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
  }
}
