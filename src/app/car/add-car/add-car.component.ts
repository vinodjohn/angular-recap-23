import { Component } from '@angular/core';
import {Car} from "../../shared/models/Car";
import {Country} from "../../shared/models/Country";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  cars: Car[] = [];

  name: string = '';
  manufacturer: string = '';

  addCar(carForm: any) {
    this.cars.push(new Car(0, this.name, this.manufacturer, 2023, new Country(23, "Estonia")));
    carForm.reset();
  }
}
