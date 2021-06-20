import { identifierModuleUrl } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Platnosc } from 'src/app/models/platnosci';
import { PlatnosciService } from 'src/app/services/platnosci.service';

@Component({
  selector: 'app-platnosci',
  templateUrl: './platnosci.component.html',
  styleUrls: ['./platnosci.component.css']
})
export class PlatnosciComponent implements OnInit {
  
  platnosc: any;
  currentIndex = -1;
  currentPlatnosc: Platnosc ={
    idP: 0,
    rodzajP: '',
  }

  constructor(private platnosciService: PlatnosciService) { }

  ngOnInit(): void {
    this.retrivePlatnosci();
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
  setActivePlatnosc(idP: number): void {
    this.currentIndex = idP;
  }

  remove(id: number){
    this.platnosciService.deleteById(id)
    .subscribe(
      Response =>{
        console.log(Response);
        this.retrivePlatnosci();
      }
    );
  }

  createPlatnosc(){
    const buffer: Platnosc ={
      rodzajP: this.currentPlatnosc.rodzajP,
      idP: this.currentPlatnosc.idP
    };

    this.platnosciService.create(buffer)
      .subscribe( Response => {
        console.log(Response);
        this.retrivePlatnosci();
      },
      error => console.log(error)
      );
  } 

}
