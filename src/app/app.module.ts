import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatnosciComponent } from './components/platnosci/platnosci.component';
import { KlienciComponent } from './components/klienci/klienci.component';
import { AddKlienciComponent } from './components/add-klienci/add-klienci.component';
import { DaniaComponent } from './components/dania/dania.component';
import { AddDaniaComponent } from './components/add-dania/add-dania.component';
import { ZamowieniaComponent } from './components/zamowienia/zamowienia.component';
import { AddZamowieniaComponent } from './components/add-zamowienia/add-zamowienia.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatnosciComponent,
    AddKlienciComponent,
    KlienciComponent,
    DaniaComponent,
    AddDaniaComponent,
    ZamowieniaComponent,
    AddZamowieniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
