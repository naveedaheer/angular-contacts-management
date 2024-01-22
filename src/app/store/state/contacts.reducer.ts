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
        showSnackbar("Contact deleted Successfully", 'success')
        return {
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== contactId),
            deleting: false,
        }
    }),
    on(deleteContactFailure, (state, { error }) => {
        showSnackbar("Something went wrong", 'error')
        return ({ ...state, error, updating: false })
    }),


    on(addContact, (state) => ({ ...state, adding: true })),
    on(addContactSuccess, (state, { contact }) => {
        showSnackbar("Contact Added Successfully", 'success')
        return {
            ...state,
            adding: false,
        }
    }),
    on(addContactFailure, (state, { error }) => {
        showSnackbar("Something went wrong", 'error')
        return ({ ...state, error, updating: false })
    }),

    on(updateContact, (state) => ({ ...state, updating: true })),
    on(updateContactSuccess, (state, { contact }) => {
        showSnackbar("Contact updated Successfully", 'success')
        return {
            ...state,
            updating: false,
        }
    }),
    on(updateContactFailure, (state, { error }) => {
        showSnackbar("Something went wrong", 'error')
        return ({ ...state, error, updating: false })
    })
);

function showSnackbar(message: string, status: 'success' | 'error') {
    const snackbar = document.getElementById('snackbar');
    const snackbarText = document.getElementById('snackbar-text');
    if (snackbar && snackbarText) {
        snackbarText.textContent = message;

        snackbar.classList.toggle('hidden', status !== 'success' && status !== 'error');

        snackbar.classList.toggle('bg-green-500', status === 'success');
        snackbar.classList.toggle('bg-red-500', status === 'error');

        setTimeout(() => {
            snackbar.classList.add('hidden');
        }, 6000);
    }
};