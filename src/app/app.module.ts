import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

import '@abgov/web-components';

import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, CurrencyMaskModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
