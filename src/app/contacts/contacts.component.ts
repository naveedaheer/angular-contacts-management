import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { loadContacts } from '../store/state/contacts.actions';
import { selectContacts } from '../store/state/contacts.selector';
import { Contact } from '../models/contact.model';

@Component({
    selector: 'app-contacts',
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    imports: [ContactListComponent]
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
