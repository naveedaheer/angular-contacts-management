import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-delete-confirmation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './delete-confirmation.component.html',
    styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
    @Output() confirmDelete = new EventEmitter<void>();
    @Output() cancelDelete = new EventEmitter<void>();
    @Input() openDeleteConfirmation: boolean = false;

    onConfirmDelete() {
        this.confirmDelete.emit();
    }

    onCancelDelete() {
        this.cancelDelete.emit();
    }
}
