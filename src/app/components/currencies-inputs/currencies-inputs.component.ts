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

  currencies: ICurrency[];
  firstForm: FormGroup;
  secondForm: FormGroup;
  fromCurrency: number = 1;
  toCurrency: number = 840;
  fromValue: number;
  toValue: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this._createFirstForm();
    this._createSecondForm();
    this.dataService.storage.subscribe(value => {
      value.push({r030: 1, txt: "Гривня", rate: 1, cc: "UAH", exchangedate: ""});
      this.currencies = value;
    })
  }

  _createFirstForm(): void {
    this.firstForm = new FormGroup({
      input: new FormControl(0),
      select: new FormControl(),
    })
  }

  _createSecondForm(): void {
    this.secondForm = new FormGroup({
      input: new FormControl(0),
      select: new FormControl(),
    })
  }

  convert(direction: boolean): void {
    const {input, select} = this.firstForm.getRawValue();
    this.fromValue = input;
    this.fromCurrency = +select;
    this.toCurrency = +this.secondForm.getRawValue().select;
    const to = this.currencies.find(value => value.r030 === this.toCurrency) as ICurrency;
    const from = this.currencies.find(value => value.r030 === this.fromCurrency) as ICurrency;
    if (direction) {
      this.toValue = this.fromValue * (from.rate / to.rate);
      this.secondForm.setValue({
        input: this.toValue,
        select: to.r030
      })
    } else if (!direction) {
      this.toValue = +this.secondForm.getRawValue().input;
      this.fromValue = this.toValue * (to.rate / from.rate);
      this.firstForm.setValue({
        input: this.fromValue,
        select: from.r030
      })
    }
  }
}
