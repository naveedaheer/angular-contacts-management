import { Component, EventEmitter, Output } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { addContact, deleteContact, loadContacts, updateContact } from '../store/state/contacts.actions';
import { selectContacts } from '../store/state/contacts.selector';
import { Contact } from '../models/contact.model';
import { CommonModule } from '@angular/common';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
@Component({
    selector: 'app-contacts',
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    imports: [CommonModule, ContactListComponent, ContactHeaderComponent, ContactFormComponent, DeleteConfirmationComponent]
})
export class ContactsComponent {
    @Output() addContactClicked = new EventEmitter<void>();
    contacts$: Observable<Contact[]>;
    openModal: boolean = false;
    selectedContactId: number = -1; // -1 to makes sense because type is number
    selectedContact: Contact | null = null;

    constructor(
        private store: Store<AppState>,
    ) {
        this.contacts$ = this.store.pipe(select(selectContacts));
    }

    ngOnInit() {
        this.store.dispatch(loadContacts({}));
    }

    onSearchContacts(event: Contact) {
        this.store.dispatch(loadContacts({ filters: event }));
    }

    openContactForm() {
        this.openModal = true;
    }

    closeContactForm() {
        this.openModal = false;
    }

    onEditContact(contact: Contact) {
        this.selectedContact = contact;
        this.openContactForm();
    }

    onUpdateContact(updatedContact: Contact) {
        this.store.dispatch(updateContact({ contactId: updatedContact?.id || -1, contact: updatedContact }));
        this.selectedContact = null;
        this.closeContactForm();
    }

    onDeleteContact(contactId: number) {
        this.selectedContactId = contactId;
    }

    confirmDelete() {
        if (this.selectedContactId) {
            this.store.dispatch(deleteContact({ contactId: this.selectedContactId }));
            this.selectedContactId = -1;
        }
    }

    cancelDelete() {
        this.selectedContactId = -1;
    }

    onFormSubmit(formData: Contact) {
        if (this.selectedContact) {
            this.onUpdateContact(formData);
        } else {
            this.store.dispatch(addContact({ contact: formData }));
        }
        setTimeout(() => {
            this.store.dispatch(loadContacts({}));
        }, 2000);
    }

}
