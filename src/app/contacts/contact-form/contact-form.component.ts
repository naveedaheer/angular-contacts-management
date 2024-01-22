import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddContact } from 'src/app/models/contact.model';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    @Input() isOpenModal: boolean = false;
    @Output() modalClose = new EventEmitter<void>();
    @Output() formDataSubmit = new EventEmitter<AddContact>();

    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['']
        });
    }

    modalClosed() {
        this.modalClose.emit();
    }

    onSubmit() {
        if (this.contactForm.valid) {
            const formData: AddContact = {
                firstName: this.contactForm.value.firstName,
                lastName: this.contactForm.value.lastName,
                email: this.contactForm.value.email,
                phoneNumber: this.contactForm.value.phoneNumber
            };
            this.formDataSubmit.emit(formData);
            this.modalClose.emit();
        }
    }
}
