import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../share/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import {TopmenuComponent} from './topmenu/topmenu.component';
import {GpiopinsComponent} from './gpiopins/gpiopins.component';
import {StoreModule} from "@ngrx/store";
import { GpioShellComponent } from './gpio-shell/gpio-shell.component';

@NgModule({
  declarations: [
    TopmenuComponent,
    GpiopinsComponent,
    GpioShellComponent
  ],
    exports: [
        TopmenuComponent,
        GpiopinsComponent,
        GpioShellComponent
    ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('gpio', {})
  ],
  providers: [],
  bootstrap: [GpiopinsComponent, TopmenuComponent]
})
export class GpioModule { }
