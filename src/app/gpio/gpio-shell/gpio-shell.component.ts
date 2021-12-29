import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {State} from "../state/gpio.reducer";
import * as GpioActions from "../state/gpio.actions";

@Component({
  selector: 'app-gpio-shell',
  templateUrl: './gpio-shell.component.html',
  styleUrls: ['./gpio-shell.component.scss']
})
export class GpioShellComponent implements OnInit {

  toppings: FormGroup;

  constructor(private store: Store<State>, fb: FormBuilder) {
    this.toppings = fb.group({
      fullInformation: false
    });
  }

  ngOnInit(): void {
  }

  checkChanged(): void {
    this.store.dispatch(GpioActions.toggleFullInformation());
  }

}
