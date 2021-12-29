import {Component, OnInit} from '@angular/core';
import {GpioPin} from "../gpio-pin";
import {Store} from "@ngrx/store";
import {GpioService} from "../gpio.service";
import {getProducts, getShowFullInformation, GpioState} from "../state/gpio.reducer";


@Component({
  selector: 'app-gpiopins',
  templateUrl: './gpiopins.component.html',
  styleUrls: ['./gpiopins.component.scss']
})
export class GpiopinsComponent implements OnInit {
  gpio: GpioPin[] = [{globalName: "", name: "", address: 1, mode: "", pinName: "", state: "", type: ""}];

  lowDescription: string[] = ['gpiopin-address', 'gpiopin-name'];
  fullDescription: string[] = ['gpiopin-address', 'gpiopin-name', 'gpiopin-type', 'gpiopin-state'];
  errorMessage: string | undefined;
  displayFullInformation: boolean = false;
  clickedRows: GpioPin | undefined;

  constructor(private store: Store<GpioState>, private gpioService: GpioService) {
  }

  ngOnInit(): void {
    this.gpioService.getGpio().subscribe({
      next: (gpio: GpioPin[]) => this.gpio = gpio,
      error: err => this.errorMessage = err
    });

    // TODO: Unsubscribe
    this.store.select(getProducts).subscribe(
      gpioPins => this.gpio = gpioPins
    );

    // TODO: Unsubscribe
    this.store.select(getShowFullInformation).subscribe(
      showFullInformation => this.displayFullInformation = showFullInformation
    );

  }

}
