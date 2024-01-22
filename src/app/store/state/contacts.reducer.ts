import { createReducer, on } from '@ngrx/store';
import { loadContacts, loadContactsSuccess, deleteContact, deleteContactSuccess, deleteContactFailure, addContact, addContactSuccess, addContactFailure, updateContact, updateContactSuccess, updateContactFailure } from './contacts.actions';
import { initialState } from './contacts.state';
const errorMessage = 'Something went wrong'
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
    on(deleteContactSuccess, (state, { contact: contactReponse }) => {
        showSnackbar(contactReponse.message, 'success')
        return {
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== contactReponse?.contactId),
            deleting: false,
        }
    }),
    on(deleteContactFailure, (state, { error }) => {
        showSnackbar(errorMessage, 'error')
        return ({ ...state, error, updating: false })
    }),


    on(addContact, (state) => ({ ...state, adding: true })),
    on(addContactSuccess, (state, { contact }) => {
        console.log(contact)
        showSnackbar(contact.message, 'success')
        return {
            ...state,
            adding: false,
        }
    }),
    on(addContactFailure, (state, { error }) => {
        showSnackbar(errorMessage, 'error')
        return ({ ...state, error, updating: false })
    }),

    on(updateContact, (state) => ({ ...state, updating: true })),
    on(updateContactSuccess, (state, { contact }) => {
        showSnackbar(contact.message, 'success')
        return {
            ...state,
            updating: false,
        }
    }),
    on(updateContactFailure, (state, { error }) => {
        showSnackbar(errorMessage, 'error')
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