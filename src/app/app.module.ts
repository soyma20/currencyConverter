import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CurrenciesInputsComponent} from './components/currencies-inputs/currencies-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesInputsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
