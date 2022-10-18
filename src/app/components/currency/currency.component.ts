import {Component, Input} from '@angular/core';

import {ICurrency} from "../../interfaces/ICurrency";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  @Input()
  currency:ICurrency;
}
