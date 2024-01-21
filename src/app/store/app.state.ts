import { CONTACT_STATE_NAME } from '../store/state/contacts.selector';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { contactReducer } from '../store/state/contacts.reducer';
import { ContactState } from './state/contacts.state';

export interface AppState {
  [CONTACT_STATE_NAME]: ContactState,
  router: RouterReducerState;
}

export const appReducer = {
  [CONTACT_STATE_NAME]: contactReducer,
  router: routerReducer,
};
