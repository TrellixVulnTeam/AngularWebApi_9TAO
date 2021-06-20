import { Klienci } from "./klienci"
import { Dania } from "./dania"

export interface Zamowienia{
    idZam: number,
    klient?: Klienci,
    nrKlienta: number,
    imie: string,
    danie?: Dania,
    idD: number,
    nazwa: string,
    cena: number,
    zakonczone: boolean,
}