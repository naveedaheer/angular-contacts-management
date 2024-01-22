import { Component, EventEmitter, Output } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { addContact, deleteContact, loadContacts } from '../store/state/contacts.actions';
import { selectContacts } from '../store/state/contacts.selector';
import { AddContact, Contact } from '../models/contact.model';
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

    constructor(
        private store: Store<AppState>,
    ) {
        this.contacts$ = this.store.pipe(select(selectContacts));
    }

    ngOnInit() {
        this.store.dispatch(loadContacts());
    }

    openContactForm() {
        this.openModal = true
    }

    closeContactForm() {
        this.openModal = false
    }

    onEditContact(contact: Contact) {
    }

    onDeleteContact(contactId: number) {
        this.selectedContactId = contactId;
    }

    confirmDelete() {
        if (this.selectedContactId) {
            this.store.dispatch(deleteContact({ contactId: this.selectedContactId }));
        }
    }

    cancelDelete() {
        this.selectedContactId = -1;
    }

    onFormSubmit(formData: AddContact) {
        this.store.dispatch(addContact({ contact: formData }));
    }

}
