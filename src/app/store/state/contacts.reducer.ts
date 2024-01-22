import { createReducer, on } from '@ngrx/store';
import { loadContacts, loadContactsSuccess, deleteContact, deleteContactSuccess, deleteContactFailure, addContact, addContactSuccess, addContactFailure, updateContact, updateContactSuccess, updateContactFailure } from './contacts.actions';
import { initialState } from './contacts.state';

export const contactReducer = createReducer(
    initialState,
    // Define your reducer actions here using the `on` function from '@ngrx/store'
    on(loadContacts, (state) => ({ ...state, loading: true })),
    on(loadContactsSuccess, (state, action) => {
        return {
            ...state,
            contacts: action.contacts,
            loading: false
        };
    }),

    on(deleteContact, (state) => ({ ...state, deleting: true })),
    on(deleteContactSuccess, (state, { contactId }) => {
        showSnackbar("Contact deleted Successfully")
        return {
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== contactId),
            deleting: false,
        }
    }),
    on(deleteContactFailure, (state, { error }) => ({ ...state, error, deleting: false })),


    on(addContact, (state) => ({ ...state, adding: true })),
    on(addContactSuccess, (state, { contact }) => {
        showSnackbar("Contact Added Successfully")
        return {
            ...state,
            adding: false,
        }
    }),
    on(addContactFailure, (state, { error }) => ({ ...state, error, adding: false })),

    on(updateContact, (state) => ({ ...state, updating: true })),
    on(updateContactSuccess, (state, { contact }) => {
        showSnackbar("Contact updated Successfully")
        return {
            ...state,
            updating: false,
        }
    }),
    on(updateContactFailure, (state, { error }) => ({ ...state, error, updating: false }))
);

function showSnackbar(message: string) {
    const snackbar = document.getElementById('snackbar');
    const snackbarText = document.getElementById('snackbar-text');

    if (snackbar && snackbarText) {
        snackbarText.textContent = message;
        snackbar.classList.add('show');
        setTimeout(() => {
            snackbar.classList.remove('show');
            snackbar.classList.add('hide')

        }, 6000);
    }
};