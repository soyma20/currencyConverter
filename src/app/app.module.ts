import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {CurrenciesInputsComponent} from './components/currencies-inputs/currencies-inputs.component';
import {CurrencyComponent} from './components/currency/currency.component';
import {CurrenciesComponent} from './components/currencies/currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesInputsComponent,
    CurrencyComponent,
    CurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
