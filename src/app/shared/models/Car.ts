import {Country} from "./Country";

export class Car {
  id: number;
  model: string;
  brand: string;
  year: number;
  country: Country;

  constructor(id: number, model: string, brand: string, year: number, country: Country) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.country = country;
  }
}
