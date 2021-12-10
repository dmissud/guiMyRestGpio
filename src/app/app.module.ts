import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GpioModule} from "./gpio/gpio.module";
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GpioModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
