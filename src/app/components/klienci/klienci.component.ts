import { Component, OnInit, Input } from '@angular/core';
import { Klienci } from 'src/app/models/klienci';
import { KilenciService } from 'src/app/services/kilenci.service';
import { PlatnosciService } from 'src/app/services/platnosci.service';


@Component({
  selector: 'app-klienci',
  templateUrl: './klienci.component.html',
  styleUrls: ['./klienci.component.css']
})

export class KlienciComponent implements OnInit {

   constructor(private klienciService: KilenciService, private platnosciService: PlatnosciService) { }

   platnosc: any = [];
   klient: any = [];
   NRklienta: number = 0;
   show: boolean = false;
   Klient: Klienci = {
    nrKlienta: 0,
    imie: '',
    rodzajP: '',
   }
   
   ngOnInit(): void {
     this.retriveKlineci();
     this.retrivePlatnosci();
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

   remove(id: number){
    this.klienciService.deleteById(id)
    .subscribe(
      Response =>{
        console.log(Response);
        this.retriveKlineci();
      }
    );
  }
  showEdit(id: number){
    this.show = true;
    this.NRklienta = id;
  }
  saveKlient(){
    const buffer: Klienci ={
      nrKlienta: this.NRklienta,
      imie: this.Klient.imie,
      rodzajP: this.Klient.rodzajP,
    };

    this.klienciService.update(this.NRklienta,buffer)
      .subscribe( Response => {
        console.log(Response);
        this. retriveKlineci();
        this.show = false;
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
