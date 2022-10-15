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
      const filter = value.filter((value1) => value1.base_ccy =="UAH");
      this.currencies = filter
      this.dataService.storage.next(filter)
    })
  }

}
