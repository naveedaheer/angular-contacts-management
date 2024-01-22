import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { loadContacts, loadContactsSuccess, loadContactsFailure, deleteContact, deleteContactSuccess, deleteContactFailure, addContact, addContactSuccess, addContactFailure, updateContact, updateContactSuccess, updateContactFailure } from './contacts.actions';
import { ContactService } from '../../services/contacts.service';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) { }

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContacts),
      tap(() => console.log('loadContacts effect triggered')),
      switchMap(() =>
        this.contactService.getContacts().pipe(
          map((contacts) => { return loadContactsSuccess({ contacts }) }),
          catchError((error) => of(loadContactsFailure({ error })))
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      switchMap((action) =>
        this.contactService.deleteContact(action.contactId).pipe(
          map(() => deleteContactSuccess({ contactId: action.contactId })),
          catchError((error) => of(deleteContactFailure({ error })))
        )
      )
    )
  );

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContact),
      switchMap((action) =>
        this.contactService.addContact(action.contact).pipe(
          map((contact) => addContactSuccess({ contact })),
          catchError((error) => of(addContactFailure({ error })))
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      switchMap((action) =>
        this.contactService.updateContact(action.contactId, action.contact).pipe(
          map((contact) => updateContactSuccess({ contact })),
          catchError((error) => of(updateContactFailure({ error })))
        )
      )
    )
  );
}
