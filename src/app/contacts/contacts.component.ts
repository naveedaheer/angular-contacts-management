import { Component } from '@angular/core';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
    selector: 'app-contacts',
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss',
    imports: [ContactListComponent]
})
export class ContactsComponent {

}
