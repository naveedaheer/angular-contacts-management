import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
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
