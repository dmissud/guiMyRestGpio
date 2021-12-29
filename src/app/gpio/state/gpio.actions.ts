import {GpioPin} from "../gpio-pin";

import {createAction, props} from "@ngrx/store";


export const toggleFullInformation = createAction(
  '[Gpio] Toggle Full Information'
);


export const loadGpioSuccess = createAction(
  '[Gpio] Load Success',
  props<{ gpioPins: GpioPin[] }>()
);
