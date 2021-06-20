import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatnosciComponent } from './components/platnosci/platnosci.component';
import { KlienciComponent } from './components/klienci/klienci.component';
import { AddKlienciComponent } from './components/add-klienci/add-klienci.component';
import { DaniaComponent } from './components/dania/dania.component';
import { AddDaniaComponent } from './components/add-dania/add-dania.component';
import { ZamowieniaComponent } from './components/zamowienia/zamowienia.component';
import { AddZamowieniaComponent } from './components/add-zamowienia/add-zamowienia.component';

const routes: Routes = [
  { path: 'platnosci', component: PlatnosciComponent },
  { path: 'klienci', component: KlienciComponent },
  { path: 'add-klient', component: AddKlienciComponent},
  { path: 'dania', component: DaniaComponent},
  { path: 'add-dania', component: AddDaniaComponent},
  { path: 'zamowienia', component: ZamowieniaComponent},
  { path: 'add-zamowienia', component: AddZamowieniaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
