import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'currencyConverter';

  constructor() {

  }

}
