import { Component, Input, Output } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { loadContacts } from '../store/state/contacts.actions';
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
    contacts$: Observable<Contact[]>;

    constructor(
        private store: Store<AppState>,
    ) {
        this.contacts$ = this.store.pipe(select(selectContacts));
    }

    ngOnInit() {
        console.log("dispatch load contacts ...")
        this.store.dispatch(loadContacts());
    }
}
