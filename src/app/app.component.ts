import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taxi Rental';

  myCarCollection = ["Benz GLS", "BMW XM", "Audi A8", "Tesla Model X"];
}

