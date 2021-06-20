import { Component, OnInit } from '@angular/core';
import { Klienci } from 'src/app/models/klienci';
import { KilenciService } from 'src/app/services/kilenci.service';
import { PlatnosciService } from 'src/app/services/platnosci.service';

@Component({
  selector: 'app-add-klienci',
  templateUrl: './add-klienci.component.html',
  styleUrls: ['./add-klienci.component.css']
})
export class AddKlienciComponent implements OnInit {

  constructor(private addKlientService: KilenciService, private platnosciService: PlatnosciService) { }

  platnosc: any = [];
  Klient: Klienci = {
    nrKlienta: 0,
    imie: '',
    rodzajP: '',
   }

  ngOnInit(): void {
    this.retrivePlatnosci();
  }

  saveKlient(){
    const buffer: Klienci ={
      nrKlienta: this.Klient.nrKlienta,
      imie: this.Klient.imie,
      rodzajP: this.Klient.rodzajP,
    };

    this.addKlientService.create(buffer)
      .subscribe( Response => {
        console.log(Response);
        location.href = 'http://localhost:4200/klienci'
      },
      error => console.log(error)
      );
  }

  retrivePlatnosci(): void{
    this.platnosciService.getAll()
    .subscribe(
      data =>{
        this.platnosc = data;
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
}
}
