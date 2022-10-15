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

  USD: ICurrency
  EUR: ICurrency;
  firstForm: FormGroup;
  secondForm: FormGroup;

  constructor(private dataService: DataService) {
    this._createFirstForm()
    this._createSecondForm()
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.USD = value[0];
      this.EUR = value[1];
    })
  }

  _createFirstForm(): void {
    this.firstForm = new FormGroup({
      input: new FormControl(),
      select: new FormControl('USD'),
    })
  }

  _createSecondForm(): void {
    this.secondForm = new FormGroup({
      input: new FormControl(),
      select: new FormControl('UAH'),
    })
  }

  convert(direction: boolean) {
    const firs = this.firstForm.getRawValue();
    const second = this.secondForm.getRawValue();
    if (direction) {
      if (firs.select === 'USD' && second.select === 'UAH') {
        this.secondForm.setValue({
          input: Math.round(firs.input * this.USD.buy),
          select: 'UAH',
        })
      } else if (firs.select === 'EUR' && second.select === 'UAH') {
        this.secondForm.setValue({
          input: Math.round(firs.input * this.EUR.buy),
          select: 'UAH',
        })
      } else if (firs.select === 'UAH' && second.select === 'EUR'){
        this.secondForm.setValue({
          input: Math.round(firs.input / this.EUR.sale),
          select: 'EUR',
        })
      }else if (firs.select === 'UAH' && second.select === 'USD'){
        this.secondForm.setValue({
          input: Math.round(firs.input / this.USD.sale),
          select: 'USD',
        })
      }else if (firs.select === 'UAH' && second.select === 'UAH'){
        this.secondForm.setValue({
          input: 0,
          select: 'USD',
        })
      } else {
        this.secondForm.setValue({
          input: 'We work only with hryvnia',
          select: 'UAH',
        })
      }
    } else if (!direction) {
      if (firs.select === 'USD' && second.select === 'UAH') {
        this.firstForm.setValue({
          input: Math.round(second.input / this.USD.sale) ,
          select: 'USD',
        })
      } else if (firs.select === 'EUR' && second.select === 'UAH') {
        this.firstForm.setValue({
          input: Math.round(second.input / this.EUR.sale) ,
          select: 'EUR',
        })
      }else if (firs.select === 'UAH' && second.select === 'EUR'){
        this.firstForm.setValue({
          input: Math.round(second.input * this.EUR.buy),
          select: 'UAH',
        })
      }else if (firs.select === 'UAH' && second.select === 'USD'){
        this.firstForm.setValue({
          input: Math.round(second.input * this.USD.buy),
          select: 'UAH',
        })
      }else if (firs.select === 'UAH' && second.select === 'UAH'){
        this.firstForm.setValue({
          input: 0,
          select: 'USD',
        })
      } else {
        this.secondForm.setValue({
          input: 'We work only with hryvnia',
          select: 'UAH',
        })
      }

    }

  }


}
