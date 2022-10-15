import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/ICurrency";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input()
  currency:ICurrency;

  constructor() {}

  ngOnInit(): void {
  }

}
