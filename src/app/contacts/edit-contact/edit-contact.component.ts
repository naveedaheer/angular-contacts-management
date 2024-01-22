import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  @Input() isModalOpen: boolean = false

  ngOnInit() {
    console.log("mooooooooo", this.isModalOpen)
  }
  ngOnChanges(change: SimpleChanges) {
    console.log(change)
  }
  closeModal() {
    this.isModalOpen = false
  }
}
