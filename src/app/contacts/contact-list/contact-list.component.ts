import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormComponent } from '../contact-form/contact-form.component';
@Component({
    selector: 'app-contact-list',
    standalone: true,
    imports: [CommonModule, ContactFormComponent],
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
    @Input() contacts: Contact[] | null = [];
    isModalOpen: boolean = false
    isHidden = true;
    isDelete = true;

    openModal() {
        console.log(this.isModalOpen)
        this.isModalOpen = !this.isModalOpen
        console.log(this.isModalOpen)

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
