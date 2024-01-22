import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    @Input() isModalOpen: boolean = false

    closeModal() {
        this.isModalOpen = false
    }
}
