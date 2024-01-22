import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/app/models/contact.model';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    @Input() isOpenModal: boolean = false;
    @Input() contact: Contact | null = null;
    @Output() modalClose = new EventEmitter<void>();
    @Output() formDataSubmit = new EventEmitter<Contact>();

    contactForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    ngOnChanges(): void {
        if (this.contactForm && this.contact) {
            this.contactForm.patchValue(this.contact);
        }
    }

    initializeForm() {
        this.contactForm = this.fb.group({
            firstName: [this.contact?.firstName || '', [Validators.required]],
            lastName: [this.contact?.lastName || '', [Validators.required]],
            email: [this.contact?.email || '', [Validators.email]],
            phoneNumber: [this.contact?.phoneNumber || '']
        });
    }

    modalClosed() {
        this.modalClose.emit();
    }

    onSubmit() {
        if (this.contactForm.valid) {
            const updatedContact: Contact = { ...this.contact!, ...this.contactForm.value, id: this.contact?.id };
            this.formDataSubmit.emit(updatedContact);
            this.modalClose.emit();
        }
    }
}
