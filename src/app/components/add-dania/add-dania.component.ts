import { Component, OnInit } from '@angular/core';
import { Dania } from 'src/app/models/dania';
import { DaniaService } from 'src/app/services/dania.service';


@Component({
  selector: 'app-add-dania',
  templateUrl: './add-dania.component.html',
  styleUrls: ['./add-dania.component.css']
})
export class AddDaniaComponent implements OnInit {

  constructor(private adddaniaService: DaniaService) { }

  Danie: Dania ={
    idD: 0,
    nazwa: '',
    rodzaj: '',
    cena: 0,
  }

  ngOnInit(): void {
  }

  saveDanie(){
    const buffer: Dania ={
      idD: this.Danie.idD,
      nazwa: this.Danie.nazwa,
      rodzaj: this.Danie.rodzaj,
      cena: this.Danie.cena,
    };

    this.adddaniaService.create(buffer)
      .subscribe( Response => {
        console.log(Response);
        location.href = 'http://localhost:4200/dania'
      },
      error => console.log(error)
      );
  }
}
