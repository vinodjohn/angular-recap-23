import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() myCarCollection: string[] = [];

    favCar = "Mustang";

    isShowCollection = false;

    toggleShowCollection() {
      this.isShowCollection = !this.isShowCollection;
    }


    // If you want to load any data from the backend service, on the page load.
  ngOnInit(): void {
      this.favCar = "Hummer";
      this.fetchCars();
  }

  fetchCars() {
      this.myCarCollection.push("Citroen C3");
      this.myCarCollection.push("Lexus LS500");
  }
}
