import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {ICurrency} from "../../interfaces/ICurrency";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-currencies-inputs',
  templateUrl: './currencies-inputs.component.html',
  styleUrls: ['./currencies-inputs.component.css']
})
export class CurrenciesInputsComponent implements OnInit {

  hryvnia: ICurrency = {r030: 1, txt: "Гривня", rate: 1, cc: "UAH", exchangedate: ""}
  currencies: ICurrency[];
  firstForm: FormGroup;
  secondForm: FormGroup;
  fromCurrency: number = 1;
  toCurrency: number = 840;
  fromValue: number;
  toValue: number;


  constructor(private dataService: DataService) {
    this._createFirstForm();
    this._createSecondForm();
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      value.push(this.hryvnia);
      this.currencies = value;
    })
  }

  _createFirstForm(): void {
    this.firstForm = new FormGroup({
      input: new FormControl(),
      select: new FormControl(),
    })
  }

  _createSecondForm(): void {
    this.secondForm = new FormGroup({
      input: new FormControl(),
      select: new FormControl(),
    })
  }

  convertFromValue(event: Event) {
    this.fromValue = +(event.target as HTMLInputElement).value
    const from = this.currencies.find(value => value.r030 === this.fromCurrency);
    const to = this.currencies.find(value => value.r030 === this.toCurrency);
    // @ts-ignore
    this.toValue = this.fromValue * (from.rate / to.rate);
      this.secondForm.setValue({
        input: this.toValue,
        // @ts-ignore
        select: to.r030
      })
  }


  convertToValue(event: Event) {
    this.toValue = +(event.target as HTMLInputElement).value
    const to = this.currencies.find(value => value.r030 === this.toCurrency);
    const from = this.currencies.find(value => value.r030 === this.fromCurrency);
    // @ts-ignore
    this.fromValue = this.toValue * (to.rate /from.rate);
    this.firstForm.setValue({
      input: this.fromValue,
      // @ts-ignore
      select: from.r030
    })
  }

  convertFromCurrency(event: Event) {
    this.fromCurrency = +(event.target as HTMLInputElement).value
    const from = this.currencies.find(value => value.r030 === this.fromCurrency);
    const to = this.currencies.find(value => value.r030 === this.toCurrency);
    // @ts-ignore
    this.toValue = this.fromValue * (from.rate / to.rate);
    this.secondForm.setValue({
      input: this.toValue,
      // @ts-ignore
      select: to.r030
    })
  }


  convertToCurrency(event: Event) {
    this.toCurrency = +(event.target as HTMLInputElement).value
    const from = this.currencies.find(value => value.r030 === this.fromCurrency);
    const to = this.currencies.find(value => value.r030 === this.toCurrency);
    // @ts-ignore
    this.toValue = this.fromValue * (from.rate / to.rate);
    this.secondForm.setValue({
      input: this.toValue,
      // @ts-ignore
      select: to.r030
    })
  }
}
