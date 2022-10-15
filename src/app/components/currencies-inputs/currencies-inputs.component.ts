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
  form: FormGroup;

  constructor(private dataService: DataService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.currencies = value
    })
  }

  _createForm(): void {
    this.form = new FormGroup({
      baseCurrency: new FormControl(),
      selectBase: new FormControl('USD'),
      convertTo: new FormControl(),
      selectConvert: new FormControl('UAH'),

    })
  }

}
