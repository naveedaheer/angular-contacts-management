import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Contact } from 'src/app/models/contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-header',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, FormsModule],
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss'],
})
export class ContactHeaderComponent {
  @Output() addContactClicked = new EventEmitter<void>();
  @Output() searchContacts = new EventEmitter<Contact>();
  firstName: string = '';
  lastName: string = '';

  onAddContactClick() {
    this.addContactClicked.emit();
  }

  onSearchContacts() {
    this.searchContacts.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  onResetContacts() {
    this.firstName = '';
    this.lastName = '';
    this.searchContacts.emit({ firstName: '', lastName: '' });
  }
}
