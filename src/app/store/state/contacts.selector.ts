import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactState } from "./contacts.state";
export const CONTACT_STATE_NAME = 'contact';
// Create a feature selector for the contact state
export const selectContactState = createFeatureSelector<ContactState>('contact');

// Create a selector to get the contacts from the state
export const selectContacts = createSelector(
  selectContactState,
  (state: ContactState) => state.contacts
);