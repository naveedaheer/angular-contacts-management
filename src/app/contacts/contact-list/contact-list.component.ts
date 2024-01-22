import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  @Input() contacts: Contact[] | null = [];

  isHidden = true;
  isDelete = true;

  openModal() {
    this.isHidden = false;
  }

  closeModal() {
    this.isHidden = true;
  }

  openDeleteModal() {
    this.isDelete = false;
  }

  closeDeleteModal() {
    this.isDelete = true;
  }
}
