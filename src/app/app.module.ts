import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CurrenciesInputsComponent} from './components/currencies-inputs/currencies-inputs.component';
import {ReactiveFormsModule} from "@angular/forms";
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
