import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
@Component({
    selector: 'app-contact-header',
    standalone: true,
    imports: [CommonModule, ContactFormComponent],
    templateUrl: './contact-header.component.html',
    styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent {

}
