import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as AppState from '../../state/app.state';

import * as GpioActions from './gpio.actions'
import {GpioPin} from "../gpio-pin";

// State for this feature (Gpio)
export interface GpioState {
  showFullInformation: boolean;
  gpioPins: GpioPin[];
}

const initialState: GpioState = {
  showFullInformation: false,
  gpioPins: []
}

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  products: GpioState;
}

// Selector functions
const getGpioFeatureState = createFeatureSelector<GpioState>('gpio');

export const getProducts = createSelector(
  getGpioFeatureState,
  state => state.gpioPins
);

export const getShowFullInformation = createSelector(
  getGpioFeatureState,
  state => state.showFullInformation
);

export const gpioReducer = createReducer(
  initialState,
  on(GpioActions.toggleFullInformation, (state): GpioState => {
    return {
      ...state,
      showFullInformation: !state.showFullInformation
    };
  }),
  on(GpioActions.loadGpioSuccess, (state, action): GpioState => {
    return {
      ...state,
      gpioPins: action.gpioPins
    }
  })
)
