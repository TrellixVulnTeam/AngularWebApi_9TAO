import { Platnosc } from "./platnosci"

export interface Klienci{
    nrKlienta: number,
    imie: string,
    platnosc?: Platnosc,
    rodzajP: string,
}