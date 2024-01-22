import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    @Input() title: any
    @Input() isOpenModal: boolean = false
    ngOnChanges(change: SimpleChanges) {
        console.log(change)
    }
}
