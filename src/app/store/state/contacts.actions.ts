import { createAction, props } from '@ngrx/store';
import { APIReponse, Contact } from '../../models/contact.model';

// Contact list
export const loadContacts = createAction('[Contacts] Load Contacts', props<{ filters?: Contact }>());
export const loadContactsSuccess = createAction('[Contacts] Load Contacts Success', props<{ contacts: Contact[] }>());
export const loadContactsFailure = createAction('[Contacts] Load Contacts Failure', props<{ error: string }>());

// Contact Delete
export const deleteContact = createAction('[Contacts] Delete Contact', props<{ contactId: number }>());
export const deleteContactSuccess = createAction('[Contacts] Delete Contact Success', props<{ contact: APIReponse }>());
export const deleteContactFailure = createAction('[Contacts] Delete Contact Failure', props<{ error: any }>());

// Contact Add
export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>());
export const addContactSuccess = createAction('[Contacts] Add Contact Success', props<{ contact: APIReponse }>());
export const addContactFailure = createAction('[Contacts] Add Contact Failure', props<{ error: any }>());

// Contact update
export const updateContact = createAction('[Contacts] Update Contact', props<{ contactId: number, contact: Contact }>());
export const updateContactSuccess = createAction('[Contacts] Update Contact Success', props<{ contact: APIReponse }>());
export const updateContactFailure = createAction('[Contacts] Update Contact Failure', props<{ error: any }>());