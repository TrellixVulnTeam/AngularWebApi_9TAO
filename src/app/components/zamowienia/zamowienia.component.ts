import { Component, OnInit } from '@angular/core';
import { Zamowienia } from 'src/app/models/zamowienia';
import { ZamowieniaService } from 'src/app/services/zamowienia.service';
import { DaniaService } from 'src/app/services/dania.service';
import { KilenciService } from 'src/app/services/kilenci.service';
import { Klienci } from 'src/app/models/klienci';
import { Dania } from 'src/app/models/dania';

@Component({
  selector: 'app-zamowienia',
  templateUrl: './zamowienia.component.html',
  styleUrls: ['./zamowienia.component.css']
})
export class ZamowieniaComponent implements OnInit {

  constructor(private zamowieniaService: ZamowieniaService,private daniaService: DaniaService,private klienciService: KilenciService) { }

  klient: any = [];
  danie: any = [] ;
  zamowienie: any = [];
  show: boolean = false;
  IdZam: number = 0;
  IdKlient: number = 0;
  IdDanie: number = 0;
  Klient: Klienci = {
    nrKlienta: 0,
    imie: '',
    rodzajP: '',
  }
  Danie:  Dania ={
    idD: 0,
    nazwa: '',
    rodzaj: '',
    cena: 0,
  }
  Zamowienie: Zamowienia ={
    idZam: 0,
    nrKlienta: 0,
    imie: '',
    idD: 0,
    nazwa: '',
    cena: 0,
    zakonczone: true,
  }

  ngOnInit(): void {
    this.retriveZ()
    this.retriveK()
    this.retriveD()
  }

  retriveZ(){
    this.zamowieniaService.getAll()
    .subscribe(
      data =>{
        this.zamowienie = data as Zamowienia[];
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
  }
  retriveK(){
    this.klienciService.getAll()
    .subscribe(
      data =>{
        this.klient= data as Klienci[];
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
  }
  retriveD(){
    this.daniaService.getAll()
    .subscribe(
      data =>{
        this.danie = data as Dania[];
        console.log(data);
      },
      error =>{
        console.error();
      }   
    );
  }

  retriveId(id: number){
    this.klienciService.getById(id)
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
    this.zamowieniaService.deleteById(id)
    .subscribe(
      Response =>{
        console.log(Response);
        this.retriveZ();
      }
    );
  }

  showEdit(idz: number,idk: number, idd: number){
    this.show = true;
    this.IdZam = idz;
    this.IdKlient = idk;
    this.IdDanie = idd;
  }

  updateZamowienie(){
    const buffer: Zamowienia ={
      idZam: this.IdZam,
      nrKlienta: this.IdKlient,
      imie: this.Zamowienie.imie,
      idD: this.IdDanie,
      nazwa: this.Zamowienie.nazwa,
      cena: this.Zamowienie.cena,
      zakonczone: this.Zamowienie.zakonczone,
    };

    this.zamowieniaService.update(this.IdZam,buffer)
      .subscribe( Response => {
        console.log(Response);
        this. retriveZ();
        this.show = false;
      },
      error => console.log(error)
      );
  }

}
