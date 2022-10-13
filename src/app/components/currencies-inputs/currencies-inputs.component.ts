import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {ICurrency} from "../../interfaces/ICurrency";

@Component({
  selector: 'app-currencies-inputs',
  templateUrl: './currencies-inputs.component.html',
  styleUrls: ['./currencies-inputs.component.css']
})
export class CurrenciesInputsComponent implements OnInit {

  private currency :ICurrency;

  constructor(private service:CurrencyService) { }


  ngOnInit(): void {
    this.service.getCurrencies().subscribe(value => console.log(value))
  }


}
