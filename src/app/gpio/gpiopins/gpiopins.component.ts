import {Component, OnInit} from '@angular/core';
import {GpioPin} from "../gpio-pin";
import {Store} from "@ngrx/store";
import {GpioService} from "../gpio.service";


@Component({
  selector: 'app-gpiopins',
  templateUrl: './gpiopins.component.html',
  styleUrls: ['./gpiopins.component.scss']
})
export class GpiopinsComponent implements OnInit {
  gpio: GpioPin[] = [{globalName: "", name: "", address: 1, mode: "", pinName: "", state: "", type: ""}];

  displayedColumns: string[] = ['demo-name', 'demo-type', 'demo-address', 'demo-state'];
  errorMessage: string | undefined;

  constructor(private store: Store<any>, private gpioService: GpioService) {
  }

  ngOnInit(): void {
    this.gpioService.getGpio().subscribe({
      next: (gpio: GpioPin[]) => this.gpio = gpio,
      error: err => this.errorMessage = err
    });

  }

}
