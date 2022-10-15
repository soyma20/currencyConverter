import {Component, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/ICurrency";
import {CurrencyService} from "../../services/currency.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: ICurrency[];

  constructor(private service: CurrencyService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.service.getCurrencies().subscribe(value => {
      this.currencies = value
      this.dataService.storage.next(value)
      console.log(value)
    })
  }

}
