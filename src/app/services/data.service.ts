import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICurrency} from "../interfaces/ICurrency";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage= new BehaviorSubject<ICurrency[]>([])

  constructor() { }
}
