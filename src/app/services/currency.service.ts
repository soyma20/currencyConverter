import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICurrency} from "../interfaces/ICurrency";
import {API} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient:HttpClient) {

  }
  getCurrencies(): Observable<ICurrency[]>{
    return this.httpClient.get<ICurrency[]>(API)
  }

}
