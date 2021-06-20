import { Component, OnInit } from '@angular/core';
import { Dania } from 'src/app/models/dania';
import { DaniaService } from 'src/app/services/dania.service';

@Component({
  selector: 'app-dania',
  templateUrl: './dania.component.html',
  styleUrls: ['./dania.component.css']
})
export class DaniaComponent implements OnInit {

  constructor(private daniaService: DaniaService) { }

  danie: any = [];
  show: boolean = false;
  IdDania: number = 0;
  Danie: Dania ={
    idD: 0,
    nazwa: '',
    rodzaj: '',
    cena: 0,
}

  ngOnInit(): void {
    this.retrive();
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
  
  remove(id: number){
    this.daniaService.deleteById(id)
    .subscribe(
      Response =>{
        console.log(Response);
        this.retrive();
      }
    );
  }
  
  showEdit(id: number){
    this.show = true;
    this.IdDania = id;
  }
  saveDanie(){
    const buffer: Dania ={
      idD: this.IdDania,
      nazwa: this.Danie.nazwa,
      rodzaj: this.Danie.rodzaj,
      cena: this.Danie.cena,
    };

    this.daniaService.update(this.IdDania,buffer)
      .subscribe( Response => {
        console.log(Response);
        this. retrive();
        this.show = false;
      },
      error => console.log(error)
      );
  }
}
