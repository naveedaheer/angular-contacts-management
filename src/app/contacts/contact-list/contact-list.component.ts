import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
    standalone: true,
})
export class ContactListComponent {
    @Input() contacts: Contact[] | null = [];
    @Output() editContact = new EventEmitter<Contact>();
    @Output() deleteContact = new EventEmitter<number>();

    constructor() { }

    onEditContactClick(contact: Contact) {
        this.editContact.emit(contact);
    }

    onDeleteContactClick(contactId: number) {
        this.deleteContact.emit(contactId);
    }
}
